// ============================================================
// HERO.TSX — Landing page hero section for Nexus Pay
// Features:
//   - Animated badge entrance
//   - Staggered headline reveal
//   - Dual CTA buttons
//   - Animated stats row
//   - Floating dashboard mockup with glow effect
//   - Subtle grid background pattern
//   - Floating orb decorations for depth
// Author: Temitope Israel Omoniyi
// ============================================================

import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroContent } from "@/data";

// ── Animation Variants ────────────────────────────────────────
// Defined outside component to avoid recreation on each render

// Fades in and slides up — used on most elements
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

// Fades in only — used on background elements
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay },
  }),
};

const Hero = () => {
  return (
    <section
      className="
        relative min-h-screen flex items-center
        overflow-hidden noise-bg
        pt-20
      "
    >
      {/* ── Background Grid Pattern ───────────────────────────── */}
      {/* Subtle dot grid gives the section a technical, fintech feel */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #1F2E28 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Ambient Glow Orbs ─────────────────────────────────── */}
      {/* Large blurred circles that create depth and color atmosphere */}

      {/* Green orb — top left */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="
          absolute -top-40 -left-40 w-96 h-96 rounded-full
          bg-brand-green/10 blur-3xl pointer-events-none
        "
      />

      {/* Gold orb — bottom right */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.4}
        className="
          absolute -bottom-40 -right-40 w-96 h-96 rounded-full
          bg-gold/10 blur-3xl pointer-events-none
        "
      />

      {/* ── Main Content ──────────────────────────────────────── */}
      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column — Text Content ──────────────────────── */}
          <div className="flex flex-col gap-8">

            {/* Badge — "Africa's #1 Payment Infrastructure" */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              <Badge
                className="
                  inline-flex items-center gap-2 px-4 py-2
                  bg-brand-green/10 text-brand-green-light
                  border border-brand-green/20
                  text-sm font-medium rounded-full
                  w-fit
                "
              >
                {/* Pulsing green dot — "live" indicator */}
                <span className="relative flex h-2 w-2">
                  <span className="
                    animate-ping absolute inline-flex h-full w-full
                    rounded-full bg-brand-green opacity-75
                  " />
                  <span className="
                    relative inline-flex rounded-full h-2 w-2
                    bg-brand-green
                  " />
                </span>
                {heroContent.badge}
              </Badge>
            </motion.div>

            {/* Main Headline */}
            {/* Split into two parts so we can accent the second part */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="flex flex-col gap-2"
            >
              <h1 className="
                font-display font-extrabold
                text-5xl sm:text-6xl lg:text-7xl
                leading-[1.05] tracking-tight
                text-text-primary
              ">
                {heroContent.headline}
              </h1>
              <h1 className="
                font-display font-extrabold
                text-5xl sm:text-6xl lg:text-7xl
                leading-[1.05] tracking-tight
                gradient-text
              ">
                {heroContent.headlineAccent}
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="
                text-text-secondary text-lg leading-relaxed
                max-w-lg
              "
            >
              {heroContent.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex flex-wrap gap-4"
            >
              {/* Primary CTA — green, filled */}
              <Button
                size="lg"
                className="
                  bg-brand-green hover:bg-brand-green-dark
                  text-white font-semibold px-8 h-14
                  text-base rounded-xl
                  transition-all duration-300
                  hover:shadow-xl hover:shadow-brand-green/25
                  hover:-translate-y-0.5
                  group
                "
              >
                {heroContent.primaryCta}
                <ArrowRight className="
                  ml-2 w-4 h-4
                  transition-transform duration-300
                  group-hover:translate-x-1
                " />
              </Button>

              {/* Secondary CTA — ghost, with play icon */}
              <Button
                size="lg"
                variant="outline"
                className="
                  border-bg-border text-text-secondary
                  hover:text-text-primary hover:border-brand-green/50
                  hover:bg-brand-green/5
                  font-semibold px-8 h-14
                  text-base rounded-xl
                  transition-all duration-300
                  group
                "
              >
                <span className="
                  w-8 h-8 rounded-full bg-bg-elevated
                  flex items-center justify-center mr-3
                  group-hover:bg-brand-green/10
                  transition-colors duration-300
                ">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </span>
                {heroContent.secondaryCta}
              </Button>
            </motion.div>

            {/* Stats Row */}
            {/* Shows social proof numbers below the CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="
                grid grid-cols-2 sm:grid-cols-4
                gap-6 pt-4
                border-t border-bg-border
              "
            >
              {heroContent.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="
                    font-display font-bold text-2xl
                    text-text-primary
                  ">
                    {stat.value}
                  </span>
                  <span className="text-text-muted text-xs leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ── Right Column — Dashboard Mockup ─────────────────── */}
          {/* A visually rich fake dashboard that implies product quality */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="hidden lg:block relative"
          >
            {/* Outer glow wrapper */}
            <div className="relative glow-green">

              {/* Main dashboard card */}
              <div className="
                glass-card rounded-2xl p-6
                border border-bg-border
              ">

                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-text-muted text-xs font-medium uppercase tracking-wider">
                      Total Revenue
                    </p>
                    <p className="font-display font-bold text-3xl text-text-primary mt-1">
                      ₦48,291,500
                    </p>
                  </div>
                  <div className="
                    flex items-center gap-1.5 px-3 py-1.5
                    bg-success/10 text-success
                    rounded-full text-sm font-semibold
                  ">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +24.5%
                  </div>
                </div>

                {/* Fake chart bars */}
                <div className="flex items-end gap-2 h-28 mb-6">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map(
                    (height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          delay: 0.6 + i * 0.05,
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        className={`
                          flex-1 rounded-sm
                          ${i === 11
                            ? "bg-brand-green"
                            : i === 7 || i === 9
                            ? "bg-brand-green/50"
                            : "bg-bg-elevated"
                          }
                        `}
                      />
                    )
                  )}
                </div>

                {/* Transaction list */}
                <div className="flex flex-col gap-3">
                  {[
                    {
                      name: "Konga Nigeria Ltd",
                      amount: "+₦1,250,000",
                      time: "2 min ago",
                      positive: true,
                    },
                    {
                      name: "Vendor Payout — Lagos",
                      amount: "-₦340,000",
                      time: "15 min ago",
                      positive: false,
                    },
                    {
                      name: "Jumia Marketplace",
                      amount: "+₦890,500",
                      time: "1 hr ago",
                      positive: true,
                    },
                  ].map((tx) => (
                    <div
                      key={tx.name}
                      className="
                        flex items-center justify-between
                        p-3 rounded-xl bg-bg-elevated
                      "
                    >
                      <div className="flex items-center gap-3">
                        {/* Avatar placeholder */}
                        <div className="
                          w-8 h-8 rounded-full bg-brand-green/20
                          flex items-center justify-center
                          text-brand-green text-xs font-bold
                        ">
                          {tx.name[0]}
                        </div>
                        <div>
                          <p className="text-text-primary text-sm font-medium">
                            {tx.name}
                          </p>
                          <p className="text-text-muted text-xs">{tx.time}</p>
                        </div>
                      </div>
                      <span className={`
                        text-sm font-semibold
                        ${tx.positive ? "text-success" : "text-error"}
                      `}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom security badge */}
                <div className="
                  flex items-center gap-2 mt-4 pt-4
                  border-t border-bg-border
                  text-text-muted text-xs
                ">
                  <Shield className="w-3.5 h-3.5 text-brand-green" />
                  256-bit SSL encrypted · CBN Licensed · PCI-DSS Compliant
                </div>

              </div>

              {/* Floating pill — live transactions badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute -top-4 -right-4
                  glass-card rounded-xl px-4 py-2
                  border border-brand-green/20
                  flex items-center gap-2
                "
              >
                <Zap className="w-4 h-4 text-gold fill-gold" />
                <span className="text-text-primary text-sm font-semibold">
                  Live Transactions
                </span>
              </motion.div>

              {/* Floating pill — uptime badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="
                  absolute -bottom-4 -left-4
                  glass-card rounded-xl px-4 py-2
                  border border-success/20
                  flex items-center gap-2
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="
                    animate-ping absolute inline-flex h-full w-full
                    rounded-full bg-success opacity-75
                  " />
                  <span className="
                    relative inline-flex rounded-full h-2 w-2 bg-success
                  " />
                </span>
                <span className="text-text-primary text-sm font-semibold">
                  99.9% Uptime
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;