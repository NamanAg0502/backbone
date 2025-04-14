/**
 * Main website configuration
 */
export const siteConfig = {
  name: 'PointerZone',
  description: 'Best Online Counseling Platform run by IITians',
  contactPhone: '+91 79099-85884',
  referralDiscount: '20% OFF',
  logoText: 'PointerZone',
  slogan: 'which enables you to decide the right path for the better & bright future',
  tagline: 'Best Online Counseling Platform',
  runBy: 'Run By IITians',
  headerLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Register', href: '/register', highlight: true },
  ],
  socialLinks: {
    facebook: 'https://facebook.com/pointerzone',
    instagram: 'https://instagram.com/pointerzone',
    twitter: 'https://twitter.com/pointerzone',
    whatsapp: 'https://wa.me/917909985884',
  },
};

export const metaData = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['JEE counseling', 'IIT counseling', 'engineering admission', 'college selection', 'JEE Main', 'JEE Advanced'],
  authors: [
    {
      name: 'PointerZone',
      url: 'https://pointerzone.com',
    },
  ],
  creator: 'PointerZone',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#2563eb' },
  ],
};

export const paymentConfig = {
  razorpayKey: 'Your_Razorpay_Key_Here', // Replace with actual key in environment variables
  currency: 'INR',
  name: siteConfig.name,
};
