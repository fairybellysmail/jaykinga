import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import poolDusk from "@/assets/gen-pool-dusk.jpg";
import { Container } from "@/components/site/Section";
import { PageHero } from "@/components/site/Section";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Reveal } from "@/components/site/Reveal";
import { listings, type ListingStatus, type ListingType } from "@/data/listings";
import { cn } from "@/lib/utils";

const description =
  "Browse title-verified duplexes, apartments, terraces and estate land for sale and rent across Lagos with Jaykinga Vision Realty.";

export const Route = createFileRoute("/properties/")({
  head: () => ({
    meta: [
      { title: "Properties for Sale & Rent in Lagos | Jaykinga Vision Realty" },
      { name: "description", content: description },
      { property: "og:title", content: "Properties for Sale & Rent in Lagos" },
      { property: "og:description", content: description },
    ],
  }),
  component: PropertiesPage,
});

const statuses: (ListingStatus | "All")[] = ["All", "For Sale", "For Rent", "Off-Plan"];
const types: (ListingType | "All")[] = ["All", "Duplex", "Apartment", "Terrace", "Land"];

function PropertiesPage() {
  const [status, setStatus] = useState<(typeof statuses)[number]>("All");
  const [type, setType] = useState<(typeof types)[number]>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(
    () =>
      listings.filter((l) => {
        const matchStatus = status === "All" || l.status === status;
        const matchType = type === "All" || l.type === type;
        const q = query.trim().toLowerCase();
        const matchQuery =
          !q || `${l.title} ${l.location} ${l.summary}`.toLowerCase().includes(q);
        return matchStatus && matchType && matchQuery;
      }),
    [status, type, query],
  );

  const chip = (active: boolean) =>
    cn(
      "rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
      active
        ? "border-brand bg-brand text-brand-foreground"
        : "border-border bg-card text-muted-foreground hover:border-brand hover:text-brand",
    );

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Homes, land and investments — all verified"
        description="Filter our live inventory by transaction type, property type or location. Documents are shared on request during inspection."
        image={poolDusk}
        imageAlt="Luxury Lagos residence with a lit swimming pool at dusk"
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="rounded-lg border border-border bg-card p-6 shadow-card">
            <label htmlFor="search" className="mb-2 block text-xs font-semibold">
              Search by name or location
            </label>
            <input
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Lekki, terrace, off-plan"
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />

            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 text-xs text-muted-foreground">Status</span>
                {statuses.map((s) => (
                  <button key={s} type="button" onClick={() => setStatus(s)} className={chip(status === s)}>
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 text-xs text-muted-foreground">Type</span>
                {types.map((t) => (
                  <button key={t} type="button" onClick={() => setType(t)} className={chip(type === t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{results.length}</span> of {listings.length}{" "}
            properties
          </p>

          {results.length > 0 ? (
            <div className="mt-6 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {results.map((listing, i) => (
                <Reveal key={listing.slug} delay={i * 70}>
                  <PropertyCard listing={listing} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-lg border border-dashed border-border p-16 text-center">
              <p className="font-display text-lg">No properties match those filters.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Reset the filters or call us — we place off-market listings weekly.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
