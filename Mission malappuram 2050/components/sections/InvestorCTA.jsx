"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function InvestorCTA() {
  return (
    <Section id="cta-investor" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-premium" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/5 blur-3xl" />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-brand-gold"
        >
          Vision Ambassadors & Investors
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-section mx-auto max-w-4xl"
        >
          Become Part Of History
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="body-large mx-auto mt-6 max-w-2xl"
        >
          Join Mission Malappuram 2050. Register your interest. Become part of
          the community platform shaping the world&apos;s first ASI-prepared district.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#cta-final" variant="gold">
            Register Interest
          </Button>
          <Button href="#membership" variant="secondary">
            Join The Community Platform
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
