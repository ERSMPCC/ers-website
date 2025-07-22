/** @type {import('next').NextConfig} */
const repo = 'ers-website'
const assetPrefix = process.env.NODE_ENV === 'production' ? `/${repo}/` : ''
const basePath = process.env.NODE_ENV === 'production' ? `/${repo}` : ''

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig; 