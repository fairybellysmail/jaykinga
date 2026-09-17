import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  HandCoins,
  HardHat,
  KeyRound,
  Ruler,
  ScrollText,
  Sparkles,
} from "lucide-react";
import livingRoom from "@/assets/gen-living-room.jpg";
import siteInterior from "@/assets/jk_3.jpeg.asset.json";
import siteHandover from "@/assets/jk_4.jpeg.asset.json";
import { Container, PageHero, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const description =
  "Property sales, lettings, management, land banking, construction supervision and documentation advisory across Lagos.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Real Estate Services in Lagos | Jaykinga Vision Realty" },
      { name: "description", content: description },
      { property: "og:title", content: "Real Estate Services in Lagos" },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Building2,
    title: "Property sales",
    body: "We list and sell detached duplexes, terraces, apartments and commercial units. Each property is inspected, photographed and title-checked before it reaches the market, and buyers receive a document pack ahead of payment.",
    points: ["Market-accurate pricing", "Professional photography", "Buyer document pack"],
  },
  {
    icon: KeyRound,
    title: "Lettings & rentals",
    body: "Landlords get vetted tenants and clear agreements; tenants get honest listings with no phantom inspection fees. We handle viewings, references, agreements and renewals end to end.",
    points: ["Tenant vetting & references", "Structured tenancy agreements", "Renewal management"],
  },
  {
    icon: Sparkles,
    title: "Property management",
    body: "A managed portfolio should be quiet. We take on rent collection, routine maintenance, service-charge administration and quarterly reporting so owners can stay hands-off.",
    points: ["Rent collection & remittance", "Maintenance coordination", "Quarterly owner reports"],
  },
  {
    icon: HandCoins,
    title: "Land banking & estate plots",
    body: "Surveyed, gazetted estate plots with flexible payment plans and documented allocation timelines — structured for buyers building wealth over three to five years.",
    points: ["Survey & deed of assignment", "6–24 month payment plans", "Physical allocation support"],
  },
  {
    icon: HardHat,
    title: "Construction supervision",
    body: "For clients building from abroad or juggling work, we act as your eyes on site: verifying materials, checking stage work against drawings and releasing contractor milestones.",
    points: ["Stage-by-stage inspection", "Monthly photo/video reports", "Milestone payment control"],
  },
  {
    icon: ScrollText,
    title: "Documentation advisory",
    body: "Governor's Consent, Certificate of Occupancy, Deed of Assignment, survey regularisation — we explain what you have, what you're missing and what it will cost to perfect it.",
    points: ["Title search & verification", "Perfection guidance", "Legal partner referrals"],
  },
];

const process = [
  { icon: ClipboardCheck, title: "Brief", body: "We map your budget, location, timeline and objective — occupancy or yield." },
  { icon: Ruler, title: "Shortlist", body: "You receive a curated set of options with pricing, documents and honest trade-offs." },
  { icon: HardHat, title: "Inspect", body: "We accompany every inspection and independently verify title before commitment." },
  { icon: KeyRound, title: "Close & manage", body: "Payment structuring, documentation, handover — and management if you want it." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a property needs, under one roof"
        description="Advisory, transaction and management services for homeowners, landlords, developers and diaspora investors."
        image={livingRoom}
        imageAlt="Elegant contemporary living room in a Lagos duplex"
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <article className="flex h-full flex-col rounded-lg border border-border bg-card p-8 shadow-card transition-colors hover:border-gold">
                  <span className="inline-flex size-12 items-center justify-center rounded-md bg-brand/8 text-brand">
                    <s.icon className="size-5" aria-hidden />
                  </span>
                  <h2 className="mt-6 text-xl">{s.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <ul className="mt-6 space-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-gold">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 lg:pb-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={siteInterior.url}
                alt="Jaykinga supervisors walking a client through an unfinished block-work interior"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-lg object-cover shadow-card"
              />
              <img
                src={siteHandover.url}
                alt="Jaykinga team reviewing finishing works at a completed Lagos home"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-lg object-cover shadow-card sm:mt-10"
              />
            </div>
          </Reveal>
          <Reveal delay={90}>
            <SectionHeading
              eyebrow="On the ground"
              title="Construction supervision in practice"
              description="These are our own site visits. Whether you are in Lagos or abroad, the same team checks the work before you pay for it."
            />
            <ul className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {[
                "Stage checks against approved drawings — foundation, decking, roofing, finishing",
                "Monthly photo and video reports so you see progress without travelling",
                "Contractor milestones released only after the stage passes inspection",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-gold"
            >
              Discuss your build <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A four-step process, no shortcuts"
            align="center"
            description="The same sequence applies whether you're buying your first home or your fifth investment plot."
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80}>
                <div className="h-full rounded-lg border border-border bg-card p-7">
                  <span className="font-display text-sm font-bold text-gold">0{i + 1}</span>
                  <p.icon className="mt-4 size-6 text-brand" aria-hidden />
                  <h3 className="mt-4 text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-brand-deep py-20 text-brand-foreground">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl text-3xl text-brand-foreground sm:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-foreground/70">
            Describe your situation in a sentence. We'll tell you honestly what's involved — even when the answer
            is to wait.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
          >
            Talk to an advisor <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Container>
      </section>
    </>
  );
}
