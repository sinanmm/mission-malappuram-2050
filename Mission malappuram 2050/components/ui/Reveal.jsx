"use client";

import { motion, useReducedMotion } from "framer-motion";
import { transition, variants, viewport } from "@/lib/motion";

const directionVariants = {
  up: variants.fadeUp,
  down: variants.fadeDown,
  left: variants.fadeLeft,
  right: variants.fadeRight,
  scale: variants.scaleIn,
  fade: variants.fadeIn,
};

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration,
  as = "div",
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;
  const directionVariant = directionVariants[direction] ?? variants.fadeUp;

  if (reduceMotion) {
    const Static = as;
    return (
      <Static className={className} {...props}>
        {children}
      </Static>
    );
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={directionVariant}
      transition={{
        ...transition.default,
        delay,
        ...(duration != null ? { duration } : {}),
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
