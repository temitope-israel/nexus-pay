// ============================================================
// TYPES/INDEX.TS — Shared TypeScript interfaces for Nexus Pay
// All data shapes used across the app are defined here
// ============================================================

// Navigation link structure
export interface NavLink {
  label: string;
  href: string;
}


// Navigation link structure
export interface NavLink {
  label: string;
  href: string;
}

// Feature card structure
export interface Feature {
  icon: string;
  title: string;
  description: string;
  size: "small" | "large"; // large cards span more columns
  accent?: "green" | "gold"; // optional color accent per card
}



// Navigation link structure
export interface NavLink {
  label: string;
  href: string;
}

// Feature card structure
export interface Feature {
  icon: string;
  title: string;
  description: string;
  size: "small" | "large";
  accent?: "green" | "gold";
}

// How It Works step structure
export interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
}


// Navigation link structure
export interface NavLink {
  label: string;
  href: string;
}

// Feature card structure
export interface Feature {
  icon: string;
  title: string;
  description: string;
  size: "small" | "large";
  accent?: "green" | "gold";
}

// How It Works step structure
export interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

// Single pricing tier structure
export interface PricingTier {
  name: string;
  monthlyPrice: number | null; // null = custom/enterprise pricing
  annualPrice: number | null;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean; // true = "Most Popular" card
  badge?: string;
}