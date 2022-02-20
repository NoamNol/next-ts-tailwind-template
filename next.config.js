/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    // Create a standalone folder which copies only the necessary files for production
    outputStandalone: true,
  },
}
