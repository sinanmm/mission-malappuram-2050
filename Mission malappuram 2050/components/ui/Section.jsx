"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "./Container";
import { transition, viewport } from "@/lib/motion";

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  light = false,
  dark = false,
  animate = true,
}) {
  const reduceMotion = useReducedMotion();
  const tone = dark
    ? "bg-brand-midnight text-white"
    : light
      ? "bg-white text-brand-midnight"
      : "bg-brand-mist text-brand-midnight";

  return (
    <section
      id={id}
      className={`section-padding relative min-w-0 overflow-hidden ${tone} ${className}`}
    >
      {animate && !reduceMotion ? (
        <motion.div
          initial={{ opacity: 1, y: 34, scale: 0.995 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewport}
          transition={transition.slow}
          className="will-change-transform"
        >
          <Container className={containerClassName}>{children}</Container>
        </motion.div>
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
