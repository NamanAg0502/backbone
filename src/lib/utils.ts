import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as currency
 */
export function formatCurrency(
  amount: number,
  locale = "en-IN",
  currency = "INR"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format a phone number
 */
export function formatPhoneNumber(phoneNumber: string): string {
  // Handle Indian phone numbers
  if (phoneNumber.startsWith("+91")) {
    const cleaned = phoneNumber.replace(/\D/g, "");
    const match = cleaned.match(/^91?(\d{5})(\d{5})$/);
    if (match) {
      return `+91 ${match[1]}-${match[2]}`;
    }
  }
  return phoneNumber;
}

/**
 * Truncate a string to a given length
 */
export function truncateString(str: string, num: number): string {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

/**
 * Check if the user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
}

/**
 * Generate a random ID
 */
export function generateId(length = 6): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

/**
 * Debounce a function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function (...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Validate an email address
 */
export function isValidEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

/**
 * Validate an Indian phone number
 */
export function isValidIndianPhone(phone: string): boolean {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(phone);
}
