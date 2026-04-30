import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/styleplus-site',
  assetPrefix: '/styleplus-site',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
