'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  staticLabel?: string; // Статический текст перед значением
  error?: string;
  className?: string;
}

export function Select({ 
  options, 
  value, 
  onChange, 
  placeholder = "Выберите...", 
  label,
  staticLabel,
  error,
  className 
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === selectedValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={cn('space-y-1 relative w-full lg:w-auto', className)}>
      {label && (
        <label className="text-[12px] font-medium text-[#EAEAEA]">
          {label}
        </label>
      )}
      <div className="relative" ref={selectRef}>
        <div
          className={cn(
            'flex h-[41px] w-full rounded-[7px] min-w-[204px] border border-[#333C3E] bg-[#112020] px-[12px] py-[12px] pr-[35px] text-[12px] text-white cursor-pointer transition-all duration-200',
            isOpen && 'border-[#0FDA9A] ring-1 ring-[#0FDA9A]',
            error && 'border-red-500',
            className
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={cn(
            'flex-1 transition-all duration-200 flex items-center',
            selectedValue ? 'text-white' : 'text-[#CACDDD]'
          )}>
            {staticLabel && (
              <span className="text-white mr-1">{staticLabel}</span>
            )}
            <span className={cn(
              'transition-all duration-200',
              selectedValue ? 'text-white' : 'text-[#CACDDD]'
            )}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          </span>
        </div>
        
        {/* Кастомная стрелка */}
        <div className={cn(
          'absolute right-[12px] top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform duration-200',
          isOpen && 'rotate-180'
        )}>
          <svg 
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1 1.5L6 6.5L11 1.5" 
              stroke="#CACDDD" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Выпадающий список */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-[#112020] border border-[#333C3E] rounded-[7px] shadow-lg z-50 max-h-48 overflow-y-auto scrollbar-thin scrollbar-track-[#112020] scrollbar-thumb-[#333C3E] hover:scrollbar-thumb-[#0FDA9A] scrollbar-thumb-rounded-full">
            {options.map((option) => (
              <div
                key={option.value}
                className={cn(
                  'px-[12px] py-[8px] text-[12px] text-white cursor-pointer hover:bg-white/5 transition-colors duration-150',
                  selectedValue === option.value && 'bg-[#0FDA9A]/10 text-[#0FDA9A]'
                )}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

export type { SelectProps };

