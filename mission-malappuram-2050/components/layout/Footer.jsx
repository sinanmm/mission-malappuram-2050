"use client";

import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  Vision: [
    { label: "Malappuram 2.0", href: "#malappuram-20" },
    { label: "The Challenge", href: "#big-problem" },
    { label: "ASI Prepared District", href: "#asi-prepared" },
  ],
  Projects: [
    { label: "Blue Zone Habitat", href: "#blue-zone" },
    { label: "Brand Versity", href: "#brand-versity" },
    { label: "AI School", href: "#ai-school" },
  ],
  Membership: [
    { label: "Join Platform", href: "#membership" },
    { label: "Member Benefits", href: "#member-benefits" },
    { label: "Who Should Join", href: "#who-should-join" },
  ],
  Governance: [
    { label: "Governance Model", href: "#governance" },
    { label: "Research Foundation", href: "#research" },
    { label: "Core Team", href: "#core-team" },
  ],
};

const socialLinks = [
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
  { Icon: Mail, label: "Email", href: "mailto:info@missionmalappuram2050.org" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/15 bg-white/80 backdrop-blur-sm">
      <div className="section-padding !py-12 sm:!py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12">
            <div className="flex min-w-0 flex-col gap-10 sm:col-span-2 lg:col-span-4">
              <div>
                <Logo variant="footer" link />
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-midnight/60">
                  A community-owned future district transformation platform.
                  Preparing society before the future arrives.
                </p>
              </div>

              <div className="mt-2 min-w-0 border-t border-brand-gold/12 pt-6">
                <h4 className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-brand-midnight/45">
                  Contact
                </h4>
                <ul className="space-y-3 text-sm leading-relaxed text-brand-midnight/65">
                  <li>Malappuram, Kerala, India</li>
                  <li className="pb-1">
                    <a
                      href="mailto:info@missionmalappuram2050.org"
                      className="break-all hover:text-brand-midnight"
                    >
                      info@missionmalappuram2050.org
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                {socialLinks.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-gold/15 text-brand-midnight/55 transition-colors hover:border-brand-gold hover:text-brand-gold"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="min-w-0 lg:col-span-2">
                <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-midnight/45">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-brand-midnight/65 transition-colors hover:text-brand-midnight"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 border-t border-brand-gold/15 pt-8 text-center sm:mt-16 md:flex-row md:items-start md:justify-between md:text-left">
            <p className="text-xs text-brand-midnight/45">
              Copyright {new Date().getFullYear()} Mission Malappuram 2050. All
              rights reserved.
            </p>
            <p className="max-w-xl text-xs leading-relaxed text-brand-midnight/45">
              <span className="inline-block">Community-Owned</span>
              <span className="mx-2 hidden sm:inline" aria-hidden>
                |
              </span>
              <span className="mt-1 block sm:mt-0 sm:inline">Founder-Controlled</span>
              <span className="mx-2 hidden sm:inline" aria-hidden>
                |
              </span>
              <span className="mt-1 block sm:mt-0 sm:inline">Institution-Driven</span>
              <span className="mx-2 hidden sm:inline" aria-hidden>
                |
              </span>
              <span className="mt-1 block sm:mt-0 sm:inline">Youth-Operated</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
