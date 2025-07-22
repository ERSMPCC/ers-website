/** @type {import('next').NextConfig} */
const repo = 'ers-website'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  // Enable path mapping
  experimental: {
    // This ensures the @ alias works properly
  },
  // Add webpack config if needed
  webpack: (config) => {
    return config;
  },
};

export default nextConfig; 