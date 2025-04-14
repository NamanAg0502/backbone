export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  features: string[];
  popular?: boolean;
  cta: string;
  details?: string;
}

export interface Discount {
  id: string;
  name: string;
  code: string;
  percentage: number;
  eligibility: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic Counseling',
    description: 'Perfect for students who need essential guidance',
    price: 1499,
    discountedPrice: 1199,
    features: [
      'One-time counseling session',
      'College selection guidance',
      'Branch selection advice',
      'Basic admission process support',
      'Email support'
    ],
    cta: 'Get Started',
    details: 'Ideal for students with a clear idea of their preferences who need validation and guidance.'
  },
  {
    id: 'professional',
    name: 'Professional Package',
    description: 'Comprehensive support throughout the admission process',
    price: 2999,
    discountedPrice: 2399,
    features: [
      '3 counseling sessions',
      'Detailed college analysis',
      'Personalized branch recommendations',
      'Complete admission process assistance',
      'Document verification support',
      'Priority email & WhatsApp support',
      'Spot round assistance'
    ],
    popular: true,
    cta: 'Enroll Now',
    details: 'Our most popular option for complete peace of mind during the entire admission process.'
  },
  {
    id: 'premium',
    name: 'Premium Experience',
    description: 'End-to-end guidance with personal IITian mentor',
    price: 4999,
    discountedPrice: 3999,
    features: [
      'Dedicated IITian mentor',
      'Unlimited counseling sessions',
      'Comprehensive college & branch analysis',
      'Complete document preparation assistance',
      'Daily progress updates',
      '24/7 WhatsApp & call support',
      'Spot & special round guidance',
      'First-year academic guidance'
    ],
    cta: 'Get Premium Access',
    details: 'The ultimate package with personalized support from a dedicated IITian mentor throughout your journey.'
  }
];

export const discounts: Discount[] = [
  {
    id: 'jnv',
    name: 'JNV Student Discount',
    code: 'JNV50',
    percentage: 50,
    eligibility: 'Valid for current students and alumni of Jawahar Navodaya Vidyalaya with valid ID proof'
  },
  {
    id: 'bpl',
    name: 'BPL Cardholder Discount',
    code: 'BPL50',
    percentage: 50,
    eligibility: 'Valid for students with Below Poverty Line card with valid proof'
  },
  {
    id: 'referral',
    name: 'Referral Discount',
    code: 'REFER20',
    percentage: 20,
    eligibility: 'Valid for any student using a referral code from an existing customer'
  }
];
