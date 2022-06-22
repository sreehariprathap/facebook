/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.logo.wine",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "brandlogos.net",
    ],
  },
}

module.exports = nextConfig
