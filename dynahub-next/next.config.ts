import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'dynahub.local',
      },
    ],
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;
