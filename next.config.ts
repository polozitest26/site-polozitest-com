import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Exports as /page/index.html for clean URLs without .html
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
