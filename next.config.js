/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["cdn.sanity.io", "compliancy-group.com"]
    }
}

module.exports = nextConfig
