import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Eye, Handshake, ShieldCheck } from "lucide-react";
import duplexBeige from "@/assets/duplex-beige.png.asset.json";
import supervision from "@/assets/site-supervision.jpeg.asset.json";
import kitchenWarm from "@/assets/kitchen-warm.jpeg.asset.json";
import { Container, PageHero, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";

const description =
  "Jaykinga Vision Realty is a Lagos-based real estate agency (BN 3504356) built on verified titles, supervised construction and honest advice.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jaykinga Vision Realty | Lagos Real Estate Agency" },
      { name: "description", content: description },
      { property: "og:title", content: "About Jaykinga Vision Realty" },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Integrity first", body: "If a title is weak, we say so — even when it costs us the deal." },
  { icon: Eye, title: "Visible process", body: "You see the documents, the site and the progress. Nothing is filtered." },
  { icon: Handshake, title: "Client focused", body: "We advise for your objective, not our commission structure." },
  { icon: Compass, title: "Results driven", body: "Shortlists, inspections and closings on the timeline we commit to." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Lagos realty firm built on verified detail"
        description={`${site.name} — registered under BN ${site.bn} — helps families and investors acquire, build and manage property without the uncertainty the market is known for.`}
        image={duplexBeige.url}
        imageAlt="Contemporary beige duplex with curved architectural detailing"
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Our story"
              title="Founded because too many good people bought bad property."
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Jaykinga Vision Realty began with a simple frustration: buyers in Lagos were being sold on
                photographs and promises while the documents behind the property went unread. Deals collapsed
                years later, in court, over titles nobody had verified.
              </p>
              <p>
                We built the firm around the opposite habit. Before a property enters our portfolio, we walk the
                site, read the file, confirm the ownership chain and check the physical development against what
                was approved. Only then do we market it.
              </p>
              <p>
                Today we serve homeowners, landlords, developers and diaspora clients across Lekki, Ajah, Ibeju,
                Ikeja and the mainland corridors — with the same standard applied to a ₦12m plot and a ₦320m
                residence.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={supervision.url}
                alt="Site supervisors inspecting an ongoing residential build"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-lg object-cover shadow-card"
              />
              <img
                src={kitchenWarm.url}
                alt="Warm-toned marble island kitchen in a completed Jaykinga residence"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-lg object-cover shadow-card sm:mt-10"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border border-border bg-card p-9 shadow-card">
              <p className="eyebrow text-gold">Mission</p>
              <p className="mt-4 font-display text-2xl leading-snug">
                To make property ownership in Lagos transparent, secure and genuinely profitable for every client
                we represent.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-lg border border-border bg-card p-9 shadow-card">
              <p className="eyebrow text-gold">Vision</p>
              <p className="mt-4 font-display text-2xl leading-snug">
                To be the realty name Nigerians at home and abroad trust first when they are ready to buy, build
                or let.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Our values" title="Four commitments we don't negotiate" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-lg border border-border bg-card p-7 text-center">
                  <v.icon className="mx-auto size-6 text-gold" aria-hidden />
                  <h3 className="mt-5 text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand py-20 text-brand-foreground">
        <Container className="flex flex-wrap items-center justify-between gap-8">
          <div>
            <h2 className="max-w-xl text-3xl text-brand-foreground">Work with a team that documents everything.</h2>
            <p className="mt-3 text-brand-foreground/75">Registered business · BN {site.bn} · {site.hours}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
          >
            Get in touch <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Container>
      </section>
    </>
  );
}
