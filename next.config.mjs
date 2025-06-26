/** @type {import('next').NextConfig} */
const nextConfig = {
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