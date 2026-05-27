// ============================================================
// NAVBAR.TSX — Top navigation bar for Nexus Pay
// Features:
//   - Transparent on top, blurred background on scroll
//   - Mobile hamburger menu with animated open/close
//   - "Get Started" CTA button
//   - Smooth scroll to sections via anchor links
// Author: Temitope Israel Omoniyi
// ============================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data";

const Navbar = () => {
  // Tracks whether user has scrolled down — changes navbar background
  const [isScrolled, setIsScrolled] = useState(false);

  // Tracks whether mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ── Scroll listener ─────────────────────────────────────────
  // When user scrolls past 20px, we add a blurred background
  // to the navbar so it stays readable over page content
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Close mobile menu on resize ─────────────────────────────
  // If user resizes to desktop width, close the mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── Smooth scroll handler ────────────────────────────────────
  // Prevents default anchor jump and smoothly scrolls to section
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Main Navbar ───────────────────────────────────────── */}
      <motion.nav
        // Animate navbar in from the top on page load
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled
            ? "bg-bg-base/80 backdrop-blur-md border-b border-bg-border shadow-lg"
            : "bg-transparent"
          }
        `}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── Logo ──────────────────────────────────────────── */}
            {/* The Zap icon represents speed and power — core to
                a payment infrastructure brand */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-display font-bold text-xl text-text-primary">
                Nexus<span className="text-brand-green">Pay</span>
              </span>
            </motion.a>

            {/* ── Desktop Navigation Links ──────────────────────── */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  // Stagger each link's entrance animation
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="
                      text-text-secondary hover:text-text-primary
                      text-sm font-medium transition-colors duration-200
                      relative group cursor-pointer
                    "
                  >
                    {link.label}
                    {/* Animated underline on hover */}
                    <span className="
                      absolute -bottom-1 left-0 w-0 h-0.5
                      bg-brand-green rounded-full
                      transition-all duration-300
                      group-hover:w-full
                    " />
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* ── Desktop CTA Button ────────────────────────────── */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                className="
                  bg-brand-green hover:bg-brand-green-dark
                  text-white font-semibold px-6
                  transition-all duration-300
                  hover:shadow-lg hover:shadow-brand-green/20
                "
              >
                Get Started Free
              </Button>
            </motion.div>

            {/* ── Mobile Menu Toggle ────────────────────────────── */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-text-primary p-2 rounded-md hover:bg-bg-surface transition-colors"
              aria-label="Toggle mobile menu"
            >
              {/* Animate between Menu and X icons */}
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu Dropdown ──────────────────────────────── */}
      {/* AnimatePresence enables exit animations when menu closes */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
            fixed top-16 left-0 right-0 z-40
  bg-bg-base/98 backdrop-blur-md
  border-b border-bg-border
  md:hidden overflow-hidden
  shadow-xl shadow-black/20
            "
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  // Stagger each mobile link's entrance
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="
                    text-left text-text-secondary hover:text-text-primary
                    font-medium text-lg py-2
                    border-b border-bg-border last:border-0
                    transition-colors duration-200
                    cursor-pointer
                  "
                >
                  {link.label}
                </motion.button>
              ))}

              {/* CTA inside mobile menu */}
              <Button
                className="
                  bg-brand-green hover:bg-brand-green-dark
                  text-white font-semibold w-full mt-2
                "
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started Free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;