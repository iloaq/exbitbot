import { Icon } from '@/shared/icons/Icon';
import Link from 'next/link';
export function Footer() {
  return (
    <footer className="bg-black text-white py-[20px] lg:py-[30px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[21px] lg:gap-[30px]">
          <div className="order-3 md:order-1 text-left">
            <p className="text-[#EAEAEA] text-[14px] leading-[121%]">© 2025 ExBitBot • Masspayment</p>
          </div>
          
          <div className="flex flex-row gap-[48px] justify-start md:justify-center order-2 md:order-2 text-left md:text-center">
            <Link href="/aml-kyc" className="text-[#EAEAEA] text-[14px] leading-[121%] hover:text-[#0FDA9A] transition-colors duration-300">
              AML/KYC
            </Link>
            <Link href="/terms-of-service" className="text-[#EAEAEA] text-[14px] leading-[121%] hover:text-[#0FDA9A] transition-colors duration-300">
              Правила сервиса
            </Link>
          </div>
          
          <div className="flex flex-row gap-[48px] justify-start md:justify-end order-1 md:order-3">
            <a href="mailto:sup@exbitbot.net" className="text-[#EAEAEA] text-[14px] leading-[121%] flex flex-row gap-[7px] items-center">
              <Icon name="mail-gradient" width={20} height={16}  />
              <p>sup@exbitbot.net</p>
            </a>
            <Link href="https://t.me/Sup_ExBitBot" target="_blank" className="text-[#EAEAEA] text-[14px] leading-[121%] flex flex-row gap-[7px] items-center">
              <Icon name="telegram-green" width={22} height={19} />
              <p>telegram</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
