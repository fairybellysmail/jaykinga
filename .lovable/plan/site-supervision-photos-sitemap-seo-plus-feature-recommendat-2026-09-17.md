# Site supervision photos, sitemap & SEO, plus feature recommendations

## 1. Use the four new site photos

The new photos show real project supervision work: a supervisor walking an active build,
a three-person walkthrough inside an unfinished shell, a handover conversation at a
finished home, and the team working with labourers on a scaffolded build. They are
documentary, so they belong where credibility matters most.

- **About page** — replace the current two-image collage with a four-photo "on site every
  week" gallery using the new photos, captioned so each one reads as evidence of the
  supervision promise. Keep the existing story copy.
- **Services page** — add a wide "Construction supervision in practice" band under the
  services grid: the interior walkthrough photo alongside short lines on stage checks,
  monthly reports and milestone control, linking to Contact.
- **Home page** — swap the existing development band image for the scaffolded-build photo
  and add a small three-photo strip so the homepage shows real work, not only finished
  interiors.

All four are uploaded as CDN assets and given descriptive alt text.

## 2. Sitemap and robots

- Add `public/sitemap.xml` covering Home, Properties, Services, About, Contact and each
  property detail page, built on the public domain `https://jaykinga.lovable.app`.
  No invented last-modified dates.
- Update `public/robots.txt` to keep the existing allow rules and add the sitemap line.

## 3. Recommended next features (advice only — not built in this pass)

Listed so you can pick; nothing here is implemented until you say so.

1. **Enquiry inbox** — save every contact and property enquiry to a database instead of
   only opening WhatsApp, so no lead is lost, with email alerts to your team.
2. **Admin dashboard for listings** — add, edit, mark as sold and reorder properties
   yourself without a developer.
3. **Mortgage / payment-plan calculator** on land and off-plan listings — monthly figure
   over 6–24 months; strong lead magnet.
4. **Property alerts** — visitors subscribe by budget and area and get notified of new
   matching listings.
5. **Inspection booking** — pick a date and time slot for a viewing, confirmed by email
   and WhatsApp.
6. **Client project portal** — for supervision clients abroad: milestone photos and
   progress updates per build, exactly the work the new photos show.
7. **Blog / market insights** — the strongest long-term lever for Google traffic on
   searches like "buy land in Ibeju Lekki".

## Technical notes

- Photos uploaded via `lovable-assets` to `src/assets/*.asset.json`; no binaries in the repo.
- Static `public/sitemap.xml` since routes are static plus a known listings array; entries
  generated from `src/data/listings.ts` slugs at author time.
- No new dependencies, no backend in this pass.
