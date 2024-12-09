/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/osago',
  assetPrefix: '/osago/',
}

module.exports = nextConfig
