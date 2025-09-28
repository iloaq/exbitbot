# ⚡ QUICK START - EXBITBOT

## 🚀 Быстрый запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки с Turbopack
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start
```

---

## 🏗️ ЧТО БЫЛО ИСПРАВЛЕНО

### ❌ Проблемы которые были:
1. **35 строк говнокода** с медиа-запросами для container
2. **Ошибка в CSS** - `max-width: --max-width;` вместо `var(--max-width)`
3. **Противоречивые классы** - смешивание CSS container с Tailwind
4. **Отсутствие архитектуры** для масштабирования

### ✅ Что исправлено:
1. **Чистый CSS container** - фиксированная ширина 1200px + отступы 20px
2. **Design System Tokens** - централизованные значения в CSS переменных
3. **Compound Components** - модульные переиспользуемые компоненты
4. **Feature-Sliced Design** - масштабируемая архитектура

---

## 🎯 НОВАЯ АРХИТЕКТУРА

### **Контейнер (выбирай что нужно):**

```tsx
// Простой CSS класс (рекомендуется для большинства случаев)
<div className="container">Контент</div>

// Гибкий React компонент для специальных случаев
<Container size="lg">Контент</Container>
<Container size="full" noPadding>Полная ширина без отступов</Container>
```

### **Карточки (новый compound подход):**

```tsx
// Старый способ (legacy)
<GlassCard glow="green">
  <div>Всё в одном компоненте</div>
</GlassCard>

// Новый способ (модульный)
<Card variant="glass" glow="green">
  <Card.Header>
    <Card.Title>Заголовок</Card.Title>
    <Card.Description>Описание</Card.Description>
  </Card.Header>
  <Card.Content>
    Основной контент
  </Card.Content>
  <Card.Footer>
    <Button>Действие</Button>
  </Card.Footer>
</Card>
```

---

## 📂 СТРУКТУРА ПРОЕКТА (НОВАЯ)

```
src/
├── shared/              # Переиспользуемые компоненты
│   └── ui/
│       ├── Container/   # Система контейнеров
│       ├── Card/        # Модульные карточки
│       └── index.ts     # Экспорты
│
├── features/            # Фичи (будущее)
├── widgets/             # Составные блоки (будущее)
├── pages/               # = app/ в Next.js
│
└── components/          # Legacy (постепенно мигрируем)
    ├── ui/
    └── layout/
```

---

## 🎨 GUIDELINES ДЛЯ РАЗРАБОТКИ

### **1. Импорты (порядок):**
```tsx
// 1. Внешние библиотеки
import React from 'react';
import { motion } from 'framer-motion';

// 2. Shared компоненты
import { Container, Card } from '@/shared/ui';

// 3. Feature компоненты  
import { Button } from '@/components/ui/Button';

// 4. Локальные импорты
import './styles.css';
```

### **2. Компоненты (структура):**
```tsx
interface Props {
  title: string;
}

export function Component({ title }: Props) {
  return (
    <Container>
      <Card variant="glass">
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
      </Card>
    </Container>
  );
}
```

### **3. Стили (приоритет):**
```tsx
// 1. CSS классы для системных компонентов
<div className="container">

// 2. Tailwind для утилитарных стилей
<div className="flex items-center gap-4">

// 3. CSS переменные для токенов
<div style={{ padding: 'var(--space-md)' }}>
```

---

## 🚦 СЛЕДУЮЩИЕ ШАГИ

### **Phase 1: Immediate (1-2 дня)**
- [ ] Мигрировать все секции на новый Container
- [ ] Заменить GlassCard на новый Card компонент
- [ ] Убрать legacy CSS медиа-запросы

### **Phase 2: Architecture (1 неделя)**
- [ ] Реструктурировать проект по FSD
- [ ] Создать переиспользуемые хуки
- [ ] Добавить Storybook для компонентов

### **Phase 3: Optimization (2 недели)**
- [ ] Настроить ESLint/Prettier
- [ ] Добавить unit тесты
- [ ] Оптимизировать анимации

---

## 💡 ПОЛЕЗНЫЕ КОМАНДЫ

```bash
# Проверка типов
npx tsc --noEmit

# Линтинг (когда настроишь)
npm run lint

# Форматирование (когда настроишь)  
npm run format

# Анализ бандла
npm run build && npx @next/bundle-analyzer
```

---

**🎯 Результат:** Теперь у тебя чистая, масштабируемая архитектура вместо говнокода с 35 строками медиа-запросов!
