// ============================================================
// DATA/INDEX.TS — All static content for Nexus Pay
// Keeping content separate from UI logic is a best practice —
// it makes updates easy without touching component files
// ============================================================

import { NavLink, Feature, Step, PricingTier } from "@/types";


// Navigation links rendered in the Navbar
export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];




// Hero section content
export const heroContent = {
  badge: "Africa's #1 Payment Infrastructure",
  headline: "Move Money",
  headlineAccent: "Without Limits.",
  subheadline:
    "Nexus Pay gives businesses across Africa the tools to collect payments, pay vendors, and manage money — fast, secure, and at scale.",
  primaryCta: "Start for Free",
  secondaryCta: "See How It Works",
  stats: [
    { value: "₦2.4T+", label: "Processed Monthly" },
    { value: "98.9%", label: "Uptime Guaranteed" },
    { value: "40+", label: "African Markets" },
    { value: "15ms", label: "Avg. Response Time" },
  ],
};


// Trusted by — fictional African companies for the marquee strip
// Using a mix of industries to show Nexus Pay's versatility
export const trustedCompanies = [
  { name: "Konga", industry: "E-Commerce" },
  { name: "Andela", industry: "Tech Talent" },
  { name: "Cowrywise", industry: "Investments" },
  { name: "Farmcrowdy", industry: "AgriTech" },
  { name: "Helium Health", industry: "HealthTech" },
  { name: "Shuttlers", industry: "Mobility" },
  { name: "Brass", industry: "Banking" },
  { name: "Omnibiz", industry: "Distribution" },
  { name: "Sabi", industry: "Commerce" },
  { name: "Credpal", industry: "Credit" },
  { name: "Trove", industry: "Investments" },
  { name: "Vendease", industry: "FoodTech" },
];


// Features section — six core Nexus Pay capabilities
// Mix of small and large cards creates the bento grid asymmetry
export const features: Feature[] = [
  {
    icon: "Zap",
    title: "Instant Settlements",
    description:
      "Get your money when you need it. Nexus Pay settles transactions in real-time — no waiting 3-5 business days like traditional banks.",
    size: "large",
    accent: "green",
  },
  {
    icon: "Globe",
    title: "Pan-African Coverage",
    description:
      "Accept payments from 40+ African markets with a single integration. NGN, GHS, KES, ZAR and more.",
    size: "small",
  },
  {
    icon: "Shield",
    title: "Bank-Grade Security",
    description:
      "256-bit encryption, PCI-DSS compliance, and real-time fraud detection powered by ML models trained on African transaction patterns.",
    size: "small",
  },
  {
    icon: "BarChart3",
    title: "Smart Analytics",
    description:
      "Understand your revenue like never before. Real-time dashboards, custom reports, and AI-powered insights built for African business owners.",
    size: "large",
    accent: "gold",
  },
  {
    icon: "Code2",
    title: "Developer First",
    description:
      "Clean REST APIs, SDKs for all major languages, and documentation that doesn't make you want to quit.",
    size: "small",
  },
  {
    icon: "Headphones",
    title: "Local Support",
    description:
      "Real humans, Nigerian time zones. Chat, email, and phone support from a team that understands your market.",
    size: "small",
  },
];



// How It Works — 3 steps explaining the Nexus Pay onboarding flow
export const steps = [
  {
    number: "01",
    icon: "UserCheck",
    title: "Create Your Account",
    description:
      "Sign up in under 5 minutes. Submit your business details, get verified by our compliance team, and you're live. No paperwork. No branch visits.",
    highlight: "5 minute setup",
  },
  {
    number: "02",
    icon: "Code2",
    title: "Integrate Once",
    description:
      "Drop our SDK into your app or use our no-code plugins for Shopify, WooCommerce, and more. One integration. Every payment method across Africa.",
    highlight: "One integration",
  },
  {
    number: "03",
    icon: "TrendingUp",
    title: "Grow Without Limits",
    description:
      "Watch revenue flow in real-time. Scale from ₦1M to ₦1B in GMV without changing a single line of code. Nexus Pay grows with you.",
    highlight: "Unlimited scale",
  },
];


// Pricing tiers — three plans for different business sizes
// monthlyPrice/annualPrice in NGN thousands (e.g. 25 = ₦25,000)
export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    monthlyPrice: 0,
    annualPrice: 0,
    description:
      "Perfect for early-stage startups and solo founders testing their first product.",
    features: [
      "Up to ₦5M monthly volume",
      "1.5% transaction fee",
      "Bank transfers & card payments",
      "Basic analytics dashboard",
      "Email support",
      "API access",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Growth",
    monthlyPrice: 49,
    annualPrice: 39,
    description:
      "For growing businesses ready to scale across Nigeria and West Africa.",
    features: [
      "Up to ₦100M monthly volume",
      "1.0% transaction fee",
      "All payment methods",
      "Advanced analytics & reports",
      "Priority email & chat support",
      "Webhooks & API access",
      "Multi-currency support",
      "Bulk payouts",
    ],
    cta: "Start Growing",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    description:
      "Custom infrastructure for large businesses processing billions in GMV.",
    features: [
      "Unlimited monthly volume",
      "Custom transaction fees",
      "Dedicated account manager",
      "SLA-backed uptime guarantee",
      "Custom integrations",
      "On-premise deployment option",
      "24/7 phone support",
      "Compliance & audit support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];


// FAQ section — common questions about Nexus Pay
export const faqs = [
  {
    question: "How long does it take to get verified?",
    answer:
      "Most businesses are verified within 24 hours. We review your CAC registration, BVN, and business details. For enterprise accounts, our compliance team will reach out directly to fast-track the process.",
  },
  {
    question: "What payment methods does Nexus Pay support?",
    answer:
      "We support bank transfers, debit/credit cards (Visa, Mastercard, Verve), USSD, mobile money (across 15+ African countries), and QR code payments. All through a single API integration.",
  },
  {
    question: "Is my money safe with Nexus Pay?",
    answer:
      "Absolutely. Nexus Pay is licensed by the Central Bank of Nigeria (CBN) and PCI-DSS Level 1 compliant. Customer funds are held in insured escrow accounts completely separate from our operational funds.",
  },
  {
    question: "Can I accept payments from outside Nigeria?",
    answer:
      "Yes. With the Growth and Enterprise plans, you can accept payments from 40+ African markets and internationally. We handle currency conversion automatically at competitive exchange rates.",
  },
  {
    question: "What are the transaction fees?",
    answer:
      "Starter plan: 1.5% per transaction. Growth plan: 1.0% per transaction. Enterprise: custom rates negotiated based on your volume. There are no setup fees, monthly minimums, or hidden charges.",
  },
  {
    question: "How do I integrate Nexus Pay into my app?",
    answer:
      "We offer REST APIs, JavaScript/TypeScript SDKs, React Native libraries, and no-code plugins for Shopify, WooCommerce, and WordPress. Most developers complete integration in under a day.",
  },
  {
    question: "How quickly are settlements processed?",
    answer:
      "Growth and Enterprise plans get real-time settlements — money hits your account within minutes of a successful transaction. Starter plan settlements are processed within 24 hours on business days.",
  },
  {
    question: "Do you offer refunds or dispute resolution?",
    answer:
      "Yes. Our dashboard includes a full dispute management system. You can issue full or partial refunds directly, and our team mediates chargebacks on your behalf with a 92% merchant success rate.",
  },
];