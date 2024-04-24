/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // output: 'export',
  swcMinify: true,
  trailingSlash: true,

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
  unoptimized: true
};

module.exports = nextConfig;

// {
//   source: '/trip',
//   destination: '/',
// },
//   ];
// }
