  'use client';

  import { ButtonHTMLAttributes, forwardRef } from 'react';
  import { cn } from '@/lib/utils';
  import css from 'styled-jsx/css';

  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
  }

  const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, disabled, children, ...props }, ref) => {
      return (
        <button
          className={cn(
            'inline-flex items-center justify-center rounded-[40px] font-bold transition-all cursor-pointer duration-300   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            {
              // Variants
              'bg-gradient-to-r from-[#0FDA9A] to-[#4BC6F6] text-black hover:from-[#0FDA9A] hover:to-[#4BF68F] shadow-lg hover:shadow-xl focus-visible:ring-[#0FDA9A]': variant === 'primary',
              'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg focus-visible:ring-gray-500': variant === 'secondary',
              'gradient-border-image hover:bg-gradient-to-r from-[#0FDA9A] to-[#4BC6F6] hover:bg-clip-text hover:text-transparent bg-transparent': variant === 'outline',
              'hover:bg-gray-100 focus-visible:ring-gray-500': variant === 'ghost',
              
              // Sizes
              'h-[48px] lg:h-[56px] px-[28px] lg:px-[36px] py-[14px] min-w-auto lg:min-w-[173px] text-[14px] lg:text-[18px]': size === 'lg',
              'h-[44px] px-[16px] py-[12px] min-w-auto lg:min-w-[173px] text-[14px]': size === 'md',
              'h-[32px] px-[16px] py-[12px] min-w-auto lg:min-w-[173px] text-[14px]': size === 'sm',
            },
            className
          )}
          disabled={disabled || isLoading}
          ref={ref}
          {...props}
        >
          {isLoading && (
            <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )}
          {children}
        </button>
      );
    }
  );

  Button.displayName = 'Button';

  export { Button };
  export type { ButtonProps };
