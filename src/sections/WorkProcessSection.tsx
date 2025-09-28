'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const steps = [
  {
    number: '1',
    title: 'Подключение',
    description: 'В день обращения создаём личный кабинет и предоставляем доступ. Сразу можно осуществлять массовые выплаты.'
  },
  {
    number: '2',
    title: 'Удобный интерфейс',
    description: 'Укажите номер карты и сумму. Для массовых выплат — вставьте весь список из Excel. Есть API для полной автоматизации.'
  },
  {
    number: '3',
    title: 'Уведомления',
    description: 'После заполнения формы в рабочем Telegram-чате появляются уведомления и счёт на оплату. После оплаты начнётся отправка средств.'
  }
];

export default function WorkProcessSection() {
  return (
    <section className="py-[40px] lg:py-[70px] relative" id="work-process">
      <div className="container">
        <AnimatedSection className="text-left">
          <h2 className="text-[28px] lg:text-[42px] font-bold text-white mb-[19px] lg:mb-[34px]">
            Как работает сервис?
          </h2>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[16px] lg:gap-[21px]"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full bg-[#18191C] border border-[#303134] backdrop-blur-[14px]">
                <GlassCard.Header>
                  <p className="text-[14px] lg:text-[16px] text-[#0FDA9A] font-semibold leading-[110%] mb-[3px]" >Шаг {step.number}</p>
                </GlassCard.Header>
                <GlassCard.Content>
                  <p className="text-[18px] lg:text-[22px] text-white font-semibold leading-[110%] mb-[10px] lg:mb-[18px]">{step.title}</p>
                  <p className="text-[14px] lg:text-[18px] text-[#B1AFB2] leading-[124%] mb-[16px] lg:mb-[36px]">{step.description}</p>
                </GlassCard.Content>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
