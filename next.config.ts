import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Статический экспорт для лучшей производительности и хостинга
  // Раскомментируй если нужен статический экспорт:
  // output: 'export',
  
  trailingSlash: true,
  
  images: {
    // Если используешь static export, раскомментируй:
    // unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // SEO и производительность
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Дополнительные оптимизации
  swcMinify: true,
  reactStrictMode: true,
  
  // Экспериментальные фичи для оптимизации
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig;
