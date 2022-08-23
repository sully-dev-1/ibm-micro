/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: 'assetPrefixPath',
  publicRuntimeConfig: {
    basePath: 'basePath',
  },
}

module.exports = nextConfig
