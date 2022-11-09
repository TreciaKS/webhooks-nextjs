const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [`${process.env.DOMAIN}`]
  },
};

module.exports = nextConfig