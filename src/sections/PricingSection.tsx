'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import Image from 'next/image';
import Link from 'next/link';

export default function PricingSection() {
  return (
    <section className="py-[40px] lg:py-[70px] relative" id="tariffs">
      <div className="container">
        <AnimatedSection className="text-left">
          <h2 className="text-[28px] lg:text-[42px] font-semibold text-white mb-[12px] lg:mb-[22px]">
            Тарифы и условия
          </h2>
        </AnimatedSection>
        <AnimatedSection className="flex flex-col lg:flex-row items-center justify-between mb-[20px] lg:mb-[30px]">
          <p className="text-[18px] text-[#B1AFB2] leading-[121%] max-w-[539px]">
            Пополнение личного кабинета в USDT. Конвертация в RUB по курсу биржи Rapira по факту совершения исходящей операции.
          </p>
          <div className="hidden lg:flex items-center justify-center gap-[10px] bg-[#0F1014] px-[36px] py-[14px] rounded-[40px]">
            <Link href="https://t.me/PayExBitBot" target="_blank" className="text-[14px] text-white font-bold">
            УТОЧНИТЬ ДЕТАЛИ В TELEGRAM 
            </Link>
            <div className="w-[12px] h-[8px] -rotate-90">
              <svg 
              width="12" 
              height="8" 
              viewBox="0 0 12 8" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M1 1.5L6 6.5L11 1.5" 
                stroke="#FFFFFF" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            </div>
          </div>
        </AnimatedSection>
        <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[22px] ">
          <GlassCard className="w-full bg-[#18191C]">
            <GlassCard.Header className="pb-[24px] lg:pb-[49px] px-[20px] lg:px-[34px] pt-[17px] lg:pt-[39px]">
              <p className="text-[18px] lg:text-[22px] text-white font-semibold leading-[110%]">Сбербанк, Т-Банк (Тинькофф)</p>
            </GlassCard.Header>
            <GlassCard.Content className="pb-[16px] lg:pb-[49px] px-[20px] lg:px-[34px]">
              <div className="flex flex-row lg:gap-[100px] gap-[24px]">
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[32px] lg:text-[52px] text-[#0FDA9A] font-semibold leading-[110%]">0.15%</p>
                  <p className="text-[14px] lg:text-[18px] text-[#B1AFB2] leading-[124%]">по номеру телефона</p>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[32px] lg:text-[52px] text-[#0FDA9A] font-semibold leading-[110%]">0.15%</p>
                  <p className="text-[14px] lg:text-[18px] text-[#B1AFB2] leading-[124%]">по номеру карты</p>
                </div>
              </div>
            </GlassCard.Content>
          </GlassCard>
          <GlassCard className="w-full bg-[#18191C] ">
            <GlassCard.Header className="pb-[24px] lg:pb-[49px] px-[20px] lg:px-[34px] pt-[17px] lg:pt-[39px]">
              <p className="text-[18px] lg:text-[22px] text-white font-semibold leading-[110%]">Любой другой банк РФ</p>
            </GlassCard.Header>
            <GlassCard.Content className="pb-[16px] lg:pb-[49px] px-[20px] lg:px-[34px]">
              <div className="flex flex-row lg:gap-[100px] gap-[24px]">
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[32px] lg:text-[52px] text-[#0FDA9A] font-semibold leading-[110%]">0.3%</p>
                  <p className="text-[14px] lg:text-[18px] text-[#B1AFB2] leading-[124%]">по номеру телефона</p>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[32px] lg:text-[52px] text-[#0FDA9A] font-semibold leading-[110%]">0.3%</p>
                  <p className="text-[14px] lg:text-[18px] text-[#B1AFB2] leading-[124%]">по номеру карты</p>
                </div>
              </div>
            </GlassCard.Content>
          </GlassCard>
        </div>
        <p className="text-[14px] lg:text-[18px] text-[#B1AFB2] leading-[121%] mt-[12px] lg:mt-[30px]">*Срок исполнения обычно от 5 минут до 2 часов — зависит от объёма, сумм, банка получателя и времени суток.</p>
        <div className="flex lg:hidden items-center justify-center gap-[10px] bg-[#0F1014] px-[36px] py-[14px] mt-[21px] rounded-[40px]">
            <p className="text-[14px] text-white font-bold">
            УТОЧНИТЬ ДЕТАЛИ В TELEGRAM 
            </p>
            <div className="w-[12px] h-[8px] -rotate-90">
              <svg 
              width="12" 
              height="8" 
              viewBox="0 0 12 8" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M1 1.5L6 6.5L11 1.5" 
                stroke="#FFFFFF" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            </div>
          </div>
        <GlassCard className="w-full bg-[#18191C] mt-[20px] lg:mt-[29px]">
            <GlassCard.Content className="px-[20px] lg:px-[34px] py-[20px] lg:py-0">
              <div className="flex flex-col lg:flex-row justify-between items-center min-h-[410px] w-full">
                <div className="flex flex-col gap-[5px] max-w-[550px]">
                  <p className="text-[28px] lg:text-[42px] text-white font-semibold leading-[110%]">Массовые выплаты с прибылью для вас</p>
                  <p className="text-[14px] lg:text-[18px] text-[#B1AFB2] leading-[124%]">Получайте услугу по обработке массовых выплат и одновременно зарабатывайте на каждой операции.
                  При ежемесячном обороте от 10 000 USDT возможна доплата по курсу в вашу пользу до +5% при конвертации USDT → RUB.</p>
                </div>
                <div className="flex flex-col gap-[5px] max-w-[407px] w-full mr-[0px] lg:mr-[50px]">
                  <Image 
                  src="/images/apppayment.png" alt="Массовые выплаты с прибылью для вас" width={500} height={500} />
                </div>
              </div>
            </GlassCard.Content>
          </GlassCard>
      </div>
    </section>
  );
}
