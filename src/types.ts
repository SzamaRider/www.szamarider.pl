export type Language = 'en' | 'pl' | 'uk' | 'pa' | 'hi' | 'es';

export interface CourierApplication {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  apps: string[];
  vehicle: 'bicycle' | 'ebike' | 'scooter' | 'car' | 'need_rental';
  isStudentUnder26: boolean;
  needsLegalization: boolean;
  citizenship: string;
  notes?: string;
}

export interface FAQItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
  category: 'general' | 'payouts' | 'legal' | 'fleet';
}

export interface BenefitItem {
  icon: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  highlight?: Record<Language, string>;
}

export interface CityHub {
  city: string;
  address: string;
  phone: string;
  hours: string;
}
