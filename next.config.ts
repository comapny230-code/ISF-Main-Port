import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["firebase-admin"],
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/register",
        destination: "https://isf-test.vercel.app/",
        permanent: false,
      },
      {
        source: "/leadership",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
