export const site = {
  name: "Jaykinga Vision Realty",
  shortName: "Jaykinga",
  tagline: "Client Focused. Results Driven.",
  bn: "3504356",
  phoneDisplay: "0901 472 7494",
  phoneHref: "tel:+2349014727494",
  whatsapp: "2349014727494",
  email: "hello@jaykingavisionrealty.com",
  address: "Lekki–Epe Expressway, Lekki, Lagos, Nigeria",
  hours: "Mon – Sat, 8:00am – 6:00pm",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const naira = (value: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
