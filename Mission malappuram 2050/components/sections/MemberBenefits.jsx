"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  DoorOpen,
  TrendingUp,
  Coins,
  LineChart,
  Users,
  Sparkles,
} from "lucide-react";

const benefits = [
  { icon: DoorOpen, title: "Ecosystem Access", desc: "Priority access to opportunities across all mission sectors" },
  { icon: TrendingUp, title: "Business Expansion", desc: "Scale your enterprise through the community network" },
  { icon: Coins, title: "Dividend Potential", desc: "Participate in wealth creation from platform growth" },
  { icon: LineChart, title: "Asset Growth", desc: "Long-term value appreciation through sweat equity" },
  { icon: Users, title: "Network Power", desc: "10 lakh member network at your fingertips" },
  { icon: Sparkles, title: "Long-term Value", desc: "Generational wealth and legacy building" },
];

export default function MemberBenefits() {
  return (
    <Section id="member-benefits" light>
        <SectionHeading
          eyebrow="Member Benefits"
          title="Why Join the Platform"
          subtitle="Membership is not just access — it is ownership in Malappuram's future."
          light
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <Icon className="mb-4 text-brand-emerald" size={32} />
              <h3 className="font-display text-xl font-semibold text-brand-midnight">
                {title}
              </h3>
              <p className="mt-2 text-brand-midnight/60">{desc}</p>
            </motion.div>
          ))}
        </div>
    </Section>
  );
}
