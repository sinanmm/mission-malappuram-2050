"use client";

import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Building2,
  Landmark,
  Cpu,
  Users,
} from "lucide-react";

const topics = [
  { icon: BookOpen, title: "AI Literacy", desc: "Every citizen understands AI fundamentals" },
  { icon: Briefcase, title: "Future Jobs", desc: "Workforce prepared for AI-augmented careers" },
  { icon: GraduationCap, title: "Education Redesign", desc: "Curriculum built for the ASI era" },
  { icon: Building2, title: "Business Transformation", desc: "Enterprises adopting AI-native models" },
  { icon: Landmark, title: "Governance Transformation", desc: "Research-driven policy and digital governance" },
  { icon: Cpu, title: "Technology Adoption", desc: "District-wide digital infrastructure" },
  { icon: Users, title: "Citizen Readiness", desc: "Community prepared before disruption arrives" },
];

export default function ASIPrepared() {
  return (
    <Section id="asi-prepared" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <SafeImage
          src={siteImages.asiPrepared}
          alt="AI and technology future"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-midnight/90" />
      </div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="The Future"
          title="ASI Prepared District"
          subtitle="Mission Malappuram is preparing a district for the Artificial Super Intelligence Era — the world's first."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel rounded-2xl p-6 transition hover:border-brand-gold/20"
            >
              <Icon className="mb-3 text-brand-gold" size={24} />
              <h3 className="font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/50">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="body-large mx-auto mt-16 max-w-3xl text-center"
        >
          Preparing society before the future arrives — not reacting after it
          has already changed everything.
        </motion.p>
      </div>
    </Section>
  );
}
