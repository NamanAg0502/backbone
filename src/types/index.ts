// Common type definitions for the application

export interface NavLink {
  id: string;
  title: string;
  path: string;
}

export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor?: string;
  isFeatured: boolean;
  image: string;
}

export interface Testimonial {
  id: number;
  studentName: string;
  testimonial: string;
  image: string;
  college: string;
  isFeatured: boolean;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface CounselingStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface CounselorProfile {
  id: number;
  name: string;
  title: string;
  experience: string;
  teachingExperience: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface PaymentDetails {
  amount: number;
  currency: string;
  receipt: string;
  notes?: Record<string, string>;
}
