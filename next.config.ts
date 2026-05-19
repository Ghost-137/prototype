import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Sets the subfolder asset directory for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/prototype/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/prototype' : '',
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;