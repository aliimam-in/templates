import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],

  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
