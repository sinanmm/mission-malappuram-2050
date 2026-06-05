"use client";

import { motion } from "framer-motion";
import { itemTransition, viewport } from "@/lib/motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const disruptions = [
  "Jobs",
  "Education",
  "Healthcare",
  "Business",
  "Governance",
  "Economy",
];

const quotes = [
  {
    text: "Will my job survive?",
    source: "Every worker, everywhere",
  },
  {
    text: "What should my children learn?",
    source: "Every parent, everywhere",
  },
  {
    text: "How can a district prepare before disruption arrives?",
    source: "Mission Malappuram 2050",
  },
];

const leaderQuotes = [
  {
    quote: "AI is the most profound technology humanity will ever develop.",
    author: "AI Industry Leaders",
  },
  {
    quote: "The pace of change will be unlike anything we have experienced.",
    author: "Technology Visionaries",
  },
  {
    quote: "We need to prepare society before the future arrives.",
    author: "Mission Malappuram 2050",
  },
];

export default function BigProblem() {
  return (
    <Section id="big-problem" className="bg-brand-slate">
      <SectionHeading
        eyebrow="The Challenge"
        title="Traditional district development is no longer enough."
        subtitle="Artificial Intelligence is reshaping every dimension of human society."
      />

      <div className="mb-16 flex flex-wrap justify-center gap-3">
        {disruptions.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 1, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={itemTransition(i)}
            className="glass-panel rounded-full px-6 py-3 text-sm text-white/80"
          >
            {item}
          </motion.span>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <GlassCard key={q.text} delay={i * 0.1}>
            <p className="font-display text-2xl font-medium leading-snug text-white md:text-3xl">
              &ldquo;{q.text}&rdquo;
            </p>
            <p className="mt-4 text-sm text-white/40">{q.source}</p>
          </GlassCard>
        ))}
      </div>

      <div className="mt-20 space-y-8">
        {leaderQuotes.map((item, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 1, x: i % 2 === 0 ? -32 : 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={itemTransition(i, 0.15)}
            className="border-l-2 border-brand-gold/50 pl-8"
          >
            <p className="text-xl font-light italic text-brand-midnight/80 md:text-2xl">
              &ldquo;{item.quote}&rdquo;
            </p>
            <cite className="mt-3 block text-sm not-italic text-brand-gold">
              — {item.author}
            </cite>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  );
}
