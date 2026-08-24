import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BedDouble, Bath, Car, Check, MapPin, Maximize } from "lucide-react";
import { Container, SectionHeading } from "@/components/site/Section";
import { PropertyCard } from "@/components/site/PropertyCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { getListing, listings } from "@/data/listings";
import { naira, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/properties/$slug")({
  loader: ({ params }) => {
    const listing = getListing(params.slug);
    if (!listing) throw notFound();
    return { listing };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Property not found | Jaykinga Vision Realty" }, { name: "robots", content: "noindex" }] };
    }
    const { listing } = loaderData;
    const title = `${listing.title}, ${listing.location} | Jaykinga Vision Realty`;
    return {
      meta: [
        { title },
        { name: "description", content: listing.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: listing.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: PropertyNotFound,
  component: PropertyDetail,
});

function PropertyNotFound() {
  return (
    <Container className="py-32 text-center">
      <h1 className="text-3xl">This property is no longer listed</h1>
      <p className="mt-4 text-muted-foreground">It may have been sold or withdrawn. Browse what's currently available.</p>
      <Link
        to="/properties"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground"
      >
        View all properties
      </Link>
    </Container>
  );
}

function PropertyDetail() {
  const { listing } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const cover = listing.images[active] ?? listing.images[0];
  const related = listings.filter((l) => l.slug !== listing.slug).slice(0, 3);

  const specs = [
    { icon: BedDouble, label: "Bedrooms", value: listing.beds > 0 ? String(listing.beds) : "—" },
    { icon: Bath, label: "Bathrooms", value: listing.baths > 0 ? String(listing.baths) : "—" },
    { icon: Car, label: "Parking", value: listing.parking > 0 ? String(listing.parking) : "—" },
    { icon: Maximize, label: "Size", value: listing.size },
  ];

  return (
    <>
      <section className="bg-sand py-8">
        <Container>
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-gold"
          >
            <ArrowLeft className="size-4" aria-hidden /> Back to properties
          </Link>
        </Container>
      </section>

      <section className="pt-8 pb-16 lg:pb-24">
        <Container>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <span className="inline-block rounded-sm bg-brand px-3 py-1.5 text-[11px] font-semibold tracking-wider text-brand-foreground uppercase">
                {listing.status}
              </span>
              <h1 className="mt-4 max-w-3xl text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">{listing.title}</h1>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-gold" aria-hidden /> {listing.location}
              </p>
            </div>
            <div className="text-right">
              <p className="font-display text-3xl font-bold text-brand">{naira(listing.price)}</p>
              {listing.priceNote && <p className="text-xs text-muted-foreground">{listing.priceNote}</p>}
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-10">
            <img
              src={cover?.src}
              alt={cover?.alt ?? listing.title}
              className="aspect-[16/10] w-full rounded-lg object-cover shadow-lift"
            />
            {listing.images.length > 1 && (
              <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-4">
                {listing.images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`View image ${i + 1}`}
                    className={cn(
                      "aspect-[4/3] overflow-hidden rounded-md border-2 transition-colors",
                      i === active ? "border-gold" : "border-transparent hover:border-brand/40",
                    )}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" className="size-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {specs.map((s) => (
                  <div key={s.label} className="rounded-lg border border-border bg-card p-5">
                    <s.icon className="size-5 text-gold" aria-hidden />
                    <dt className="mt-3 text-xs text-muted-foreground">{s.label}</dt>
                    <dd className="font-display text-lg font-semibold">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-12">
                <h2 className="text-2xl">About this property</h2>
                <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                  {listing.description.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl">Features & amenities</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {listing.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-3 text-sm">
                      <Check className="size-4 shrink-0 text-gold" aria-hidden />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-lg border border-border bg-card p-7 shadow-card">
                <h2 className="text-xl">Enquire about this property</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Speak with an agent today, or schedule an inspection at {site.name}.
                </p>
                <div className="mt-6">
                  <EnquiryForm subject={listing.title} compact />
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-sand py-20">
        <Container>
          <SectionHeading eyebrow="Keep looking" title="Similar properties" />
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {related.map((l) => (
              <PropertyCard key={l.slug} listing={l} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
