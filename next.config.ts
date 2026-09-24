import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' to enable API routes for payment webhook
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
