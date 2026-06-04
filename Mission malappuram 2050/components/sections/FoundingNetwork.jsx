"use client";

import { motion } from "framer-motion";
import { itemTransition, transition, viewport } from "@/lib/motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const groups = [
  {
    title: "Founding Team",
    members: ["Vision Architects", "Strategy Leaders", "Operations Heads"],
  },
  {
    title: "Founding Patrons",
    members: ["Distinguished Patrons", "Global Advocates", "Institutional Partners"],
  },
  {
    title: "Community Leadership",
    members: ["Constituency Leaders", "Sector Champions", "Youth Ambassadors"],
  },
];

export default function FoundingNetwork() {
  return (
    <Section id="founding-network">
      <SectionHeading
        eyebrow="Network"
        title="Founding Network"
        subtitle="The pioneers who believed in Malappuram's future before the world did."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {groups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 1, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={itemTransition(i)}
            whileHover={{ y: -6, transition: transition.springSoft }}
            className="glass-panel rounded-3xl p-8"
          >
            <h3 className="font-display text-2xl font-semibold text-brand-gold">
              {group.title}
            </h3>
            <ul className="mt-6 space-y-4">
              {group.members.map((member) => (
                <li
                  key={member}
                  className="border-b border-white/10 pb-4 text-white/70 last:border-0"
                >
                  {member}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
