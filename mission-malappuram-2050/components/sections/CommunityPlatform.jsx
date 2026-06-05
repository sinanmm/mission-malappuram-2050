"use client";

import { motion } from "framer-motion";
import { itemTransition, transition, viewport } from "@/lib/motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Users, TrendingUp, Network, Building2 } from "lucide-react";

const ecosystem = [
  { icon: Users, value: "10 Lakh", label: "Community Members" },
  { icon: TrendingUp, value: "More Members", label: "More Business Opportunities" },
  { icon: Network, value: "Network Effect", label: "Collective Economic Power" },
  { icon: Building2, value: "Platform", label: "Community-Owned Infrastructure" },
];

export default function CommunityPlatform() {
  return (
    <Section id="community-platform" className="bg-brand-slate">
      <SectionHeading
        eyebrow="The Model"
        title="A Community Owned Platform"
        subtitle="Mission Malappuram is not simply a project. It is a living ecosystem owned by its people."
      />

      <motion.div
        initial={{ opacity: 1, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={transition.slow}
        className="relative mx-auto mb-20 max-w-2xl"
      >
        <div className="glass-panel rounded-3xl p-6 text-center shadow-glow sm:p-10 md:p-12">
          <p className="font-display text-4xl font-semibold text-brand-gold sm:text-6xl md:text-7xl lg:text-8xl">
            10 Lakh
          </p>
          <p className="mt-3 text-base text-white/60 sm:mt-4 sm:text-lg">
            Community Members Target
          </p>
          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "35%" }}
              viewport={viewport}
              transition={{ ...transition.slow, duration: 1.4 }}
              className="h-full rounded-full bg-gradient-to-r from-brand-gold to-brand-emerald"
            />
          </div>
          <p className="mt-3 text-xs text-white/40">Building the network</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {ecosystem.map(({ icon: Icon, value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 1, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={itemTransition(i)}
            whileHover={{ y: -5, transition: transition.springSoft }}
            className="glass-panel group rounded-2xl p-8 text-center transition hover:border-brand-gold/30"
          >
            <Icon className="mx-auto mb-4 text-brand-gold transition group-hover:scale-110" size={32} />
            <p className="font-display text-xl font-semibold">{value}</p>
            <p className="mt-2 text-sm text-white/50">{label}</p>
          </motion.div>
        ))}
      </div>

      <p className="body-large mx-auto mt-16 max-w-3xl text-center">
        More members means more business. More business means more opportunity.
        More opportunity means a stronger Malappuram for everyone.
      </p>
    </Section>
  );
}
