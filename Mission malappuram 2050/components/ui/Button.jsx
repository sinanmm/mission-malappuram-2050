"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { transition } from "@/lib/motion";

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
  const reduceMotion = useReducedMotion();
  const base =
    "inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 sm:w-auto sm:px-8 sm:py-4 md:px-10 md:text-base";

  const isHttp = href.startsWith("http");
  const useAnchor =
    href.startsWith("#") || href.startsWith("mailto:") || isHttp;

  const anchorProps = isHttp
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const classNames = `${base} ${variants[variant]} ${className}`;

  const hoverProps = reduceMotion
    ? {}
    : {
        whileHover: { scale: 1.03, y: -2 },
        whileTap: { scale: 0.98 },
        transition: transition.spring,
      };

  const Wrapper = reduceMotion ? "div" : motion.div;

  return (
    <Wrapper {...hoverProps}>
      {useAnchor ? (
        <a href={href} onClick={onClick} className={classNames} {...anchorProps}>
          {children}
        </a>
      ) : (
        <Link href={href} onClick={onClick} className={classNames}>
          {children}
        </Link>
      )}
    </Wrapper>
  );
}
