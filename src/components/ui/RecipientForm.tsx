'use client';

import { useState } from 'react';
import { Input } from './Input';
import { cn } from '@/lib/utils';

interface RecipientFormProps {
  className?: string;
  onAddRecipient?: (recipient: RecipientData) => void;
}

interface RecipientData {
  id: string;
  cardNumber: string;
  amount: string;
  comment: string;
}

export function RecipientForm({ className, onAddRecipient }: RecipientFormProps) {
  const [recipients, setRecipients] = useState<RecipientData[]>([
    { id: '1', cardNumber: '', amount: '', comment: '' },
    { id: '2', cardNumber: '', amount: '', comment: '' },
    { id: '3', cardNumber: '', amount: '', comment: '' }
  ]);

  const updateRecipient = (id: string, field: keyof Omit<RecipientData, 'id'>, value: string) => {
    setRecipients(recipients.map(recipient => 
      recipient.id === id ? { ...recipient, [field]: value } : recipient
    ));
  };

  return (
    <div className={cn('space-y-[12px]', className)}>
      {recipients.map((recipient, index) => (
        <div key={recipient.id} className="flex items-baseline lg:items-center gap-[10px]">
          {/* Номер строки */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <span className="text-[14px] text-[#EAEAEA] leading-[121%]">
              #{recipient.id}
            </span>
          </div>

          {/* Поля ввода */}
          <div className="flex-1 grid grid-cols-3 lg:grid-cols-12 gap-[10px]">
            <Input
              placeholder="Номер карты или телефона"
              value={recipient.cardNumber}
              onChange={(e) => updateRecipient(recipient.id, 'cardNumber', e.target.value)}
              className="border-[#333C3E] col-span-2 lg:col-span-5"
            />
            <Input
              placeholder="Сумма"
              value={recipient.amount}
              onChange={(e) => updateRecipient(recipient.id, 'amount', e.target.value)}
              className="border-[#333C3E] col-span-1 lg:col-span-2"
            />
            <Input
              placeholder="Комментарий"
              value={recipient.comment}
              onChange={(e) => updateRecipient(recipient.id, 'comment', e.target.value)}
              className="border-[#333C3E] col-span-3 lg:col-span-5"
            />
          </div>

        </div>
      ))}


      {/* Подсказка */}
      <div className="text-left mt-0 lg:mt-[5px] mb-[12px] lg:mb-[18px]">
        <p className="text-[14px] text-[#CACDDD] leading-[121%]">
          Можно вставить из Excel одним блоком
        </p>
      </div>
    </div>
  );
}
