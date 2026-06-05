"use client";

import { motion } from "framer-motion";
import { itemTransition, transition, viewport } from "@/lib/motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  GraduationCap,
  Cpu,
  Heart,
  Building,
  Globe2,
  Wallet,
  Radio,
  Trophy,
  Leaf,
  TreePine,
} from "lucide-react";

const sectors = [
  { icon: GraduationCap, title: "Education & Research" },
  { icon: Cpu, title: "Technology & AI" },
  { icon: Heart, title: "Health & Wellness" },
  { icon: Building, title: "Real Estate & Infrastructure" },
  { icon: Globe2, title: "Global Chapters & Diaspora" },
  { icon: Wallet, title: "Finance & Investment" },
  { icon: Radio, title: "Media & Communication" },
  { icon: Trophy, title: "Sports & Entertainment" },
  { icon: Leaf, title: "Sustainability" },
  { icon: TreePine, title: "Environment" },
];

export default function MissionSectors() {
  return (
    <Section id="sectors">
      <SectionHeading
        eyebrow="Mission Sectors"
        title="Ten Pillars of Transformation"
        subtitle="A comprehensive sector model powering every dimension of district development."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/5 blur-3xl" />

        <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:grid-cols-3 sm:gap-4 md:gap-6 lg:grid-cols-5">
          {sectors.map(({ icon: Icon, title }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 1, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={itemTransition(i)}
              whileHover={{ scale: 1.05, y: -6, transition: transition.springSoft }}
              className="glass-panel group flex min-w-0 flex-col items-center rounded-2xl p-5 text-center transition hover:border-brand-gold/30 hover:shadow-glow sm:p-6"
            >
              <Icon
                className="mb-3 text-brand-gold transition group-hover:scale-110"
                size={28}
              />
              <p className="text-xs font-medium leading-tight text-white/80 md:text-sm">
                {title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
