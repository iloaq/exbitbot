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
    
    // Ограничиваем до 11 цифр (7 + 10 цифр номера)
    const limitedNumbers = numbers.slice(0, 11);
    
    // Если начинается с 8, заменяем на 7
    let formatted = limitedNumbers;
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
    
    // Ограничиваем длину до 32 символов (без @)
    if (formatted.length > 33) { // @ + 32 символа
      formatted = formatted.slice(0, 33);
    }
    
    // Убираем @ если пользователь его удалил
    if (formatted === '@') {
      formatted = '';
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

  // Обработка клавиш для дополнительного контроля
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (mask === 'phone') {
      // Разрешаем только цифры, Backspace, Delete, стрелки, Tab
      const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'];
      if (!allowedKeys.includes(e.key) && !/\d/.test(e.key)) {
        e.preventDefault();
      }
    } else if (mask === 'telegram') {
      // Разрешаем только буквы, цифры, @, Backspace, Delete, стрелки, Tab
      const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'];
      if (!allowedKeys.includes(e.key) && !/[a-zA-Z0-9@]/.test(e.key)) {
        e.preventDefault();
      }
    }
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
      onKeyDown={handleKeyDown}
      className={className}
      required={required}
    />
  );
}
