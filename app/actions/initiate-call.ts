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
    // Remove any non-numeric characters from the phone number
    const cleanNumber = phoneNumber.replace(/\D/g, "")

    // Format for E.164 standard (required by Twilio)
    const formattedNumber = `+1${cleanNumber}`

    // Create TwiML for the call
    const twimlUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/twilio/voice` // You'll need to create this endpoint

    // Initiate the call
    const call = await client.calls.create({
      to: formattedNumber,
      from: twilioNumber ?? "",
      url: twimlUrl
      //   statusCallback: `${process.env.NEXT_PUBLIC_BASE_URL}/api/twilio/status`, // Optional status callback
      //   statusCallbackEvent: ["initiated", "ringing", "answered", "completed"]
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
