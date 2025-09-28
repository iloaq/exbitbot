'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

// === Main GlassCard Component ===
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'green' | 'blue' | 'purple' | 'none';
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, hover = true, glow = 'none' }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: 0, scale: 1 } : {}}
        className={cn(
          'backdrop-blur-xl bg-white/5 border border-white/10 rounded-[20px] transition-all duration-300',
          hover && 'hover:bg-white/10 hover:border-white/20',
          glow === 'green' && 'hover:shadow-[0_0_30px_rgba(15,218,154,0.3)]',
          glow === 'blue' && 'hover:shadow-[0_0_30px_rgba(75,198,246,0.3)]',
          glow === 'purple' && 'hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
          className
        )}
      >
        {children}
      </motion.div>
    );
  }
);

// === GlassCard Header ===
interface GlassCardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const GlassCardHeader = forwardRef<HTMLDivElement, GlassCardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-[16px] lg:px-[25px] pt-[16px] lg:pt-[25px] pb-[10px] lg:pb-[15px]', className)}
        {...props}
      />
    );
  }
);

// === GlassCard Content ===
interface GlassCardContentProps extends HTMLAttributes<HTMLDivElement> {}

const GlassCardContent = forwardRef<HTMLDivElement, GlassCardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-[16px] lg:px-[25px]', className)}
        {...props}
      />
    );
  }
);

// === GlassCard Footer ===
interface GlassCardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const GlassCardFooter = forwardRef<HTMLDivElement, GlassCardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-[16px] lg:px-[25px]', className)}
        {...props}
      />
    );
  }
);

// Attach subcomponents to main GlassCard
const GlassCardWithSubcomponents = GlassCard as typeof GlassCard & {
  Header: typeof GlassCardHeader;
  Content: typeof GlassCardContent;
  Footer: typeof GlassCardFooter;
};

GlassCardWithSubcomponents.Header = GlassCardHeader;
GlassCardWithSubcomponents.Content = GlassCardContent;
GlassCardWithSubcomponents.Footer = GlassCardFooter;

GlassCard.displayName = 'GlassCard';
GlassCardHeader.displayName = 'GlassCard.Header';
GlassCardContent.displayName = 'GlassCard.Content';
GlassCardFooter.displayName = 'GlassCard.Footer';

export { GlassCardWithSubcomponents as GlassCard, GlassCardHeader, GlassCardContent, GlassCardFooter };
export type { GlassCardProps, GlassCardHeaderProps, GlassCardContentProps, GlassCardFooterProps };
