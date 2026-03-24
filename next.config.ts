import type { NextConfig } from "next";
import { baseURL } from "./baseUrl";

const nextConfig: NextConfig = {
  assetPrefix: baseURL,
  redirects: async () => {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/WmRas2jD54',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
