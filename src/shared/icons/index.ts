// Custom icons
export { ShieldIcon } from './components/ShieldIcon';
export { BellIcon } from './components/BellIcon';
export { BellIconAlt } from './components/BellIconAlt';
export { UpperIcon } from './components/UpperIcon';
export { AppIcon } from './components/AppIcon';
export { SettingIcon } from './components/SettingIcon';
export { CardIcon } from './components/CardIcon';
export { PeopleIcon } from './components/PeopleIcon';
export { MailIcon } from './components/MailIcon';
export { MailIconGreen } from './components/MailIconGreen';
export { MailIconGradient } from './components/MailIconGradient';
export { TelegramIcon } from './components/TelegramIcon';
export { TelegramIconGreen } from './components/TelegramIconGreen';

// Re-export Lucide icons
export { 
  ArrowRight, 
  Play, 
  TrendingUp, 
  Zap 
} from 'lucide-react';

// Import for registry
import { ShieldIcon } from './components/ShieldIcon';
import { BellIcon } from './components/BellIcon';
import { ArrowRight, Play, TrendingUp, Zap } from 'lucide-react';
import { BellIconAlt } from './components/BellIconAlt';
import { UpperIcon } from './components/UpperIcon';
import { AppIcon } from './components/AppIcon';
import { SettingIcon } from './components/SettingIcon';
import { CardIcon } from './components/CardIcon';
import { PeopleIcon } from './components/PeopleIcon';
import { MailIcon } from './components/MailIcon';
import { MailIconGreen } from './components/MailIconGreen';
import { MailIconGradient } from './components/MailIconGradient';
import { TelegramIcon } from './components/TelegramIcon';
import { TelegramIconGreen } from './components/TelegramIconGreen';

// Icon registry
export const iconRegistry = {
  // Lucide icons
  'arrow-right': ArrowRight,
  'play': Play,
  'trending-up': TrendingUp,
  'zap': Zap,
  
  // Custom icons
  'shield': ShieldIcon,
  'bell': BellIcon,
  'bell-alt': BellIconAlt,
  'upper': UpperIcon,
  'app': AppIcon,
  'setting': SettingIcon,
  'card': CardIcon,
  'people': PeopleIcon,
  'mail': MailIcon,
  'mail-green': MailIconGreen,
  'mail-gradient': MailIconGradient,
  'telegram': TelegramIcon,
  'telegram-green': TelegramIconGreen,
} as const;

export type IconName = keyof typeof iconRegistry;
