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
        hostname: 'jjeju.site',
        port: '',
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
  ],
  reactStrictMode: false,
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
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Setting `resolve.alias` to `false` will tell webpack to ignore a module.
      // `msw/node` is a server-only module that exports methods not available in
      // the `browser`.
      config.resolve.alias = {
        ...config.resolve.alias,
        'msw/node': false
      };
    }
    return config;
  }
};

module.exports = nextConfig;
