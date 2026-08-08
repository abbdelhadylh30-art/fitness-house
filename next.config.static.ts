import type { NextConfig } from "next";

// ALTERNATE CONFIG — for static-only hosts (Cloudflare Pages Direct
// Upload, Netlify Drop, GitHub Pages, S3+CloudFront).
//
// To use this instead of the default:
//   1. Rename this file to `next.config.ts` (overwriting the current one)
//   2. Run `npm run build`
//   3. Upload the contents of the generated `out/` folder to your host
//
// DO NOT use this config on Vercel — Vercel's Next.js adapter expects
// the default config (no `output` field) so it can handle prerendering
// itself.

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
