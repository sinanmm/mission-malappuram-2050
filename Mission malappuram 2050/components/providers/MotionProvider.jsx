"use client";

import { MotionConfig } from "framer-motion";

/** Standard framer-motion (no LazyMotion) — avoids mount animations failing silently. */
export default function MotionProvider({ children }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionConfig>
  );
}
