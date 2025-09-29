import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Обычный Next.js для PM2
  trailingSlash: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // SEO оптимизации
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

export default nextConfig;
