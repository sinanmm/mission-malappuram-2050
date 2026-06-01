"use client";

import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Sun, Droplets, Users, Home, Leaf } from "lucide-react";

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
          alt="Luxury wellness villa"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-midnight/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-midnight via-brand-midnight/80 to-transparent" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-brand-gold"
          >
            Featured Project
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-display max-w-3xl"
          >
            Homes That <span className="text-gradient-gold">Heal</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="body-large mt-6 max-w-xl"
          >
            Blue Zone Habitat — future housing where longevity, wellness, and
            sustainable living converge in premium Kerala landscapes.
          </motion.p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-6"
              >
                <Icon className="mb-3 text-brand-gold" size={24} />
                <h3 className="font-medium">{title}</h3>
                <p className="mt-2 text-sm text-white/50">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Button href="#projects" variant="gold">
              Explore Blue Zone Habitat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
