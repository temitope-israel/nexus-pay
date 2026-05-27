// ============================================================
// CTABANNER.TSX — Full-width closing CTA section for Nexus Pay
// Features:
//   - Bold headline with gradient accent
//   - Animated background — moving gradient orbs
//   - Two CTA buttons (primary + secondary)
//   - Trust signals row (no credit card, instant setup etc.)
//   - Subtle Nigerian pattern overlay
//   - Scroll-triggered entrance animation
// Author: Temitope Israel Omoniyi
// ============================================================

import { motion, Variants } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

// ── Animation Variants ────────────────────────────────────────
// Explicitly cast to 'Variants' type to fix the TypeScript custom argument parameter bug
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

// Trust signal items displayed below the CTA buttons
const trustSignals = [
  { icon: Shield, label: "No credit card required" },
  { icon: Zap, label: "Live in under 5 minutes" },
  { icon: Globe, label: "40+ African markets" },
];

// ── CTABanner Component ───────────────────────────────────────
const CTABanner = () => {
  return (
    <section className="section-padding relative overflow-hidden">

      {/* ── Background Layer ──────────────────────────────────── */}
      {/* Dark green surface that differentiates this section
          from the plain bg-base sections above and below */}
      <div className="absolute inset-0 bg-bg-surface" />

      {/* ── Animated Orbs ─────────────────────────────────────── */}
      {/* Two large glowing orbs that slowly drift in opposite
          directions — creates a living, breathing background */}

      {/* Green orb — drifts left to right */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute -top-32 -left-32 w-[500px] h-[500px]
          rounded-full bg-brand-green/10 blur-3xl
          pointer-events-none
        "
      />

      {/* Gold orb — drifts right to left */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="
          absolute -bottom-32 -right-32 w-[500px] h-[500px]
          rounded-full bg-gold/8 blur-3xl
          pointer-events-none
        "
      />

      {/* ── Nigerian Pattern Overlay ──────────────────────────── */}
      {/* Subtle geometric pattern inspired by traditional
          Nigerian textile/fabric designs — adds cultural texture
          without being heavy-handed */}
      {/* Optimized opacity on mobile viewports to preserve text readability */}
      <div
        className="absolute inset-0 opacity-[0.015] sm:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              #008751 0px,
              #008751 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              -45deg,
              #008751 0px,
              #008751 1px,
              transparent 1px,
              transparent 12px
            )
          `,
        }}
      />

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="container-custom relative z-10">
        <div className="
          max-w-4xl mx-auto text-center
          flex flex-col items-center gap-8
        ">

          {/* ── Eyebrow Label ──────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="
              inline-flex items-center gap-2
              px-4 py-2 rounded-full
              bg-brand-green/10 border border-brand-green/20
              text-brand-green text-sm font-semibold
              max-w-full text-left sm:text-center
            ">
              {/* Pulsing dot */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="
                  animate-ping absolute inline-flex h-full w-full
                  rounded-full bg-brand-green opacity-75
                " />
                <span className="
                  relative inline-flex rounded-full h-2 w-2 bg-brand-green
                " />
              </span>
              <span className="truncate sm:whitespace-normal">
                Now accepting applications — limited spots this quarter
              </span>
            </span>
          </motion.div>

          {/* ── Main Headline ──────────────────────────────────── */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true }}
            className="
              font-display font-black
              text-4xl sm:text-6xl lg:text-7xl
              text-text-primary leading-[1.1] sm:leading-[1.05]
              tracking-tight
            "
          >
            Your business deserves{" "}
            <span className="gradient-text">
              payments that work.
            </span>
          </motion.h2>

          {/* ── Subheadline ────────────────────────────────────── */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true }}
            className="
              text-text-secondary text-base sm:text-xl leading-relaxed
              max-w-2xl
            "
          >
            Join thousands of Nigerian and African businesses already
            using Nexus Pay to collect, move, and manage money —
            without the frustration.
          </motion.p>

          {/* ── CTA Buttons ────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Primary — green filled */}
            <Button
              size="lg"
              className="
                bg-brand-green hover:bg-brand-green-dark
                text-white font-bold px-10 h-14
                text-base rounded-xl
                transition-all duration-300
                hover:shadow-2xl hover:shadow-brand-green/30
                hover:-translate-y-0.5
                group w-full sm:w-auto
              "
            >
              Create Free Account
              <ArrowRight className="
                ml-2 w-5 h-5
                transition-transform duration-300
                group-hover:translate-x-1
              " />
            </Button>

            {/* Secondary — ghost */}
            <Button
              size="lg"
              variant="outline"
              className="
                border-bg-border text-text-secondary
                hover:text-text-primary hover:border-brand-green/40
                hover:bg-brand-green/5
                font-semibold px-10 h-14
                text-base rounded-xl
                transition-all duration-300
                w-full sm:w-auto
              "
            >
              Talk to Sales
            </Button>
          </motion.div>

          {/* ── Trust Signals ──────────────────────────────────── */}
          {/* Three quick reassurances that lower conversion friction */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            viewport={{ once: true }}
            className="
              flex flex-col sm:flex-row items-center justify-center
              gap-4 sm:gap-6 pt-4 w-full
            "
          >
            {trustSignals.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="
                  flex items-center gap-2 text-text-muted text-sm
                  bg-bg-surface/40 sm:bg-transparent
                  w-full sm:w-auto p-3 sm:p-0 rounded-xl
                  justify-center border border-bg-border/30 sm:border-none
                "
              >
                <Icon className="w-4 h-4 text-brand-green shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default CTABanner;