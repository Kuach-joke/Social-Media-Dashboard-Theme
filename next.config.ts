import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/Social-Media-Dashboard-Theme").
// Empty locally, so `npm run dev` still serves from the root.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
