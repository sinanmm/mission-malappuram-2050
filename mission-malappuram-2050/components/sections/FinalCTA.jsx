"use client";

import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";
import Button from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  return (
    <section id="cta-final" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden sm:min-h-[90vh]">
      <div className="absolute inset-0">
        <SafeImage
          src={siteImages.finalCta}
          alt="Panoramic golden-hour sky view over a lush landscape"
          fill
          className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-mist via-white/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20 text-center sm:py-28 md:px-12 md:py-32">
        <Reveal direction="scale" className="rounded-2xl border border-white/70 bg-white/62 px-5 py-8 shadow-premium backdrop-blur-xl sm:rounded-[2rem] sm:px-8 sm:py-12 md:px-12 md:py-16">
          <StaggerGroup>
            <StaggerItem>
              <h2 className="heading-display text-brand-midnight">
                The Future Will Not Wait.
                <br />
                <span className="text-gradient-gold">Neither Should Malappuram.</span>
              </h2>
            </StaggerItem>

            <StaggerItem className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Button href="#malappuram-20" variant="primary">
                Explore Mission
              </Button>
              <Button href="#cta-investor" variant="secondary">
                Become A Vision Ambassador
              </Button>
              <Button href="mailto:info@missionmalappuram2050.org" variant="secondary">
                Contact Team
              </Button>
            </StaggerItem>
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  );
}
