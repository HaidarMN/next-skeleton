/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    APP_TITLE: process.env.NEXT_APP_TITLE,
    BASE_URL: process.env.NEXT_BASE_URL,
  },
};

export default nextConfig;
