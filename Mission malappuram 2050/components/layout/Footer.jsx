import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/15 bg-white/80 backdrop-blur-sm">
      <div className="section-padding !py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="font-display text-2xl font-semibold text-brand-midnight">
                Mission <span className="text-brand-gold">Malappuram 2050</span>
              </p>
              <p className="mt-4 max-w-sm text-sm text-brand-midnight/60">
                A community-owned future district transformation platform.
                Preparing society before the future arrives.
              </p>
              <div className="mt-6 flex gap-4">
                {[Linkedin, Twitter, Youtube, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/15 text-brand-midnight/55 transition hover:border-brand-gold hover:text-brand-gold"
                    aria-label="Social link"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-midnight/45">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-brand-midnight/65 transition hover:text-brand-midnight"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-midnight/45">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-brand-midnight/65">
                <li>Malappuram, Kerala, India</li>
                <li>
                  <a
                    href="mailto:info@missionmalappuram2050.org"
                    className="hover:text-brand-midnight"
                  >
                    info@missionmalappuram2050.org
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-brand-gold/15 pt-8 md:flex-row">
            <p className="text-xs text-brand-midnight/45">
              Copyright {new Date().getFullYear()} Mission Malappuram 2050. All
              rights reserved.
            </p>
            <p className="text-xs text-brand-midnight/45">
              Community-Owned | Founder-Controlled | Institution-Driven |
              Youth-Operated
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
