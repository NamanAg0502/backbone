export interface FormField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'date';
  placeholder?: string;
  required: boolean;
  options?: Array<{
    value: string;
    label: string;
  }>;
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    errorMessage?: string;
  };
  helpText?: string;
}

export interface FormSchema {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
  submitLabel: string;
  successMessage: string;
}

export const registrationSchema: FormSchema = {
  id: 'registration-form',
  title: 'Register for JEE Counseling',
  description: 'Fill out the form below to begin your counseling journey. We\'ll contact you within 12 hours.',
  fields: [
    {
      id: 'name',
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name',
      required: true,
      validation: {
        minLength: 3,
        maxLength: 50,
        errorMessage: 'Please enter your full name (3-50 characters)'
      }
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'you@example.com',
      required: true,
      validation: {
        pattern: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$',
        errorMessage: 'Please enter a valid email address'
      }
    },
    {
      id: 'phone',
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Your 10-digit mobile number',
      required: true,
      validation: {
        pattern: '^[6-9]\\d{9}$',
        errorMessage: 'Please enter a valid 10-digit Indian mobile number'
      },
      helpText: 'We\'ll use this number to contact you regarding counseling'
    },
    {
      id: 'jeeRank',
      name: 'jeeRank',
      label: 'JEE Rank',
      type: 'number',
      placeholder: 'Your JEE Main/Advanced Rank',
      required: true,
      validation: {
        min: 1,
        errorMessage: 'Please enter a valid rank'
      }
    },
    {
      id: 'examType',
      name: 'examType',
      label: 'Exam Type',
      type: 'select',
      required: true,
      options: [
        { value: 'jeeMain', label: 'JEE Main' },
        { value: 'jeeAdvanced', label: 'JEE Advanced' },
        { value: 'wbjee', label: 'WBJEE' },
        { value: 'mhtcet', label: 'MHT CET' },
        { value: 'bitsat', label: 'BITSAT' },
        { value: 'viteee', label: 'VITEEE' },
        { value: 'comedk', label: 'COMEDK' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      id: 'category',
      name: 'category',
      label: 'Category',
      type: 'select',
      required: true,
      options: [
        { value: 'general', label: 'General' },
        { value: 'obc', label: 'OBC-NCL' },
        { value: 'sc', label: 'SC' },
        { value: 'st', label: 'ST' },
        { value: 'ews', label: 'EWS' },
        { value: 'pwd', label: 'PwD' }
      ]
    },
    {
      id: 'state',
      name: 'state',
      label: 'State of Domicile',
      type: 'select',
      required: true,
      options: [
        { value: 'AN', label: 'Andaman and Nicobar Islands' },
        { value: 'AP', label: 'Andhra Pradesh' },
        { value: 'AR', label: 'Arunachal Pradesh' },
        { value: 'AS', label: 'Assam' },
        { value: 'BR', label: 'Bihar' },
        { value: 'CH', label: 'Chandigarh' },
        { value: 'CT', label: 'Chhattisgarh' },
        { value: 'DN', label: 'Dadra and Nagar Haveli' },
        { value: 'DD', label: 'Daman and Diu' },
        { value: 'DL', label: 'Delhi' },
        { value: 'GA', label: 'Goa' },
        { value: 'GJ', label: 'Gujarat' },
        { value: 'HR', label: 'Haryana' },
        { value: 'HP', label: 'Himachal Pradesh' },
        { value: 'JK', label: 'Jammu and Kashmir' },
        { value: 'JH', label: 'Jharkhand' },
        { value: 'KA', label: 'Karnataka' },
        { value: 'KL', label: 'Kerala' },
        { value: 'LA', label: 'Ladakh' },
        { value: 'LD', label: 'Lakshadweep' },
        { value: 'MP', label: 'Madhya Pradesh' },
        { value: 'MH', label: 'Maharashtra' },
        { value: 'MN', label: 'Manipur' },
        { value: 'ML', label: 'Meghalaya' },
        { value: 'MZ', label: 'Mizoram' },
        { value: 'NL', label: 'Nagaland' },
        { value: 'OD', label: 'Odisha' },
        { value: 'PY', label: 'Puducherry' },
        { value: 'PB', label: 'Punjab' },
        { value: 'RJ', label: 'Rajasthan' },
        { value: 'SK', label: 'Sikkim' },
        { value: 'TN', label: 'Tamil Nadu' },
        { value: 'TG', label: 'Telangana' },
        { value: 'TR', label: 'Tripura' },
        { value: 'UP', label: 'Uttar Pradesh' },
        { value: 'UK', label: 'Uttarakhand' },
        { value: 'WB', label: 'West Bengal' }
      ]
    },
    {
      id: 'preferredBranches',
      name: 'preferredBranches',
      label: 'Preferred Branches (Optional)',
      type: 'textarea',
      placeholder: 'E.g., Computer Science, Electrical Engineering, Mechanical Engineering',
      required: false
    },
    {
      id: 'preferredColleges',
      name: 'preferredColleges',
      label: 'Preferred Colleges (Optional)',
      type: 'textarea',
      placeholder: 'E.g., IIT Bombay, NIT Trichy, BITS Pilani',
      required: false
    },
    {
      id: 'counselingPackage',
      name: 'counselingPackage',
      label: 'Preferred Counseling Package',
      type: 'radio',
      required: true,
      options: [
        { value: 'basic', label: 'Basic (₹1,199)' },
        { value: 'professional', label: 'Professional (₹2,399)' },
        { value: 'premium', label: 'Premium (₹3,999)' },
        { value: 'undecided', label: 'Not sure yet, need more information' }
      ]
    },
    {
      id: 'referralCode',
      name: 'referralCode',
      label: 'Referral Code (If any)',
      type: 'text',
      placeholder: 'Enter referral code for 20% discount',
      required: false
    },
    {
      id: 'specialDiscount',
      name: 'specialDiscount',
      label: 'Special Discount Eligibility',
      type: 'checkbox',
      options: [
        { value: 'jnv', label: 'I am a JNV student (50% off)' },
        { value: 'bpl', label: 'I have a BPL card (50% off)' }
      ],
      required: false,
      helpText: 'You will need to provide valid documentation for verification'
    },
    {
      id: 'termsAgreed',
      name: 'termsAgreed',
      label: 'Terms and Conditions',
      type: 'checkbox',
      options: [
        { value: 'agreed', label: 'I agree to the terms and conditions' }
      ],
      required: true
    }
  ],
  submitLabel: 'Register Now',
  successMessage: 'Registration successful! We will contact you within 12 hours.'
};

export const contactFormSchema: FormSchema = {
  id: 'contact-form',
  title: 'Get in Touch',
  description: 'Have questions? Reach out to us and we\'ll get back to you shortly.',
  fields: [
    {
      id: 'name',
      name: 'name',
      label: 'Your Name',
      type: 'text',
      placeholder: 'Enter your name',
      required: true
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'you@example.com',
      required: true
    },
    {
      id: 'phone',
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Your contact number',
      required: false
    },
    {
      id: 'subject',
      name: 'subject',
      label: 'Subject',
      type: 'select',
      required: true,
      options: [
        { value: 'general', label: 'General Inquiry' },
        { value: 'counseling', label: 'Counseling Services' },
        { value: 'pricing', label: 'Pricing and Discounts' },
        { value: 'technical', label: 'Technical Support' },
        { value: 'feedback', label: 'Feedback' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      id: 'message',
      name: 'message',
      label: 'Your Message',
      type: 'textarea',
      placeholder: 'How can we help you?',
      required: true
    }
  ],
  submitLabel: 'Send Message',
  successMessage: 'Thank you for your message! We will get back to you soon.'
};
