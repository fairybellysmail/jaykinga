import { MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(`Hello ${site.shortName}, I'd like to speak with an agent.`)}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lift transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  );
}
