// ============================================================
// FAQ.TSX — Frequently asked questions section for Nexus Pay
// Features:
//   - Shadcn Accordion component for accessible expand/collapse
//   - Only one item open at a time (single mode)
//   - Custom animated chevron icon rotates on open
//   - Scroll-triggered entrance animations
//   - Two-column layout on desktop for visual balance
//   - Bottom CTA directing to support
// Author: Temitope Israel Omoniyi
// ============================================================

import { motion, Variants } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data";

// ── Animation Variants ────────────────────────────────────────
// Added explicit 'Variants' typing to allow functional visible states
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

// ── FAQ Component ─────────────────────────────────────────────
const FAQ = () => {
  // Split FAQs into two columns for desktop layout
  // First half goes left, second half goes right
  const leftColumn = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumn = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">

        {/* ── Section Header ──────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="
            text-brand-green text-sm font-semibold
            uppercase tracking-widest mb-4
          ">
            FAQ
          </p>

          <h2 className="
            font-display font-bold
            text-4xl sm:text-5xl
            text-text-primary leading-tight mb-6
          ">
            Questions we get{" "}
            <span className="gradient-text">all the time</span>
          </h2>

          <p className="text-text-secondary text-lg leading-relaxed">
            If your question isn't here, our support team is one message
            away — and they actually respond.
          </p>
        </motion.div>

        {/* ── Two Column FAQ Grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">

          {/* Left Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true }}
          >
            {/* Accordion type="single" means only one item
                can be open at a time — better UX than multiple open */}
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {leftColumn.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`left-${index}`}
                  className="
                    glass-card rounded-xl border border-bg-border
                    px-6 overflow-hidden
                    data-[state=open]:border-brand-green/30
                    transition-all duration-300
                  "
                >
                  <AccordionTrigger
                    className="
                      flex items-center justify-between
                      py-5 text-left gap-4
                      text-text-primary font-semibold
                      hover:text-brand-green-light
                      hover:no-underline
                      transition-colors duration-200
                      [&>svg]:hidden
                      group
                    "
                  >
                    <span className="text-sm leading-relaxed">
                      {faq.question}
                    </span>

                    {/* Custom chevron — rotates 180deg when open
                        data-[state=open] is set by Radix on the trigger */}
                    <ChevronDown
                      className="
                        w-4 h-4 shrink-0 text-text-muted
                        transition-transform duration-300
                        group-data-[state=open]:rotate-180
                        group-data-[state=open]:text-brand-green
                      "
                    />
                  </AccordionTrigger>

                  <AccordionContent className="
                    text-text-muted text-sm leading-relaxed
                    pb-5 pt-0
                  ">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {rightColumn.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`right-${index}`}
                  className="
                    glass-card rounded-xl border border-bg-border
                    px-6 overflow-hidden
                    data-[state=open]:border-brand-green/30
                    transition-all duration-300
                  "
                >
                  <AccordionTrigger
                    className="
                      flex items-center justify-between
                      py-5 text-left gap-4
                      text-text-primary font-semibold
                      hover:text-brand-green-light
                      hover:no-underline
                      transition-colors duration-200
                      [&>svg]:hidden
                      group
                    "
                  >
                    <span className="text-sm leading-relaxed">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className="
                        w-4 h-4 shrink-0 text-text-muted
                        transition-transform duration-300
                        group-data-[state=open]:rotate-180
                        group-data-[state=open]:text-brand-green
                      "
                    />
                  </AccordionTrigger>

                  <AccordionContent className="
                    text-text-muted text-sm leading-relaxed
                    pb-5 pt-0
                  ">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

        </div>

        {/* ── Bottom Support CTA ───────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          viewport={{ once: true }}
          className="
            glass-card rounded-2xl border border-bg-border
            p-8 flex flex-col md:flex-row
            items-center justify-between gap-6
            text-center md:text-left
          "
        >
          {/* Grouped icon + layout copy seamlessly for mobile stack scaling */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Icon */}
            <div className="
              w-12 h-12 rounded-xl
              bg-brand-green/10 border border-brand-green/20
              flex items-center justify-center shrink-0
            ">
              <MessageCircle className="w-6 h-6 text-brand-green" />
            </div>

            <div>
              <h3 className="
                font-display font-bold text-lg
                text-text-primary mb-1
              ">
                Still have questions?
              </h3>
              <p className="text-text-muted text-sm">
                Our support team responds within 2 hours — Nigerian time.
              </p>
            </div>
          </div>

          <Button
            className="
              bg-brand-green hover:bg-brand-green-dark
              text-white font-semibold px-8 h-12
              rounded-xl shrink-0 w-full sm:w-auto
              transition-all duration-300
              hover:shadow-lg hover:shadow-brand-green/20
            "
          >
            Chat With Us
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;