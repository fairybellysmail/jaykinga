import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { site, whatsappLink } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(7, "Please enter a reachable phone number"),
  email: z.string().email("Please enter a valid email").or(z.literal("")),
  message: z.string().min(10, "Tell us a little more (10+ characters)"),
});

export function EnquiryForm({
  subject,
  compact = false,
}: {
  subject?: string;
  compact?: boolean;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    const { name, phone, email, message } = parsed.data;
    const text = [
      `New enquiry for ${site.name}`,
      subject ? `Regarding: ${subject}` : null,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener");
    toast.success("Thanks! We're opening WhatsApp so an agent can respond right away.");
    form.reset();
  }

  const field =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold">
            Full name
          </label>
          <input id="name" name="name" className={field} placeholder="Adaeze Okafor" />
          {errors["name"] && <p className="mt-1.5 text-xs text-destructive">{errors["name"]}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-semibold">
            Phone number
          </label>
          <input id="phone" name="phone" className={field} placeholder="0801 234 5678" />
          {errors["phone"] && <p className="mt-1.5 text-xs text-destructive">{errors["phone"]}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-semibold">
          Email <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input id="email" name="email" type="email" className={field} placeholder="you@email.com" />
        {errors["email"] && <p className="mt-1.5 text-xs text-destructive">{errors["email"]}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 4 : 5}
          className={field}
          defaultValue={subject ? `I'd like more information about ${subject}.` : ""}
          placeholder="Tell us your budget, preferred location and timeline."
        />
        {errors["message"] && <p className="mt-1.5 text-xs text-destructive">{errors["message"]}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-deep"
      >
        Send enquiry <Send className="size-4" aria-hidden />
      </button>
      <p className="text-xs text-muted-foreground">
        Your message opens in WhatsApp so an agent can reply immediately. Prefer to call?{" "}
        <a href={site.phoneHref} className="font-semibold text-brand hover:text-gold">
          {site.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
