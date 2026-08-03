/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-6c6783ed8ce64932a9644e8cfd52a4bf.r2.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
