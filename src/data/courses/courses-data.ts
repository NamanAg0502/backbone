export interface CourseData {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string[];
  specializedContent?: string[];
  isFeatured?: boolean;
}

export const coursesData: CourseData[] = [
  {
    id: "jossa-csab",
    name: "JoSSA + CSAB",
    slug: "jossa-csab",
    shortDescription: "Get personalized guidance for JoSSA and CSAB counseling from top IITians.",
    fullDescription: [
      "Dear Friends!",
      "Congratulations on your JEE result!",
      "You might have many questions about how to choose the best college available at your rank!",
      "Don't worry!",
      "PointerZone brings you an exclusive one-on-one talk with top IITians to discuss placements, branch change policies, overall culture, and the campus life of their colleges.",
      "At PointerZone, we understand your many questions and uncertainties about choosing the right college. To address these concerns, we offer an exclusive opportunity for you to have one-on-one discussions with top IITians who can provide insights into placement opportunities, branch change policies, the overall culture, and the campus life of their respective colleges. We aim to equip you with the necessary information to make an informed decision that suits your preferences.",
      "We will provide a personalized PDF document based on your rank, offering tailored advice and recommendations. Our team is committed to ensuring you secure the best college available, even if your rank is comparatively lower.",
      "At PointerZone, we are committed to providing unparalleled support throughout your engineering admissions journey. With our extensive services, you'll receive personalized counseling from experienced IITians and NITians, ensuring tailored advice that aligns with your goals. Our unlimited WhatsApp support ensures that your queries are promptly addressed, leaving no question unanswered.",
    ],
    specializedContent: [
      "Ensuring students' success in their engineering journey, PointerZone remains vigilant in adapting to changes within the JoSAA (Joint Seat Allocation Authority) counseling process. With JoSAA overseeing admissions to prestigious institutions such as IITs, NITs, IIITs, and GFTIs, our commitment lies in providing tailored guidance for each institution's admission criteria and counseling procedures.",
      "PointerZone offers comprehensive assistance in understanding the intricacies of JoSAA counseling. Our experienced mentors conduct personalized one-on-one guidance and mock counseling sessions, providing continuous support throughout the process, covering registration, choice filling, seat allocation, and reporting.",
      "By staying updated with the latest developments in JoSAA counseling, we ensure accurate and timely information for our students. Combining expertise with personalized support, we empower students to make informed decisions, ultimately shaping a successful engineering career."
    ],
    isFeatured: true
  },
  {
    id: "bitsat",
    name: "BITSAT",
    slug: "bitsat",
    shortDescription: "Expert guidance for Birla Institute of Technology and Science Admission Test.",
    fullDescription: [
      "Dear Friends!",
      "Congratulations on your JEE result!",
      "You might have many questions about how to choose the best college available at your rank!",
      "Don't worry!",
      "PointerZone brings you an exclusive one-on-one talk with top IITians to discuss placements, branch change policies, overall culture, and the campus life of their colleges.",
      "At PointerZone, we understand your many questions and uncertainties about choosing the right college. To address these concerns, we offer an exclusive opportunity for you to have one-on-one discussions with top IITians who can provide insights into placement opportunities, branch change policies, the overall culture, and the campus life of their respective colleges. We aim to equip you with the necessary information to make an informed decision that suits your preferences.",
      "We will provide a personalized PDF document based on your rank, offering tailored advice and recommendations. Our team is committed to ensuring you secure the best college available, even if your rank is comparatively lower.",
      "At PointerZone, we are committed to providing unparalleled support throughout your engineering admissions journey. With our extensive services, you'll receive personalized counseling from experienced IITians and NITians, ensuring tailored advice that aligns with your goals. Our unlimited WhatsApp support ensures that your queries are promptly addressed, leaving no question unanswered.",
    ],
    specializedContent: [
      "To ensure students' success in their engineering endeavors, PointerZone diligently monitors updates in the BITSAT (Birla Institute of Technology and Science Admission Test) college counseling process, including those of private institutions. This steadfast dedication reflects our commitment to providing practical guidance along their academic journey. Notable participants such as BITS Pilani, BITS Goa, and BITS Hyderabad underscore the significance of staying informed. By tailoring precise guidance to each institution's unique procedures, we empower students to navigate the admission process confidently. At PointerZone, our personalized support enhances students' prospects of securing admission to their preferred engineering institutions through BITSAT counseling or direct admission to private colleges."
    ]
  },
  {
    id: "comedk",
    name: "COMEDK",
    slug: "comedk",
    shortDescription: "Comprehensive guidance for Consortium of Medical, Engineering, and Dental Colleges of Karnataka.",
    fullDescription: [
      "Dear Friends!",
      "Congratulations on your JEE result!",
      "You might have many questions about how to choose the best college available at your rank!",
      "Don't worry!",
      "PointerZone brings you an exclusive one-on-one talk with top IITians to discuss placements, branch change policies, overall culture, and the campus life of their colleges.",
      "At PointerZone, we understand your many questions and uncertainties about choosing the right college. To address these concerns, we offer an exclusive opportunity for you to have one-on-one discussions with top IITians who can provide insights into placement opportunities, branch change policies, the overall culture, and the campus life of their respective colleges. We aim to equip you with the necessary information to make an informed decision that suits your preferences.",
      "We will provide a personalized PDF document based on your rank, offering tailored advice and recommendations. Our team is committed to ensuring you secure the best college available, even if your rank is comparatively lower.",
      "At PointerZone, we are committed to providing unparalleled support throughout your engineering admissions journey. With our extensive services, you'll receive personalized counseling from experienced IITians and NITians, ensuring tailored advice that aligns with your goals. Our unlimited WhatsApp support ensures that your queries are promptly addressed, leaving no question unanswered.",
    ],
    specializedContent: [
      "PointerZone provides dedicated guidance for COMEDK (Consortium of Medical, Engineering, and Dental Colleges of Karnataka) counseling, helping students navigate the admission process for top private engineering colleges in Karnataka. Our comprehensive support covers understanding the entrance exam pattern, preparing for the test, and strategizing for counseling sessions."
    ]
  },
  {
    id: "cuet",
    name: "CUET",
    slug: "cuet",
    shortDescription: "Expert guidance for Common University Entrance Test.",
    fullDescription: [
      "Dear Friends!",
      "Congratulations on your exam result!",
      "You might have many questions about how to choose the best university available at your score!",
      "Don't worry!",
      "PointerZone brings you an exclusive one-on-one talk with top university students to discuss placement opportunities, course specializations, overall culture, and the campus life of their institutions.",
      "At PointerZone, we understand your many questions and uncertainties about choosing the right university. To address these concerns, we offer an exclusive opportunity for you to have one-on-one discussions with successful university students who can provide insights into placement opportunities, specialized courses, the overall culture, and the campus life of their respective institutions. We aim to equip you with the necessary information to make an informed decision that suits your preferences.",
      "We will provide a personalized PDF document based on your score, offering tailored advice and recommendations. Our team is committed to ensuring you secure the best university available, even if your score is comparatively lower.",
      "At PointerZone, we are committed to providing unparalleled support throughout your university admissions journey. With our extensive services, you'll receive personalized counseling from experienced university students, ensuring tailored advice that aligns with your goals. Our unlimited WhatsApp support ensures that your queries are promptly addressed, leaving no question unanswered.",
    ],
    specializedContent: [
      "PointerZone offers specialized guidance for the Common University Entrance Test (CUET), helping students navigate the application process for admissions to central universities across India. Our comprehensive counseling includes strategy sessions for the exam, assistance with university selection based on your score, and detailed information about various programs and specializations available."
    ]
  },
  {
    id: "ggsipu",
    name: "GGSIPU",
    slug: "ggsipu",
    shortDescription: "Specialized guidance for Guru Gobind Singh Indraprastha University admissions.",
    fullDescription: [
      "Dear Friends!",
      "Congratulations on your entrance exam result!",
      "You might have many questions about how to choose the best program and college available at your rank in GGSIPU!",
      "Don't worry!",
      "PointerZone brings you an exclusive one-on-one talk with top GGSIPU students to discuss placements, course specializations, overall culture, and the campus life of their colleges.",
      "At PointerZone, we understand your many questions and uncertainties about choosing the right program within GGSIPU. To address these concerns, we offer an exclusive opportunity for you to have one-on-one discussions with successful GGSIPU students who can provide insights into placement opportunities, course specializations, the overall culture, and the campus life of their respective colleges. We aim to equip you with the necessary information to make an informed decision that suits your preferences.",
      "We will provide a personalized PDF document based on your rank, offering tailored advice and recommendations. Our team is committed to ensuring you secure the best program available, even if your rank is comparatively lower.",
      "At PointerZone, we are committed to providing unparalleled support throughout your GGSIPU admissions journey. With our extensive services, you'll receive personalized counseling from experienced GGSIPU students, ensuring tailored advice that aligns with your goals. Our unlimited WhatsApp support ensures that your queries are promptly addressed, leaving no question unanswered.",
    ],
    specializedContent: [
      "PointerZone provides expert guidance for Guru Gobind Singh Indraprastha University (GGSIPU) admissions, offering detailed insights into the various affiliated colleges, their specializations, and placement records. Our team helps you navigate the complex counseling process to secure admission in your preferred program based on your entrance exam performance."
    ]
  },
  {
    id: "jac-delhi",
    name: "JAC Delhi",
    slug: "jac-delhi",
    shortDescription: "Expert counseling for Joint Admission Counselling Delhi engineering admissions.",
    fullDescription: [
      "Dear Friends!",
      "Congratulations on your entrance exam result!",
      "You might have many questions about how to choose the best engineering college in Delhi available at your rank!",
      "Don't worry!",
      "PointerZone brings you an exclusive one-on-one talk with top engineering students from Delhi colleges to discuss placements, branch specializations, overall culture, and the campus life of their institutions.",
      "At PointerZone, we understand your many questions and uncertainties about choosing the right engineering college in Delhi. To address these concerns, we offer an exclusive opportunity for you to have one-on-one discussions with successful engineering students who can provide insights into placement opportunities, branch specializations, the overall culture, and the campus life of their respective colleges. We aim to equip you with the necessary information to make an informed decision that suits your preferences.",
      "We will provide a personalized PDF document based on your rank, offering tailored advice and recommendations. Our team is committed to ensuring you secure the best college available, even if your rank is comparatively lower.",
      "At PointerZone, we are committed to providing unparalleled support throughout your engineering admissions journey in Delhi. With our extensive services, you'll receive personalized counseling from experienced engineering students, ensuring tailored advice that aligns with your goals. Our unlimited WhatsApp support ensures that your queries are promptly addressed, leaving no question unanswered.",
    ],
    specializedContent: [
      "PointerZone offers specialized counseling for JAC Delhi (Joint Admission Counselling Delhi), providing comprehensive guidance on the admission process for top engineering colleges in Delhi, including DTU, NSUT, IGDTUW, and IIIT-Delhi. Our expert counselors help you understand the intricate details of choice filling based on your JEE Main rank to secure the best possible branch and college combination."
    ]
  },
  {
    id: "mhcet",
    name: "MHCET",
    slug: "mhcet",
    shortDescription: "Comprehensive counseling for Maharashtra Common Entrance Test.",
    fullDescription: [
      "Dear Friends!",
      "Congratulations on your MHCET result!",
      "You might have many questions about how to choose the best engineering college in Maharashtra available at your score!",
      "Don't worry!",
      "PointerZone brings you an exclusive one-on-one talk with top engineering students from Maharashtra colleges to discuss placements, branch specializations, overall culture, and the campus life of their institutions.",
      "At PointerZone, we understand your many questions and uncertainties about choosing the right engineering college in Maharashtra. To address these concerns, we offer an exclusive opportunity for you to have one-on-one discussions with successful engineering students who can provide insights into placement opportunities, branch specializations, the overall culture, and the campus life of their respective colleges. We aim to equip you with the necessary information to make an informed decision that suits your preferences.",
      "We will provide a personalized PDF document based on your score, offering tailored advice and recommendations. Our team is committed to ensuring you secure the best college available, even if your score is comparatively lower.",
      "At PointerZone, we are committed to providing unparalleled support throughout your engineering admissions journey in Maharashtra. With our extensive services, you'll receive personalized counseling from experienced engineering students, ensuring tailored advice that aligns with your goals. Our unlimited WhatsApp support ensures that your queries are promptly addressed, leaving no question unanswered.",
    ],
    specializedContent: [
      "PointerZone provides expert guidance for MHCET (Maharashtra Common Entrance Test) counseling, offering detailed insights into the CAP (Centralized Admission Process) rounds, college selection strategies, and branch preferences based on your entrance exam score. Our experienced counselors help you navigate through the complex admission process to secure a seat in top engineering colleges across Maharashtra."
    ]
  },
  {
    id: "mpdte",
    name: "MPDTE",
    slug: "mpdte",
    shortDescription: "Specialized counseling for Madhya Pradesh Technical Education admissions.",
    fullDescription: [
      "Dear Friends!",
      "Congratulations on your entrance exam result!",
      "You might have many questions about how to choose the best engineering college in Madhya Pradesh available at your rank!",
      "Don't worry!",
      "PointerZone brings you an exclusive one-on-one talk with top engineering students from MP colleges to discuss placements, branch specializations, overall culture, and the campus life of their institutions.",
      "At PointerZone, we understand your many questions and uncertainties about choosing the right engineering college in Madhya Pradesh. To address these concerns, we offer an exclusive opportunity for you to have one-on-one discussions with successful engineering students who can provide insights into placement opportunities, branch specializations, the overall culture, and the campus life of their respective colleges. We aim to equip you with the necessary information to make an informed decision that suits your preferences.",
      "We will provide a personalized PDF document based on your rank, offering tailored advice and recommendations. Our team is committed to ensuring you secure the best college available, even if your rank is comparatively lower.",
      "At PointerZone, we are committed to providing unparalleled support throughout your engineering admissions journey in Madhya Pradesh. With our extensive services, you'll receive personalized counseling from experienced engineering students, ensuring tailored advice that aligns with your goals. Our unlimited WhatsApp support ensures that your queries are promptly addressed, leaving no question unanswered.",
    ],
    specializedContent: [
      "PointerZone offers dedicated counseling for MPDTE (Madhya Pradesh Directorate of Technical Education) admissions, providing comprehensive guidance on the counseling process for engineering colleges across the state. Our expert mentors help you understand the nuances of choice filling, seat allocation, and admission procedures to secure the best possible college and branch combination based on your entrance exam performance."
    ]
  },
  {
    id: "upsee-uptu",
    name: "UPSEE/UPTU",
    slug: "upsee-uptu",
    shortDescription: "Expert guidance for Uttar Pradesh State Entrance Examination.",
    fullDescription: [
      "Dear Friends!",
      "Congratulations on your UPSEE result!",
      "You might have many questions about how to choose the best engineering college in Uttar Pradesh available at your rank!",
      "Don't worry!",
      "PointerZone brings you an exclusive one-on-one talk with top engineering students from UP colleges to discuss placements, branch specializations, overall culture, and the campus life of their institutions.",
      "At PointerZone, we understand your many questions and uncertainties about choosing the right engineering college in Uttar Pradesh. To address these concerns, we offer an exclusive opportunity for you to have one-on-one discussions with successful engineering students who can provide insights into placement opportunities, branch specializations, the overall culture, and the campus life of their respective colleges. We aim to equip you with the necessary information to make an informed decision that suits your preferences.",
      "We will provide a personalized PDF document based on your rank, offering tailored advice and recommendations. Our team is committed to ensuring you secure the best college available, even if your rank is comparatively lower.",
      "At PointerZone, we are committed to providing unparalleled support throughout your engineering admissions journey in Uttar Pradesh. With our extensive services, you'll receive personalized counseling from experienced engineering students, ensuring tailored advice that aligns with your goals. Our unlimited WhatsApp support ensures that your queries are promptly addressed, leaving no question unanswered.",
    ],
    specializedContent: [
      "PointerZone provides comprehensive counseling for UPSEE/UPTU (Uttar Pradesh State Entrance Examination/Uttar Pradesh Technical University) admissions, offering detailed insights into the counseling process, college rankings, and branch selection strategies. Our experienced mentors help you navigate through the complex admission procedures to secure admission in your preferred engineering college across Uttar Pradesh based on your entrance exam rank."
    ]
  },
  {
    id: "wbjee",
    name: "WBJEE",
    slug: "wbjee",
    shortDescription: "Specialized counseling for West Bengal Joint Entrance Examination.",
    fullDescription: [
      "Dear Friends!",
      "Congratulations on your WBJEE result!",
      "You might have many questions about how to choose the best engineering college in West Bengal available at your rank!",
      "Don't worry!",
      "PointerZone brings you an exclusive one-on-one talk with top engineering students from West Bengal colleges to discuss placements, branch specializations, overall culture, and the campus life of their institutions.",
      "At PointerZone, we understand your many questions and uncertainties about choosing the right engineering college in West Bengal. To address these concerns, we offer an exclusive opportunity for you to have one-on-one discussions with successful engineering students who can provide insights into placement opportunities, branch specializations, the overall culture, and the campus life of their respective colleges. We aim to equip you with the necessary information to make an informed decision that suits your preferences.",
      "We will provide a personalized PDF document based on your rank, offering tailored advice and recommendations. Our team is committed to ensuring you secure the best college available, even if your rank is comparatively lower.",
      "At PointerZone, we are committed to providing unparalleled support throughout your engineering admissions journey in West Bengal. With our extensive services, you'll receive personalized counseling from experienced engineering students, ensuring tailored advice that aligns with your goals. Our unlimited WhatsApp support ensures that your queries are promptly addressed, leaving no question unanswered.",
    ],
    specializedContent: [
      "PointerZone offers expert guidance for WBJEE (West Bengal Joint Entrance Examination) counseling, providing comprehensive support for the entire admission process to engineering colleges across West Bengal. Our experienced counselors help you understand the nuances of e-counseling, choice filling, and seat allocation to secure the best possible college and branch combination based on your WBJEE rank."
    ]
  }
];
