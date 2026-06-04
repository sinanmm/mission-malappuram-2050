"use client";

import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";
import { motion, useScroll, useTransform } from "framer-motion";
import { itemTransition, transition, viewport } from "@/lib/motion";
import { useRef } from "react";
import Section from "@/components/ui/Section";
import {
  Globe2,
  Landmark,
  Leaf,
  Sparkles,
  Users,
  Waypoints,
} from "lucide-react";

const ecosystemDrivers = [
  "entrepreneurship",
  "innovation",
  "local capital",
  "youth",
  "technology",
  "research",
  "community ownership",
];

const metrics = [
  {
    value: "10 LAKH+",
    label: "Community Members",
    icon: Users,
  },
  {
    value: "1000+",
    label: "Founding Members",
    icon: Sparkles,
  },
  {
    value: "16",
    label: "Constituencies",
    icon: Landmark,
  },
  {
    value: "GLOBAL",
    label: "Partnership Network",
    icon: Globe2,
  },
];

const floatingStats = [
  {
    title: "Future economy",
    value: "Human-first",
    className: "-left-4 top-10 md:-left-8",
  },
  {
    title: "Sustainability index",
    value: "District scale",
    className: "right-3 top-8 md:right-8",
  },
  {
    title: "Capital model",
    value: "Community-owned",
    className: "bottom-6 right-4 md:bottom-10 md:right-10",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyMission() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const contentY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <Section
      id="why-mission"
      className="bg-[#120d08] text-white"
      containerClassName="max-w-[1440px]"
    >
      <div ref={sectionRef} className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#120d08] px-6 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:px-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(246,215,122,0.18),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(47,143,131,0.22),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,244,212,0.08),transparent_34%)]" />
        <div className="absolute -left-20 top-1/4 h-56 w-56 rounded-full bg-[#d8a64a]/12 blur-3xl md:h-72 md:w-72" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl md:h-80 md:w-80" />
        <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-white/5 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, index) => (
            <motion.span
              key={index}
              className="absolute h-1.5 w-1.5 rounded-full bg-[#f6d77a]/60"
              style={{
                left: `${8 + index * 7.4}%`,
                top: `${12 + (index % 4) * 18}%`,
              }}
              animate={{
                y: [0, -18, 0],
                opacity: [0.18, 0.55, 0.18],
              }}
              transition={{
                duration: 4 + index * 0.25,
                delay: index * 0.14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 1, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ ...viewport, margin: "-120px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2.25rem] bg-gradient-to-br from-[#f6d77a]/20 via-transparent to-emerald-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_35px_90px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-[#1c1510]">
                <SafeImage
                  src={siteImages.whyMission}
                  alt="Cinematic aerial landscape representing a sustainable future for Malappuram"
                  fill
                  className="object-cover object-center scale-[1.04]"
                  sizes="(max-width: 1280px) 100vw, 44vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.02)_0%,rgba(10,10,10,0.18)_38%,rgba(9,7,6,0.72)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,220,140,0.22),transparent_32%),radial-gradient(circle_at_75%_25%,rgba(47,143,131,0.18),transparent_28%)]" />

                <motion.div
                  style={{ y: badgeY }}
                  initial={{ opacity: 1, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white/75 backdrop-blur-xl md:left-7 md:top-7"
                >
                  <Leaf className="h-3.5 w-3.5 text-[#f6d77a]" />
                  Future District Vision
                </motion.div>

                {floatingStats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 1, y: 20, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    viewport={viewport}
                    transition={{
                      duration: 0.7,
                      delay: 0.22 + index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`absolute hidden rounded-2xl border border-white/12 bg-white/10 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl md:block ${stat.className}`}
                  >
                    <p className="text-[10px] uppercase tracking-[0.26em] text-white/55">
                      {stat.title}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/90">
                      {stat.value}
                    </p>
                  </motion.div>
                ))}

                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-6 top-1/3 hidden h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200/20 bg-emerald-300/10 shadow-[0_0_40px_rgba(74,222,128,0.12)] backdrop-blur-xl md:flex"
                >
                  <Waypoints className="h-6 w-6 text-emerald-200" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 1, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.85, delay: 0.35 }}
                  className="absolute inset-x-5 bottom-5 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(19,19,19,0.56),rgba(255,255,255,0.08))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:inset-x-7 md:bottom-7 md:p-6"
                >
                  <p className="max-w-md font-display text-2xl leading-tight text-[#fff8eb] md:text-[2rem]">
                    A District Built on Sustainability,
                    <span className="block text-[#f6d77a]">
                      Powered by Innovation,
                    </span>
                    <span className="block text-white/80">Driven by People.</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: contentY }}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ ...viewport, margin: "-120px" }}
            className="relative"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 rounded-full border border-[#f6d77a]/20 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.38em] text-[#f6d77a]"
            >
              <span className="h-2 w-2 rounded-full bg-[#f6d77a]" />
              OUR PURPOSE
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mt-7 max-w-2xl font-display text-3xl leading-[0.95] tracking-[-0.04em] text-[#fff7ea] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              A Sustainable
              <span className="block bg-gradient-to-r from-[#fff7ea] via-[#f6d77a] to-[#dbeadf] bg-clip-text text-transparent">
                Malappuram Beyond
              </span>
              <span className="block text-white/92">GCC Dependency</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-2xl text-lg font-light leading-8 text-white/68 md:text-[1.15rem]"
            >
              Mission Malappuram 2050 aims to create a self-sustaining future
              economy powered by visionary people, district-scale systems, and a
              local ownership model that keeps prosperity rooted in Malappuram.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {ecosystemDrivers.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 1, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3, scale: 1.03 }}
                  viewport={viewport}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm tracking-[0.04em] text-white/78 backdrop-blur-xl"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {metrics.map(({ value, label, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 1, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                    borderColor: "rgba(246,215,122,0.28)",
                  }}
                  viewport={viewport}
                  transition={{
                    duration: 0.65,
                    delay: 0.18 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,215,122,0.16),transparent_32%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">
                        Strategic Scale
                      </p>
                      <p className="mt-4 font-display text-2xl leading-none text-[#fff8eb] sm:text-3xl lg:text-4xl">
                        {value}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/62">
                        {label}
                      </p>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-[#f6d77a]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
