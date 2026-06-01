"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import {
  Crown,
  UserCheck,
  MapPin,
  FolderKanban,
  HeartHandshake,
} from "lucide-react";

const roles = [
  {
    icon: Crown,
    title: "Founding Member",
    desc: "Pioneer stakeholders with priority access and governance participation.",
  },
  {
    icon: UserCheck,
    title: "Domain Consultant",
    desc: "Sector experts contributing knowledge across mission verticals.",
  },
  {
    icon: MapPin,
    title: "Constituency Leadership",
    desc: "Local leaders driving transformation in all 16 constituencies.",
  },
  {
    icon: FolderKanban,
    title: "Project Committee Roles",
    desc: "Hands-on execution across active mission projects.",
  },
  {
    icon: HeartHandshake,
    title: "NGO Leadership",
    desc: "Civil society partners amplifying community impact.",
  },
];

export default function Membership() {
  return (
    <Section id="membership">
      <SectionHeading
        eyebrow="Membership"
        title="Business Network Platform"
        subtitle="A membership ecosystem offering leadership opportunities, community capital access, and network power."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roles.map(({ icon: Icon, title, desc }, i) => (
          <GlassCard key={title} delay={i * 0.08} className="group cursor-pointer">
            <Icon className="mb-4 text-brand-gold transition group-hover:scale-110" size={28} />
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm text-white/50">{desc}</p>
            <motion.span
              className="mt-4 inline-block text-sm text-brand-gold opacity-0 transition group-hover:opacity-100"
            >
              Learn more →
            </motion.span>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
