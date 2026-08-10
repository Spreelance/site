import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/site",
  assetPrefix: "/site",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
