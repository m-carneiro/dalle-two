/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['static-00.iconduck.com'],
    }
}

module.exports = nextConfig
