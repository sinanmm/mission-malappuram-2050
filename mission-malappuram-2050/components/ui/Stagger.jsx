"use client";

import { motion, useReducedMotion } from "framer-motion";
import { variants, viewport } from "@/lib/motion";

export function StaggerGroup({
  children,
  className = "",
  staggerChildren,
  delayChildren,
  ...props
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        ...variants.staggerContainer,
        visible: {
          transition: {
            staggerChildren: staggerChildren ?? 0.08,
            delayChildren: delayChildren ?? 0.06,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", ...props }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div className={className} variants={variants.staggerItem} {...props}>
      {children}
    </motion.div>
  );
}
