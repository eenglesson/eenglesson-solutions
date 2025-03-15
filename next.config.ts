import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'res.cloudinary.com',
      'html.tailus.io',
    ],
  },
};

export default nextConfig;
