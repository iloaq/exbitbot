'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Input } from './Input';
import { MaskedInput } from './MaskedInput';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  className?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  telegram: string;
}

export function ContactForm({ onSubmit, className }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    telegram: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sendToTelegram = async (data: ContactFormData) => {
    const response = await fetch('/api/send-telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Ошибка отправки заявки');
    }

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация полей
    if (!formData.name.trim() || !formData.phone.trim() || !formData.telegram.trim()) {
      return;
    }

    // Валидация телефона (должен быть в формате +7 (XXX) XXX-XX-XX)
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(formData.phone)) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    // Валидация Telegram (должен начинаться с @)
    if (!formData.telegram.startsWith('@')) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Отправляем в Telegram
      await sendToTelegram(formData);
      
      // Вызываем переданный onSubmit (если есть)
      if (onSubmit) {
        await onSubmit(formData);
      }
      
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({ name: '', phone: '', telegram: '' });
      
      // Скрываем сообщение об успехе через 3 секунды
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Скрываем сообщение об ошибке через 5 секунд
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-[16px] lg:space-y-[20px]">
        <Input
          placeholder="Ваше имя"
          value={formData.name}
          className="h-[44px] lg:h-[54px] bg-transparent text-[14px] lg:text-[12px]"
          onChange={(e) => handleChange('name', e.target.value)}
          required
        />
        <MaskedInput
          placeholder="+7 (999) 999-99-99"
          value={formData.phone}
          className="h-[44px] lg:h-[54px] bg-transparent text-[14px] lg:text-[12px]"
          onChange={(value) => handleChange('phone', value)}
          type="tel"
          mask="phone"
          required
        />
        <MaskedInput
          placeholder="@username"
          value={formData.telegram}
          className="h-[44px] lg:h-[54px] bg-transparent text-[14px] lg:text-[12px]"
          onChange={(value) => handleChange('telegram', value)}
          mask="telegram"
          required
        />
      </div>

      <div className="mt-[24px] lg:mt-6 space-y-[16px] lg:space-y-4 flex flex-col items-center justify-between">
        {/* Уведомления */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500/10 border border-green-500/20 rounded-lg p-[20px] text-green-400 text-[14px] leading-[121%]"
          >
            ✅ Заявка успешно отправлена!
          </motion.div>
        )}
        
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/10 border border-red-500/20 rounded-lg p-[20px] text-red-400 text-[14px] leading-[121%]"
          >
            ❌ Ошибка отправки. Проверьте правильность заполнения полей:
            <div className="mt-[10px] text-[12px] text-red-300">
              • Телефон: +7 (999) 999-99-99<br/>
              • Telegram: @username
            </div>
            <div className="mt-[15px] space-y-[10px]">
              <div>📱 Telegram: <a href="https://t.me/Sup_ExBitBot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">@Sup_ExBitBot</a></div>
              <div>📧 Email: <a href="mailto:sup@exbitbot.net" className="text-blue-400 hover:text-blue-300 underline">sup@exbitbot.net</a></div>
            </div>
          </motion.div>
        )}

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting || !formData.name.trim() || !formData.phone.trim() || !formData.telegram.trim()}
          >
            {isSubmitting ? 'ОТПРАВЛЯЕМ...' : 'ОТПРАВИТЬ'}
          </Button>
        </motion.div>

        <p className="text-[12px] lg:text-[14px] text-[#CACDDD] leading-[121%] text-center max-w-[313px]">
          Нажимая на кнопку вы соглашаетесь с политикой конфиденциальности
        </p>
      </div>
    </form>
  );
}
