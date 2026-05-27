// ============================================================
// HOWITWORKS.TSX — 3-step process section for Nexus Pay
// Features:
//   - Numbered steps with icons
//   - Animated connector line between steps
//   - Highlight pill on each step
//   - Scroll-triggered entrance animations with stagger
//   - Responsive — stacks vertically on mobile
// Author: Temitope Israel Omoniyi
// ============================================================

import { motion, Variants } from "framer-motion";
import { UserCheck, Code2, TrendingUp, LucideIcon } from "lucide-react";
import { steps } from "@/data";
import { Step } from "@/types";

// ── Icon Map ──────────────────────────────────────────────────
const iconMap: Record<string, LucideIcon> = {
  UserCheck: UserCheck,
  Code2: Code2,
  TrendingUp: TrendingUp,
};

// ── Animation Variants ────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: custom },
  }),
};

// Controls the animated connector line fill
// Draws from 0% width to 100% width when in view
const lineVariant: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 0.4 },
  },
};

// ── Step Card Component ───────────────────────────────────────
const StepCard = ({ step, index }: { step: Step; index: number }) => {
  const Icon = iconMap[step.icon];
  const isLast = index === steps.length - 1;

  return (
    <div className="relative flex-1">
      {/* ── Connector Line ────────────────────────────────────── */}
      {!isLast && (
        <div
          className="
            hidden md:block
            absolute top-10 left-[calc(50%+3rem)] right-0
            h-px bg-bg-border z-0
            overflow-hidden
          "
        >
          <motion.div
            variants={lineVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-full bg-brand-green/50 origin-left"
          />
        </div>
      )}

      {/* ── Step Card ─────────────────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={index * 0.15}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* ── Number + Icon Stack ─────────────────────────────── */}
        <div className="relative mb-6">
          <span
            className="
              absolute -top-4 -left-4
              font-display font-black text-6xl
              text-bg-elevated select-none
              leading-none
            "
          >
            {step.number}
          </span>

          <div
            className="
              relative w-20 h-20 rounded-2xl
              bg-bg-surface border border-bg-border
              flex items-center justify-center
              group-hover:border-brand-green/30
              transition-colors duration-300
              shadow-lg
            "
          >
            <div
              className="
                absolute inset-0 rounded-2xl
                bg-brand-green/5
              "
            />
            {Icon && (
              <Icon className="w-8 h-8 text-brand-green relative z-10" />
            )}
          </div>
        </div>

        {/* ── Highlight Pill ───────────────────────────────────── */}
        <div
          className="
            inline-flex items-center px-3 py-1
            bg-gold/10 border border-gold/20
            text-gold text-xs font-semibold
            rounded-full mb-4
          "
        >
          {step.highlight}
        </div>

        {/* ── Step Title ───────────────────────────────────────── */}
        <h3
          className="
            font-display font-bold text-xl
            text-text-primary mb-3
          "
        >
          {step.title}
        </h3>

        {/* ── Step Description ─────────────────────────────────── */}
        <p className="text-text-muted text-sm leading-relaxed max-w-xs">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
};

// ── Main HowItWorks Component ─────────────────────────────────
const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="relative">
        <div
          className="
            absolute inset-0
            bg-gradient-to-b from-transparent
            via-brand-green/3 to-transparent
            pointer-events-none
          "
        />

        <div className="container-custom relative z-10">
          {/* ── Section Header ────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <p
              className="
                text-brand-green text-sm font-semibold
                uppercase tracking-widest mb-4
              "
            >
              How It Works
            </p>

            <h2
              className="
                font-display font-bold
                text-4xl sm:text-5xl
                text-text-primary leading-tight mb-6
              "
            >
              Up and running in{" "}
              <span className="gradient-text">three steps</span>
            </h2>

            <p className="text-text-secondary text-lg leading-relaxed">
              We removed every unnecessary step from the onboarding process.
              No lengthy KYC queues, no integration nightmares — just clean,
              fast setup so you can focus on your business.
            </p>
          </motion.div>

          {/* ── Steps Row ─────────────────────────────────────── */}
          <div
            className="
              flex flex-col md:flex-row
              gap-12 md:gap-0
              items-start
            "
          >
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>

          {/* ── Bottom CTA ────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-text-muted text-sm">
              Already have an account?{" "}
              <a
                href="#"
                className="
                  text-brand-green hover:text-brand-green-light
                  font-medium transition-colors duration-200
                  underline underline-offset-4
                "
              >
                Sign in to your dashboard
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
