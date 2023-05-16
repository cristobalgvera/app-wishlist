/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TODO: Remove hostname
    remotePatterns: [{ hostname: "picsum.photos" }],
  },
};

module.exports = nextConfig;
