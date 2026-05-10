import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

const collateralItems = [
  {
    name: "Brochures & Lookbooks",
    image: "/images/desktop/宣传册目录.png",
    description: "A5/A4 landscape or portrait. Saddle-stitched or perfect bound. Foil-stamped covers with matte interior pages.",
    specs: "Cover 300gsm art paper, interior 150gsm matte, 24-48 pages",
    process: "Offset print, spot UV cover, gold foil logo",
  },
  {
    name: "Posters & Signage",
    image: "/images/desktop/海报.png",
    description: "Large-format exhibition posters, roll-up banners, and booth signage. G7 calibrated color across all formats.",
    specs: "200gsm coated paper or PVC, up to A0 size",
    process: "Digital or offset, matte or gloss lamination",
  },
  {
    name: "Exhibition Gift Boxes",
    image: "/images/desktop/展会礼盒.png",
    description: "Premium presentation boxes for product samples and VIP gifts. Magnetic closure, custom insert, branded ribbon.",
    specs: "2mm greyboard, 150gsm wrapping, magnetic lid",
    process: "Foil stamp, emboss, soft-touch lamination",
  },
  {
    name: "Business Cards",
    image: "/images/desktop/名片吊牌贴纸.png",
    description: "Letterpress, foil-stamped, or duplex laminated business cards that make a first impression worth remembering.",
    specs: "400gsm cotton or duplex board, 85x55mm standard",
    process: "Letterpress, hot foil, edge painting, spot UV",
  },
];

const painPoints = [
  { title: "Inconsistent branding", desc: "Different printers, different colors. We guarantee brand consistency across all collateral with G7 calibration." },
  { title: "Last-minute panic", desc: "72-hour prototyping and 10-day production means you can finalize designs weeks later than usual." },
  { title: "Shipping logistics", desc: "Direct-to-venue shipping. Your booth kit arrives before you do, packed and labeled by section." },
  { title: "Wasted leftovers", desc: "Print exact quantities from 500 units. No warehouse of obsolete brochures with last year's branding." },
];

const showSchedule = [
  { name: "FESPA", location: "Berlin / Munich", date: "May 2025" },
  { name: "drupa", location: "Dusseldorf", date: "June 2025" },
  { name: "Luxe Pack", location: "Monaco / New York", date: "Sep / Nov 2025" },
  { name: "Empack", location: "Various EU", date: "Oct 2025" },
  { name: "CosmoPharm PACK", location: "Milan", date: "Nov 2025" },
];

function CollateralCard({ item }: { item: typeof collateralItems[0] }) {
  return (
    <div className="border border-black/5 hover:border-black/10 hover:shadow-sm transition-all" style={{ borderRadius: "4px" }}>
      <PlaceholderImage label={item.name} aspectRatio="3/2" src={item.image} className="w-full" />
      <div className="p-5">
        <h3 className="font-display text-xl text-text-primary">{item.name}</h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.description}</p>
        <div className="mt-3 space-y-1">
          <div className="flex gap-2">
            <span className="font-mono text-xs flex-shrink-0" style={{ color: "rgba(107,107,107,0.4)" }}>Specs:</span>
            <span className="text-sm text-text-secondary">{item.specs}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono text-xs flex-shrink-0" style={{ color: "rgba(107,107,107,0.4)" }}>Process:</span>
            <span className="text-sm text-text-secondary">{item.process}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ show }: { show: { name: string; location: string; date: string } }) {
  return (
    <div className="flex items-start gap-4 py-4 border-t border-black/5">
      <div className="flex-shrink-0 w-20">
        <span className="font-mono text-xs tracking-[0.1em] text-mint uppercase">{show.date}</span>
      </div>
      <div>
        <h4 className="font-display text-lg text-text-primary">{show.name}</h4>
        <p className="text-sm text-text-secondary">{show.location}</p>
      </div>
    </div>
  );
}

export default function ExhibitionCollateralPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pb-24 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Exhibition Collateral</span>
          <h1 className="mt-6 font-display text-4xl lg:text-5xl text-off-white leading-tight" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            One brand. One printer. One visual identity.
          </h1>
          <p className="mt-4 text-base leading-relaxed max-w-lg" style={{ color: "rgba(253,252,250,0.5)" }}>
            Brochures, posters, gift boxes, business cards — all produced in one run, shipped direct to venue.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg">
            {[
              { v: "500", l: "MOQ" },
              { v: "72H", l: "Prototyping" },
              { v: "4", l: "Item Types" },
              { v: "Venue", l: "Direct Ship" },
            ].map((s) => (
              <div key={s.l} className="p-4 text-center" style={{ backgroundColor: "rgba(253,252,250,0.04)", borderRadius: "4px" }}>
                <div className="font-display text-xl font-bold" style={{ color: "#C9A962" }}>{s.v}</div>
                <div className="font-mono text-xs mt-1" style={{ color: "rgba(253,252,250,0.5)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-warm py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((pp) => (
              <div key={pp.title} className="p-6 border border-black/5" style={{ borderRadius: "4px" }}>
                <h3 className="font-display text-lg text-text-primary">{pp.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{pp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#FDFCFA" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Collateral</span>
          <h2 className="mt-4 font-display text-3xl lg:text-4xl text-text-primary leading-tight">
            Everything your booth needs.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collateralItems.map((item) => (
              <CollateralCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Show schedule */}
      <section className="bg-warm py-16 lg:py-24 border-t border-black/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Meet Us</span>
          <h2 className="mt-4 font-display text-3xl text-text-primary leading-tight">
            See the craft in person.
          </h2>
          <div className="mt-10">
            {showSchedule.map((show) => (
              <TimelineCard key={show.name} show={show} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-off-white leading-tight">
            Preparing for a show?
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
              style={{ backgroundColor: "#C9A962", color: "#1A1A1A", borderRadius: "2px" }}
            >
              Get Exhibition Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
