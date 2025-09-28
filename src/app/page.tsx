import HeroSection from "@/sections/HeroSection";
import WorkProcessSection from "@/sections/WorkProcessSection";
import HelpSection from "@/sections/HelpSection";
import PricingSection from "@/sections/PricingSection";
import FaqSection from "@/sections/FaqSection";
import CtaSection from "@/sections/CtaSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <WorkProcessSection />
      <HelpSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
