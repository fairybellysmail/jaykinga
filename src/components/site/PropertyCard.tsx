import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BedDouble, Bath, Maximize } from "lucide-react";
import type { Listing } from "@/data/listings";
import { naira } from "@/lib/site";

export function PropertyCard({ listing }: { listing: Listing }) {
  const cover = listing.images[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-shadow hover:shadow-lift">
      <Link
        to="/properties/$slug"
        params={{ slug: listing.slug }}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <img
          src={cover?.src}
          alt={cover?.alt ?? listing.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-sm bg-brand px-3 py-1.5 text-[11px] font-semibold tracking-wider text-brand-foreground uppercase">
          {listing.status}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-muted-foreground">{listing.location}</p>
        <h3 className="mt-2 text-xl leading-snug">
          <Link
            to="/properties/$slug"
            params={{ slug: listing.slug }}
            className="transition-colors hover:text-brand"
          >
            {listing.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{listing.summary}</p>

        <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
          {listing.beds > 0 && (
            <span className="inline-flex items-center gap-1.5">
              <BedDouble className="size-4 text-gold" aria-hidden /> {listing.beds} beds
            </span>
          )}
          {listing.baths > 0 && (
            <span className="inline-flex items-center gap-1.5">
              <Bath className="size-4 text-gold" aria-hidden /> {listing.baths} baths
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Maximize className="size-4 text-gold" aria-hidden /> {listing.size}
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-border pt-5">
          <p className="font-display text-lg font-bold text-brand">
            {naira(listing.price)}
            {listing.priceNote && (
              <span className="block text-xs font-medium text-muted-foreground">{listing.priceNote}</span>
            )}
          </p>
          <Link
            to="/properties/$slug"
            params={{ slug: listing.slug }}
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-gold"
          >
            Details <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
