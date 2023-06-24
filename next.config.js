/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["imgur.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    STRIPE_PUBLIC: process.env.STRIPE_PUBLIC,
    STRIPE_SECRET: process.env.STRIPE_SECRET,
  },
};

module.exports = nextConfig;
