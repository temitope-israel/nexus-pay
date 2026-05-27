// ============================================================
// PRELOADER.TSX — Page entry animation for Nexus Pay
// Features:
//   - Fullscreen dark overlay on first load
//   - Logo animates in with stagger
//   - Loading bar fills from left to right
//   - Entire preloader fades out after ~2 seconds
//   - onComplete callback tells App.tsx to show the page
// Author: Temitope Israel Omoniyi
// ============================================================

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

interface PreloaderProps {
  // Called when animation finishes — parent uses this
  // to know when to show the actual page content
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // ── Simulate loading progress ──────────────────────────
    // Increments progress bar over ~1.5 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Faster at start, slower at end — feels more natural
        return prev + (prev < 70 ? 4 : 2);
      });
    }, 40);

    // ── Hide preloader after 2.2 seconds ──────────────────
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    // ── Notify parent after exit animation ────────────────
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="
            fixed inset-0 z-[99999]
            bg-bg-base
            flex flex-col items-center justify-center gap-8
          "
        >
          {/* ── Logo Animation ──────────────────────────────── */}
          <div className="flex flex-col items-center gap-4">

            {/* Icon — scales in */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="
                w-16 h-16 rounded-2xl bg-brand-green
                flex items-center justify-center
                shadow-2xl shadow-brand-green/30
              "
            >
              <Zap className="w-8 h-8 text-white fill-white" />
            </motion.div>

            {/* Wordmark — fades up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-baseline gap-1"
            >
              <span className="
                font-display font-black text-4xl text-text-primary
              ">
                Nexus
              </span>
              <span className="
                font-display font-black text-4xl text-brand-green
              ">
                Pay
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-text-muted text-sm font-medium tracking-widest uppercase"
            >
              Built in Nigeria. Engineered for the World.
            </motion.p>
          </div>

          {/* ── Progress Bar ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "200px" }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="relative h-0.5 bg-bg-border rounded-full overflow-hidden"
            style={{ width: "200px" }}
          >
            {/* Filling bar */}
            <motion.div
              className="absolute inset-y-0 left-0 bg-brand-green rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;