// app/api/twilio/voice/route.ts
import VoiceResponse from "twilio/lib/twiml/VoiceResponse"
import { NextResponse } from "next/server"

export async function POST() {
  const response = new VoiceResponse()
  const connect = response.connect()

  response.say("Starting the stream now.")

  connect.stream({
    name: `sttWebSocket`,
    url: "wss://voice.digitalhealthcaresolutions.io/stt"
  })

  return new NextResponse(response.toString(), {
    headers: {
      "Content-Type": "text/xml"
    }
  })
}
