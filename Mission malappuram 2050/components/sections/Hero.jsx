"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <SafeImage
          src={siteImages.hero}
          alt="Bright aerial sky view of a Malappuram-inspired landscape"
          fill
          loading="eager"
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/50 to-brand-mist/95" />
        <div className="absolute inset-0 bg-gradient-premium opacity-80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/70 bg-white/58 px-8 py-12 text-center shadow-premium backdrop-blur-xl md:px-12 md:py-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-brand-gold md:text-sm"
        >
          A Community Owned Platform
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="heading-display mx-auto max-w-5xl text-brand-midnight"
        >
          Mission Malappuram{" "}
          <span className="text-gradient-gold">2050</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="body-large mx-auto mt-8 max-w-3xl"
        >
          Building the World&apos;s First District Prepared for the Artificial
          Super Intelligence Era.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-lg text-brand-midnight/55 md:text-xl"
        >
          A district designed for the future, by its own people.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#malappuram-20" variant="primary">
            Explore Vision
          </Button>
          <Button href="#cta-investor" variant="secondary">
            Join The Mission
          </Button>
        </motion.div>
        </div>
      </div>

      <motion.a
        href="#malappuram-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-brand-midnight/45 transition hover:text-brand-midnight"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  );
}
