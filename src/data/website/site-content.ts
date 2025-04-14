/**
 * Central file for all website content
 * This makes it easier to manage and update content across the site
 */

import { StaticImageData } from "next/image";

// Site Configuration
export const siteConfig = {
  name: "PointerZone",
  description: "Best Online Counseling Platform run by IITians",
  contactPhone: "+91 79099-85884",
  referralDiscount: "20% OFF",
  logoText: "PointerZone",
  tagline: "Best Online Counseling Platform",
  slogan:
    "which enables you to decide the right path for the better & bright future",
  runBy: "Run By IITians",
  contactEmail: "contact@pointerzone.com",
  headerLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#features" },
    { label: "Process", href: "/#process" },
    { label: "Contact", href: "/#contact" },
    { label: "Register", href: "/register", highlight: true },
  ],
  socialLinks: {
    facebook: "https://facebook.com/pointerzone",
    instagram: "https://instagram.com/pointerzone",
    twitter: "https://twitter.com/pointerzone",
    whatsapp: "https://wa.me/917909985884",
  },
};

// Meta Data
export const metaData = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "JEE counseling",
    "IIT admission",
    "Engineering college selection",
    "JEE Main",
    "JEE Advanced",
    "College counseling",
    "IITian mentors",
    "Branch selection",
    "Engineering admissions",
    "Career guidance",
  ],
  authors: [
    {
      name: "PointerZone Team",
      url: "https://pointerzone.com",
    },
  ],
  creator: "PointerZone",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#2563eb" },
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pointerzone.com",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

// Payment Configuration
export const paymentConfig = {
  razorpayKey: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_key", // Replace with actual key in environment variables
  currency: "INR",
  name: siteConfig.name,
  description: "JEE Counseling Services",
  defaultAmount: 199900, // ₹1,999.00 (in paise)
  discountedAmount: 159900, // ₹1,599.00 (in paise) - with referral code
  specialDiscount: {
    eligibility: "JNV or BPL card students",
    percentage: 50,
  },
};

// Home Page Content

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  referralText?: string;
  discount?: string;
  image?: string | StaticImageData;
  highlights?: {
    title: string;
    subtitle: string;
  }[];
}

export interface AboutSection {
  title: string;
  intro: string;
  paragraphs: string[];
  image?: string | StaticImageData;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl?: string | StaticImageData;
  college?: string;
  year?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string[];
  imageUrl?: string | StaticImageData;
  tags: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Coverage {
  id: string;
  title: string;
  items: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RegisterPageContent {
  title: string;
  subtitle: string;
  benefits: string[];
  formTitle: string;
}

export interface ContactSectionContent {
  title: string;
  subtitle: string;
  address?: string;
  email: string;
  phone: string;
  formTitle: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  discount?: {
    percentage: number;
    label: string;
  };
  features: string[];
  isPrimary?: boolean;
  ctaText: string;
}

// Home page content
export const homeContent = {
  hero: {
    title: "JEE COUNSELING PROGRAM",
    subtitle:
      "which enables you to decide the right path for the better & bright future",
    description:
      "PointerZone brings you an exclusive one-on-one talk with top IITians to discuss placements, branch change policies, overall culture, and the campus life of their colleges.",
    ctaText: "Register Now",
    ctaLink: "/register",
    secondaryCtaText: "Learn More",
    secondaryCtaLink: "#about",
    referralText: "USE REFERRAL CODE",
    discount: "20% OFF",
    highlights: [
      {
        title: "IIT",
        subtitle: "Mentors",
      },
      {
        title: "50%",
        subtitle: "JNV Students",
      },
    ],
  } as HeroSection,

  about: {
    title: "ABOUT US",
    intro: "Congratulations on your JEE result!",
    paragraphs: [
      "You might have many questions about how to choose the best college available at your rank!",
      "Don't worry!",
      "PointerZone brings you an exclusive one-on-one talk with top IITians to discuss placements, branch change policies, overall culture, and the campus life of their colleges. We will also have a Q&A round at the end to clear all your doubts. After filling out the registration form, you will receive a call.",
      "I hope this message fills you with joy and anticipation for the next phase of your academic journey. I understand this is a crucial time for you as you select the best college that aligns with your aspirations and goals.",
    ],
  } as AboutSection,

  team: [
    {
      id: "team-1",
      name: "Prashant Barahadiya",
      role: "IITIAN MENTOR COUNSELOR",
      experience: [
        "3 Years of counseling experience",
        "2 Years of teaching experience",
      ],
      imageUrl: "/team/prashant.jpg",
      tags: ["IITIAN", "MENTOR", "COUNSELOR"],
    },
  ] as TeamMember[],

  features: [
    {
      id: "feature-1",
      title: "Expert Guidance by IITians & NITians",
      description:
        "Get counseled by graduates from premier institutions who understand the system inside out",
      icon: "GraduationCap",
    },
    {
      id: "feature-2",
      title: "50% off for JNV or BPL card students",
      description:
        "Making quality counseling accessible to all deserving students",
      icon: "Discount",
    },
    {
      id: "feature-3",
      title: "Personalized Approach",
      description:
        "Tailored guidance based on your rank, preferences, and career goals",
      icon: "User",
    },
    {
      id: "feature-4",
      title: "Maximizing Opportunities",
      description:
        "Strategic advice to make the most of available college and branch options",
      icon: "Target",
    },
    {
      id: "feature-5",
      title: "Reliable support through Whatsapp & Calls",
      description: "Continuous assistance throughout your admission journey",
      icon: "Phone",
    },
  ] as Feature[],

  coverage: {
    id: "coverage",
    title: "EXTENSIVE COVERAGE",
    items: [
      "JoSAA + CSAB",
      "JAC Delhi",
      "UPSEE",
      "GGSIPU",
      "Comedk",
      "MHT CET",
      "MP DTE",
      "Private Colleges",
    ],
  } as Coverage,

  process: [
    {
      id: "step-1",
      title: "Registration",
      description: "Sign up to begin your journey",
      icon: "ClipboardList",
    },
    {
      id: "step-2",
      title: "Await Call",
      description: "Expect contact within 12 hours",
      icon: "Phone",
    },
    {
      id: "step-3",
      title: "Program Explanation",
      description: "Learn program details during call",
      icon: "Info",
    },
    {
      id: "step-4",
      title: "Counselor Assignment",
      description: "Get assigned a dedicated counselor post-explanation",
      icon: "UserCheck",
    },
    {
      id: "step-5",
      title: "Guidance Throughout",
      description: "Personalized support from enrollment to graduation",
      icon: "Compass",
    },
    {
      id: "step-6",
      title: "Spot Round Assistance",
      description: "Assistance during additional selection stages",
      icon: "Target",
    },
    {
      id: "step-7",
      title: "Document Queries Resolution",
      description:
        "Prompt resolution of document-related queries by your counselor",
      icon: "FileText",
    },
  ] as ProcessStep[],

  testimonials: [
    {
      id: "testimonial-1",
      name: "Rahul Sharma",
      role: "JEE Aspirant",
      college: "IIT Delhi",
      year: "2023",
      content:
        "The counseling I received from PointerZone was exceptional. They provided personalized guidance that helped me secure admission to my dream branch at IIT Delhi. Their insights about branch prospects and campus culture were invaluable.",
      imageUrl: "/testimonials/testimonial1.jpg",
    },
    {
      id: "testimonial-2",
      name: "Priya Patel",
      role: "Engineering Student",
      college: "NIT Trichy",
      year: "2023",
      content:
        "I was confused about which college and branch to choose with my rank. The counselors at PointerZone provided clear, unbiased advice that helped me make the right decision. Highly recommended for all JEE qualifiers!",
      imageUrl: "/testimonials/testimonial2.jpg",
    },
    {
      id: "testimonial-3",
      name: "Amit Kumar",
      role: "JEE Advanced Qualifier",
      college: "IIT Bombay",
      year: "2023",
      content:
        "The counselors at PointerZone have in-depth knowledge about all IITs and NITs. They helped me understand the pros and cons of different branches and institutes, which was crucial for my decision-making.",
      imageUrl: "/testimonials/testimonial3.jpg",
    },
  ] as Testimonial[],

  faqs: [
    {
      question: "When should I register for counseling?",
      answer:
        "You should register as soon as your JEE results are announced to get timely guidance before the counseling process begins.",
    },
    {
      question: "How is PointerZone different from other counseling services?",
      answer:
        "PointerZone counselors are IITians with first-hand experience of the system. We provide personalized guidance based on your rank, preferences, and career goals, not generic advice.",
    },
    {
      question: "Do you provide assistance for spot rounds?",
      answer:
        "Yes, we provide complete assistance throughout the admission process, including spot rounds and special rounds.",
    },
    {
      question:
        "I'm from a small town. Can you help me with the documentation process?",
      answer:
        "Absolutely! Our counselors will guide you through every step of the documentation process and address any queries you might have.",
    },
    {
      question: "How much does the counseling program cost?",
      answer:
        "Our standard package costs ₹1,999. We offer a 20% discount with referral codes and a 50% discount for JNV students and BPL card holders.",
    },
    {
      question: "How do I contact my assigned counselor?",
      answer:
        "After registration, you'll receive your counselor's contact details. You can reach them via phone, WhatsApp, or email as per your convenience.",
    },
  ] as FAQ[],

  contact: {
    title: "Contact Us",
    subtitle: "Have questions? Get in touch with our team.",
    email: "contact@pointerzone.com",
    phone: "+91 79099-85884",
    address: "IIT Delhi, Hauz Khas, New Delhi, Delhi 110016",
    formTitle: "Send us a message",
  } as ContactSectionContent,

  conclusion:
    "This roadmap ensures a smooth journey from registration to program completion with dedicated expert guidance at each step.",
};

// Register page content
export const registerContent = {
  title: "Register for JEE Counseling",
  subtitle: "Take the first step towards securing your dream college",
  benefits: [
    "Personalized guidance from IITians",
    "Complete counseling until admission",
    "Support for all counseling rounds",
    "Document verification assistance",
    "Branch & college selection strategy",
  ],
  formTitle: "Fill the form below to register",
};

// Pricing plans
export const pricingPlans = [
  {
    id: "basic",
    name: "Basic Counseling",
    price: 199900, // ₹1,999 (in paise)
    discount: {
      percentage: 20,
      label: "with referral code",
    },
    features: [
      "One-on-one counseling session",
      "College & branch recommendation",
      "Admission process guidance",
      "Document verification assistance",
      "WhatsApp support",
    ],
    isPrimary: true,
    ctaText: "Register Now",
  },
  {
    id: "premium",
    name: "Premium Package",
    price: 299900, // ₹2,999 (in paise)
    features: [
      "Everything in Basic package",
      "Extended counseling till admission",
      "Priority support during counseling",
      "Post-admission guidance",
      "College-specific insights",
      "Career roadmap planning",
    ],
    ctaText: "Contact Us",
  },
  {
    id: "special",
    name: "Special Discount",
    price: 99900, // ₹999 (in paise)
    discount: {
      percentage: 50,
      label: "for JNV & BPL students",
    },
    features: [
      "Same as Basic package",
      "Special priority support",
      "Additional scholarship guidance",
      "Financial aid application help",
    ],
    ctaText: "Check Eligibility",
  },
] as PricingPlan[];
