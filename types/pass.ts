import { ReactNode } from "react";

interface Feature {
  text: string;
  isAvailable: boolean;
  icon: ReactNode;
}

export interface PricingPlan {
  id: string;
  label: string;
  tarif: string;
  normalPrice: number;
  price: number;
  title: string;
  description: string;
  features: Feature[];
  isPopular: boolean;
}

export interface PricingPlans {
  fr: PricingPlan[];
  en: PricingPlan[];
}
