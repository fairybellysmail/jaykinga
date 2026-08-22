# Jaykinga Vision Realty — Premium Agency Website

A modern, agency-grade marketing site for Jaykinga Vision Realty ("Client Focused. Results Driven.", BN: 3504356), built around the brand's royal blue + gold identity and the real property photos supplied.

## Brand direction

- Palette taken from the logo: deep royal blue (#12409A family) as the authority color, gold (#F5B816 family) as the accent, warm off-white paper background, near-black text. Dark navy footer and section bands for contrast.
- Typography: Urbanist (headings, tight tracking) + Epilogue (body) — architectural, premium, real-estate appropriate.
- Restrained motion: soft reveal on scroll, image scale-on-hover, no bouncy effects. Sharp-to-subtle radii (6px), generous whitespace, editorial image crops.
- Logo used in header and footer; favicon derived from the logo mark.

## Pages

1. **Home** (`/`) — full-bleed hero on the modern white duplex photo with the tagline and dual CTA (View Properties / Book a Consultation); trust bar with credentials (BN number, years, listings closed); featured properties (3 cards); "Why Jaykinga" value pillars; services teaser; project-in-progress band using the site-supervision photo; testimonials; CTA band.
2. **Properties** (`/properties`) — filterable grid (type, location, price band, status: For Sale / For Rent / Off-Plan) built from a local listings dataset using the supplied interiors and exteriors plus generated images.
3. **Property detail** (`/properties/$slug`) — gallery with thumbnails, price, key specs (beds/baths/parking/size), description, amenities, location note, agent enquiry form pre-filled with the listing.
4. **Services** (`/services`) — sales, lettings/rentals, property management, land banking & off-plan, construction supervision, investment advisory.
5. **About** (`/about`) — story, mission/vision, values, process timeline, credentials, team section.
6. **Contact** (`/contact`) — enquiry form, phone 0901 472 7494, WhatsApp link, office details, hours, map placeholder card.

Shared: sticky header with logo + nav + "Call now" CTA, mobile drawer nav, dark footer with quick links, services, contact and socials, floating WhatsApp button, 404 already handled by root.

## Images

- Uploaded photos become CDN assets and are used as: hero + listing exteriors (the two modern duplexes and the beige duplex), kitchen interiors (two photos) inside listing galleries, the construction-supervision photo in the About/process and "development" sections, and the branded signage photo as social proof in About.
- Generated to fill gaps: interior living room, master bedroom, pool/exterior evening shot, land/estate aerial, and abstract CTA band texture — all matched to the same photographic tone.

## Technical notes

- TanStack Start file routes; listings live in a typed local module (`src/data/listings.ts`) so the grid, detail route, and home carousel share one source. No backend in this pass — the contact/enquiry forms validate with Zod and open a prefilled WhatsApp/mailto handoff.
- Design tokens (blue, gold, navy, sand, radii, shadows) added to `src/styles.css` under `@theme inline`; no hardcoded color utilities in components.
- Fonts loaded via `<link>` in `__root.tsx`.
- Per-route `head()` metadata with unique titles/descriptions/OG tags, semantic HTML, single H1 per page, alt text, lazy-loaded imagery, JSON-LD `RealEstateAgent` on Home and `Residence` on property detail.
- Favicon generated from the logo mark and wired in the root head.

## Optional follow-up (not in this pass)

Enable Lovable Cloud so enquiry forms save to a database and an admin can add/edit listings instead of the code-based dataset.
