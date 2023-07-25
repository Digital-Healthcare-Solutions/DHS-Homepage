import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export const runtime = "edge"

export default async function handler(req) {}
