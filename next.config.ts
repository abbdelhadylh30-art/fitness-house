import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No `output` setting — Vercel's Next.js adapter handles static
  // prerendering automatically. For pure-static deploys (Cloudflare
  // Pages Direct Upload, Netlify Drop, S3), see `next.config.static.ts`.
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
