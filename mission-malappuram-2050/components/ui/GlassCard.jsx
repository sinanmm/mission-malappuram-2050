"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scrollReveal, transition, viewport } from "@/lib/motion";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={`glass-panel rounded-2xl p-6 md:p-8 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      {...scrollReveal(delay)}
      whileHover={
        hover
          ? {
              y: -6,
              transition: { type: "spring", stiffness: 400, damping: 28 },
            }
          : undefined
      }
      className={`glass-panel rounded-2xl p-6 transition-shadow duration-500 hover:shadow-glow md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
