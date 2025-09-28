'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div {...props} className={cn('space-y-1', className)}>
        {label && (
          <label className="text-[12px] font-medium text-[#EAEAEA]">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            'flex h-[41px] w-full rounded-[7px] border border-[#333C3E] bg-[#112020] px-[12px] py-[12px] text-[12px] text-white placeholder:text-[#CACDDD] focus:border-[#0FDA9A] focus:outline-none focus:ring-1 focus:ring-[#0FDA9A] disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
export type { InputProps };
