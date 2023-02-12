import { createClient, groq } from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const projectId = process.env.NEXT_PUBLIC_SANITY_ID
const apiVersion = "2022-11-16"

const config = {
    dataset,
    projectId,
    apiVersion
}

export const client = createClient({
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    useCdn: typeof document !== "undefined" // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
})

export const urlFor = (source) => createImageUrlBuilder(config).image(source)
