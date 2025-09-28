'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

// === Root Card Component ===
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'solid';
  glow?: 'none' | 'green' | 'blue' | 'purple';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', glow = 'none', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border transition-all duration-300',
          {
            // Variants
            'bg-white/5 backdrop-blur-md border-white/10': variant === 'glass',
            'bg-gray-900 border-gray-700': variant === 'solid',
            'bg-black/20 border-white/5': variant === 'default',
            
            // Glow effects with new brand colors
            'shadow-[0_0_30px_-5px_rgba(15,218,154,0.3)] hover:shadow-[0_0_40px_-5px_rgba(15,218,154,0.4)]': glow === 'green',
            'shadow-[0_0_30px_-5px_rgba(75,198,246,0.3)] hover:shadow-[0_0_40px_-5px_rgba(75,198,246,0.4)]': glow === 'blue',
            'shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.4)]': glow === 'purple',
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

// === Card Header ===
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...props}
      />
    );
  }
);

// === Card Title ===
interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Component = 'h3', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('text-2xl font-semibold leading-none tracking-tight text-white', className)}
        {...props}
      />
    );
  }
);

// === Card Description ===
interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm text-gray-400', className)}
        {...props}
      />
    );
  }
);

// === Card Content ===
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn('p-6 pt-0', className)} 
        {...props} 
      />
    );
  }
);

// === Card Footer ===
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center p-6 pt-0', className)}
        {...props}
      />
    );
  }
);

// Attach subcomponents to main Card
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

Card.displayName = 'Card';
CardHeader.displayName = 'Card.Header';
CardTitle.displayName = 'Card.Title';
CardDescription.displayName = 'Card.Description';
CardContent.displayName = 'Card.Content';
CardFooter.displayName = 'Card.Footer';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
export type { CardProps, CardHeaderProps, CardTitleProps, CardDescriptionProps, CardContentProps, CardFooterProps };
