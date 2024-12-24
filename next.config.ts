import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  // Add markdown plugins here, if needed
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "github.com",
      "raw.githubusercontent.com",
      "i.imgur.com",
      "imgur.com",
      "cdn.discordapp.com",
      "media.discordapp.net",
    ],
  },
};

export default withMDX(nextConfig);
