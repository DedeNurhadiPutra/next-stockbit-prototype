import type { NextConfig } from "next";
import createAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = createAnalyzer({
  enabled: process.env.ANALYZE === "true", // jalanin cuma kalau ANALYZE=true
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify: true, // Disabled due to known compatibility issues with certain dependencies. Re-enable after resolving related bugs.
};

export default withBundleAnalyzer(nextConfig);
