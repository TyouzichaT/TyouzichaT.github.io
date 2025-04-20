/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    API_BASE_URL: 'https://green-heart-aaf5.zuoyou1998.workers.dev',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://green-heart-aaf5.zuoyou1998.workers.dev/:path*',
      },
    ];
  },
}

module.exports = nextConfig 