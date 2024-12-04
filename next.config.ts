/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/osago/',
  basePath: '/osago',
  trailingSlash: true,
}

export default nextConfig
