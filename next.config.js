/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  reactStrictMode: true,
  compiler: {
    removeConsole: true
  },
};

module.exports = nextConfig
