import type { Feature, Testimonial, PricingPlan } from '@/types';

export const features: Feature[] = [
  {
    id: '1',
    icon: 'TrendingUp',
    title: 'AI Торговля',
    description: 'Умные алгоритмы для максимальной прибыли',
    highlighted: true,
  },
  {
    id: '2',
    icon: 'Shield',
    title: 'Безопасность',
    description: 'Банковский уровень защиты средств',
  },
  {
    id: '3',
    icon: 'Zap',
    title: 'Молниеносно',
    description: 'Мгновенное исполнение сделок',
  },
  {
    id: '4',
    icon: 'BarChart3',
    title: 'Аналитика',
    description: 'Детальная статистика торговли',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Алексей',
    role: 'Трейдер',
    company: 'Freelance',
    avatar: '/images/avatars/alex.jpg',
    content: 'За месяц увеличил депозит на 45%. Лучший бот!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Мария',
    role: 'Инвестор',
    company: 'Investment Fund',
    avatar: '/images/avatars/maria.jpg',
    content: 'Стабильная прибыль без эмоций. Рекомендую.',
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Базовый',
    price: 99,
    period: 'месяц',
    features: [
      'До 3 пар торговли',
      'Базовые стратегии',
      'Email поддержка',
      'Ежедневные отчеты',
    ],
    cta: 'Начать торговлю',
  },
  {
    id: 'pro',
    name: 'Профи',
    price: 299,
    period: 'месяц',
    features: [
      'Неограниченные пары',
      'AI стратегии',
      'Приоритетная поддержка',
      'Реальные сигналы',
      'API доступ',
    ],
    highlighted: true,
    cta: 'Выбрать план',
  },
  {
    id: 'enterprise',
    name: 'Корпоративный',
    price: 999,
    period: 'месяц',
    features: [
      'Все возможности',
      'Персональный менеджер',
      'Кастомные стратегии',
      'Белый лейбл',
      'SLA 99.9%',
    ],
    cta: 'Связаться',
  },
];
