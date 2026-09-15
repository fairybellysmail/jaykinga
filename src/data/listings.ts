import duplexWhite from "@/assets/duplex-white.jpeg.asset.json";
import duplexBlack from "@/assets/duplex-black.jpeg.asset.json";
import kitchenMono from "@/assets/kitchen-monochrome.jpeg.asset.json";
import kitchenWarm from "@/assets/kitchen-warm.jpeg.asset.json";
import livingRoom from "@/assets/gen-living-room.jpg";
import bedroom from "@/assets/gen-bedroom.jpg";
import poolDusk from "@/assets/gen-pool-dusk.jpg";
import landAerial from "@/assets/gen-land-aerial.jpg";

export type ListingStatus = "For Sale" | "For Rent" | "Off-Plan";
export type ListingType = "Duplex" | "Apartment" | "Land" | "Terrace";

export type Listing = {
  slug: string;
  title: string;
  status: ListingStatus;
  type: ListingType;
  location: string;
  price: number;
  priceNote?: string;
  beds: number;
  baths: number;
  parking: number;
  size: string;
  summary: string;
  description: string[];
  amenities: string[];
  images: { src: string; alt: string }[];
  featured?: boolean;
};

export const listings: Listing[] = [
  {
    slug: "5-bedroom-smart-duplex-lekki",
    title: "5 Bedroom Smart Contemporary Duplex",
    status: "For Sale",
    type: "Duplex",
    location: "Lekki Phase 1, Lagos",
    price: 320000000,
    beds: 5,
    baths: 6,
    parking: 4,
    size: "540 sqm",
    summary:
      "A sculptural fully detached duplex with a glass-fronted stairwell, private rooftop terrace and a finished BQ.",
    description: [
      "A statement residence on a quiet, fully serviced street in Lekki Phase 1. The facade pairs crisp white massing with a full-height glazed stairwell, giving the interior daylight from morning to evening.",
      "Interiors are delivered turn-key: imported porcelain floors, cove lighting throughout, a fitted island kitchen and en-suite treatment in every bedroom. The rooftop terrace is prepared for an outdoor lounge.",
      "Title is a registered Governor's Consent with clean, verifiable documentation. Inspection is available daily with prior appointment.",
    ],
    amenities: [
      "Fitted island kitchen",
      "Rooftop terrace",
      "All rooms en-suite",
      "Fitted wardrobes",
      "Boys' quarters",
      "Ample parking",
      "24/7 estate security",
      "Solar-ready wiring",
    ],
    images: [
      { src: duplexWhite.url, alt: "White contemporary detached duplex with glazed stairwell and paved driveway" },
      { src: kitchenWarm.url, alt: "Fitted island kitchen with stone worktop and warm cove lighting" },
      { src: livingRoom, alt: "Double-height living room with grey sofas and floor-to-ceiling windows" },
      { src: bedroom, alt: "Master bedroom with upholstered headboard and marble accent wall" },
    ],
    featured: true,
  },
  {
    slug: "4-bedroom-terrace-duplex-ajah",
    title: "4 Bedroom Luxury Terrace Duplex",
    status: "For Sale",
    type: "Terrace",
    location: "Ajah, Lagos",
    price: 165000000,
    beds: 4,
    baths: 5,
    parking: 2,
    size: "380 sqm",
    summary:
      "Monochrome architecture, polished granite forecourt and an open-plan ground floor built for entertaining.",
    description: [
      "A striking black-and-white terrace duplex in a gated micro-estate off the Lekki–Epe corridor. Cantilevered upper floors shade the ground level and create a covered car port.",
      "The ground floor is open plan — living, dining and kitchen flow into one another and open onto the rear service yard. Upstairs holds three bedrooms plus a master suite with a private lounge.",
      "Handed over fully finished with a monochrome fitted kitchen, integrated appliances and a treated water system.",
    ],
    amenities: [
      "Open-plan ground floor",
      "Monochrome fitted kitchen",
      "Covered car port",
      "Treated water system",
      "Gated micro-estate",
      "CCTV provision",
      "Family lounge",
      "Service yard",
    ],
    images: [
      { src: duplexBlack.url, alt: "Modern white duplex with dark glazing and polished granite forecourt" },
      { src: kitchenMono.url, alt: "Monochrome fitted kitchen with island and integrated appliances" },
      { src: livingRoom, alt: "Open plan living area with marble floors and natural light" },
    ],
    featured: true,
  },
  {
    slug: "serviced-estate-plots-ibeju-lekki",
    title: "Serviced Residential Plots",
    status: "For Sale",
    type: "Land",
    location: "Ibeju-Lekki, Lagos",
    price: 18500000,
    priceNote: "per 500 sqm plot",
    beds: 0,
    baths: 0,
    parking: 0,
    size: "500 sqm / 300 sqm",
    summary:
      "Fully surveyed, road-networked plots inside a gated estate minutes from the Lekki Free Trade Zone corridor.",
    description: [
      "A land-banking opportunity in one of Lagos' fastest appreciating corridors. Plots are surveyed, beaconed and served by graded internal roads with drainage.",
      "Perimeter fencing, a gatehouse and estate signage are already in place, and construction has begun on the first houses within the scheme.",
      "Payment plans run up to 12 months with allocation on completion. Every document is verified before we release a plot.",
    ],
    amenities: [
      "Registered survey",
      "Graded road network",
      "Perimeter fence & gatehouse",
      "Drainage in place",
      "12-month payment plan",
      "Instant allocation",
      "Estate development control",
      "Verified title",
    ],
    images: [
      { src: landAerial, alt: "Aerial view of a gated serviced estate with surveyed plots and access roads" },
    ],
    featured: true,
  },
  {
    slug: "3-bedroom-apartment-ikate",
    title: "3 Bedroom Serviced Apartment",
    status: "For Rent",
    type: "Apartment",
    location: "Ikate Elegushi, Lagos",
    price: 12000000,
    priceNote: "per annum",
    beds: 3,
    baths: 4,
    parking: 2,
    size: "210 sqm",
    summary:
      "A serviced apartment with 24-hour power, a fitted kitchen and shared pool deck in a managed block.",
    description: [
      "Bright, efficiently planned three-bedroom apartment in a professionally managed block. Service charge covers 24-hour power, water treatment, cleaning and security.",
      "The living and dining space opens onto a balcony with estate views. All bedrooms are en-suite with fitted wardrobes.",
      "Two years' rent upfront or a negotiated structure for corporate tenants.",
    ],
    amenities: [
      "24/7 power supply",
      "Shared pool deck",
      "Fitted kitchen",
      "Elevator access",
      "Concierge & security",
      "Balcony",
      "Gym access",
      "Managed service charge",
    ],
    images: [
      { src: poolDusk, alt: "Luxury residence with lit pool deck at dusk surrounded by palm trees" },
      { src: livingRoom, alt: "Furnished living room with contemporary sofas and large windows" },
      { src: bedroom, alt: "En-suite bedroom with warm lighting and city view window" },
    ],
  },
  {
    slug: "off-plan-4-bedroom-duplex-sangotedo",
    title: "Off-Plan 4 Bedroom Detached Duplex",
    status: "Off-Plan",
    type: "Duplex",
    location: "Sangotedo, Lagos",
    price: 98000000,
    priceNote: "from, staged payments",
    beds: 4,
    baths: 5,
    parking: 3,
    size: "420 sqm",
    summary:
      "Buy at construction stage with staged payments and supervised delivery in 14 months.",
    description: [
      "An off-plan release supervised end to end by our construction team. Buyers lock in pre-completion pricing and pay against verified milestones.",
      "Each unit is delivered with a fitted kitchen, en-suite bedrooms, a family lounge and a self-contained BQ.",
      "Site progress reports and photographs are issued to buyers monthly until handover.",
    ],
    amenities: [
      "Milestone payment plan",
      "Supervised construction",
      "Monthly progress reports",
      "Fitted kitchen at handover",
      "Boys' quarters",
      "Family lounge",
      "Gated development",
      "14-month delivery",
    ],
    images: [
      { src: duplexWhite.url, alt: "Detached duplex design similar to the off-plan units under construction" },
      { src: kitchenWarm.url, alt: "Kitchen specification delivered at handover" },
    ],
  },
  {
    slug: "4-bedroom-family-duplex-gra",
    title: "4 Bedroom Family Duplex",
    status: "For Sale",
    type: "Duplex",
    location: "Magodo GRA, Lagos",
    price: 145000000,
    beds: 4,
    baths: 4,
    parking: 3,
    size: "400 sqm",
    summary:
      "A well-kept family home on a mature GRA street, with a landscaped compound and a separate BQ.",
    description: [
      "Set on a quiet residential street in Magodo GRA, this home suits a family that wants space without leaving the mainland corridor.",
      "Generous reception rooms, a separate dining area and a large kitchen with a pantry. The compound is landscaped with parking for three cars.",
      "Documentation is complete and the property is available for immediate inspection.",
    ],
    amenities: [
      "Landscaped compound",
      "Pantry & store",
      "Separate BQ",
      "Borehole & treatment",
      "Interlocked driveway",
      "Fitted wardrobes",
      "Guest toilet",
      "Solar-ready",
    ],
    images: [
      { src: poolDusk, alt: "Family duplex with lit exterior and landscaped surroundings at dusk" },
      { src: livingRoom, alt: "Reception room with marble floors and layered lighting" },
      { src: kitchenMono.url, alt: "Kitchen with island, stone worktop and integrated appliances" },
    ],
  },
];

export const featuredListings = listings.filter((l) => l.featured).slice(0, 3);

export function getListing(slug: string) {
  return listings.find((l) => l.slug === slug);
}
