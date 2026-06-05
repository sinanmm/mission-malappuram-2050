"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { itemTransition, transition, viewport } from "@/lib/motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";
import { projectLinks } from "@/lib/projectLinks";
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
    href: projectLinks.blueZoneHabitat,
    featured: true,
  },
  {
    name: "Brand Versity",
    desc: "Digital marketing academy, agency & startup incubation",
    image: siteImages.projectBrandVersity,
    href: projectLinks.brandVersity,
    imageAlt: "BrandVersity — building entrepreneurs in digital marketing",
    imageClassName: "object-cover object-top",
    imageOverlay: "from-[#0a1835] via-[#0c1f3f]/75",
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
    desc: "Lead performance dynamics — lead accountability and team performance",
    image: siteImages.projectSeekk,
    href: projectLinks.seeaakk,
    imageAlt: "SEEAKK — Lead Performance Dynamics platform",
    imageClassName: "object-cover object-top",
    imageOverlay: "from-brand-midnight via-brand-midnight/70",
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
    name: "beondliving",
    desc: "Affordable, high-standard living for every family",
    image: siteImages.businessModel,
  },
  {
    name: "Consultancy Services",
    desc: "Expert advisory across sectors",
    image: siteImages.projectConsultancy,
  },
  {
    name: "3G Masda",
    desc: "Youth sports excellence and infrastructure",
    image: siteImages.projectSports,
    href: "https://www.3gmasda.com/",
  },
];

export default function Projects() {
  useEffect(() => {
    // (intentionally empty) kept for future client-only effects
  }, []);

  return (
    <Section id="projects" dark>
      <SectionHeading
        dark
        eyebrow="Project Ecosystem"
        title="Building the Future, Project by Project"
        subtitle="A portfolio of institutions, platforms, and developments powering Malappuram 2.0."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => {
          const slug = slugify(project.name);
          const isExternal = Boolean(project.href);

          return (
          <motion.a
            key={project.name}
            id={slug}
            href={project.href ?? `#${slug}`}
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            aria-label={
              isExternal
                ? `${project.name} — opens in a new tab`
                : project.name
            }
            initial={{ opacity: 1, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={itemTransition(i)}
            whileHover={{ y: -6, transition: transition.springSoft }}
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
                alt={project.imageAlt ?? project.name}
                fill
                className={`transition duration-700 group-hover:scale-105 ${
                  project.imageClassName ?? "object-cover"
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t to-transparent ${
                  project.imageOverlay ??
                  "from-brand-midnight via-brand-midnight/40"
                }`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
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
          );
        })}
      </div>
    </Section>
  );
}
