export interface LandingSection {
  id: string;
  title: string;
  description: string;
  order: number;
  visible: boolean;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface AnimationConfig {
  initial: Record<string, any>;
  animate: Record<string, any>;
  transition: Record<string, any>;
  [key: string]: any;
}
