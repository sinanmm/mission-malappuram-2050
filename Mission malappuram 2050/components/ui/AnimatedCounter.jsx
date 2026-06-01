"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60);
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
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
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
