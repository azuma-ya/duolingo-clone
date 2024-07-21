/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [
          { key: "Access-Contorole-Allow-Origin", value: "*" },
          {
            key: "Access-Contorole-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Contorole-Allow-Headers",
            value: "Content-Type, Authorization",
          },
          {
            key: "Content-Range",
            value: "Bytes : 0-9/*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
