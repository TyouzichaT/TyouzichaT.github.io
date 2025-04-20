/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    API_BASE_URL: 'https://cool-lab-fe67.zuoyou1998.workers.dev',
  }
}

module.exports = nextConfig 