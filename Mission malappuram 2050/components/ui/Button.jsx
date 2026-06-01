"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  primary:
    "bg-brand-gold text-brand-midnight shadow-glow hover:bg-brand-gold-light",
  secondary:
    "border border-brand-gold/30 bg-white/80 text-brand-midnight hover:border-brand-gold hover:bg-white",
  gold: "bg-brand-gold text-brand-midnight hover:bg-brand-gold-light",
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  onClick,
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 md:px-10 md:py-4 md:text-base";

  const isExternal =
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("http");

  const classNames = `${base} ${variants[variant]} ${className}`;

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {isExternal ? (
        <a href={href} onClick={onClick} className={classNames}>
          {children}
        </a>
      ) : (
        <Link href={href} onClick={onClick} className={classNames}>
          {children}
        </Link>
      )}
    </motion.div>
  );
}
