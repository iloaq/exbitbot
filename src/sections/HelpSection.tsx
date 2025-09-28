'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { BellIconAlt,CardIcon,PeopleIcon,SettingIcon,AppIcon,UpperIcon } from '@/shared/icons';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const helpItems = [
  {
    icon: CardIcon,
    description: 'Оплатить работу сотрудников на личные карты банков РФ'
  },
  {
    icon: PeopleIcon, 
    description: 'Осуществить массовые выплаты фрилансерам, самозанятым, блогерам и подрядчикам'
  },
  {
    icon: AppIcon,
    description: 'Рассчитаться с закупщиками рекламы или CPA-сетями'
  },
  {
    icon: SettingIcon,
    title: 'Все автоматизировано',
    description: 'Личный кабинет, API и без ожидания менеджеров. Выплаты обычно в течение двух часов.'
  },
  {
    icon: UpperIcon,
    title: 'Финконтроль',
    description: 'Статистика за любой период. Экспорт в Excel. Учёт кому, когда и сколько выплачено.'
  },
  {
    icon: BellIconAlt,
    title: 'Статусы в Telegram',
    description: 'Мгновенные уведомления о новых выплатах и ходе исполнения.'
  }
];

export default function HelpSection() {
  return (
    <section className="py-[40px] lg:py-[70px] relative border-b border-t border-[#303134] bg-[#141517]" id="features">
      <div className="container">
        <AnimatedSection className="text-left mb-[20px] lg:mb-[30px]">
          <h2 className="text-[28px] lg:text-[42px] font-bold text-white mb-[19px] lg:mb-[34px]">
            Как мы можем помочь?
          </h2>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[21px]"
        >
          {helpItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full group bg-[#0F1014]">
                <GlassCard.Header>
                  <div className="w-[33px] h-[33px] lg:w-[24px] lg:h-[24px]">
                    {item.icon({ width: 33, height: 33, className: 'text-white' })}
                  </div>
                </GlassCard.Header>
                <GlassCard.Content>
                  {item.title ? (
                    <>
                      <p className="text-[18px] lg:text-[22px] text-white font-semibold leading-[110%] mb-[6px] lg:mb-[12px]">{item.title}</p>
                      <p className="text-[14px] lg:text-[18px] text-[#CACDDD] leading-[124%] mb-[19px] lg:mb-[52px]">{item.description}</p>
                    </>
                  ) : (
                    <p className="text-[14px] lg:text-[18px] text-white leading-[140%] mb-[19px] lg:mb-[36px]">{item.description}</p>
                  )}
                </GlassCard.Content>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
