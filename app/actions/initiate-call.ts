// app/actions/initiateCall.ts
"use server"

import twilio from "twilio"
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import { headers } from "next/headers"

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioNumber = process.env.TWILIO_PHONE_NUMBER

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(2, "60 s"),
  analytics: true,
  /**
   * Optional prefix for the keys used in redis. This is useful if you want to share a redis
   * instance with other applications and want to avoid key collisions. The default prefix is
   * "@upstash/ratelimit"
   */
  prefix: "call-center-demo"
})

if (!accountSid || !authToken || !twilioNumber) {
  throw new Error("Missing required Twilio environment variables")
}

const client = twilio(accountSid, authToken)

export async function initiateCall(phoneNumber: string) {
  try {
    const headersList = headers()
    const userIp = headersList["x-real-ip"] ?? headersList["x-forwarded-for"]
    console.log("userIp", userIp)

    if (!phoneNumber) {
      throw new Error("Missing required param 'phoneNumber'")
    }

    //rate limiter
    const response = await ratelimit.limit(userIp ?? phoneNumber)
    if (!response.success) {
      throw new Error("Too many requests. Please try again later.")
    }

    const cleanNumber = phoneNumber.replace(/\D/g, "")

    const formattedNumber = `+1${cleanNumber}`

    const twimlUrl = `${process.env.SERVER_BASE_URL}/call/voice-agent-deepgram-demo`

    const call = await client.calls.create({
      to: formattedNumber,
      from: twilioNumber ?? "",
      url: twimlUrl,
      statusCallback: process.env.TWILIO_DEMO_CALLBACK_URL ?? undefined,
      statusCallbackEvent: ["completed"],
      timeLimit: 300
      // machineDetection: "Enable",
      // machineDetectionTimeout: 10
    })

    return {
      success: true,
      callSid: call.sid
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to initiate call"
    }
  }
}
