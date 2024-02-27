/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
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
  reactStricMode: true,
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
