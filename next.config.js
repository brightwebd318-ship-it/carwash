/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/carwash',
  assetPrefix: '/carwash/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
