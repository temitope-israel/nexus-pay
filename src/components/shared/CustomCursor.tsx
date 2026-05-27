// ============================================================
// CUSTOMCURSOR.TSX — Custom mouse cursor for Nexus Pay
// Features:
//   - Outer ring that follows mouse with slight lag (smoothness)
//   - Inner dot that follows mouse instantly
//   - Ring scales up on hoverable elements (links, buttons)
//   - Hidden on mobile/touch devices (they have no cursor)
//   - Brand green color ties it to the design system
// Author: Temitope Israel Omoniyi
// ============================================================

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  // Current mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Whether cursor is hovering over a clickable element
  const [isHovering, setIsHovering] = useState(false);

  // Whether cursor is visible (hidden until first mouse move)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ── Mouse move handler ─────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // ── Hover detection ────────────────────────────────────
    // We listen for mouseenter/mouseleave on all interactive
    // elements and scale the cursor ring up when hovering
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Select all elements that should trigger hover state
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label"
    );

    window.addEventListener("mousemove", handleMouseMove);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup all listeners on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isVisible]);

  // Hide on touch devices — they have no mouse cursor
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* ── Outer Ring ──────────────────────────────────────── */}
      {/* Follows mouse with spring physics — creates a smooth
          trailing effect. Scales up 2.5x when hovering links */}
      <motion.div
        className="
          fixed top-0 left-0 z-[9999]
          w-8 h-8 rounded-full
          border-2 border-brand-green
          pointer-events-none
          mix-blend-difference
        "
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          // Spring physics for the trailing effect
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.5,
        }}
      />

      {/* ── Inner Dot ───────────────────────────────────────── */}
      {/* Follows mouse instantly with no lag — precise center
          point for accurate clicking */}
      <motion.div
        className="
          fixed top-0 left-0 z-[9999]
          w-1.5 h-1.5 rounded-full
          bg-brand-green
          pointer-events-none
        "
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          opacity: isVisible ? 1 : 0,
          // Dot shrinks when hovering — ring takes visual focus
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          // No spring on the dot — instant follow
          type: "tween",
          duration: 0.05,
        }}
      />
    </>
  );
};

export default CustomCursor;