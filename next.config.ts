import type { NextConfig } from "next";
import createAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = createAnalyzer({
  enabled: process.env.ANALYZE === "true", // jalanin cuma kalau ANALYZE=true
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/my-bucket/**",
        search: "",
      },
    ],
  },
  // swcMinify: true, // Disabled due to known compatibility issues with certain dependencies. Re-enable after resolving related bugs.
};

export default withBundleAnalyzer(nextConfig);
