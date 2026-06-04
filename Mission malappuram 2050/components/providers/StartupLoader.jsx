"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Logo from "@/components/ui/Logo";

const MIN_VISIBLE_MS = 1200;

export default function StartupLoader() {
  const reduceMotion = useReducedMotion();
  const [isWindowLoaded, setIsWindowLoaded] = useState(false);
  const [isMinElapsed, setIsMinElapsed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsMinElapsed(true), MIN_VISIBLE_MS);

    if (document.readyState === "complete") {
      setIsWindowLoaded(true);
    } else {
      const onLoad = () => setIsWindowLoaded(true);
      window.addEventListener("load", onLoad, { once: true });
      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("load", onLoad);
      };
    }

    return () => window.clearTimeout(timer);
  }, []);

  const isVisible = useMemo(
    () => !(isWindowLoaded && isMinElapsed),
    [isWindowLoaded, isMinElapsed]
  );

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="startup-loader"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-brand-mist"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.2 : 0.5 } }}
          aria-live="polite"
          aria-label="Loading website"
        >
          <div className="flex flex-col items-center gap-6 px-6 text-center">
            <motion.div
              initial={{ opacity: 1, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.7 }}
            >
              <Logo variant="header" link={false} className="h-14 sm:h-16" />
            </motion.div>

            <div className="flex items-center gap-2">
              {[0, 1, 2].map((index) => (
                <motion.span
                  key={index}
                  className="h-2.5 w-2.5 rounded-full bg-brand-gold/80"
                  animate={{ y: [0, -7, 0], opacity: [0.45, 1, 0.45] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.12,
                  }}
                />
              ))}
            </div>

            <p className="text-xs uppercase tracking-[0.24em] text-brand-midnight/60">
              Preparing mission experience
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
