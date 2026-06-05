"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Vision", href: "#malappuram-20" },
  { label: "Platform", href: "#community-platform" },
  { label: "Projects", href: "#projects" },
  { label: "Governance", href: "#governance" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#cta-final" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ease-out ${
        scrolled
          ? "glass-panel border-b border-brand-gold/15 shadow-glass"
          : "border-b border-transparent bg-brand-mist/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-6 sm:h-16 sm:gap-3 md:px-12 lg:px-20">
        <div className="flex h-full min-w-0 max-w-[52%] items-center sm:max-w-[45%] md:max-w-none">
          <Logo
            variant="header"
            priority
            className={`max-w-full ${scrolled ? "brightness-110" : ""}`}
          />
        </div>

        <nav
          className="hidden min-w-0 items-center gap-3 xl:flex xl:gap-6"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-xs font-medium tracking-wide transition-colors duration-300 xl:text-sm ${
                scrolled
                  ? "text-white/75 hover:text-white"
                  : "text-brand-midnight/65 hover:text-brand-midnight"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta-investor"
            className="ml-1 shrink-0 whitespace-nowrap rounded-full bg-brand-gold px-4 py-2 text-xs font-medium leading-none text-brand-midnight transition hover:bg-brand-gold-light xl:px-5 xl:text-sm"
          >
            Join Mission
          </a>
        </nav>

        <button
          type="button"
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg xl:hidden ${
            scrolled
              ? "text-white hover:bg-white/10"
              : "text-brand-midnight hover:bg-brand-midnight/5"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-brand-gold/15 sm:max-h-[calc(100dvh-4rem)] xl:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-6 py-4"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-3 text-base text-white/90 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta-investor"
                onClick={() => setMobileOpen(false)}
                className="mt-3 rounded-full bg-brand-gold px-5 py-3 text-center text-sm font-medium text-brand-midnight"
              >
                Join Mission
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
