// /** @type {import('next-sitemap').IConfig} **/
// const { client } = require("./sanity")
const { createClient, groq } = require("next-sanity")

module.exports = {
    siteUrl: process.env.SITE_URL || "https://getaxon.ai/",
    generateRobotsTxt: true, // (optional)
    additionalPaths: async (config) => {
        const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
        const projectId = process.env.NEXT_PUBLIC_SANITY_ID
        const apiVersion = "2022-11-16"

        const client = createClient({
            projectId,
            dataset,
            apiVersion, // https://www.sanity.io/docs/api-versioning
            useCdn: typeof document !== "undefined" // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
        })

        const query = `*[_type == 'post' &&
!(_id in path("drafts.**")) &&
includeInSitemap != false &&
publishedAt < now()] | order(publishedAt desc) {
  slug
}`
        const posts = await client.fetch(query)
        console.log(posts)
        const blogUrls = posts
            .filter(({ slug = {} }) => slug.current)
            .map((post) => ({
                url: `/blog/${post.slug.current}`
            }))

        const currentPages = [
            {
                loc: "/", // Absolute url
                lastmod: new Date().toISOString(),
                changefreq: "daily",
                priority: 1
            },
            {
                loc: "/about-us",
                lastmod: new Date().toISOString(),
                changefreq: "daily",
                priority: 0.8
            },

            {
                loc: "/product/demos",
                lastmod: new Date().toISOString(),
                changefreq: "daily",
                priority: 0.8
            },
            {
                loc: "/product/call-center",
                lastmod: new Date().toISOString(),
                changefreq: "daily",
                priority: 0.8
            },
            {
                loc: "/product/smart-form",
                lastmod: new Date().toISOString(),
                changefreq: "daily",
                priority: 0.8
            },
            {
                loc: "/product/smart-plan",
                lastmod: new Date().toISOString(),
                changefreq: "daily",
                priority: 0.8
            },
            {
                loc: "/product/smart-voice",
                lastmod: new Date().toISOString(),
                changefreq: "daily",
                priority: 0.8
            },
            {
                loc: "/privacy-policy",
                lastmod: new Date().toISOString(),
                changefreq: "daily",
                priority: 0.8
            },
            {
                loc: "/terms-of-service",
                lastmod: new Date().toISOString(),
                changefreq: "daily",
                priority: 0.8
            }
        ]
        const finalBlogsPages = blogUrls.map((url) => ({
            loc: url.url,
            changefreq: "daily",
            priority: 0.7
        }))
        return [...currentPages, ...finalBlogsPages]
    }
}
