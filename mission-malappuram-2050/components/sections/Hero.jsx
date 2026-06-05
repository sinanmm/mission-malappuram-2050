"use client";

import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import SafeImage from "@/components/ui/SafeImage";
import { siteImages } from "@/lib/images";

const highlights = [
  { value: "2050", label: "Vision horizon" },
  { value: "1st", label: "ASI-prepared district" },
  { value: "100%", label: "Community owned" },
];

const pillars = ["Future-ready", "Community-powered", "AI-prepared"];

/** CSS entrance — always visible without waiting for Framer Motion. */
const enter = (delayMs) =>
  `animate-slide-up opacity-0 [animation-delay:${delayMs}ms] [animation-fill-mode:forwards]`;

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-brand-mist" />
      <div className="pointer-events-none absolute -left-16 top-16 h-48 w-48 rounded-full bg-brand-gold/25 blur-3xl sm:-left-24 sm:h-80 sm:w-80 md:h-[28rem] md:w-[28rem]" />
      <div className="pointer-events-none absolute -right-8 bottom-0 h-64 w-64 rounded-full bg-brand-emerald/20 blur-3xl sm:-right-16 sm:h-96 sm:w-96" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(36,22,10,0.07) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-[calc(var(--nav-height)+1.5rem)] sm:pb-20 md:px-12 lg:px-20 lg:pb-24">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-5 xl:col-span-5">
            <div
              className={`mb-8 inline-flex items-center gap-3 rounded-full border border-brand-gold/25 bg-white/70 px-4 py-2 shadow-glass backdrop-blur-md ${enter(100)}`}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                <Sparkles size={14} strokeWidth={2.25} />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-midnight/70 sm:text-xs sm:tracking-[0.22em] md:text-sm">
                A community owned platform
              </span>
            </div>

            <h1
              className={`heading-display text-left text-brand-midnight ${enter(200)}`}
            >
              Mission
              <br />
              Malappuram{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand-gold via-yellow-500 to-brand-emerald bg-clip-text text-transparent">
                  2050
                </span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-2 rounded-full bg-brand-gold/25 md:-bottom-2 md:h-3"
                  aria-hidden
                />
              </span>
            </h1>

            <p className={`body-large mt-8 max-w-xl text-left text-brand-midnight/80 ${enter(350)}`}>
              Building the world&apos;s first district prepared for the
              Artificial Super Intelligence era.
            </p>

            <p
              className={`mt-4 max-w-lg text-base text-brand-midnight/60 md:text-lg ${enter(450)}`}
            >
              A district designed for the future, by its own people.
            </p>

            <ul className={`mt-8 flex flex-wrap gap-2 ${enter(550)}`}>
              {pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="rounded-full border border-brand-gold/20 bg-white/60 px-4 py-1.5 text-sm text-brand-midnight/75 backdrop-blur-sm"
                >
                  {pillar}
                </li>
              ))}
            </ul>

            <div
              className={`mt-10 flex flex-col gap-4 sm:flex-row sm:items-center ${enter(650)}`}
            >
              <Button href="#malappuram-20" variant="primary">
                <span className="inline-flex items-center gap-2">
                  Explore vision
                  <ArrowRight size={18} strokeWidth={2} />
                </span>
              </Button>
              <Button href="#cta-investor" variant="secondary">
                Join the mission
              </Button>
            </div>

            <dl
              className={`mt-10 grid grid-cols-1 gap-6 border-t border-brand-gold/15 pt-8 sm:mt-14 sm:grid-cols-3 sm:gap-4 ${enter(750)}`}
            >
              {highlights.map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                  <dt className="font-display text-2xl font-semibold text-brand-midnight sm:text-3xl">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-xs font-medium uppercase leading-snug tracking-[0.12em] text-brand-midnight/50 sm:text-[11px] sm:tracking-[0.14em]">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className={`relative order-first w-full lg:order-none lg:col-span-7 xl:col-span-7 ${enter(400)}`}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-gold/25 via-white/40 to-brand-emerald/20 blur-2xl sm:-inset-6 sm:rounded-[2.5rem] lg:-inset-8" />

            <figure className="relative pb-2 sm:pb-4">
              <div className="relative aspect-[16/10] min-h-[220px] overflow-hidden rounded-2xl border border-white/90 bg-white shadow-premium ring-1 ring-brand-midnight/5 sm:min-h-[280px] sm:rounded-[1.75rem] md:min-h-[320px] lg:aspect-[16/11] lg:min-h-[min(58vh,520px)] xl:min-h-[min(62vh,560px)]">
                <SafeImage
                  src={siteImages.hero}
                  alt="Mission Malappuram 2050 — modern institutional campus architecture"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-midnight/25 via-transparent to-sky-50/10" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent lg:from-white/30" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/30" />
              </div>

              <figcaption className="sr-only">
                Architectural vision for future-ready institutions in Malappuram
              </figcaption>

              <div className="absolute -bottom-4 left-4 right-4 sm:-bottom-5 sm:left-6 sm:right-6">
                <div className="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-premium backdrop-blur-xl sm:p-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-gold">
                    Mission campuses
                  </p>
                  <p className="mt-1 font-display text-base font-semibold leading-snug text-brand-midnight sm:text-lg">
                    Entrepreneurs Business School · Genius Infravision
                  </p>
                </div>
              </div>

              <div className="absolute right-3 top-3 rounded-xl border border-white/60 bg-brand-midnight/90 px-3.5 py-2.5 shadow-glass backdrop-blur-md sm:right-4 sm:top-4 sm:px-4 sm:py-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-brand-gold-light/90">
                  Prepared for
                </p>
                <p className="font-display text-lg font-semibold text-white sm:text-xl">
                  ASI Era
                </p>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <a
        href="#malappuram-20"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-brand-midnight/50 transition hover:text-brand-midnight lg:left-auto lg:right-12 lg:translate-x-0"
        aria-label="Scroll to vision section"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
          Discover
        </span>
        <ChevronDown size={28} className="animate-bounce" />
      </a>
    </section>
  );
}
