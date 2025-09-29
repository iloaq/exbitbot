module.exports = {
  apps: [{
    name: 'exbitbot',
    script: 'server.js',
    cwd: './.next/standalone',
    instances: 1, // Один инстанс для 2GB RAM
    exec_mode: 'fork', // fork вместо cluster для экономии памяти
    max_memory_restart: '1.5G', // Перезапуск при превышении 1.5GB
    node_args: '--max-old-space-size=1536', // Ограничение памяти Node.js
    // Настройки для API routes
    env_file: '.env.local',
    
    // Логирование
    log_file: './logs/combined.log',
    out_file: './logs/out.log',
    error_file: './logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    
    // Автозапуск
    watch: false, // Отключаем watch для продакшена
    ignore_watch: ['node_modules', 'logs', '.git'],
    
    // Переменные окружения
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      // Настройки для статики
      NEXT_TELEMETRY_DISABLED: '1',
      // Настройки для API
      NODE_OPTIONS: '--max-old-space-size=1536'
    },
    
    // Мониторинг
    min_uptime: '10s',
    max_restarts: 10,
    
    // Оптимизация для 2GB RAM
    kill_timeout: 5000,
    wait_ready: true,
    listen_timeout: 10000,
    
    // Health check
    health_check_grace_period: 3000,
    
    // Автоматический перезапуск при ошибках
    autorestart: true,
    
    // Настройки для SEO и производительности
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
      // Добавьте ваши переменные окружения здесь
      // TELEGRAM_BOT_TOKEN: 'your_token',
      // TELEGRAM_CHAT_ID: 'your_chat_id'
    }
  }]
};
