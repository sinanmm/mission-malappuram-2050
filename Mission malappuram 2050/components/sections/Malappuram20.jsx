"use client";

import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Malappuram20() {
  return (
    <Section id="malappuram-20">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
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
          <ul className="mt-8 space-y-4">
            {["Future-ready", "Community-powered", "AI-prepared"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-brand-midnight/75">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel-light relative aspect-[4/5] overflow-hidden rounded-3xl p-3">
          <SafeImage
            src={siteImages.malappuramLandscape}
            alt="Sunlit sky view over a Malappuram-inspired landscape"
            fill
            className="rounded-[1.35rem] object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-3 rounded-[1.35rem] bg-gradient-to-t from-brand-gold/35 to-transparent" />
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
        <div className="col-span-2 text-center md:col-span-1">
          <p className="font-display text-4xl font-semibold text-brand-gold md:text-5xl lg:text-6xl">
            10 LAKH
          </p>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-midnight/50">
            Community Members
          </p>
        </div>
        <AnimatedCounter end={1000} label="Founding Members" />
        <AnimatedCounter end={16} label="Constituencies" />
        <AnimatedCounter end={50} suffix="+" label="Global Network" />
      </div>
    </Section>
  );
}
