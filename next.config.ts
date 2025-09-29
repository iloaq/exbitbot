import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone для PM2 с поддержкой API routes
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
  // Настройки для API routes в standalone
  experimental: {
    serverComponentsExternalPackages: [],
  },
}

export default nextConfig;
