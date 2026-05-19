import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to compile to static HTML
  images: {
    unoptimized: true, // Required for static exports using next/image
  },
};

export default nextConfig;