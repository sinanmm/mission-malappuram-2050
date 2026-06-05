"use client";

import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";
import { motion } from "framer-motion";
import { itemTransition, transition, viewport } from "@/lib/motion";
import Button from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { projectLinks } from "@/lib/projectLinks";
import { GraduationCap, Megaphone, Rocket } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Academy",
    desc: "Master digital marketing through creativity, strategy, and real-world application.",
  },
  {
    icon: Megaphone,
    title: "Agency",
    desc: "Work with live clients, build your portfolio, and gain practical industry experience.",
  },
  {
    icon: Rocket,
    title: "Startup Incubation",
    desc: "Turn ideas into businesses with mentorship, investor access, and launch support.",
  },
];

export default function BrandVersity() {
  return (
    <section id="brand-versity" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <SafeImage
          src={siteImages.brandVersity}
          alt="BrandVersity — building entrepreneurs in digital marketing"
          fill
          className="object-cover object-top transition-transform duration-[1400ms] ease-out hover:scale-[1.02]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0c1f3f]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1835] via-[#0c1f3f]/90 to-[#0c1f3f]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1835]/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="mx-auto max-w-7xl">
          <StaggerGroup>
            <StaggerItem>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-sky-300/90">
                Project Ecosystem
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="heading-display max-w-3xl text-white">
                Building Entrepreneurs in{" "}
                <span className="text-gradient-gold">Digital Marketing</span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="body-large mt-6 max-w-xl text-white/80">
                BrandVersity unites education, digital marketing, and
                entrepreneurship — where learning becomes a registered business
                with real clients.
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
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md"
              >
                <Icon className="mb-3 text-sky-300" size={24} />
                <h3 className="font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/55">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href={projectLinks.brandVersity} variant="gold">
              Visit BrandVersity
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
