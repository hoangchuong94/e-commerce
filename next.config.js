/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    hostname: "http://localhost:8080",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "websitedemos.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
