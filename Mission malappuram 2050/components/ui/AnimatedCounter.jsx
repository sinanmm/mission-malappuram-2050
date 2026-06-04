"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useReducedMotion } from "framer-motion";
import { scrollReveal, viewport } from "@/lib/motion";

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2.2,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: viewport.once, margin: viewport.margin });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? end : 0);

  useEffect(() => {
    if (!isInView || reduceMotion) {
      if (isInView) setCount(end);
      return;
    }

    let start = 0;
    const steps = duration * 60;
    const increment = end / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration, reduceMotion]);

  return (
    <motion.div ref={ref} className="text-center" {...scrollReveal(0)}>
      <div className="font-display text-4xl font-semibold tracking-tight text-brand-midnight md:text-5xl lg:text-6xl">
        {prefix}
        {count.toLocaleString("en-IN")}
        {suffix}
      </div>
      <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-midnight/50 md:text-sm">
        {label}
      </p>
    </motion.div>
  );
}
