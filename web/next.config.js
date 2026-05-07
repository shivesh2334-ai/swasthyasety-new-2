/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    localeDetection: true,
  },
};

module.exports = nextConfig;
