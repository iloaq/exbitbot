#!/bin/bash

# Скрипт деплоя ExBitBot с PM2
echo "🚀 Деплой ExBitBot..."

# Остановка PM2 процесса
echo "⏹️ Остановка PM2 процесса..."
pm2 stop exbitbot 2>/dev/null || true

# Установка зависимостей
echo "📦 Установка зависимостей..."
npm ci --production

# Сборка проекта
echo "🔨 Сборка проекта..."
npm run build

# Копирование статических файлов для standalone
echo "📁 Копирование статических файлов..."
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

# Копирование переменных окружения
echo "📄 Копирование переменных окружения..."
if [ -f ".env.local" ]; then
  cp .env.local .next/standalone/
  echo "✅ .env.local скопирован"
else
  echo "⚠️ .env.local не найден - создайте файл с переменными окружения"
fi

# Проверка API routes
echo "🔍 Проверка API routes..."
if [ -d ".next/standalone/.next/server/app/api" ]; then
  echo "✅ API routes найдены"
else
  echo "❌ API routes не найдены"
fi

# Создание папки для логов
echo "📁 Создание папки для логов..."
mkdir -p logs

# Запуск через PM2
echo "▶️ Запуск через PM2..."
pm2 start ecosystem.config.js --env production

# Сохранение конфигурации PM2
echo "💾 Сохранение конфигурации PM2..."
pm2 save

# Показ статуса
echo "📊 Статус PM2:"
pm2 status

echo "✅ Деплой завершен!"
echo "📝 Логи: pm2 logs exbitbot"
echo "📊 Мониторинг: pm2 monit"
