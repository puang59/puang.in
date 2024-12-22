import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* Add your Next.js config options here */
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"], // Add support for MDX pages
  images: {
    domains: ["github.com", "raw.githubusercontent.com"],
  },
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
