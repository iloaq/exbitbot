'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-[40px] lg:py-[70px] relative bg-[#081C1C]">
      <div className="container">
        <AnimatedSection className="text-left mb-[18px] lg:mb-[25px]">
          <h2 className="text-[28px] lg:text-[42px] font-semibold text-white leading-[100%] mb-[18px] lg:mb-[32px]">
            Готовы подключить массовые выплаты?
          </h2>
          <p className="text-[14px] lg:text-[18px] text-[#EAEAEA] leading-[121%]">
            Начините нее в Telegram - сосздайте полезное навания в день оббработка.
          </p>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-[16px] lg:gap-[20px] justify-start">
            <Link href="https://t.me/Sup_ExBitBot" target="_blank">
              <Button size="lg">
                СВЯЗАТЬСЯ В TELEGRAM
              </Button>
            </Link>
            <a href="mailto:sup@exbitbot.net">
              <Button variant="outline" size="lg">
                SUP@EXBITBOT.NET
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
