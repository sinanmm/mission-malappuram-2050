"use client";

import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { BookOpen, Brain, Scale, Lightbulb, Shield } from "lucide-react";

const areas = [
  { icon: BookOpen, title: "Research", desc: "Evidence-based district policy" },
  { icon: Brain, title: "AI", desc: "Artificial intelligence readiness frameworks" },
  { icon: Scale, title: "Policy", desc: "Governance and regulatory innovation" },
  { icon: Lightbulb, title: "Innovation", desc: "Future industry development models" },
  { icon: Shield, title: "Future Readiness", desc: "ASI-era societal preparation" },
];

export default function Research() {
  return (
    <Section id="research">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <SafeImage
            src={siteImages.research}
            alt="IIT Madras Research Park"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">HQ</p>
            <p className="font-display text-xl font-semibold">
              IIT Madras Research Park
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Research Foundation"
            title="3G Institute of Research & Policy Studies"
            subtitle="Mission Malappuram 2050 is a research outcome — built on rigorous analysis, not aspiration alone."
            align="left"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {areas.map(({ icon: Icon, title, desc }, i) => (
              <GlassCard key={title} delay={i * 0.05} className="!p-5">
                <Icon className="mb-2 text-brand-gold" size={22} />
                <h3 className="text-sm font-medium">{title}</h3>
                <p className="mt-1 text-xs text-white/50">{desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
