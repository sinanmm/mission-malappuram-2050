"use client";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";

const pillars = ["Future-ready", "Community-powered", "AI-prepared"];

export default function Malappuram20() {
  return (
    <Section id="malappuram-20">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal direction="left">
          <SectionHeading
            eyebrow="The Vision"
            title="Malappuram 2.0"
            subtitle="A new model for district transformation. Future-ready. Community-powered. AI-prepared."
            align="left"
          />
          <p className="body-text max-w-xl">
            Malappuram 2.0 represents a paradigm shift from traditional
            development to a community-owned ecosystem where every citizen
            becomes a stakeholder in the district&apos;s future. We are building
            infrastructure, institutions, and intelligence for the next era.
          </p>
          <StaggerGroup className="mt-8 space-y-4">
            {pillars.map((item) => (
              <StaggerItem
                key={item}
                className="flex items-center gap-3 text-brand-midnight/75"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                {item}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div className="glass-panel-light relative aspect-[4/5] overflow-hidden rounded-3xl">
            {/* Video background (no photo element) */}
            <video
              src="/can_you_slow_the_video_plAy_ti.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/35 to-transparent" />
          </div>
        </Reveal>
      </div>

      <StaggerGroup className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-12">
        <StaggerItem className="text-center sm:col-span-2 lg:col-span-1">
          <p className="font-display text-4xl font-semibold text-brand-gold md:text-5xl lg:text-6xl">
            10 LAKH
          </p>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-midnight/50">
            Community Members
          </p>
        </StaggerItem>
        <StaggerItem>
          <AnimatedCounter end={1000} label="Founding Members" />
        </StaggerItem>
        <StaggerItem>
          <AnimatedCounter end={16} label="Constituencies" />
        </StaggerItem>
        <StaggerItem>
          <AnimatedCounter end={50} suffix="+" label="Global Network" />
        </StaggerItem>
      </StaggerGroup>
    </Section>
  );
}
