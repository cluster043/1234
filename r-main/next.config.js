/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.imgbox.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "iili.io/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
