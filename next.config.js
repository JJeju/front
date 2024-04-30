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
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
  // async redirects() {
  //   return [
  //     {
  //       source: '/trip',
  //       destination: '/',
  //       permanent: false
  //     },
  //     {
  //       source: '/mypage',
  //       destination: '/',
  //       permanent: true
  //     }
  //   ];
  // },
};

module.exports = nextConfig;
