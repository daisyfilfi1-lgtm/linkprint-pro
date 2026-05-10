import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

const seasonalProducts = [
  {
    name: "Advent Calendar",
    image: "/images/desktop/seasonal-holiday圣诞倒数礼盒.png",
    holiday: "Christmas",
    structure: "24-drawer rigid box, 2mm greyboard, magnetic closure",
    finishing: "Gold hot foil, spot UV on drawer fronts, red velvet lining",
    material: "400gsm art paper, FSC certified",
  },
  {
    name: "Heart-Shaped Gift Box",
    image: "/images/desktop/seasonal-holiday情人节心形礼盒.png",
    holiday: "Valentine's Day",
    structure: "Custom die-cut heart shape, magnetic lid, ribbon pull",
    finishing: "Rose gold foil, soft-touch lamination, pearlized coating",
    material: "350gsm pearlescent paper, recycled board",
  },
  {
    name: "Floral Message Box",
    image: "/images/desktop/seasonal-holiday母亲节花语礼盒.png",
    holiday: "Mother's Day",
    structure: "Telescopic two-piece box, insert tray, satin ribbon",
    finishing: "Embossed floral pattern, gold edge gilding, matte lamination",
    material: "300gsm cotton paper, 1.5mm greyboard",
  },
  {
    name: "Black Friday Limited Box",
    image: "/images/desktop/seasonal-holiday黑五限定盒.png",
    holiday: "Black Friday",
    structure: "Mailer box with insert, E-flute corrugated",
    finishing: "Matte black coating, holographic foil logo, spot UV",
    material: "350gsm black CCNB, 1.2mm E-flute",
  },
  {
    name: "Multi-Tier Gift Set",
    image: "/images/desktop/中秋节.png",
    holiday: "Mid-Autumn Festival",
    structure: "3-tier drawer box, individual compartments, ribbon pull",
    finishing: "Gold foil on textured paper, blind emboss, internal pattern print",
    material: "250gsm art paper, 2mm greyboard",
  },
  {
    name: "Summer Cool Edition",
    image: "/images/desktop/夏日清爽限定.png",
    holiday: "Summer Collection",
    structure: "Slipcase with inner tray, finger cutout",
    finishing: "Gradient offset print, gloss spot UV, cool-tone foil",
    material: "300gsm coated paper, 1.5mm board",
  },
  {
    name: "Corporate Holiday Gift Set",
    image: "/images/desktop/企业定制.png",
    holiday: "Year-End Corporate",
    structure: "Rigid setup box, foam insert, magnetic closure",
    finishing: "Debossed logo, matte lamination, metallic edge",
    material: "400gsm kraft wrap, 2mm greyboard",
  },
  {
    name: "Wedding Favor Box",
    image: "/images/desktop/婚礼.png",
    holiday: "Wedding Season",
    structure: "Small rigid box, satin ribbon tie, insert card slot",
    finishing: "Hot foil monogram, pearlized finish, wax seal compatible",
    material: "250gsm cotton paper, 1.5mm greyboard",
  },
];

const serviceTags = [
  "MOQ 500 Units",
  "72H Prototyping",
  "No Plate Fee",
  "Unlimited Versions",
];

function ServiceTagBar() {
  return (
    <section className="bg-charcoal py-8 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {serviceTags.map((tag) => (
            <div
              key={tag}
              className="px-4 py-3 text-center font-mono text-xs tracking-[0.1em]"
              style={{
                color: "#C9A962",
                backgroundColor: "rgba(201,169,98,0.08)",
                borderRadius: "2px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: typeof seasonalProducts[0] }) {
  return (
    <div className="group border border-black/5 hover:border-black/10 hover:shadow-sm transition-all" style={{ borderRadius: "4px" }}>
      <PlaceholderImage label={p.name} aspectRatio="3/2" src={p.image} className="w-full" />
      <div className="p-5">
        <span className="font-mono text-xs tracking-[0.15em] text-mint uppercase">{p.holiday}</span>
        <h3 className="mt-1 font-display text-xl text-text-primary">{p.name}</h3>
        <div className="mt-3 space-y-2">
          <div>
            <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(107,107,107,0.4)" }}>Structure</span>
            <p className="mt-0.5 text-sm text-text-secondary">{p.structure}</p>
          </div>
          <div>
            <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(107,107,107,0.4)" }}>Finishing</span>
            <p className="mt-0.5 text-sm text-text-secondary">{p.finishing}</p>
          </div>
          <div>
            <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(107,107,107,0.4)" }}>Material</span>
            <p className="mt-0.5 text-sm text-text-secondary">{p.material}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SeasonalHolidayPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 lg:pb-24 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Seasonal & Holiday</span>
          <h1 className="mt-6 font-display text-4xl lg:text-5xl text-off-white leading-tight" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            18 days from concept to shelf.
          </h1>
          <p className="mt-4 text-base leading-relaxed max-w-lg mx-auto" style={{ color: "rgba(253,252,250,0.5)" }}>
            Christmas, Valentine&apos;s, Black Friday, Mid-Autumn — seasonal packaging that arrives before the rush. MOQ 500 per design.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
              style={{ backgroundColor: "#C9A962", color: "#1A1A1A", borderRadius: "2px" }}
            >
              Start Seasonal Order
            </Link>
          </div>
        </div>
      </section>

      <ServiceTagBar />

      {/* Product Grid */}
      <section className="bg-warm py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Products</span>
          <h2 className="mt-4 font-display text-3xl lg:text-4xl text-text-primary leading-tight">
            Eight seasonal formats. Ready when you are.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalProducts.map((p) => (
              <ProductCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-charcoal py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-off-white leading-tight">
            Ready for your next seasonal drop?
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(253,252,250,0.5)" }}>
            Tell us the holiday, quantity, and design direction. We&apos;ll ship prototypes within 72 hours.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
              style={{ backgroundColor: "#C9A962", color: "#1A1A1A", borderRadius: "2px" }}
            >
              Request Seasonal Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
