# 🚀 DEVELOPMENT GUIDELINES - EXBITBOT

## 📋 ВЫБРАННЫЕ МЕТОДОЛОГИИ

### 1. **FEATURE-SLICED DESIGN (FSD)**
```
src/
├── shared/          # Переиспользуемые компоненты, утилиты
├── entities/        # Бизнес-сущности (User, Order, Payment)
├── features/        # Фичи (Auth, Payment, Trading)
├── widgets/         # Составные блоки (Header, Sidebar)
├── pages/           # Страницы (app/ для Next.js)
```

### 2. **ATOMIC DESIGN**
- **Atoms**: Button, Input, Icon
- **Molecules**: SearchBox, Card, FormField  
- **Organisms**: Header, ProductList, OrderForm
- **Templates**: PageLayout, SectionLayout
- **Pages**: HomePage, ProfilePage

### 3. **COMPOUND COMPONENTS**
```tsx
<Card>
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

## 🎨 DESIGN SYSTEM TOKENS

### Spacing Scale
```css
:root {
  --space-xs: 0.5rem;    /* 8px */
  --space-sm: 1rem;      /* 16px */
  --space-md: 1.5rem;    /* 24px */
  --space-lg: 2rem;      /* 32px */
  --space-xl: 3rem;      /* 48px */
  --space-2xl: 4rem;     /* 64px */
}
```

### Container System
```css
.container {
  max-width: var(--container-max-width);  /* 1200px */
  margin: 0 auto;
  padding: 0 var(--container-padding);    /* 20px */
}
```

---

## 🏗️ АРХИТЕКТУРНЫЕ ПАТТЕРНЫ

### 1. **COMPOSITION OVER INHERITANCE**
```tsx
// ❌ Плохо - наследование
class Button extends BaseButton {}

// ✅ Хорошо - композиция
const Button = ({ variant, size, children, ...props }) => (
  <button className={cn(baseStyles, variantStyles[variant])} {...props}>
    {children}
  </button>
);
```

### 2. **CUSTOM HOOKS ДЛЯ ЛОГИКИ**
```tsx
// Вся логика в хуках
function usePayment() {
  const [status, setStatus] = useState('idle');
  
  const processPayment = async (data) => {
    setStatus('loading');
    // логика
  };
  
  return { status, processPayment };
}
```

### 3. **RENDER PROPS + CHILDREN AS FUNCTION**
```tsx
<DataFetcher url="/api/orders">
  {({ data, loading, error }) => {
    if (loading) return <Spinner />;
    if (error) return <ErrorMessage />;
    return <OrderList orders={data} />;
  }}
</DataFetcher>
```

---

## 📦 КОМПОНЕНТНАЯ АРХИТЕКТУРА

### **SHARED COMPONENTS**
```
src/shared/
├── ui/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   └── Input/
└── lib/
    ├── utils.ts
    ├── constants.ts
    └── types.ts
```

### **FEATURE COMPONENTS**
```
src/features/
├── auth/
│   ├── ui/
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   ├── model/
│   │   ├── useAuth.ts
│   │   └── authStore.ts
│   └── api/
│       └── authApi.ts
```

---

## 🎯 CODING STANDARDS

### **1. ИМЕНОВАНИЕ**
```tsx
// Компоненты - PascalCase
const UserProfile = () => {}

// Хуки - camelCase с use
const useUserData = () => {}

// Константы - UPPER_SNAKE_CASE
const API_ENDPOINTS = {}

// Переменные - camelCase
const isLoggedIn = true
```

### **2. СТРУКТУРА ФАЙЛОВ**
```tsx
// 1. Импорты (внешние библиотеки)
import React from 'react';
import { motion } from 'framer-motion';

// 2. Импорты (внутренние)
import { Button } from '@/shared/ui';
import { useAuth } from '@/features/auth';

// 3. Типы
interface Props {
  title: string;
}

// 4. Компонент
export function Component({ title }: Props) {
  return <div>{title}</div>;
}
```

### **3. КОМПОЗИЦИЯ СТИЛЕЙ**
```tsx
// ✅ Правильно - единая система
const buttonStyles = {
  base: 'px-4 py-2 rounded-lg font-medium transition-all',
  variants: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300'
  }
};

// Использование
<button className={cn(buttonStyles.base, buttonStyles.variants.primary)}>
```

---

## ⚡ PERFORMANCE PATTERNS

### **1. LAZY LOADING**
```tsx
// Компоненты
const LazyComponent = lazy(() => import('./HeavyComponent'));

// Изображения
<Image 
  src="/image.jpg" 
  loading="lazy" 
  placeholder="blur"
/>
```

### **2. MEMOIZATION**
```tsx
// Компоненты
const ExpensiveComponent = memo(({ data }) => {
  return <div>{/* render */}</div>;
});

// Значения
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

### **3. ВИРТУАЛИЗАЦИЯ**
```tsx
// Для больших списков
import { FixedSizeList as List } from 'react-window';

<List
  height={600}
  itemCount={items.length}
  itemSize={50}
>
  {Row}
</List>
```

---

## 🔧 TOOLING & AUTOMATION

### **1. ESLINT CONFIG**
```json
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended"
  ],
  "rules": {
    "prefer-const": "error",
    "no-unused-vars": "error"
  }
}
```

### **2. HUSKY + LINT-STAGED**
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

---

## 🚦 DEVELOPMENT WORKFLOW

### **1. BRANCH NAMING**
```
feature/payment-integration
fix/button-hover-state
refactor/auth-components
```

### **2. COMMIT MESSAGES**
```
feat: add payment form validation
fix: resolve button accessibility issue
refactor: extract auth logic to custom hook
```

### **3. PR TEMPLATE**
```
## Changes
- [ ] Feature implemented
- [ ] Tests added
- [ ] Documentation updated

## Testing
- [ ] Unit tests pass
- [ ] E2E tests pass
- [ ] Manual testing completed
```

---

## 📊 MONITORING & ANALYTICS

### **1. CORE WEB VITALS**
```tsx
// Performance monitoring
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
```

### **2. ERROR BOUNDARY**
```tsx
class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }
}
```

---

## 🎯 NEXT STEPS

1. **Реструктурировать проект** по FSD методологии
2. **Создать Design System** с токенами
3. **Добавить Storybook** для документации компонентов
4. **Настроить CI/CD** с автоматическими проверками
5. **Добавить тестирование** (Jest + Testing Library)

---

*Эти guidelines обеспечивают масштабируемость, поддерживаемость и скорость разработки для команды любого размера.*
