// ============================================================
// DATA/INDEX.TS — All static content for Nexus Pay
// Keeping content separate from UI logic is a best practice —
// it makes updates easy without touching component files
// ============================================================

import { NavLink } from "@/types";

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