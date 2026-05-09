import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Exhibition Packaging Solutions — LinkPrint Pro",
  description:
    "From booth to box — one visual identity for your exhibition collateral. Brochures, posters, gift boxes, business cards. MOQ 500, 72H prototyping.",
};

const painPoints = [
  {
    problem: "Your exhibition materials arrive late and don't match your booth design.",
    solution: "We coordinate your entire collateral suite — brochures, boxes, cards — under one visual identity and one production timeline.",
  },
  {
    problem: "Different suppliers for each item means inconsistent quality and branding.",
    solution: "Single-source production. Everything printed on matching paper stocks with consistent color, finish, and die-line language.",
  },
  {
    problem: "You order too much or too little because quantities are unpredictable.",
    solution: "MOQ 500 per item. Mix and match across formats to hit minimums. No forced bulk orders on slow-moving items.",
  },
  {
    problem: "Last-minute event changes mean reprinting entire batches.",
    solution: "72-hour prototyping and 7-day express production. Late changes don't mean missed deadlines.",
  },
];

const products = [
  {
    name: "Brochures & Lookbooks",
    specs: "A4 / A5 · 8–48 Pages · Saddle-Stitched or Perfect Bound",
    processes: "Offset print, spot UV, foil-stamped cover",
    description: "Presentation-quality collateral for distribution at booths and meetings.",
  },
  {
    name: "Posters & Signage",
    specs: "A2 / A1 / Custom · 170–300gsm Uncoated",
    processes: "Soy-based flexo, edge gilding, matte lamination",
    description: "Wall graphics, directional signage, and presentation posters for your exhibition space.",
  },
  {
    name: "Exhibition Gift Boxes",
    specs: "Rigid 2mm Board / 150gsm Brand Wrap",
    processes: "Full-wrap litho, hot foil logo, magnetic closure, ribbon pull",
    description: "Branded gift boxes for VIP visitors, press kits, and product samples.",
  },
  {
    name: "Business Cards",
    specs: "400gsm Uncoated / 400–600gsm Cotton",
    processes: "Letterpress, foil stamping, blind emboss, duplex edge",
    description: "Tactile business cards that communicate craftsmanship before a handshake.",
  },
];

const exhibitionCalendar = [
  { name: "FESPA", location: "Berlin / Munich", date: "May 2025", link: "#" },
  { name: "drupa", location: "Düsseldorf", date: "June 2025", link: "#" },
  { name: "Luxe Pack", location: "Monaco / New York", date: "Sep / Nov 2025", link: "#" },
  { name: "Empack", location: "Various EU", date: "Oct 2025", link: "#" },
  { name: "CosmoPharm PACK", location: "Milan", date: "Nov 2025", link: "#" },
];

export default function ExhibitionCollateralPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-charcoal pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <PlaceholderImage
            label="EXHIBITION HERO — Trade Show Booth with Branded Collateral and Lighting"
            aspectRatio="16/9"
            className="w-full h-full"
            category="exhibition"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              Exhibition Solutions
            </span>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl text-off-white leading-tight">
              From Booth to Box,{" "}
              One Visual Identity.
            </h1>
            <p className="mt-6 text-off-white/60 text-sm leading-relaxed max-w-xl">
              Brochures, posters, gift boxes, and business cards — all produced
              under one roof with matching paper, color, and finish. Your
              exhibition collateral tells the same story from the first
              handshake to the last sample.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-off-white text-off-white text-sm font-body font-medium tracking-wide hover:bg-off-white hover:text-charcoal transition-all duration-300"
              >
                Plan Your Exhibition Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Pain Points */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Exhibition Pain Points
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-2xl">
            The stress of event prep{" "}
            — solved.
          </h2>
          <div className="mt-16 space-y-0">
            {painPoints.map((pp, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-t border-black/5 last:border-b last:border-black/5"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-text-secondary/40 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-lg text-text-secondary/70">
                    &ldquo;{pp.problem}&rdquo;
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-mint uppercase">
                    Our Solution
                  </span>
                  <p className="mt-2 text-sm text-text-primary leading-relaxed">
                    {pp.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Product Grid */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Exhibition Range
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
            Everything your booth needs.
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
                    Processes
                  </span>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {p.processes}
                  </p>
                </div>
                <div className="md:col-span-1">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Exhibition Calendar */}
      <section className="bg-warm py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Events
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
            Meet us at these shows.
          </h2>
          <div className="mt-12 overflow-x-auto pb-4">
            <div className="flex gap-8 min-w-max">
              {exhibitionCalendar.map((event) => (
                <div
                  key={event.name}
                  className="flex-shrink-0 w-64 border border-black/5 p-6 bg-off-white hover:border-mint/30 transition-colors"
                >
                  <h3 className="font-display text-2xl text-text-primary">
                    {event.name}
                  </h3>
                  <p className="mt-2 text-xs font-mono text-text-secondary">
                    {event.location}
                  </p>
                  <p className="mt-1 text-xs font-mono text-mint">
                    {event.date}
                  </p>
                </div>
              ))}
              {/* Duplicate for infinite scroll illusion */}
              {exhibitionCalendar.map((event) => (
                <div
                  key={`dup-${event.name}`}
                  className="flex-shrink-0 w-64 border border-black/5 p-6 bg-off-white border-mint/10"
                >
                  <h3 className="font-display text-2xl text-text-primary">
                    {event.name}
                  </h3>
                  <p className="mt-2 text-xs font-mono text-text-secondary">
                    {event.location}
                  </p>
                  <p className="mt-1 text-xs font-mono text-mint">
                    {event.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-xs font-mono text-text-secondary/40 tracking-[0.1em]">
            VISIT OUR BOOTH FOR ON-THE-SPOT QUOTES AND PHYSICAL SAMPLES
          </p>
        </div>
      </section>

      {/* Section 5: Case Teaser */}
      <section className="min-h-[60vh] bg-charcoal flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <PlaceholderImage
            label="EXHIBITION CASE — Trade Show Floor with Full Booth Setup and Collateral Display"
            aspectRatio="16/9"
            className="w-full h-full"
            category="exhibition"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              Case Study
            </span>
            <blockquote className="mt-6 font-display text-3xl lg:text-5xl text-off-white leading-tight max-w-xl">
              &ldquo;7-day exhibition kit rescue. From brief to booth in one
              week.&rdquo;
            </blockquote>
            <div className="mt-6">
              <p className="text-sm font-body font-medium text-off-white">
                Anna Larsson
              </p>
              <p className="text-xs font-mono text-off-white/40 mt-1">
                Event Director, Nordic Design Fair
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
      </section>
    </>
  );
}
