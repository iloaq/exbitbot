import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Убираем статическую генерацию для работы API
  output: 'standalone',
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
  // Настройки для API routes
  experimental: {
    serverComponentsExternalPackages: [],
  },
}

export default nextConfig;
