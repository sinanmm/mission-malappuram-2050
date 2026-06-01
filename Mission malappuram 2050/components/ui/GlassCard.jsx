"use client";

import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : {}}
      className={`glass-panel rounded-2xl p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
