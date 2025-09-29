@echo off
REM Скрипт деплоя ExBitBot с PM2 для Windows (standalone + API)

echo 🚀 Деплой ExBitBot (standalone + API)...

REM Остановка PM2 процесса
echo ⏹️ Остановка PM2 процесса...
pm2 stop exbitbot 2>nul

REM Установка зависимостей
echo 📦 Установка зависимостей...
npm ci --production

REM Сборка проекта
echo 🔨 Сборка проекта...
npm run build

REM Копирование статических файлов для standalone
echo 📁 Копирование статических файлов...
xcopy /E /I /Y public .next\standalone\public
xcopy /E /I /Y .next\static .next\standalone\.next\static

REM Копирование переменных окружения
echo 📄 Копирование переменных окружения...
if exist .env.local (
  copy .env.local .next\standalone\
  echo ✅ .env.local скопирован
) else (
  echo ⚠️ .env.local не найден - создайте файл с переменными окружения
)

REM Создание папки для логов
echo 📁 Создание папки для логов...
if not exist logs mkdir logs

REM Запуск через PM2
echo ▶️ Запуск через PM2...
pm2 start ecosystem.config.js --env production

REM Сохранение конфигурации PM2
echo 💾 Сохранение конфигурации PM2...
pm2 save

REM Показ статуса
echo 📊 Статус PM2:
pm2 status

echo ✅ Деплой завершен!
echo 📝 Логи: pm2 logs exbitbot
echo 📊 Мониторинг: pm2 monit
echo 🔗 API: http://localhost:3000/api/send-telegram

pause
