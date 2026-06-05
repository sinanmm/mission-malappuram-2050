"use client";

import { motion, useReducedMotion } from "framer-motion";
import { transition, variants, viewport } from "@/lib/motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  dark = false,
}) {
  const reduceMotion = useReducedMotion();
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  const eyebrowColor = light ? "text-brand-emerald" : "text-brand-gold";
  const textColor = dark
    ? "text-white"
    : light
      ? "!text-brand-midnight"
      : "text-brand-midnight";
  const subtitleColor = dark
    ? "text-white/70"
    : "!text-brand-midnight/70";

  if (reduceMotion) {
    return (
      <div className={`mb-16 max-w-4xl md:mb-20 ${alignClass}`}>
        {eyebrow && (
          <p
            className={`mb-4 text-xs font-medium uppercase tracking-[0.25em] ${eyebrowColor}`}
          >
            {eyebrow}
          </p>
        )}
        <h2 className={`heading-section ${textColor}`}>{title}</h2>
        {subtitle && (
          <p className={`body-large mt-6 ${subtitleColor}`}>{subtitle}</p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      className={`mb-16 max-w-4xl md:mb-20 ${alignClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants.staggerContainer}
    >
      {eyebrow && (
        <motion.p
          variants={variants.staggerItem}
          transition={transition.fast}
          className={`mb-4 text-xs font-medium uppercase tracking-[0.25em] ${eyebrowColor}`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={variants.staggerItem}
        className={`heading-section ${textColor}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={variants.staggerItem}
          className={`body-large mt-6 ${subtitleColor}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
