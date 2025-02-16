// app/actions/initiateCall.ts
"use server"

import twilio from "twilio"

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioNumber = process.env.TWILIO_PHONE_NUMBER

if (!accountSid || !authToken || !twilioNumber) {
  throw new Error("Missing required Twilio environment variables")
}

const client = twilio(accountSid, authToken)

export async function initiateCall(phoneNumber: string) {
  try {
    const cleanNumber = phoneNumber.replace(/\D/g, "")

    const formattedNumber = `+1${cleanNumber}`

    const twimlUrl = `${process.env.SERVER_BASE_URL}/call/voice-agent-deepgram-demo`

    const call = await client.calls.create({
      to: formattedNumber,
      from: twilioNumber ?? "",
      url: twimlUrl,
      statusCallback: process.env.TWILIO_DEMO_CALLBACK_URL ?? undefined,
      statusCallbackEvent: ["completed"],
      timeLimit: 600
      // machineDetection: "Enable",
      // machineDetectionTimeout: 10
    })

    return {
      success: true,
      callSid: call.sid
    }
  } catch (error) {
    console.error("Error initiating call:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to initiate call"
    }
  }
}
