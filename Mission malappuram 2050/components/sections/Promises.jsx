"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

const deliverables = [
  { item: "Platform Building", progress: 100 },
  { item: "Company Formation", progress: 100 },
  { item: "Office & Infrastructure", progress: 100 },
];

export default function Promises() {
  return (
    <Section id="promises" className="bg-brand-slate">
      <SectionHeading
        eyebrow="Credibility"
        title="Promises & Delivery"
        subtitle="We don't just envision the future — we build it. Track our commitment to execution."
      />

      <div className="mx-auto max-w-2xl space-y-8">
        {deliverables.map(({ item, progress }, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-emerald" size={24} />
                <span className="text-lg font-medium">{item}</span>
              </div>
              <span className="font-display text-2xl font-semibold text-brand-gold">
                {progress}%
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
                className="h-full rounded-full bg-gradient-to-r from-brand-emerald to-brand-gold"
              />
            </div>
            <p className="mt-2 text-sm text-white/40">Done</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
