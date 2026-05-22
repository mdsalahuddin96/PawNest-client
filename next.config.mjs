/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol:"https",
        hostname:"googleusercontent.com"
      }
    ],
  },
};

export default nextConfig;
