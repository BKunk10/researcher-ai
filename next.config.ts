import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  // Uncomment and edit if you need rewrites for auth
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/auth/:path*",
  //       destination: "/api/auth/:path*",
  //     },
  //   ];
  // },
};

// Use CommonJS export for Next.js compatibility
export default nextConfig;
module.exports = nextConfig;
