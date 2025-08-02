import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"], // Allow GitHub avatars
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

export default nextConfig;
