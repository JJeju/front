/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  unoptimized: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '14.6.54.241',
        port: '8080',
        pathname: '/download/**'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/trip',
        destination: '/',
        permanent: true
      },
      {
        source: '/mypage',
        destination: '/',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
