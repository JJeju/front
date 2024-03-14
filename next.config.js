/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ['14.6.54.241'],
    unoptimized: true
  },

  // async redirects() {
  //   return [
  // Basic redirect
  //   {
  //     source: '/notice',
  //     destination: '/',
  //     permanent: true
  //   },
  // Wildcard path matching
  //   {
  //     source: '/trip',
  //     destination: '/',
  //     permanent: true
  //   }
  //   ];
  // }
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:3000/:path*'
      }
      // {
      //   source: '/trip',
      //   destination: '/',
      // },
    ];
  }
};
