"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  LandPlot,
  BadgeDollarSign,
  Globe,
  Briefcase,
  Users,
} from "lucide-react";

const stakeholders = [
  {
    id: "land",
    icon: LandPlot,
    title: "Land Investors",
    desc: "Provide land assets for community transformation projects with structured returns and long-term value creation.",
  },
  {
    id: "brand",
    icon: BadgeDollarSign,
    title: "Brand Investors",
    desc: "Invest in district brands, institutions, and platforms that scale across Malappuram and global chapters.",
  },
  {
    id: "global",
    icon: Globe,
    title: "Global Investors",
    desc: "Diaspora and international capital partners connecting Malappuram to global markets and opportunities.",
  },
  {
    id: "consultants",
    icon: Briefcase,
    title: "Project Consultants",
    desc: "Expert advisors guiding project execution, compliance, and excellence across all mission sectors.",
  },
  {
    id: "platform",
    icon: Users,
    title: "Mission Malappuram Community Platform",
    desc: "The central hub — 10 lakh members driving demand, capital, and execution across every initiative.",
  },
];

export default function StakeholderEcosystem() {
  const [active, setActive] = useState("platform");

  const current = stakeholders.find((s) => s.id === active);

  return (
    <Section id="stakeholders" className="bg-brand-slate">
      <SectionHeading
        eyebrow="Ecosystem"
        title="Stakeholder Network"
        subtitle="A interconnected network of investors, advisors, and community driving district transformation."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-3">
          {stakeholders.map(({ id, icon: Icon, title }) => (
            <motion.button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all ${
                active === id
                  ? "border-brand-gold/50 bg-brand-gold/10"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
              whileHover={{ x: 4 }}
            >
              <Icon
                size={24}
                className={active === id ? "text-brand-gold" : "text-white/50"}
              />
              <span className="font-medium">{title}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-panel flex flex-col justify-center rounded-3xl p-10 md:p-12"
          >
            {current && (
              <>
                <current.icon className="mb-6 text-brand-gold" size={40} />
                <h3 className="font-display text-3xl font-semibold">
                  {current.title}
                </h3>
                <p className="mt-4 text-lg text-white/60">{current.desc}</p>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-16 hidden justify-center lg:flex">
        <div className="relative flex h-64 w-64 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-8 rounded-full border border-brand-gold/20" />
          <div className="absolute inset-16 rounded-full border border-white/5" />
          <p className="text-center text-sm font-medium text-brand-gold">
            Mission
            <br />
            Malappuram
          </p>
        </div>
      </div>
    </Section>
  );
}
