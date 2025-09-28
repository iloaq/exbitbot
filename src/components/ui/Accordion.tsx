'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle, isFirst }: AccordionItemProps & { isFirst?: boolean }) {
  return (
    <div className={cn("border-b border-[#6B7673]", isFirst && "border-t border-[#6B7673]")}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-[16px] lg:py-[30px] text-left duration-200"
      >
        <span className="text-[18px] lg:text-[22px] font-semibold text-white leading-[110%]">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-[17px] w-[17px] text-[#78909C]" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-[16px] lg:pb-[30px] max-w-[90%]">
              <p className="text-[14px] lg:text-[18px] text-[#EAEAEA] leading-[121%]">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ question: string; answer: string }>;
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('overflow-hidden', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
}
