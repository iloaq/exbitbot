'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Размер контейнера
   * @default 'default'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'default';
  
  /**
   * Отключить внутренние отступы
   * @default false
   */
  noPadding?: boolean;
  
  /**
   * Центрировать контент
   * @default true
   */
  centered?: boolean;
}

const sizeVariants = {
  sm: 'max-w-2xl',      // 672px
  md: 'max-w-4xl',      // 896px  
  lg: 'max-w-6xl',      // 1152px
  xl: 'max-w-7xl',      // 1280px
  full: 'max-w-full',   // 100%
  default: '',          // CSS класс .container (1200px)
};

/**
 * Компонент контейнера с гибкой настройкой размеров
 * 
 * @example
 * ```tsx
 * <Container size="lg">
 *   <h1>Заголовок</h1>
 * </Container>
 * 
 * <Container size="full" noPadding>
 *   <Image src="/hero.jpg" alt="Hero" />
 * </Container>
 * ```
 */
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ 
    className, 
    size = 'default', 
    noPadding = false, 
    centered = true,
    children, 
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Базовые стили
          {
            'container': size === 'default', // Используем CSS класс для default
            [sizeVariants[size]]: size !== 'default', // Tailwind классы для остальных
            'mx-auto': centered && size !== 'default',
            'px-5': !noPadding && size !== 'default', // 20px отступы для Tailwind размеров
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export { Container };
export type { ContainerProps };
