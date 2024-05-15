/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Create a standalone folder which copies only the necessary files for production. This is necessary for Docker image
  output: 'standalone',
}
