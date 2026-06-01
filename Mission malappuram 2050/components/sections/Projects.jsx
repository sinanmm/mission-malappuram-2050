"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";
import { ArrowUpRight } from "lucide-react";

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const projects = [
  {
    name: "Blue Zone Habitat",
    desc: "Homes that heal — longevity living & wellness architecture",
    image: siteImages.projectBlueZone,
    featured: true,
  },
  {
    name: "Brand Versity",
    desc: "Brand education and creative excellence",
    image: siteImages.projectBrandVersity,
  },
  {
    name: "Entrepreneurs Business School",
    desc: "Next-generation entrepreneurship education",
    image: siteImages.projectBusinessSchool,
  },
  {
    name: "Genius Infravision",
    desc: "Smart infrastructure for future districts",
    image: siteImages.projectInfravision,
  },
  {
    name: "SEEAKK",
    desc: "Innovation and knowledge ecosystem",
    image: siteImages.projectSeekk,
  },
  {
    name: "AI School",
    desc: "Artificial intelligence literacy for all ages",
    image: siteImages.projectAiSchool,
  },
  {
    name: "3G Design School",
    desc: "Design thinking and creative innovation",
    image: siteImages.projectDesignSchool,
  },
  {
    name: "Thanal Valley",
    desc: "Sustainable valley development",
    image: siteImages.projectThanalValley,
  },
  {
    name: "Consultancy Services",
    desc: "Expert advisory across sectors",
    image: siteImages.projectConsultancy,
  },
  {
    name: "Sports Development Platform",
    desc: "Youth sports excellence and infrastructure",
    image: siteImages.projectSports,
  },
];

export default function Projects() {
  useEffect(() => {
    // (intentionally empty) kept for future client-only effects
  }, []);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Project Ecosystem"
        title="Building the Future, Project by Project"
        subtitle="A portfolio of institutions, platforms, and developments powering Malappuram 2.0."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            id={slugify(project.name)}
            href={`#${slugify(project.name)}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`group relative overflow-hidden rounded-3xl ${
              project.featured ? "md:col-span-2 md:row-span-1" : ""
            }`}
          >
            <div
              className={`relative ${
                project.featured ? "aspect-[21/9]" : "aspect-[4/3]"
              }`}
            >
              <SafeImage
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold md:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-white/60 md:text-base">
                      {project.desc}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="shrink-0 text-white/50 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-gold"
                    size={28}
                  />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
