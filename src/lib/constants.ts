// ─────────────────────────────────────────────────────────────
// Value Your Life Wellness — Brand Constants & Compliance Copy
// ─────────────────────────────────────────────────────────────
// LEGAL NOTE: All copy uses structure/function claims ONLY.
// Never use "treats", "cures", "diagnoses", or "prevents" with
// any disease or clinical pathology. Always use C.H.N.C. title.
// ─────────────────────────────────────────────────────────────

export const BRAND = {
  name: "Value Your Life Wellness",
  tagline: "Value Yourself. Nourish Your Mind. Transform Your Life.",
  subtitle: "Mental Wellness, Nutrition & Life Coaching",
  domain: "valueyourlife.ca",
} as const;

export const PRACTITIONER = {
  name: "Danielle Mayer",
  title: "Certified Holistic Nutritional Consultant™",
  designation: "C.H.N.C.",
  fullTitle: "Danielle Mayer, C.H.N.C.",
  additionalRole: "Life Coach",
  school: "Canadian School of Natural Nutrition",
  schoolAbbr: "CSNN",
  yearCertified: 2019,
} as const;

// ── Contact & Booking ──
export const CONTACT = {
  email: "valueyourlife@outlook.com",
  location: "Kamloops, BC",
  bookingUrl: "https://my.practicebetter.io/#/610c73543980330f000f7e1b/bookings?step=services",
} as const;

// ── Mandatory Footer Disclaimer (must appear on every page) ──
export const DISCLAIMER = `The entire contents of this website are based upon the opinions of Danielle Mayer with Value Your Life Wellness. Please note that Danielle Mayer with Value Your Life Wellness is not a dietitian, physician, pharmacist or other licensed healthcare professional. The information on this website is NOT intended as medical advice, nor is it intended to replace the care of a qualified health care professional. This content is not intended to diagnose or treat any diseases. Always consult with your primary care physician or licensed healthcare provider for all diagnosis and treatment of any diseases or conditions, for medications or medical advice as well as before changing your health care regimen.`;

// ── Navigation ──
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
] as const;

export const PRIMARY_CTA = {
  label: "Book a Free Discovery Session",
  href: "/programs#booking",
} as const;

// ── Hero Section ──
export const HERO_COPY = {
  headline: "Value Yourself. Nourish Your Mind. Transform Your Life.",
  subheadline:
    "Compassionate mental wellness coaching and holistic nutrition guidance — designed around your unique life.",
  primaryCta: "Book a Free Discovery Session",
  softCta: "Explore Programs",
} as const;

// ── Empathy Block (VoC-driven copy) ──
export const EMPATHY_COPY = {
  headline: "You deserve a life you truly value.",
  paragraphs: [
    "If you're juggling responsibilities, feeling stuck, or craving meaningful change — you're not alone. That constant hum of overwhelm, the stress that never quite fades, the sense that something needs to shift… I've been exactly where you are.",
    "I know what it feels like when your life doesn't align with your values — when uncertainty, emotional exhaustion, and daily pressure take center stage. And I also know that it doesn't have to stay that way.",
    "Together, we'll create a clear path forward — one built around your goals, your schedule, and your life. No cookie-cutter plans. No clinical jargon. Just real support from someone who truly gets it.",
  ],
  cta: "Learn More About My Approach",
} as const;

// ── Programs / Services ──
export const PROGRAMS = [
  {
    id: "discovery",
    name: "Free Discovery Session",
    price: "Free",
    duration: "30 minutes",
    description:
      "A no-obligation conversation to discuss your goals, explore your challenges, and see if we're a great fit to work together.",
    includes: [
      "Wellness assessment",
      "Goal discussion",
      "Questions & answers",
      "Program recommendations",
    ],
    bestFor: "New clients exploring coaching and nutrition support.",
    cta: "Book Your Free Session",
    featured: false,
  },
  {
    id: "clarity",
    name: "Clarity Session",
    price: "$250",
    duration: "90-minute intensive session",
    description:
      "A focused deep-dive session designed to help you gain clarity, reduce overwhelm, and identify your next best steps.",
    includes: [
      "Comprehensive wellness review",
      "Stress & lifestyle assessment",
      "Goal clarification",
      "Personalized action plan",
      "Follow-up summary email",
    ],
    bestFor: "Individuals looking for immediate support and a clear path forward.",
    cta: "Start with Clarity",
    featured: false,
  },
  {
    id: "foundations",
    name: "Foundations Reset",
    price: "$450",
    duration: "4 weeks of coaching support",
    description:
      "A short-term program to help you stabilize routines, build awareness, and begin creating sustainable wellness habits.",
    includes: [
      "Initial 60-minute assessment",
      "Three 30-minute weekly coaching sessions",
      "Basic nutrition + habit guidance",
      "Stress & mindset support",
      "Email support between sessions",
    ],
    bestFor: "Individuals who need structure and accountability to get started.",
    cta: "Build Your Foundation",
    featured: false,
  },
  {
    id: "growth",
    name: "Wellness Growth Program",
    price: "$850",
    duration: "8 weeks of coaching & nutrition support",
    description:
      "A structured coaching container focused on strengthening consistency, mindset, and long-term wellness habits.",
    includes: [
      "Initial 60-minute deep assessment",
      "Seven 30-minute weekly coaching sessions",
      "Personalized nutrition guidance",
      "Habit + mindset development plan",
      "Accountability support",
      "Email support between sessions",
    ],
    bestFor: "Clients ready to move beyond starting and into sustainable change.",
    cta: "Create Lasting Momentum",
    featured: false,
  },
  {
    id: "transformation",
    name: "Value Your Life Transformation",
    price: "$1,350",
    duration: "12 weeks of coaching & nutrition support",
    paymentPlan: "Or 3 payments of $450",
    description:
      "Our signature program — your highest-level transformation experience, designed for individuals committed to deep, sustainable change across mind, body, and purpose.",
    includes: [
      "Initial 90-minute deep dive session",
      "Eleven 30-minute weekly coaching sessions",
      "Personalized wellness roadmap",
      "Advanced nutrition + lifestyle guidance",
      "Mindset + identity coaching",
      "Accountability + integration support",
      "Priority email support",
    ],
    bestFor: "Individuals committed to deep, sustainable change across mind, body, and purpose.",
    cta: "Fully Step Into Your Next Level",
    featured: true,
  },
] as const;

// ── Optional Add-On Services ──
export const ADD_ON_SERVICES = [
  {
    id: "nutrition-review",
    name: "Personalized Nutrition Review",
    price: "$140",
    description: "A comprehensive review of your current dietary patterns with custom adjustments to clear brain fog and support sustained daily energy.",
    details: [
      "Review of current eating habits",
      "Nutrition recommendations",
      "Written summary",
    ],
  },
  {
    id: "goal-mapping",
    name: "Wellness Vision & Goal Mapping Session",
    price: "$180",
    description: "A 60-minute interactive mapping session using a values-based framework to build your custom longevity roadmap.",
    details: [
      "60-minute session",
      "Values assessment",
      "Goal setting framework",
      "Personalized roadmap",
    ],
  },
  {
    id: "follow-up",
    name: "Follow-Up Coaching Session",
    price: "$150",
    description: "A 60-minute high-touch coaching touchpoint designed exclusively for existing clients to keep momentum and maintain progress.",
    details: [
      "60-minute coaching session",
      "Existing clients only",
    ],
  },
] as const;

// ── Social Proof (placeholder testimonials) ──
export const TESTIMONIALS = [
  {
    quote:
      "Working with Danielle gave me the clarity I'd been searching for. I finally feel like I have practical tools to manage my stress — not just band-aids.",
    author: "Sarah M.",
    program: "Foundations of Wellness",
  },
  {
    quote:
      "I was skeptical at first, but the transformation program changed how I think about food, stress, and what I actually value in life. I feel like myself again.",
    author: "Jessica R.",
    program: "Value Your Life Transformation",
  },
  {
    quote:
      "The discovery session alone helped me realize I wasn't stuck — I just needed the right support. Danielle listens in a way that makes you feel truly heard.",
    author: "Amanda K.",
    program: "Free Discovery Session",
  },
] as const;

// ── FAQ ──
export const FAQ_ITEMS = [
  {
    question: "What is mental wellness coaching?",
    answer:
      "Mental wellness coaching helps you develop practical strategies to improve emotional well-being, manage stress, increase resilience, and create healthier daily habits.",
  },
  {
    question: "How does nutrition affect mental wellness?",
    answer:
      "Nutrition plays an important role in supporting mood, energy levels, concentration, sleep quality, and overall mental wellness. Small nutritional changes can often have a significant impact on how you feel.",
  },
  {
    question: "What is the difference between coaching and therapy?",
    answer:
      "Therapy often focuses on diagnosing and treating mental health conditions. Coaching focuses on helping you set goals, create action plans, build healthier habits, and move forward toward desired outcomes.",
  },
  {
    question: "Do I need to be struggling to benefit from coaching?",
    answer:
      "Not at all. Many clients seek coaching because they want greater balance, improved confidence, healthier habits, more energy, or support achieving personal goals.",
  },
  {
    question: "Is nutrition coaching personalized?",
    answer:
      "Yes. Every client receives guidance tailored to their unique lifestyle, goals, challenges, and preferences.",
  },
  {
    question: "How do I get started?",
    answer:
      "The first step is scheduling a free discovery session where we'll discuss your goals, challenges, and determine whether we're a good fit to work together.",
  },
] as const;
