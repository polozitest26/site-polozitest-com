import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Temporarily reverted to fix 404 - will re-enable for payment
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
