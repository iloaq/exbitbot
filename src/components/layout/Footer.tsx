import { Icon } from '@/shared/icons/Icon';
import Link from 'next/link';
export function Footer() {
  return (
    <footer className="bg-black text-white py-[20px] lg:py-[30px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[21px] lg:gap-[30px]">
          <div className="order-2 md:order-1 text-left">
            <p className="text-[#EAEAEA] text-[14px] leading-[121%]">© 2025 ExBitBot • Masspayment</p>
          </div>
          
          <div className="flex flex-row gap-[48px] justify-start md:justify-end order-1 md:order-2">
            <a href="mailto:sup@exbitbot.net" className="text-[#EAEAEA] text-[14px] leading-[121%] flex flex-row gap-[7px] items-center">
              <Icon name="mail-gradient" width={20} height={16}  />
              <p>sup@exbitbot.net</p>
            </a>
            <Link href="https://t.me/SuppPay" target="_blank" className="text-[#EAEAEA] text-[14px] leading-[121%] flex flex-row gap-[7px] items-center">
              <Icon name="telegram-green" width={22} height={19} />
              <p>telegram</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
