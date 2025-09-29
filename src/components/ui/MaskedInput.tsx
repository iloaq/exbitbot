'use client';

import { useState, useEffect } from 'react';
import { Input } from './Input';

interface MaskedInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  type?: 'tel' | 'text';
  mask?: 'phone' | 'telegram';
  required?: boolean;
}

export function MaskedInput({ 
  placeholder, 
  value, 
  onChange, 
  className, 
  type = 'text',
  mask = 'phone',
  required = false 
}: MaskedInputProps) {
  const [displayValue, setDisplayValue] = useState('');

  // Маска для телефона
  const formatPhone = (input: string) => {
    // Удаляем все нецифры
    const numbers = input.replace(/\D/g, '');
    
    // Если начинается с 8, заменяем на +7
    let formatted = numbers;
    if (formatted.startsWith('8')) {
      formatted = '7' + formatted.slice(1);
    }
    
    // Если начинается с 7, добавляем +
    if (formatted.startsWith('7')) {
      formatted = '+' + formatted;
    }
    
    // Форматируем по маске +7 (XXX) XXX-XX-XX
    if (formatted.length > 1) {
      formatted = formatted.replace(/^(\+7)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, (match, p1, p2, p3, p4, p5) => {
        let result = p1;
        if (p2) result += ` (${p2}`;
        if (p3) result += `) ${p3}`;
        if (p4) result += `-${p4}`;
        if (p5) result += `-${p5}`;
        return result;
      });
    }
    
    return formatted;
  };

  // Маска для Telegram
  const formatTelegram = (input: string) => {
    // Удаляем все кроме букв, цифр и @
    let formatted = input.replace(/[^a-zA-Z0-9@]/g, '');
    
    // Если не начинается с @, добавляем
    if (formatted && !formatted.startsWith('@')) {
      formatted = '@' + formatted;
    }
    
    // Ограничиваем длину
    if (formatted.length > 33) { // @ + 32 символа
      formatted = formatted.slice(0, 33);
    }
    
    return formatted;
  };

  // Обработка изменений
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let formattedValue = inputValue;

    if (mask === 'phone') {
      formattedValue = formatPhone(inputValue);
    } else if (mask === 'telegram') {
      formattedValue = formatTelegram(inputValue);
    }

    setDisplayValue(formattedValue);
    onChange(formattedValue);
  };

  // Инициализация значения
  useEffect(() => {
    if (mask === 'phone' && value) {
      setDisplayValue(formatPhone(value));
    } else if (mask === 'telegram' && value) {
      setDisplayValue(formatTelegram(value));
    } else {
      setDisplayValue(value);
    }
  }, [value, mask]);

  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={displayValue}
      onChange={handleChange}
      className={className}
      required={required}
    />
  );
}
