import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Creator Packaging Solutions — LinkPrint Pro",
  description:
    "Limited runs, gallery-quality packaging for creators. Art print boxes, limited edition drops, pop-up kits — MOQ 500, 72H prototyping.",
};

const products = [
  {
    name: "Art Print Boxes",
    specs: "E-flute / 1.2mm / Archival 300gsm Lining",
    finishing: "Foil stamping, blind emboss, ribbon pull",
    description: "Flat-packed or assembled. Archival-quality interior for prints, posters, and fine art.",
  },
  {
    name: "Limited Edition Drops",
    specs: "Rigid 2mm Board / 150gsm Art Wrap",
    finishing: "Hot foil serial number, edge gilding, magnetic closure",
    description: "Numbered, collectible packaging for limited-run merchandise and collaborations.",
  },
  {
    name: "Pop-Up Kits",
    specs: "350gsm CCNB / Quick-fold Die-Cut",
    finishing: "Perforation, snap-lock, no-glue assembly",
    description: "Self-erecting structures for event merch, tour stops, and seasonal activations.",
  },
  {
    name: "Designer Mailer Sets",
    specs: "400gsm Recycled / PLA-coated Interior",
    finishing: "Inside print, soy-based ink, compostable window",
    description: "100% plastic-free mailers with custom interior printing for unboxing moments.",
  },
];

const faqItems = [
  {
    question: "I don't have a design file. Can you help?",
    answer: "Absolutely. Our in-house design team can work from reference images, mood boards, or verbal briefs. We offer structural design, artwork adaptation, and die-line creation — all included in the prototyping fee. Typical turnaround: 48 hours for die-lines, 72 hours for first prototype.",
  },
  {
    question: "How accurate is your color matching?",
    answer: "±0.5 delta-E on uncoated stocks. Our in-house ink lab formulates custom Pantone blends for every order. We send a physical color proof before production — no surprises. For foil and emboss registration, expect ±0.2mm precision.",
  },
  {
    question: "Can you ship directly to my fulfilment center?",
    answer: "Yes. We ship to fulfilment centers across the EU and US. Flat-packed boxes reduce storage footprint by up to 70%. We can also drop-ship direct to customers with your branded shipping labels. Just provide the addresses and we handle the logistics.",
  },
];

export default function CreatorPackagingPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="flex flex-col lg:flex-row min-h-[80vh] pt-20">
        <div className="lg:w-1/2 min-h-[40vh] lg:min-h-full">
          <PlaceholderImage
            label="CREATOR HERO — Giclée Art Print Box with Foil Accent on Textured Paper"
            aspectRatio="1/1"
            className="w-full h-full"
            category="creator"
          />
        </div>
        <div className="lg:w-1/2 bg-warm flex items-center px-6 lg:px-12 py-20 lg:py-0">
          <div className="max-w-lg">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              Creator Solutions
            </span>
            <h1 className="mt-6 font-display text-4xl lg:text-6xl text-text-primary leading-tight">
              Limited Runs, <br />
              <span className="italic">Gallery Quality.</span>
            </h1>
            <p className="mt-6 text-text-secondary text-sm leading-relaxed">
              Packaging that matches your creative standard. Small batches,
              premium finishes, and the flexibility to drop a new design every
              month — without minimum order penalties.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 font-mono text-xs tracking-[0.1em]">
              <div>
                <span className="text-text-secondary/40">Batch Size</span>
                <p className="text-text-primary mt-1">500–5,000 Units</p>
              </div>
              <div>
                <span className="text-text-secondary/40">Prototyping</span>
                <p className="text-text-primary mt-1">72 Hours</p>
              </div>
              <div>
                <span className="text-text-secondary/40">New Design</span>
                <p className="text-text-primary mt-1">Every 2 Weeks</p>
              </div>
              <div>
                <span className="text-text-secondary/40">Finishing</span>
                <p className="text-text-primary mt-1">Foil · Emboss · UV</p>
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-text-primary text-text-primary text-sm font-body font-medium tracking-wide hover:bg-text-primary hover:text-warm transition-all duration-300"
              >
                Start Your Creator Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Packaging-as-Content */}
      <section className="bg-warm py-24 lg:py-32 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-[40%]">
              <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
                Philosophy
              </span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
                Packaging as <span className="italic">Content.</span>
              </h2>
              <p className="mt-6 text-text-secondary text-sm leading-relaxed">
                Your packaging is the first physical touchpoint with your
                audience. It gets photographed, shared, and saved. We treat
                every box as a canvas — because in the creator economy, the
                unboxing is part of the product.
              </p>
              <div className="mt-8 font-mono text-xs text-text-secondary/60">
                <p>Average unboxing video view time: 2:47 min</p>
                <p className="mt-1">Share rate uplift with premium packaging: +40%</p>
              </div>
            </div>
            <div className="lg:w-[55%] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <PlaceholderImage
                label="CREATOR CONTENT 1 — Flat-Lay Unboxing with Art Print and Foil Box"
                aspectRatio="3/4"
                className="w-full h-full"
                category="creator"
              />
              <PlaceholderImage
                label="CREATOR CONTENT 2 — Limited Edition Drop Box with Ribbon Pull"
                aspectRatio="3/4"
                className="w-full h-full"
                category="creator"
              />
              <PlaceholderImage
                label="CREATOR CONTENT 3 — Pop-Up Kit Assembly with Snap-Lock"
                aspectRatio="3/4"
                className="w-full h-full"
                category="creator"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Grid */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Product Line
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
            Four formats. <span className="italic">Infinite releases.</span>
          </h2>
          <div className="mt-16 space-y-0">
            {products.map((p, i) => (
              <div
                key={p.name}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10 border-t border-black/5 last:border-b last:border-black/5 items-start"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-text-secondary/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-text-primary">
                    {p.name}
                  </h3>
                </div>
                <div className="md:col-span-1">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">
                    Specs
                  </span>
                  <p className="mt-2 font-mono text-xs text-text-primary leading-relaxed">
                    {p.specs}
                  </p>
                </div>
                <div className="md:col-span-1">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">
                    Finishing
                  </span>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {p.finishing}
                  </p>
                </div>
                <div className="md:col-span-1">
                  <p className="text-sm text-text-secondary leading-relaxed italic">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Creator FAQ */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            FAQ
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-2xl">
            Questions creators <span className="italic">actually ask.</span>
          </h2>
          <div className="mt-16 space-y-8">
            {faqItems.map((faq, i) => (
              <div key={i} className="border-t border-black/5 pt-8">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-text-secondary/40 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-text-primary">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Case Teaser */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <PlaceholderImage
                label="CREATOR CASE — Numbered Art Print Box with Foil Serial Number and Archival Interior"
                aspectRatio="4/3"
                className="w-full"
                category="creator"
              />
            </div>
            <div className="lg:w-1/2 max-w-lg">
              <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
                Case Study
              </span>
              <blockquote className="mt-6 font-display text-3xl lg:text-4xl italic text-off-white leading-tight">
                &ldquo;500 numbered boxes, delivered in 12 days. Our community
                shared every single unboxing.&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="text-sm font-body font-medium text-off-white">
                  Marcus Johansson
                </p>
                <p className="text-xs font-mono text-off-white/40 mt-1">
                  Founder, Studio NINE Copenhagen
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-sm font-body font-medium text-mint hover:text-mint/80 transition-colors duration-200"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
