"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const layers = [
  {
    level: "Research & Policy",
    entity: "3G Institute of Research & Policy Studies",
    desc: "Evidence-based policy, research, and future readiness frameworks.",
  },
  {
    level: "Founder Leadership",
    entity: "Founder Council",
    desc: "Vision stewardship and strategic direction for the mission.",
  },
  {
    level: "Executive",
    entity: "Executive Governance",
    desc: "Operational leadership and mission execution oversight.",
  },
  {
    level: "Advisory",
    entity: "Advisory Layer",
    desc: "Domain experts guiding sector-specific excellence.",
  },
  {
    level: "Ambassadors",
    entity: "Vision Ambassadors",
    desc: "Global advocates spreading the Malappuram 2050 vision.",
  },
  {
    level: "Implementation",
    entity: "Youth Implementation Teams",
    desc: "Young leaders executing on-ground transformation.",
  },
];

export default function Governance() {
  return (
    <Section id="governance" className="bg-brand-slate">
      <SectionHeading
        eyebrow="Governance"
        title={
          <>
            Community-Owned.
            <br />
            Founder-Controlled.
            <br />
            Institution-Driven.
            <br />
            Youth-Operated.
          </>
        }
        subtitle="A layered governance architecture ensuring accountability, expertise, and community ownership."
      />

      <div className="mx-auto max-w-3xl space-y-4">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.entity}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-panel group flex flex-col gap-2 rounded-2xl p-6 transition hover:border-brand-gold/20 md:flex-row md:items-center md:justify-between md:p-8"
            style={{ marginLeft: `${i * 12}px`, marginRight: `${(layers.length - 1 - i) * 12}px` }}
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">
                {layer.level}
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold md:text-2xl">
                {layer.entity}
              </h3>
            </div>
            <p className="max-w-md text-sm text-white/50 md:text-right">
              {layer.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
