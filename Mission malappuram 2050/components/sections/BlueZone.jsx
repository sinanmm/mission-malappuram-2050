"use client";

import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";
import { motion } from "framer-motion";
import { itemTransition, transition, viewport } from "@/lib/motion";
import Button from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { Sun, Droplets, Users, Home, Leaf } from "lucide-react";
import { projectLinks } from "@/lib/projectLinks";

const features = [
  { icon: Home, title: "Longevity Living", desc: "Architecture designed for extended healthy lifespan" },
  { icon: Leaf, title: "Wellness Architecture", desc: "Spaces that promote physical and mental wellbeing" },
  { icon: Sun, title: "Solar Lifestyle", desc: "Renewable energy integrated into every home" },
  { icon: Droplets, title: "Hydrogen Water", desc: "Advanced hydration systems for optimal health" },
  { icon: Users, title: "Community Wellness", desc: "Shared spaces for collective health practices" },
];

export default function BlueZone() {
  return (
    <section id="blue-zone" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <SafeImage
          src={siteImages.blueZone}
          alt="Blue Zone Habitat — modern wellness residential community at sunset"
          fill
          priority
          className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-midnight/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-midnight via-brand-midnight/80 to-transparent" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="mx-auto max-w-7xl">
          <StaggerGroup>
            <StaggerItem>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
                Featured Project
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="heading-display max-w-3xl text-white">
                Homes That <span className="text-gradient-gold">Heal</span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="body-large mt-6 max-w-xl text-white/80">
                Blue Zone Habitat — future housing where longevity, wellness, and
                sustainable living converge in premium Kerala landscapes.
              </p>
            </StaggerItem>
          </StaggerGroup>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 1, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={itemTransition(i)}
                whileHover={{ y: -4, transition: transition.springSoft }}
                className="glass-panel rounded-2xl p-6"
              >
                <Icon className="mb-3 text-brand-gold" size={24} />
                <h3 className="font-medium">{title}</h3>
                <p className="mt-2 text-sm text-white/50">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href={projectLinks.blueZoneHabitat} variant="gold">
              Visit Blue Zone Habitat
            </Button>
            <Button href="#projects" variant="secondary">
              All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
