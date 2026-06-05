"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";

export default function InvestorCTA() {
  return (
    <Section
      id="cta-investor"
      className="relative overflow-hidden !py-14 sm:!py-16 md:!py-20 lg:!py-24"
      animate={false}
    >
      <div className="absolute inset-0 bg-gradient-premium" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/5 blur-3xl" />

      <StaggerGroup className="relative z-10 mx-auto max-w-5xl rounded-3xl border border-white/70 bg-white/60 px-6 py-10 text-center shadow-glass backdrop-blur-xl sm:px-8 sm:py-12 md:px-12 md:py-14">
        <StaggerItem>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
            Vision Ambassadors & Investors
          </p>
        </StaggerItem>

        <StaggerItem>
          <h2 className="heading-section mx-auto max-w-4xl">
            Become Part Of History
          </h2>
        </StaggerItem>

        <StaggerItem>
          <p className="body-large mx-auto mt-6 max-w-2xl">
            Join Mission Malappuram 2050. Register your interest. Become part of
            the community platform shaping the world&apos;s first ASI-prepared district.
          </p>
        </StaggerItem>

        <StaggerItem className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#cta-final" variant="gold">
            Register Interest
          </Button>
          <Button href="#membership" variant="secondary">
            Join The Community Platform
          </Button>
        </StaggerItem>
      </StaggerGroup>
    </Section>
  );
}
