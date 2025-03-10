/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   nextScriptWorkers: true,
  // },
  images: {
    domains: ["localhost", "res.cloudinary.com", "picsum.photos"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
