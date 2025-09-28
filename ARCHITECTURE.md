# 📁 Архитектура проекта ExbitBot

## 🏗️ Структура директорий

```
src/
├── app/                    # Next.js App Router страницы
│   ├── layout.tsx         # Основной layout с Header/Footer
│   ├── page.tsx           # Главная страница
│   └── globals.css        # Глобальные стили
│
├── components/            # Переиспользуемые компоненты
│   ├── ui/               # UI компоненты (Button, AnimatedSection)
│   └── layout/           # Layout компоненты (Header, Footer)
│
├── sections/             # Секции лендинга
│   ├── HeroSection.tsx   # Главная секция со статистикой
│   ├── WorkProcessSection.tsx # Как работает сервис
│   ├── HelpSection.tsx   # Помощь и возможности
│   ├── PricingSection.tsx # Тарифы и условия
│   ├── FaqSection.tsx    # Часто задаваемые вопросы
│   └── CtaSection.tsx    # Призыв к действию
│
├── lib/                  # Утилиты и конфиги
│   ├── constants.ts      # Константы приложения
│   └── utils.ts          # Вспомогательные функции
│
├── animations/           # Анимации Framer Motion
│   └── variants.ts       # Варианты анимаций
│
├── hooks/                # React хуки
├── styles/               # Дополнительные стили
├── types/                # TypeScript типы
└── data/                 # Статические данные
    └── landing.ts        # Данные для лендинга
```

## 🚀 Технологический стек

- **Next.js 15** - Framework с App Router
- **TypeScript** - Типизация
- **TailwindCSS 4** - Стили
- **Framer Motion** - Анимации
- **Lucide React** - Иконки

## ⚡ Статическая генерация

Проект настроен для полной статической генерации:

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',        // Статический экспорт
  trailingSlash: true,     // SEO оптимизация
  images: {
    unoptimized: true,     # Для статического хостинга
  },
}
```

## 🎨 Принципы дизайна

1. **Glassmorphism** - стеклянные эффекты с размытием фона
2. **Зеленые акценты** - премиум градиенты emerald/green
3. **Интерактивные карточки** - hover эффекты и glow анимации
4. **Минимум текста** - фокус на визуалах и статистике
5. **Темная тема** - черный фон с цветными акцентами
6. **Плавные анимации** - Framer Motion для всех переходов

## 📱 Компонентная архитектура

### UI Компоненты
- `Button` - Кнопки с вариантами стилей и градиентами
- `AnimatedSection` - Обертка для анимаций при скролле
- `GlassCard` - Стеклянные карточки с эффектами размытия
- `Accordion` - Аккордеоны для FAQ секции

### Секции лендинга
- `HeroSection` - Главный экран с интерактивными карточками статистики
- `WorkProcessSection` - Процесс работы сервиса в 3 шага
- `HelpSection` - Способы помощи и возможности
- `PricingSection` - Тарифы с процентными ставками
- `FaqSection` - Частые вопросы с аккордеонами
- `CtaSection` - Финальный призыв к действию

### Layout
- `Header` - Навигация с адаптивным меню
- `Footer` - Информация и ссылки

## 🔧 Команды разработки

```bash
npm run dev    # Разработка
npm run build  # Сборка для продакшена
npm run start  # Запуск продакшен версии
```

## 📊 SEO оптимизация

- Настроенные meta теги
- Open Graph разметка
- Семантическая HTML структура
- Оптимизированные изображения
