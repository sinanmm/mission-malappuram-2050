"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-panel border-b border-brand-gold/15 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-brand-midnight md:text-xl">
          Mission <span className="text-brand-gold">Malappuram</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-brand-midnight/70 transition-colors hover:text-brand-midnight"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta-investor"
            className="rounded-full bg-brand-gold px-5 py-2 text-sm font-medium text-brand-midnight transition hover:bg-brand-gold-light"
          >
            Join Mission
          </a>
        </nav>

        <button
          type="button"
          className="text-brand-midnight lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-panel border-t border-brand-gold/15 lg:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-white/90"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta-investor"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-brand-gold px-6 py-3 text-center font-medium text-brand-midnight"
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
