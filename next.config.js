// next.config.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://simple-pexels-proxy.onrender.com/:path*", // Proxy to Backend
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};
