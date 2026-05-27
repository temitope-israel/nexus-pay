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