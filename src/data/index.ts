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