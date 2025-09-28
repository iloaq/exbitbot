'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Icon } from '@/shared/icons/Icon';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Как это работает', href: '#work-process' },
  { name: 'Возможности', href: '#features' },
  { name: 'Тарифы', href: '#tariffs' },
  { name: 'FAQ', href: '#faq' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <nav className="container">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
          >
            <Link href="/">
              <Image src="/header.svg" alt="ExbitBot" width={100} height={100} />
            </Link>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-[31px]">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#0FDA9A] transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex flex-row gap-[10px]">
            <Link href="https://t.me/Sup_ExBitBot" target="_blank" className="text-[16px] cursor-pointer bg-[#081B16] px-[21px] py-[10px] rounded-[21px] flex items-center gap-[10px] group  transition-all duration-300"> 
              <div className="relative w-[17px] h-[17px]">
                <Icon name="telegram-green" width={17} height={17} className="absolute top-0 left-0 transition-opacity duration-300" />
                <Icon name="telegram" width={17} height={17} className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="relative">
                <span className="text-[#0FDA9A] transition-opacity duration-300">
                  Написать в Telegram
                </span>
                <span className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#0FDA9A] to-[#4BC6F6] bg-clip-text text-transparent">
                  Написать в Telegram
                </span>
              </div>
              </Link>
            <Link href="mailto:sup@exbitbot.net" className="text-[16px] cursor-pointer bg-[#081B16] px-[21px] py-[10px] rounded-[21px] flex items-center gap-[10px] group transition-all duration-300"> 
              <div className="relative w-[17px] h-[17px]">
                <Icon name="mail" width={17} height={17} className="absolute top-0 left-0 transition-opacity duration-300" />
                <Icon name="mail-gradient" width={17} height={17} className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="relative">
                <span className="text-white transition-opacity duration-300">
                  sup@exbitbot.net
                </span>
                <span className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#0FDA9A] to-[#4BC6F6] bg-clip-text text-transparent">
                  sup@exbitbot.net
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex flex-row gap-[14px] items-center">
            <div className="relative w-[17px] h-[17px]">
              <Icon name="telegram-green" width={17} height={17} className="absolute top-0 left-0 transition-opacity duration-300" />
              <Icon name="telegram" width={17} height={17} className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="relative w-[17px] h-[17px]">
               <Icon name="mail-green" width={17} height={17} className="absolute top-0 left-0 transition-opacity duration-300" />
               <Icon name="mail-gradient" width={17} height={17} className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-5000 relative"
            >
              <span className="block leading-[0px]">
                <motion.span
                  key={isOpen ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: isOpen ? -90 : 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: isOpen ? 90 : -90, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.5 }}
                  className="inline-block"
                >
                  {isOpen ? <X className="h-[22px] w-[20px]" /> : <Menu className="h-[22px] w-[20px]" />}
                </motion.span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white text-[28px] font-semibold leading-[160%] text-center transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
