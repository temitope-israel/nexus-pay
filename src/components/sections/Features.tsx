// ============================================================
// FEATURES.TSX — Bento grid features section for Nexus Pay
// Features:
//   - Asymmetric bento grid layout (mix of large and small cards)
//   - Each card animates in on scroll with staggered delay
//   - Large cards have accent gradients (green or gold)
//   - Icon rendered dynamically from lucide-react
//   - Section heading with gradient accent word
// Author: Temitope Israel Omoniyi
// ============================================================

import { motion, Variants } from "framer-motion";
import {
  Zap,
  Globe,
  Shield,
  BarChart3,
  Code2,
  Headphones,
  LucideIcon,
} from "lucide-react";
import { features } from "@/data";
import { Feature } from "@/types";

// ── Icon Map ──────────────────────────────────────────────────
// Maps string icon names from data to actual Lucide components.
// This lets us store icon names as strings in our data file
// while rendering the real components here.
const iconMap: Record<string, LucideIcon> = {
  Zap,
  Globe,
  Shield,
  BarChart3,
  Code2,
  Headphones,
};

// ── Animation Variants ────────────────────────────────────────
// Explicitly cast to 'Variants' type to fix the TypeScript custom argument bug
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

// ── Feature Card Component ────────────────────────────────────
// Extracted as its own component for clarity and reusability
const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  // Resolve the icon component from the string name
  const Icon = iconMap[feature.icon];

  // Large cards span 2 columns on medium screens and above
  const isLarge = feature.size === "large";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      // Stagger cards by their index so they animate in sequence
      custom={index * 0.1}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        relative glass-card rounded-2xl p-6 overflow-hidden
        group cursor-default
        transition-all duration-300
        hover:border-brand-green/30 hover:-translate-y-1
        ${isLarge ? "md:col-span-2" : "md:col-span-1"}
      `}
    >
      {/* ── Accent Background Gradient ────────────────────────── */}
      {/* Large cards get a subtle gradient blob in the corner
          that intensifies on hover */}
      {feature.accent && (
        <div
          className={`
            absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl
            transition-opacity duration-300
            opacity-20 group-hover:opacity-40
            ${feature.accent === "green"
              ? "bg-brand-green"
              : "bg-gold"
            }
          `}
        />
      )}

      {/* ── Icon ──────────────────────────────────────────────── */}
      <div className={`
        w-12 h-12 rounded-xl flex items-center justify-center mb-5
        transition-colors duration-300
        ${feature.accent === "green"
          ? "bg-brand-green/15 group-hover:bg-brand-green/25"
          : feature.accent === "gold"
          ? "bg-gold/15 group-hover:bg-gold/25"
          : "bg-bg-elevated group-hover:bg-brand-green/10"
        }
      `}>
        {Icon && (
          <Icon
            className={`
              w-6 h-6 transition-colors duration-300
              ${feature.accent === "green"
                ? "text-brand-green"
                : feature.accent === "gold"
                ? "text-gold"
                : "text-text-secondary group-hover:text-brand-green"
              }
            `}
          />
        )}
      </div>

      {/* ── Text Content ──────────────────────────────────────── */}
      <h3 className="
        font-display font-bold text-xl text-text-primary mb-3
        group-hover:text-white transition-colors duration-300
      ">
        {feature.title}
      </h3>

      <p className="text-text-muted text-sm leading-relaxed">
        {feature.description}
      </p>

      {/* ── Bottom accent line ────────────────────────────────── */}
      {/* Slides in from left on hover — subtle but satisfying */}
      <div className={`
        absolute bottom-0 left-0 h-0.5 w-0
        group-hover:w-full
        transition-all duration-500 ease-out
        rounded-full
        ${feature.accent === "gold"
          ? "bg-gold"
          : "bg-brand-green"
        }
      `} />

    </motion.div>
  );
};

// ── Main Features Component ───────────────────────────────────
const Features = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container-custom">

        {/* ── Section Header ──────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          {/* Eyebrow label */}
          <p className="
            text-brand-green text-sm font-semibold
            uppercase tracking-widest mb-4
          ">
            Why Nexus Pay
          </p>

          {/* Section headline */}
          <h2 className="
            font-display font-bold
            text-4xl sm:text-5xl
            text-text-primary leading-tight mb-6
          ">
            Everything your business needs to{" "}
            <span className="gradient-text">move money faster</span>
          </h2>

          <p className="text-text-secondary text-lg leading-relaxed">
            Built specifically for the African market — not ported from
            a Western product. Every feature was designed with Nigerian
            and African business realities in mind.
          </p>
        </motion.div>

        {/* ── Bento Grid ──────────────────────────────────────── */}
        {/* Auto-fills 3 columns on desktop, 1 on mobile.
            Large cards (md:col-span-2) break the uniform grid
            creating the bento asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-fr">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;