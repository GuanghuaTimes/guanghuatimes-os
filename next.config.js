const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",

  images: {
    remotePatterns: [
      // ===== 微信公众号常用图片域名 =====
      {
        protocol: 'https',
        hostname: 'mmbiz.qpic.cn',
      },
      {
        protocol: 'https',
        hostname: 'mmbiz.qpic.com',
      },
      {
        protocol: 'https',
        hostname: 'res.wx.qq.com',
      },
      {
        protocol: 'https',
        hostname: 'mp.weixin.qq.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'hunyuan-plugin-1258344706.cos.ap-nanjing.myqcloud.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',  // 可用的替代服务
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',  // 另一个替代
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400,
  },

  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }
    return config;
  },

  experimental: {
    workerThreads: false,
  },
};

module.exports = withContentlayer(nextConfig);