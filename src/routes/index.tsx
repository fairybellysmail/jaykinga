import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  HandCoins,
  HardHat,
  KeyRound,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import duplexWhite from "@/assets/duplex-white.jpeg.asset.json";
import supervision from "@/assets/site-supervision.jpeg.asset.json";
import siteBuild from "@/assets/jk_1.jpeg.asset.json";
import siteWalk from "@/assets/jk_2.jpeg.asset.json";
import siteInterior from "@/assets/jk_3.jpeg.asset.json";
import siteHandover from "@/assets/jk_4.jpeg.asset.json";
import signage from "@/assets/signage.jpeg.asset.json";
import { Container, SectionHeading } from "@/components/site/Section";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Reveal } from "@/components/site/Reveal";
import { featuredListings } from "@/data/listings";
import { site } from "@/lib/site";

const description =
  "Jaykinga Vision Realty sells, lets and manages verified homes, land and investment property across Lagos. Client focused. Results driven.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaykinga Vision Realty — Verified Homes & Land in Lagos" },
      { name: "description", content: description },
      { property: "og:title", content: "Jaykinga Vision Realty — Verified Homes & Land in Lagos" },
      { property: "og:description", content: description },
      { property: "og:image", content: `https://jaykingavisionrealty.com${duplexWhite.url}` },
      { name: "twitter:image", content: `https://jaykingavisionrealty.com${duplexWhite.url}` },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: ShieldCheck,
    title: "Verified title, always",
    body: "Every listing passes document and site verification before it reaches you. No surprises after payment.",
  },
  {
    icon: HardHat,
    title: "Supervised construction",
    body: "Our team is on site through every build stage, with monthly progress reports issued to buyers.",
  },
  {
    icon: HandCoins,
    title: "Investment-first advice",
    body: "We map yield, appreciation and exit before we recommend a property — not the other way round.",
  },
];

const services = [
  { icon: Building2, title: "Property sales", body: "Detached duplexes, terraces and apartments across Lagos." },
  { icon: KeyRound, title: "Lettings & rentals", body: "Vetted tenants, structured agreements, managed renewals." },
  { icon: Sparkles, title: "Property management", body: "Maintenance, collections and reporting on your behalf." },
  { icon: HandCoins, title: "Land banking", body: "Surveyed estate plots with payment plans and instant allocation." },
];

const stats = [
  { value: "8+", label: "Years in Lagos real estate" },
  { value: "250+", label: "Transactions closed" },
  { value: "100%", label: "Title-verified listings" },
  { value: `BN ${site.bn}`, label: "Registered business" },
];

const testimonials = [
  {
    quote:
      "They walked me through documentation I didn't understand, flagged a title issue on a property I almost bought, and found me a better one two weeks later.",
    name: "Chidi A.",
    role: "Homeowner, Lekki",
  },
  {
    quote:
      "I bought two plots off-plan from abroad. Monthly photos, honest updates and allocation exactly when they said. That's rare.",
    name: "Mrs. Bello",
    role: "Diaspora investor",
  },
  {
    quote:
      "Our rental portfolio has been fully occupied since Jaykinga took over management. Collections arrive on time, every time.",
    name: "T. Oyelaran",
    role: "Landlord, Ajah",
  },
];

function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.name,
    slogan: site.tagline,
    telephone: site.phoneDisplay,
    email: site.email,
    address: { "@type": "PostalAddress", addressLocality: "Lekki", addressRegion: "Lagos", addressCountry: "NG" },
    areaServed: "Lagos, Nigeria",
    openingHours: "Mo-Sa 08:00-18:00",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-deep">
        <img
          src={duplexWhite.url}
          alt="Modern white detached duplex with glazed stairwell and paved driveway in Lagos"
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/90 to-brand-deep/30" />
        <Container className="relative flex min-h-[86svh] flex-col justify-center py-24">
          <p className="eyebrow text-gold">{site.tagline}</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.02] text-brand-foreground sm:text-6xl lg:text-7xl">
            Property in Lagos, handled with vision and verified detail.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-foreground/75 lg:text-lg">
            We source, verify, sell and manage homes, land and developments for families and investors who
            expect the paperwork to be as sound as the architecture.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              View properties <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-brand-foreground/30 px-7 py-4 text-sm font-semibold text-brand-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Book a consultation
            </Link>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <Container>
          <dl className="grid grid-cols-2 divide-border sm:divide-x lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-2 py-8 text-center sm:px-6">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-bold text-brand lg:text-3xl">{s.value}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Featured listings */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured"
              title="Currently on the market"
              description="A snapshot of what we're selling this month. Every listing is inspected and title-checked before it goes live."
            />
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-gold"
            >
              All properties <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featuredListings.map((listing, i) => (
              <Reveal key={listing.slug} delay={i * 90}>
                <PropertyCard listing={listing} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-sand py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why Jaykinga"
              title="The difference is in what we check before you sign."
              description="Lagos real estate rewards diligence. We built our process around the three things that decide whether a property is an asset or a liability."
            />
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-gold"
            >
              Our story <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>

          <ul className="space-y-4">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90}>
                <div className="flex gap-5 rounded-lg border border-border bg-card p-7 shadow-card">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-md bg-brand/8 text-brand">
                    <p.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Services teaser */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="A full-service realty partner"
            description="From the first inspection to the tenant's third renewal, one team stays accountable."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="h-full rounded-lg border border-border bg-card p-7 transition-colors hover:border-gold">
                  <s.icon className="size-6 text-gold" aria-hidden />
                  <h3 className="mt-5 text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-deep"
            >
              Explore all services <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      {/* Development band */}
      <section className="bg-brand-deep py-20 text-brand-foreground lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="On site"
              tone="dark"
              title="We stand on the site, not just in the office."
              description="Our supervisors are physically present through excavation, decking, roofing and finishing — checking specification against contract and photographing progress for buyers who can't be there."
            />
            <ul className="mt-8 space-y-3 text-sm text-brand-foreground/75">
              {[
                "Stage-by-stage quality checks against approved drawings",
                "Monthly photo and video reports to off-plan buyers",
                "Material verification and contractor payment milestones",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <img
              src={siteBuild.url}
              alt="Jaykinga supervisor with workmen at a scaffolded duplex under construction in Lagos"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-lift lg:aspect-[4/3]"
            />
          </Reveal>
        </Container>

        <Container className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { src: siteWalk.url, alt: "Jaykinga supervisor inspecting groundworks and drainage on an active build site" },
            { src: siteInterior.url, alt: "Site walkthrough inside an unfinished block-work interior with the client's team" },
            { src: siteHandover.url, alt: "Jaykinga team reviewing finishing works at a completed home in Lagos" },
          ].map((img, i) => (
            <Reveal key={img.alt} delay={i * 80}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-lg object-cover opacity-90 transition-opacity hover:opacity-100"
              />
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Clients"
            title="Results our clients can name"
            align="center"
            description="Referrals and repeat business account for most of what we close each year."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-8 shadow-card">
                  <Quote className="size-7 text-gold" aria-hidden />
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5">
                    <span className="block font-display font-semibold">{t.name}</span>
                    <span className="text-xs text-muted-foreground">{t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-brand">
        <img
          src={signage.url}
          alt="Jaykinga Vision Realty branded signage on a home listed for sale"
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <Container className="relative py-20 text-center lg:py-24">
          <h2 className="mx-auto max-w-2xl text-3xl text-brand-foreground sm:text-4xl">
            Tell us what you're looking for. We'll shortlist it this week.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-foreground/75">
            Share your budget, preferred location and timeline — you'll get a curated shortlist with documents
            attached, not a wall of listings.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a conversation <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-md border border-brand-foreground/40 px-7 py-4 text-sm font-semibold text-brand-foreground hover:border-gold hover:text-gold"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
