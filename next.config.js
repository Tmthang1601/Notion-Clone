/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ['kbfzspgeqcevcxrrasyr.supabase.co'],
    },
  };
  
  module.exports = nextConfig;