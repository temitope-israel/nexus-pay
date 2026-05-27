// ============================================================
// LOGOSTRIP.TSX — Trusted by marquee section for Nexus Pay
// Features:
//   - Infinite horizontal scroll animation (no JS, pure CSS)
//   - Duplicated list to create seamless loop illusion
//   - Fade edges using CSS mask gradient
//   - Subtle entrance animation on scroll
// Author: Temitope Israel Omoniyi
// ============================================================

import { motion, Variants } from "framer-motion";
import { trustedCompanies } from "@/data";

// ── Animation Variant ─────────────────────────────────────────
// Explicitly typed as Variants for absolute codebase consistency
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const LogoStrip = () => {
  // We duplicate the companies array so the marquee loops seamlessly.
  // When the first set scrolls out of view, the duplicate takes over —
  // creating the illusion of infinite scroll.
  const duplicated = [...trustedCompanies, ...trustedCompanies];

  return (
    <section className="py-16 border-y border-bg-border relative overflow-hidden">

      {/* ── Section Label ─────────────────────────────────────── */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        // whileInView triggers the animation when element enters viewport
        // viewport once:true means it only animates once, not every scroll
        viewport={{ once: true }}
        className="
          text-center text-text-muted text-sm
          font-medium uppercase tracking-widest
          mb-10
        "
      >
        Trusted by leading African businesses
      </motion.p>

      {/* ── Marquee Wrapper ───────────────────────────────────── */}
      {/* overflow-hidden clips the scrolling content to this container */}
      {/* The mask-image fades the left and right edges to transparent
          giving a clean "fade out" effect on both sides */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* ── Scrolling Track ─────────────────────────────────── */}
        {/* animate-marquee is a custom Tailwind animation we define below
            It translates the track from 0 to -50% (half the total width)
            Since the list is duplicated, -50% = exactly one full set
            This creates the seamless loop */}
        {/* Note: changed gap-0 to gap-12 and dropped individual border-r to avoid snapping glitches */}
        <div className="flex animate-marquee gap-12 w-max items-center">
          {duplicated.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="
                flex items-center gap-3
                py-3 shrink-0 select-none
              "
            >
              {/* Company initial avatar */}
              <div className="
                w-8 h-8 rounded-lg
                bg-brand-green/10 border border-brand-green/20
                flex items-center justify-center
                text-brand-green text-xs font-bold
                shrink-0
              ">
                {company.name[0]}
              </div>

              {/* Company name and industry */}
              <div className="flex flex-col">
                <span className="
                  text-text-secondary font-semibold text-sm
                  whitespace-nowrap
                ">
                  {company.name}
                </span>
                <span className="text-text-muted text-xs whitespace-nowrap">
                  {company.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default LogoStrip;