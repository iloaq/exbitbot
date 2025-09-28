# 🎨 НОВЫЕ ЦВЕТА - EXBITBOT

## 🌈 ЦВЕТОВАЯ ПАЛИТРА

### **Основные цвета:**
- **Зелёный (Primary Green):** `#0FDA9A` 
- **Синий (Primary Blue):** `#4BC6F6`

### **Градиенты:**
- **Primary Gradient:** `#0FDA9A` → `#4BC6F6` (0% → 100%)

---

## 🎯 ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ

### **1. Текстовые градиенты:**
```tsx
<h1 className="text-gradient-primary">
  Градиент от зелёного к синему
</h1>

<span className="text-gradient-green">
  Сплошной зелёный градиент
</span>

<span className="text-gradient-blue">
  Сплошной синий градиент
</span>
```

### **2. Фоновые градиенты:**
```tsx
<button className="gradient-primary">
  Кнопка с основным градиентом
</button>

<div className="gradient-green">
  Зелёный фон
</div>

<div className="gradient-blue">
  Синий фон
</div>
```

### **3. Сплошные цвета:**
```tsx
<div className="bg-primary-green">
  Зелёный фон
</div>

<p className="text-primary-green">
  Зелёный текст
</p>

<div className="border-primary-green">
  Зелёная граница
</div>
```

### **4. CSS переменные:**
```css
/* Использование в кастомных стилях */
.custom-element {
  background: var(--color-primary-green);
  border: 1px solid var(--color-primary-blue);
  box-shadow: 0 0 20px var(--color-primary-green);
}
```

---

## ✨ КОМПОНЕНТЫ С НОВЫМИ ЦВЕТАМИ

### **Button (обновлённый):**
```tsx
<Button variant="primary">
  Кнопка с новым градиентом
</Button>
```

### **Card с glow эффектами:**
```tsx
<Card variant="glass" glow="green">
  <Card.Header>
    <Card.Title>Зелёное свечение</Card.Title>
  </Card.Header>
</Card>

<Card variant="glass" glow="blue">
  <Card.Header>
    <Card.Title>Синее свечение</Card.Title>
  </Card.Header>
</Card>
```

### **Статус индикаторы:**
```tsx
// Зелёный индикатор (как в твоём HeroSection)
<div className="flex items-center gap-[6px] py-[8px] px-[22px] bg-white/5 rounded-[31px] border border-[#0FDA9A]">
  <div className="w-[5px] h-[5px] bg-[#0FDA9A] rounded-full"/>
  <p className="text-[14px] text-[#0FDA9A]">
    Статус активен
  </p>
</div>
```

---

## 🎨 ВИЗУАЛЬНЫЕ ПРИМЕРЫ

### **Градиенты в действии:**
```css
/* Primary gradient */
background: linear-gradient(135deg, #0FDA9A 0%, #4BC6F6 100%);

/* Текстовые градиенты */
background: linear-gradient(135deg, #0FDA9A 0%, #4BC6F6 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

/* Glow эффекты */
box-shadow: 0 0 30px -5px rgba(15,218,154,0.3);
```

---

## 🚀 МИГРАЦИЯ СТАРЫХ ЦВЕТОВ

### **Замены:**
```tsx
// ❌ Старые цвета
className="text-gradient-green"  // #10b981 → #34d399
className="text-gradient-blue"   // #3b82f6 → #60a5fa

// ✅ Новые цвета  
className="text-gradient-green"  // #0FDA9A → #0FDA9A
className="text-gradient-blue"   // #4BC6F6 → #4BC6F6
className="text-gradient-primary" // #0FDA9A → #4BC6F6 (NEW!)
```

### **Button компонент:**
```tsx
// ❌ Было
'bg-gradient-to-r from-blue-600 to-purple-600'

// ✅ Стало
'bg-gradient-to-r from-[#0FDA9A] to-[#4BC6F6] text-black'
```

---

## 🎯 BRAND GUIDELINES

### **Основные принципы:**
1. **Зелёный (#0FDA9A)** - успех, статус, активность
2. **Синий (#4BC6F6)** - надёжность, технологии
3. **Градиент** - премиум, современность

### **Когда использовать:**
- **Зелёный:** Статусы, успешные действия, активные элементы
- **Синий:** Информация, ссылки, вторичные элементы  
- **Градиент:** CTA кнопки, заголовки, премиум элементы

### **Accessibility:**
- Контраст на тёмном фоне: ✅ Отлично
- Контраст на белом фоне: ✅ Хорошо
- Цветовая слепота: ✅ Различимы

---

**🎨 Результат:** Современная цветовая схема с высоким контрастом и премиум восприятием!
