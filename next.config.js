/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://graphitti.onrender.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
