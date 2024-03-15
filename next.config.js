/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  swcMinify: true,
  trailingSlash: true

  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'http://14.6.54.241:8081/:path*'
  //     }
  //   ];
  // }
};

module.exports = nextConfig;

// {
//   source: '/trip',
//   destination: '/',
// },
//   ];
// }
