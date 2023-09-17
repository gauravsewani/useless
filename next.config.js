/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["imgur.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    STRIPE_PUBLIC: process.env.STRIPE_PUBLIC,
    STRIPE_SECRET: process.env.STRIPE_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    SECRET: process.env.SECRET,
  },
};

module.exports = nextConfig;
