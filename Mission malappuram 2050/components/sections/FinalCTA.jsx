"use client";

import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section id="cta-final" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <SafeImage
          src={siteImages.finalCta}
          alt="Panoramic golden-hour sky view over a lush landscape"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-mist via-white/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center md:px-12">
        <div className="rounded-[2rem] border border-white/70 bg-white/62 px-8 py-12 shadow-premium backdrop-blur-xl md:px-12 md:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-display text-brand-midnight"
        >
          The Future Will Not Wait.
          <br />
          <span className="text-gradient-gold">Neither Should Malappuram.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#malappuram-20" variant="primary">
            Explore Mission
          </Button>
          <Button href="#cta-investor" variant="secondary">
            Become A Vision Ambassador
          </Button>
          <Button href="mailto:info@missionmalappuram2050.org" variant="secondary">
            Contact Team
          </Button>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
