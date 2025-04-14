import { StaticImageData } from "next/image";

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
}

export interface AboutSection {
  title: string;
  intro: string;
  paragraphs: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl?: string | StaticImageData;
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
      icon: "BullsEye",
    },
    {
      id: "feature-5",
      title: "Reliable support through Whatsapp & Calls",
      description: "Continuous assistance throughout your admission journey",
      icon: "Phone",
    },
  ] as Feature[],

  coverage: {
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
      icon: "Login2",
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
      icon: "User",
    },
    {
      id: "step-5",
      title: "Guidance Throughout",
      description: "Personalized support from enrollment to graduation",
      icon: "HeartHandshake",
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
      icon: "Script",
    },
  ] as ProcessStep[],

  conclusion:
    "This roadmap ensures a smooth journey from registration to program completion with dedicated expert guidance at each step.",
};
