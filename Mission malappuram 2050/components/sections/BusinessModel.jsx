"use client";

import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Layers, Handshake, Landmark, Users } from "lucide-react";

const modelSteps = [
  { icon: Layers, title: "Identify", desc: "Incomplete lands & stalled projects across Malappuram" },
  { icon: Handshake, title: "Partner", desc: "New capital, partnerships & institutional support" },
  { icon: Landmark, title: "Transform", desc: "Project collaboration & community platform activation" },
  { icon: Users, title: "Sweat Equity", desc: "Community members contribute effort for ownership stake" },
];

export default function BusinessModel() {
  return (
    <Section id="business-model">
      <SectionHeading
        eyebrow="Business Model"
        title="Opportunity Transformation Model"
        subtitle="Transforming underutilized lands and stalled projects through community-powered capital and collaboration."
      />

      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-3xl">
          <SafeImage
            src={siteImages.businessModel}
            alt="Real estate and development"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-display text-4xl font-semibold text-brand-gold md:text-5xl">
              3500+
            </p>
            <p className="text-sm text-white/70">Acres Identified</p>
          </div>
        </div>

        <div>
          <p className="body-text mb-8">
            Across Malappuram there are numerous incomplete lands, stalled
            projects, and underutilized opportunities. Mission Malappuram
            community platform helps transform them using new capital,
            partnerships, institutional support, and project collaboration.
          </p>

          <div className="glass-panel rounded-2xl border-brand-gold/20 p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">
              Core Model
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold">
              Sweat Equity Model
            </h3>
            <p className="mt-4 text-white/60">
              Community members contribute expertise, effort, and network value
              in exchange for ownership stakes — democratizing district
              development.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {modelSteps.map(({ icon: Icon, title, desc }, i) => (
          <GlassCard key={title} delay={i * 0.1}>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10">
              <Icon className="text-brand-gold" size={24} />
            </div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm text-white/50">{desc}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
