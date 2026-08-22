import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-clean.png";
import { site } from "@/lib/site";

const quickLinks = [
  { to: "/properties", label: "Properties" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact" },
] as const;

const services = [
  "Property sales",
  "Lettings & rentals",
  "Property management",
  "Land banking & off-plan",
  "Construction supervision",
  "Investment advisory",
];

export function Footer() {
  return (
    <footer className="bg-brand-deep text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8 lg:py-20">
        <div className="lg:col-span-1">
          <div className="inline-flex rounded-md bg-brand-foreground/95 p-3">
            <img src={logo} alt={`${site.name} logo`} className="h-12 w-auto" loading="lazy" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-foreground/70">
            {site.tagline} Verified listings, supervised builds and honest advice across Lagos and beyond.
          </p>
          <p className="mt-4 text-xs text-brand-foreground/50">BN: {site.bn}</p>
          <div className="mt-6 flex gap-3">
            {[
              { href: site.socials.instagram, Icon: Instagram, label: "Instagram" },
              { href: site.socials.facebook, Icon: Facebook, label: "Facebook" },
              { href: site.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-md border border-brand-foreground/20 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="eyebrow text-gold">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-brand-foreground/75 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-gold">Services</h2>
          <ul className="mt-5 space-y-3 text-sm text-brand-foreground/75">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-gold">Get in touch</h2>
          <ul className="mt-5 space-y-4 text-sm text-brand-foreground/75">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-brand-foreground/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.hours}</p>
        </div>
      </div>
    </footer>
  );
}
