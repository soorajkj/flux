/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // app dir
  experimental: { appDir: true },
  // svgr comp
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
