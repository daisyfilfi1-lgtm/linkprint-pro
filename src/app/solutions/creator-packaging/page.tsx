import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

const creatorFormats = [
  {
    name: "Art Print Boxes",
    image: "/images/desktop/设计师品牌邮寄.png",
    description: "Gallery-grade rigid boxes for art prints and photography editions. Flat-lay design prevents warping. Archival-quality acid-free board.",
    specs: "2mm greyboard, 150gsm acid-free lining, magnetic closure",
    details: "Foil stamp edition number, blind emboss artist mark",
  },
  {
    name: "Limited Edition Drops",
    image: "/images/desktop/限量发售.png",
    description: "Numbered collector boxes with serialized foil stamping. Each unit traceable. Designed for streetwear, sneaker, and collectible drops.",
    specs: "1.5mm solid board, serialized hot foil, holographic seal",
    details: "From 500 units, 10-day production",
  },
  {
    name: "Pop-Up Kits",
    image: "/images/desktop/快闪活动.png",
    description: "Rapid-turnaround packaging for pop-up events, launch parties, and IRL activations. 72-hour prototyping, branded tissue included.",
    specs: "350gsm kraft, soy-based print, tear-strip opening",
    details: "500 units minimum, flat-packed for venue setup",
  },
  {
    name: "Designer Mailer Sets",
    image: "/images/desktop/众筹.png",
    description: "Premium mailer sets for independent designers and crowdfunding campaigns. Thank-you card slot, sticker sheet compartment, unboxing optimized.",
    specs: "E-flute corrugated, matte lamination, insert tray",
    details: "Custom insert design included, MOQ 500",
  },
];

const faqItems = [
  {
    q: "What's the minimum order for creator packaging?",
    a: "500 units per design. No rigid tiers — you can run 500 this month and 800 next month at the same unit price.",
  },
  {
    q: "Can I get foil stamping on 500 units?",
    a: "Yes. Our digital foil and hot foil processes both start at MOQ 500. No plate charge for digital foil.",
  },
  {
    q: "How fast can you prototype?",
    a: "72 hours from artwork approval. We ship physical samples via DHL so you can approve before production.",
  },
  {
    q: "Do you handle fulfillment?",
    a: "We offer flat-packed bulk shipping to your warehouse or 3PL. Direct-to-consumer fulfillment available for EU orders.",
  },
];

function FormatCard({ f }: { f: typeof creatorFormats[0] }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-8 border-t border-black/5 last:border-b">
      <div className="md:w-1/3 flex-shrink-0">
        <PlaceholderImage label={f.name} aspectRatio="3/2" src={f.image} className="w-full" />
      </div>
      <div className="md:w-2/3">
        <h3 className="font-display text-xl text-text-primary">{f.name}</h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">{f.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(107,107,107,0.4)" }}>Specs</span>
            <p className="mt-0.5 text-sm text-text-secondary">{f.specs}</p>
          </div>
          <div>
            <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(107,107,107,0.4)" }}>Details</span>
            <p className="mt-0.5 text-sm text-text-secondary">{f.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ faq }: { faq: { q: string; a: string } }) {
  return (
    <div className="py-4 border-t border-black/5">
      <h3 className="font-display text-lg text-text-primary">{faq.q}</h3>
      <p className="mt-1 text-sm text-text-secondary leading-relaxed">{faq.a}</p>
    </div>
  );
}

export default function CreatorPackagingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 lg:pb-24 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Creator Economy</span>
          <h1 className="mt-6 font-display text-4xl lg:text-5xl text-off-white leading-tight" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Packaging as content. Limited drops, unlimited expression.
          </h1>
          <p className="mt-4 text-base leading-relaxed max-w-lg" style={{ color: "rgba(253,252,250,0.5)" }}>
            72-hour prototyping, 10-day production, MOQ 500. You create the drop — we handle the box.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg">
            {[
              { v: "500", l: "MOQ Units" },
              { v: "72H", l: "Prototyping" },
              { v: "10D", l: "Production" },
              { v: "4", l: "Formats" },
            ].map((s) => (
              <div key={s.l} className="p-4 text-center" style={{ backgroundColor: "rgba(253,252,250,0.04)", borderRadius: "4px" }}>
                <div className="font-display text-xl font-bold" style={{ color: "#C9A962" }}>{s.v}</div>
                <div className="font-mono text-xs mt-1" style={{ color: "rgba(253,252,250,0.5)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-warm py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Formats</span>
          <h2 className="mt-4 font-display text-3xl lg:text-4xl text-text-primary leading-tight">
            Four formats. Infinite releases.
          </h2>
          <div className="mt-12">
            {creatorFormats.map((f) => (
              <FormatCard key={f.name} f={f} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#FDFCFA" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">FAQ</span>
          <h2 className="mt-4 font-display text-3xl text-text-primary leading-tight">
            Questions creators ask.
          </h2>
          <div className="mt-10">
            {faqItems.map((faq) => (
              <FaqItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-off-white leading-tight">
            Ready to drop?
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
              style={{ backgroundColor: "#C9A962", color: "#1A1A1A", borderRadius: "2px" }}
            >
              Start Creator Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
