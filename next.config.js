/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // ✅ This disables ESLint errors during production builds
  },
};

module.exports = nextConfig;
