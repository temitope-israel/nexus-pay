// ============================================================
// APP.TSX — Root application component for Nexus Pay
// Renders:
//   - Preloader (shows on first load, then fades out)
//   - CustomCursor (follows mouse on desktop)
//   - ScrollToTop (appears after scrolling down)
//   - All landing page sections in order
// Author: Temitope Israel Omoniyi
// ============================================================

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Sections
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

// Shared / Polish
import Preloader from "@/components/shared/Preloader";
import CustomCursor from "@/components/shared/CustomCursor";
import ScrollToTop from "@/components/shared/ScrollToTop";

function App() {
  // Controls whether the main page content is visible.
  // Stays false until the Preloader calls onComplete.
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* ── Custom Cursor ──────────────────────────────────── */}
      {/* Rendered outside the page so it's always on top */}
      <CustomCursor />

      {/* ── Preloader ──────────────────────────────────────── */}
      {/* AnimatePresence handles the exit animation when
          isLoaded becomes true and Preloader unmounts */}
      <AnimatePresence>
        {!isLoaded && (
          <Preloader onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      {/* ── Main Page ──────────────────────────────────────── */}
      {/* Fades in after preloader completes */}
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Hide default cursor on desktop since we have custom one */}
          <div className="[&_*]:cursor-none cursor-none">
            <Navbar />

            <main className="bg-bg-base">
              <Hero />
              <LogoStrip />
              <Features />
              <HowItWorks />
              <Pricing />
              <FAQ />
              <CTABanner />
            </main>
// Footer Page
            <Footer />

            {/* Scroll to top floating button */}
            <ScrollToTop />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default App;