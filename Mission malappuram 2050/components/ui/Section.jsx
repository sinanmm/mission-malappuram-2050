"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  light = false,
}) {
  return (
    <section
      id={id}
      className={`section-padding relative overflow-hidden ${
        light ? "bg-white text-brand-midnight" : "bg-brand-mist text-brand-midnight"
      } ${className}`}
    >
      <Container className={containerClassName}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
