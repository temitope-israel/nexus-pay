// ============================================================
// SCROLLTOTOP.TSX — Floating scroll-to-top button
// Features:
//   - Only appears after user scrolls past 400px
//   - Smooth scroll back to top on click
//   - Animated entrance and exit (fade + scale)
//   - Fixed bottom-right position, above footer
//   - Shows scroll progress as a circular arc
// Author: Temitope Israel Omoniyi
// ============================================================

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  // Whether button is visible
  const [isVisible, setIsVisible] = useState(false);

  // Scroll progress from 0 to 100
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Calculate scroll progress as percentage
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Show button after 400px scroll
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle progress indicator values
  // circumference = 2 * PI * radius
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            fixed bottom-8 right-8 z-50
            w-12 h-12 rounded-full
            bg-bg-surface border border-bg-border
            flex items-center justify-center
            hover:border-brand-green/50
            hover:bg-brand-green/10
            transition-colors duration-300
            group
          "
        >
          {/* ── Progress Ring ────────────────────────────────── */}
          {/* SVG circle that draws itself as user scrolls down */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 48 48"
          >
            {/* Background track */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="var(--color-bg-border)"
              strokeWidth="2"
            />
            {/* Progress fill */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="var(--color-brand-green)"
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>

          {/* Arrow icon */}
          <ArrowUp className="
            w-4 h-4 text-text-secondary
            group-hover:text-brand-green
            transition-colors duration-300
            relative z-10
          " />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;