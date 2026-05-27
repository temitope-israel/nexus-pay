// ============================================================
// FOOTER.TSX — Site footer for Nexus Pay
// Features:
//   - Four column layout (brand + 3 link groups)
//   - Social media links (Zero-dependency SVG configuration)
//   - CBN licensed + security badges row
//   - Bottom bar with copyright and legal links
//   - Subtle top border with green accent
//   - Responsive — stacks on mobile
// Author: Temitope Israel Omoniyi
// ============================================================

"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Zap, Shield, Lock, BadgeCheck } from "lucide-react";

// ── Footer Data ───────────────────────────────────────────────
const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "SDKs & Libraries", href: "#" },
      { label: "Status Page", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

// Lightweight SVG brand paths to prevent package resolution errors
const socialLinks = [
  {
    label: "X (Twitter)",
    href: "#",
    renderIcon: (className: string) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    renderIcon: (className: string) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
      </svg>
    ),
  },
{
    label: "Instagram",
    href: "#",
    renderIcon: (className: string) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        {/* Changed h to height here */}
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    renderIcon: (className: string) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

const complianceBadges = [
  { icon: BadgeCheck, label: "CBN Licensed" },
  { icon: Shield, label: "PCI-DSS Compliant" },
  { icon: Lock, label: "256-bit SSL" },
];

// ── Animation Variants ────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

// ── Footer Component ──────────────────────────────────────────
const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-bg-surface border-t border-bg-border w-full">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-green/50 to-transparent" />

      <div className="container-custom">
        {/* ── Main Footer Grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 py-16">

          {/* Brand Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="sm:col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-6"
          >
            <a href="#" className="flex items-center gap-2 w-fit group">
              <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-display font-bold text-xl text-text-primary">
                Nexus<span className="text-brand-green">Pay</span>
              </span>
            </a>

            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Africa's most developer-friendly payment infrastructure. Built in Nigeria. Trusted across the continent.
            </p>

            {/* Social links loop utilizing custom vector inline functions */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ renderIcon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    w-9 h-9 rounded-lg bg-bg-elevated border border-bg-border
                    flex items-center justify-center text-text-muted hover:text-brand-green
                    hover:border-brand-green/30 hover:bg-brand-green/5 transition-all duration-200
                  "
                >
                  {renderIcon("w-4 h-4")}
                </a>
              ))}
            </div>

            {/* Compliance badges */}
            <div className="flex flex-wrap gap-3">
              {complianceBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-elevated border border-bg-border text-text-muted text-xs font-medium">
                  <Icon className="w-3.5 h-3.5 text-brand-green" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {footerLinks.map((group, groupIndex) => (
            <motion.div
              key={group.heading}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={groupIndex * 0.1 + 0.1}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h4 className="font-display font-semibold text-sm text-text-primary uppercase tracking-wider">
                {group.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-text-muted text-sm hover:text-brand-green-light transition-colors duration-200 relative group w-fit block">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-green rounded-full transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          viewport={{ once: true }}
          className="border-t border-bg-border py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-text-muted text-xs text-center md:text-left">
            © {currentYear} Nexus Pay Technologies Ltd. All rights reserved.
            <span className="hidden sm:inline mx-2 text-bg-border">|</span>
            <br className="sm:hidden" />
            RC 1234567 — Lagos, Nigeria.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-text-muted text-xs hover:text-brand-green-light transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;