"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";

const team = [
  {
    name: "Dr Sahid Cholayil",
    role: "Founder & Chairman",
    image: siteImages.teamChairman,
    featured: true,
  },
  {
    name: "Core Team",
    role: "Executive Leadership",
    image: siteImages.teamExecutive,
  },
  {
    name: "Institution Leadership",
    role: "3G Institute & Policy",
    image: siteImages.teamInstitution,
  },
];

export default function CoreTeam() {
  return (
    <Section id="core-team" className="bg-brand-slate">
      <SectionHeading
        eyebrow="Leadership"
        title="Core Team"
        subtitle="Visionary leadership driving Malappuram's transformation into a future-ready district."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group overflow-hidden rounded-3xl ${
              member.featured ? "md:col-span-1" : ""
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <SafeImage
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-brand-gold">{member.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
