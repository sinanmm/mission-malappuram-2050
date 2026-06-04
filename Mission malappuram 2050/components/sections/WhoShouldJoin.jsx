"use client";

import { motion } from "framer-motion";
import { itemTransition, transition, viewport } from "@/lib/motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

const audiences = [
  "Entrepreneurs",
  "Investors",
  "Professionals",
  "NGO Leaders",
  "Educators",
  "Youth Leaders",
  "Community Builders",
  "Change Makers",
  "Future Thinkers",
];

export default function WhoShouldJoin() {
  return (
    <Section id="who-should-join" className="bg-brand-slate">
      <SectionHeading
        eyebrow="Join Us"
        title="Who Should Join?"
        subtitle="If you believe in building the future before it arrives, this platform is for you."
      />

      <div className="mx-auto grid max-w-3xl gap-4">
        {audiences.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 1, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={itemTransition(i)}
            whileHover={{ x: 4, transition: transition.springSoft }}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-colors duration-300 hover:border-brand-gold/30"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold/20">
              <Check className="text-brand-gold" size={18} />
            </div>
            <span className="text-lg font-medium">{item}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
