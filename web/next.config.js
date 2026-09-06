/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');
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
};

module.exports = withNextIntl(nextConfig);
