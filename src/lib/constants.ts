export const SITE_CONFIG = {
  name: "ExBitBot - Массовые выплаты на карты",
  description: "Автоматические массовые выплаты на карты за криптовалюту. Быстро, без ограничений, с уведомлениями в Telegram. Комиссия от 0.15%",
  url: "https://exbitbot.com",
  ogImage: "https://exbitbot.com/images/apppayment.png",
  yandexMetrikaId: process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || '',
  keywords: [
    "массовые выплаты",
    "выплаты на карты",
    "криптовалюта в рубли", 
    "USDT в рубли",
    "выплаты сотрудникам",
    "выплаты фрилансерам",
    "автоматические выплаты",
    "криптовалюта на карту сбербанка",
    "массовые выплаты в рублях",
    "выплаты по номеру телефона"
  ],
} as const;

export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
