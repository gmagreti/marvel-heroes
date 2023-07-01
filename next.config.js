/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "marvel-hub.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
