import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — produces a self-contained `out/` folder
  // suitable for Cloudflare Pages Direct Upload, Netlify Drop,
  // GitHub Pages, S3 + CloudFront, or any static CDN.
  output: "export",

  // Disable server-side image optimization (not available in static export).
  // Images are served as-is from /images/.
  images: {
    unoptimized: true,
  },

  // Emit clean URLs (e.g. /about/ instead of /about.html)
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
