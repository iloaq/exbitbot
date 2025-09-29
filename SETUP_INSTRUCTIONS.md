# 🚀 Настройка ExBitBot с PM2 + API

## 📋 Шаги настройки:

### 1. Создайте файл .env.local
```bash
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here

# Next.js Configuration
NODE_ENV=production
PORT=3000
NEXT_TELEMETRY_DISABLED=1
```

### 2. Получите токены Telegram:
1. **Создайте бота:** @BotFather → `/newbot` → получите токен
2. **Получите Chat ID:** @userinfobot → отправьте сообщение → получите ID

### 3. Запустите деплой:

#### Windows:
```bash
deploy.bat
```

#### Linux/Mac:
```bash
chmod +x deploy.sh
./deploy.sh
```

### 4. Проверьте работу:

#### API тест:
```bash
npm run test:api
```

#### В браузере:
- `http://localhost:3000` - главная страница
- `http://localhost:3000/api/test` - тест API
- `http://localhost:3000/api/send-telegram` - Telegram API

### 5. Управление PM2:

```bash
npm run pm2:start    # Запуск
npm run pm2:stop     # Остановка
npm run pm2:restart  # Перезапуск
npm run pm2:logs     # Логи
npm run pm2:status   # Статус
```

## 🔧 Структура проекта:

```
.next/standalone/
├── server.js              # Главный файл
├── .env.local            # Переменные окружения
├── public/               # Статические файлы
├── .next/                # Скомпилированные страницы
│   ├── static/           # JS, CSS, изображения
│   └── server/           # API routes
└── node_modules/         # Зависимости
```

## ✅ Что работает:

- ✅ **Статические страницы** - быстрая загрузка
- ✅ **API routes** - `/api/send-telegram`
- ✅ **Telegram интеграция** - отправка заявок
- ✅ **SEO оптимизация** - все мета-теги
- ✅ **PM2 управление** - автоперезапуск
- ✅ **Логирование** - мониторинг

## 🚨 Troubleshooting:

### API не работает (404):
1. Проверьте `.env.local` - есть ли токены
2. Перезапустите: `npm run pm2:restart`
3. Проверьте логи: `npm run pm2:logs`

### Не хватает памяти:
1. Проверьте использование: `npm run pm2:status`
2. Перезапустите: `npm run pm2:restart`

### Форма не отправляется:
1. Проверьте консоль браузера
2. Проверьте API: `http://localhost:3000/api/test`
3. Проверьте токены в `.env.local`
