// ============================================================
// PRICING.TSX — Pricing section for Nexus Pay
// Features:
//   - Monthly / Annual billing toggle using Shadcn Switch
//   - Animated price number transition on toggle
//   - Three tiers: Starter, Growth (highlighted), Enterprise
//   - "Most Popular" badge on highlighted card
//   - Feature checklist per tier
//   - Scroll-triggered entrance animations
// Author: Temitope Israel Omoniyi
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { pricingTiers } from "@/data";
import { PricingTier } from "@/types";

// ── Animation Variants ────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

// ── Price Display Component ───────────────────────────────────
// Handles the animated number swap between monthly and annual
const PriceDisplay = ({
  tier,
  isAnnual,
}: {
  tier: PricingTier;
  isAnnual: boolean;
}) => {
  // Determine which price to show based on toggle state
  const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

  // Free plan
  if (price === 0) {
    return (
      <div className="flex items-end gap-1 mb-2">
        <span className="font-display font-black text-5xl text-text-primary">
          Free
        </span>
      </div>
    );
  }

  // Enterprise — custom pricing
  if (price === null) {
    return (
      <div className="flex items-end gap-1 mb-2">
        <span className="font-display font-black text-4xl text-text-primary">
          Custom
        </span>
      </div>
    );
  }

  // Paid plans — animate the number when toggling
  return (
    <div className="flex items-start gap-1 mb-2">
      <span className="text-text-secondary text-xl font-medium mt-2">₦</span>

      {/* AnimatePresence + key change triggers exit/enter animation
          every time the price value changes */}
      <AnimatePresence mode="wait">
        <motion.span
          key={price}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="font-display font-black text-5xl text-text-primary"
        >
          {price}k
        </motion.span>
      </AnimatePresence>

      <span className="text-text-muted text-sm font-medium mt-auto mb-2">
        / mo
      </span>
    </div>
  );
};

// ── Pricing Card Component ────────────────────────────────────
const PricingCard = ({
  tier,
  isAnnual,
  index,
}: {
  tier: PricingTier;
  isAnnual: boolean;
  index: number;
}) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      custom={index * 0.1}
      viewport={{ once: true, margin: "-50px" }}
      // Highlighted card is slightly taller and elevated
      className={`elative rounded-2xl p-8 flex flex-col
  transition-all duration-300
  ${tier.highlighted
    ? "bg-brand-green border-2 border-brand-green shadow-2xl shadow-brand-green/20 scale-105"
    : "glass-card border border-bg-border hover:border-brand-green/30 hover:-translate-y-1"

        }
      `}
    >

      {/* ── Most Popular Badge ────────────────────────────────── */}
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="
            bg-gold text-bg-base font-bold px-4 py-1
            text-xs uppercase tracking-wider
            shadow-lg shadow-gold/30
            flex items-center gap-1.5
          ">
            <Sparkles className="w-3 h-3" />
            {tier.badge}
          </Badge>
        </div>
      )}

      {/* ── Plan Name ─────────────────────────────────────────── */}
      <h3 className={`
        font-display font-bold text-xl mb-2
        ${tier.highlighted ? "text-white" : "text-text-primary"}
      `}>
        {tier.name}
      </h3>

      {/* ── Description ───────────────────────────────────────── */}
      <p className={`
        text-sm leading-relaxed mb-6
        ${tier.highlighted ? "text-white/70" : "text-text-muted"}
      `}>
        {tier.description}
      </p>

      {/* ── Price ─────────────────────────────────────────────── */}
      <PriceDisplay tier={tier} isAnnual={isAnnual} />

      {/* Annual savings note */}
      {tier.monthlyPrice !== null &&
        tier.monthlyPrice !== 0 &&
        isAnnual && (
          <p className={`
            text-xs font-medium mb-6
            ${tier.highlighted ? "text-white/70" : "text-brand-green"}
          `}>
            You save ₦{((tier.monthlyPrice! - tier.annualPrice!) * 12)}k/year
          </p>
        )}

      {!isAnnual && tier.monthlyPrice !== 0 && tier.monthlyPrice !== null && (
        <p className="text-xs font-medium mb-6 text-transparent select-none">
          placeholder
        </p>
      )}

      {/* ── CTA Button ────────────────────────────────────────── */}
      <Button
        className={`
          w-full h-12 font-semibold text-base rounded-xl mb-8
          transition-all duration-300
          ${tier.highlighted
            ? "bg-white text-brand-green hover:bg-white/90 shadow-lg"
            : tier.name === "Enterprise"
            ? "bg-transparent border-2 border-bg-border text-text-primary hover:border-brand-green/50 hover:bg-brand-green/5"
            : "bg-brand-green hover:bg-brand-green-dark text-white hover:shadow-lg hover:shadow-brand-green/20"
          }
        `}
      >
        {tier.cta}
      </Button>

      {/* ── Divider ───────────────────────────────────────────── */}
      <div className={`
        w-full h-px mb-8
        ${tier.highlighted ? "bg-white/20" : "bg-bg-border"}
      `} />

      {/* ── Features List ─────────────────────────────────────── */}
      <ul className="flex flex-col gap-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            {/* Check icon */}
            <div className={`
              w-5 h-5 rounded-full flex items-center justify-center
              shrink-0 mt-0.5
              ${tier.highlighted
                ? "bg-white/20"
                : "bg-brand-green/10"
              }
            `}>
              <Check className={`
                w-3 h-3
                ${tier.highlighted ? "text-white" : "text-brand-green"}
              `} />
            </div>
            <span className={`
              text-sm leading-relaxed
              ${tier.highlighted ? "text-white/80" : "text-text-secondary"}
            `}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

    </motion.div>
  );
};

// ── Main Pricing Component ────────────────────────────────────
const Pricing = () => {
  // Toggle state — false = monthly, true = annual
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="section-padding">
      <div className="container-custom">

        {/* ── Section Header ──────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="
            text-brand-green text-sm font-semibold
            uppercase tracking-widest mb-4
          ">
            Simple Pricing
          </p>

          <h2 className="
            font-display font-bold
            text-4xl sm:text-5xl
            text-text-primary leading-tight mb-6
          ">
            Pay for what you{" "}
            <span className="gradient-text">actually use</span>
          </h2>

          <p className="text-text-secondary text-lg leading-relaxed">
            No hidden charges. No surprise deductions. Just transparent
            pricing built for Nigerian business realities.
          </p>
        </motion.div>

        {/* ── Billing Toggle ────────────────────────────────────── */}
        {/* Switch component from Shadcn toggles between
            monthly and annual pricing */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <span className={`
            text-sm font-medium transition-colors duration-200
            ${!isAnnual ? "text-text-primary" : "text-text-muted"}
          `}>
            Monthly
          </span>

          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]:bg-brand-green"
          />

          <span className={`
            text-sm font-medium transition-colors duration-200
            ${isAnnual ? "text-text-primary" : "text-text-muted"}
          `}>
            Annual
            {/* Savings badge — only visible when on monthly to entice switch */}
            <span className="
              ml-2 px-2 py-0.5
              bg-gold/10 text-gold
              text-xs font-semibold rounded-full
              border border-gold/20
            ">
              Save 20%
            </span>
          </span>
        </motion.div>

        {/* ── Pricing Cards Grid ────────────────────────────────── */}
        {/* items-start prevents cards from stretching to equal height
            which would ruin the scale-105 effect on the middle card */}
        <div className="
          grid grid-cols-1 md:grid-cols-3
          gap-6 items-start
        ">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              isAnnual={isAnnual}
              index={index}
            />
          ))}
        </div>

        {/* ── Bottom Note ───────────────────────────────────────── */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          viewport={{ once: true }}
          className="
            text-center text-text-muted text-sm mt-12
          "
        >
          All plans include a 14-day free trial. No credit card required.
          Questions?{" "}

          <a
            href="#"
            className="
              text-brand-green hover:text-brand-green-light
              underline underline-offset-4
              transition-colors duration-200
            "
          >
            Talk to our team
          </a>
        </motion.p>

      </div>
    </section>
  );
};

export default Pricing;