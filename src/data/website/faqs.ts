export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What is PointerZone\'s JEE Counseling Program?',
    answer: 'PointerZone\'s JEE Counseling Program is a comprehensive guidance service run by IITians that helps JEE qualifying students make informed decisions about college and branch selection. We provide personalized one-on-one counseling sessions to discuss placements, branch change policies, campus culture, and other important factors affecting your academic future.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'How does the counseling process work?',
    answer: 'Our counseling process starts with registration, followed by an introductory call within 12 hours. During this call, we explain the program details. Next, you\'ll be assigned a dedicated counselor who will provide personalized guidance throughout the admission process, including spot round assistance and document query resolution. We stay with you from enrollment to graduation.',
    category: 'process' 
  },
  {
    id: 'faq-3',
    question: 'Who will be my counselor?',
    answer: 'Your counselor will be an IITian or NITian with extensive knowledge about the engineering admission process, college environments, and career prospects. All our counselors have direct experience with the JEE counseling process and have successfully navigated it themselves.',
    category: 'counselors'
  },
  {
    id: 'faq-4',
    question: 'How much does the counseling service cost?',
    answer: 'We offer various packages starting from ₹1,499 with different levels of support. We also provide 50% off for JNV students and BPL cardholders, as well as a 20% discount through our referral program. For detailed pricing, please visit our pricing page or contact us directly.',
    category: 'pricing'
  },
  {
    id: 'faq-5',
    question: 'What counseling formats are available?',
    answer: 'We primarily offer one-on-one personalized counseling sessions via phone calls and video conferences. We also provide continuous support through WhatsApp for quick queries and follow-ups throughout your admission journey.',
    category: 'format'
  },
  {
    id: 'faq-6',
    question: 'Which admission processes do you provide guidance for?',
    answer: 'We provide extensive coverage for various admission processes including JoSAA + CSAB, JAC Delhi, UPSEE, GGSIPU, Comedk, MHT CET, MP DTE, and private college admissions. Our counselors are well-versed with the intricacies of each process.',
    category: 'coverage'
  },
  {
    id: 'faq-7',
    question: 'How do I qualify for the special discounts?',
    answer: 'JNV students and alumni need to provide valid ID proof, while BPL cardholders must submit valid documentation of their BPL status. For the referral discount, simply use the referral code provided by an existing customer during registration.',
    category: 'pricing'
  },
  {
    id: 'faq-8',
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'We strive to provide exceptional service, but if you\'re not satisfied, please contact us within 24 hours of your first counseling session. Refund eligibility will be assessed on a case-by-case basis, focusing on service delivery issues rather than admission outcomes, which depend on multiple factors.',
    category: 'policy'
  },
  {
    id: 'faq-9',
    question: 'How long will I receive support after registration?',
    answer: 'The duration of support depends on your selected package. Basic packages provide support until the completion of the main counseling rounds, while premium packages offer extended support through spot rounds and even into your first year of college for academic guidance.',
    category: 'service'
  },
  {
    id: 'faq-10',
    question: 'Do you guarantee admission to specific colleges?',
    answer: 'We do not guarantee admission to specific colleges as admissions depend on various factors including your rank, category, and the admission process itself. What we guarantee is expert guidance to maximize your opportunities based on your rank and preferences.',
    category: 'policy'
  }
];

export const faqCategories = [
  { id: 'all', name: 'All Questions' },
  { id: 'general', name: 'General Information' },
  { id: 'process', name: 'Process & Steps' },
  { id: 'counselors', name: 'About Counselors' },
  { id: 'pricing', name: 'Pricing & Discounts' },
  { id: 'format', name: 'Counseling Format' },
  { id: 'coverage', name: 'Admission Coverage' },
  { id: 'policy', name: 'Policies' },
  { id: 'service', name: 'Support Duration' }
];
