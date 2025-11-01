'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { RecipientForm } from '@/components/ui/RecipientForm';
import { Select } from '@/components/ui/Select';
import { ContactModal } from '@/components/ui/ContactModal';
import { ContactFormData } from '@/components/ui/ContactForm';
import { useModal } from '@/hooks/useModal';
import { BellIcon } from '@/shared/icons/components/BellIcon';
import { ShieldIcon } from '@/shared/icons/components/ShieldIcon';
import { fadeInUp, fadeInLeft, staggerContainer } from '@/animations/variants';
import Link from 'next/link';

export default function HeroSection() {
  const { isOpen, openModal, closeModal } = useModal();

  const handleContactSubmit = async (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    // Здесь будет логика отправки данных
  };

  return (
    <section className="relative min-h-[690px] border-b border-[#303134] flex items-center justify-center lg:pt-[70px] pt-[23px] lg:pb-[70px] pb-[51px] mt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-1/2 rotate-75 left-1/4 w-[798px] h-[693px] bg-[#13D8A1] opacity-15 rounded-full blur-3xl"
        />
      </div>
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/5 left-1/2 w-[706px] h-[493px] bg-[#13D8A1] opacity-10 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center w-fit gap-[6px] lg:py-[8px] py-[7px] px-[22px] bg-white/5 rounded-[31px] border border-[#0FDA9A] mb-[14px]"
            >
              <div className="w-[5px] h-[5px] bg-[#0FDA9A] rounded-full"/>
              <p className="text-[14px] text-[#0FDA9A] lg:max-w-[500px] max-w-[261px] leading-[121%]">
                  Автоматические массовые выплаты на карты за криптовалюту
              </p>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-[28px] lg:text-[48px] font-semibold leading-tight lg:max-w-[500px] mb-[12px] lg:mb-[20px]"
            >
              Отправляйте RUB по номеру карты или телефона в несколько кликов
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-[14px] lg:text-[18px] text-gray-300 lg:max-w-[500px] leading-[121%] mb-[20px] lg:mb-[31px]"
            >
              Быстро и без ограничений на количество получателей. Личный кабинет, API и мгновенные уведомления в Telegram.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-row sm:flex-row gap-[20px] mb-[26px] lg:mb-[54px]"
            >
              <Button size="lg" variant="primary" onClick={openModal}>
                НАЧАТЬ
              </Button>
              <Link href="#tariffs"> 
                <Button variant="outline" size="lg">
                  ТАРИФЫ И УСЛОВИЯ
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-[12px] lg:gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <ShieldIcon width={18} height={18} />
                Белый банковский шлюз при необходимости
              </div>
              <div className="flex items-center gap-2">
                <BellIcon width={18} height={18} />
                Уведомления в Telegram
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Stats Cards */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-4"
          >
            <motion.div variants={fadeInUp}>
              <GlassCard glow="green" className="relative">
                <GlassCard.Header className="text-[18px] font-semibold text-white leading-[110%]">
                  Демо интерфейса
                </GlassCard.Header>
                <GlassCard.Content className="pt-[10px] lg:pt-0">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[5px] lg:gap-[20px]">
                    <p className="text-[14px] text-[#EAEAEA] leading-[121%]">Реестр получателей</p>
                    <p className="text-[14px] text-[#EAEAEA] leading-[121%]">~ до 2 часов исполнение</p>
                  </div>
                  <div className="mt-[10px] lg:mt-4">
                    <RecipientForm />
                  </div>
                </GlassCard.Content>
                <GlassCard.Footer className="p-[16px] lg:p-6 pt-0">
                  <div className="h-[1px] bg-[#575757]"></div>
                  <div className="mt-[12px] lg:mt-[15px] space-y-[10px] lg:space-y-[15px]">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-[12px] lg:gap-[31px] ">
                      <div className="flex items-center gap-2 w-full lg:w-auto">
                        <Select
                          staticLabel="Валюта списания:"
                          options={[
                            { value: 'USDT', label: 'USDT' },
                            { value: 'BTC', label: 'BTC' },
                            { value: 'ETH', label: 'ETH' },
                            { value: 'XMR', label: 'XMR' }
                          ]}
                          value="USDT"
                        />
                      </div>
                      <div className="text-left text-[14px] text-[#CACDDD] leading-[121%] max-w-[100%] lg:max-w-[188px]">
                        <div>Списание по курсу Rapira</div>
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-[12px] lg:gap-[43px]">
                      <Button variant="primary" size="md" className="w-full lg:w-auto" onClick={openModal}>
                        ОТПРАВИТЬ ВЫПЛАТЫ
                      </Button>
                      <div className="text-left text-[14px] text-[#CACDDD] leading-[121%] max-w-[100%] lg:max-w-[188px]">
                        <div>Сервис сам определит банк по номеру карты</div>
                      </div>
                    </div>
                  </div>
                </GlassCard.Footer>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <ContactModal
        isOpen={isOpen}
        onClose={closeModal}
        title="Оставить заявку"
        onSubmit={handleContactSubmit}
      />
    </section>
  );
}
