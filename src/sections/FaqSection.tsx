'use client';

import { motion } from 'framer-motion';
import { Accordion } from '@/components/ui/Accordion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const faqItems = [
  {
    question: 'От кого и как происходят массовые выплаты физических лицам?',
    answer: 'Как обычный перевод между физлицами. В редких случаях используем белый банковский шлюз — это безопасно для карты получателя.'
  },
  {
    question: 'В какие сроки происходят массовые выплаты?',
    answer: 'Обычно переводы происходят в течение нескольких минут после подтверждения заявки. В редких случаях может потребоваться до 24 часов.'
  },
  {
    question: 'Ваш график работы?',
    answer: 'Мы работаем круглосуточно 24/7. Наша служба поддержки доступна в любое время для решения ваших вопросов.'
  },
  {
    question: 'Вы предоставляете чеки?',
    answer: 'Да, мы предоставляем все необходимые документы и чеки для каждой транзакции в соответствии с требованиями законодательства.'
  },
  {
    question: 'По какому курсу вы работаете?',
    answer: 'Мы используем актуальный рыночный курс с минимальной комиссией. Курс обновляется в режиме реального времени.'
  },
  {
    question: 'Это конфиденциально? Есть ли отзывы?',
    answer: 'Да, все операции полностью конфиденциальны. У нас более 1000 положительных отзывов от довольных клиентов.'
  }
];

export default function FaqSection() {
  return (
    <section className="py-[40px] lg:py-[70px] relative bg-[#141517] border-t border-[#303134]" id="faq">
      <div className="container">
        <AnimatedSection className="text-left mb-[46px]">
          <h2 className="text-[28px] lg:text-[42px] font-semibold text-white mb-[16px] lg:mb-[22px]">
            Часто задаваемые вопросы
          </h2>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
}
