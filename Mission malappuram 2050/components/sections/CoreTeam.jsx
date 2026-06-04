"use client";

import { motion } from "framer-motion";
import { itemTransition, viewport } from "@/lib/motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";

const chairman = {
  name: "Dr Sahid Cholayil",
  role: "Founder & Chairman",
  image: siteImages.teamChairman,
};

export default function CoreTeam() {
  return (
    <Section id="core-team" className="bg-brand-slate">
      <SectionHeading
        eyebrow="Leadership"
        title="Core Team"
        subtitle="Visionary leadership driving Malappuram's transformation into a future-ready district."
      />

      <motion.div
        initial={{ opacity: 1, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={itemTransition(0)}
        whileHover={{ y: -4 }}
        className="group mx-auto max-w-sm overflow-hidden rounded-3xl sm:max-w-md"
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <SafeImage
            src={chairman.image}
            alt={chairman.name}
            fill
            className="object-cover object-top grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 90vw, 28rem"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
              {chairman.name}
            </h3>
            <p className="mt-1 text-sm text-white/85">{chairman.role}</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
