import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import duplexBlack from "@/assets/duplex-black.jpeg.asset.json";
import { Container, PageHero, SectionHeading } from "@/components/site/Section";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { site, whatsappLink } from "@/lib/site";

const description =
  "Call, WhatsApp or message Jaykinga Vision Realty to buy, sell, rent or manage property in Lagos. Mon–Sat, 8am–6pm.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Jaykinga Vision Realty | Lagos Property Enquiries" },
      { name: "description", content: description },
      { property: "og:title", content: "Contact Jaykinga Vision Realty" },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const details = [
    { icon: Phone, label: "Phone", value: site.phoneDisplay, href: site.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with an agent", href: whatsappLink(`Hello ${site.name}, I'd like to make an enquiry.`) },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Office", value: site.address },
    { icon: Clock, label: "Hours", value: site.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's find or fill your next property"
        description="Tell us what you need and an agent will respond the same working day with options, pricing and next steps."
        image={duplexBlack.url}
        imageAlt="Modern two-storey duplex with dark tinted glazing and polished stone driveway"
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Reach us" title="Speak to a real agent, today" />
            <ul className="mt-10 space-y-5">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-brand/8 text-brand">
                    <d.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">{d.label}</p>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener"
                        className="font-display font-semibold text-brand hover:text-gold"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="font-display font-semibold">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-muted-foreground">
              {site.name} · Registered business BN {site.bn}
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 shadow-card lg:p-10">
            <h2 className="text-2xl">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Include your budget and preferred location so we can shortlist accurately.
            </p>
            <div className="mt-8">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
