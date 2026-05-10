import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

const fbProducts = [
  {
    name: "Craft Beer Labels",
    image: "/images/desktop/城市限定.png",
    description: "Pantone-matched labels for craft breweries. City-specific editions, seasonal variants, tamper-evident paper.",
    specs: "Lead time 7 days, MOQ 500, soy-based inks",
    process: "Offset or digital, cold foil, emboss, spot UV",
  },
  {
    name: "6-Pack Carrier Boxes",
    image: "/images/desktop/Carrier Boxes.png",
    description: "FSC kraft carrier boxes for 4/6/8-pack configurations. Stackable, shippable, retail-ready.",
    specs: "Lead time 10 days, MOQ 500, E-flute or solid board",
    process: "Flexo print, die-cut handles, reinforced bottom",
  },
  {
    name: "Chocolate Folding Cartons",
    image: "/images/desktop/巧克力.png",
    description: "Food-grade folding cartons for artisan chocolate. Grease-resistant coating, gold foil accents.",
    specs: "Lead time 10 days, MOQ 500, FDA food contact compliant",
    process: "Offset print, soft-touch lamination, magnetic closure",
  },
  {
    name: "Snack Mailer Boxes",
    image: "/images/desktop/健康零食邮寄盒.png",
    description: "Subscription-ready mailer boxes for healthy snacks. Compostable windows, branded inserts.",
    specs: "Lead time 10 days, MOQ 500, PLA window film",
    process: "Kraft print, die-cut window, tear strip, soy inks",
  },
  {
    name: "Coffee Gift Sets",
    image: "/images/desktop/咖啡订阅盒.png",
    description: "Premium gift sets for specialty coffee roasters. Magnetic closure, degassing valve cutout, tasting notes card slot.",
    specs: "Lead time 12 days, MOQ 500, rigid setup box",
    process: "Full-wrap litho, gold foil, ribbon pull, insert tray",
  },
  {
    name: "Tamper-Evident Paper Strips",
    image: "/images/desktop/防篡改.png",
    description: "Paper-based tamper-evident seals replacing plastic shrink bands. Serialized, recyclable, food-contact safe.",
    specs: "Lead time 7 days, MOQ 1,000, variable data print",
    process: "VDP serialization, perforated tear line, water-based adhesive",
  },
  {
    name: "Quick Commerce Paper Bags",
    image: "/images/desktop/城市限定.png",
    description: "Branded paper bags for quick commerce and delivery. Flat-packed for warehouse efficiency.",
    specs: "Lead time 10 days, MOQ 1,000, 120-200gsm kraft",
    process: "Flexo print, twisted paper handles, reinforced bottom",
  },
  {
    name: "Seasonal Sleeves / Belly Bands",
    image: "/images/desktop/季节酒款限定.png",
    description: "Seasonal sleeves and belly bands for limited-edition products. Over-wrap existing packaging without redesign.",
    specs: "Lead time 7 days, MOQ 500, 200-300gsm coated paper",
    process: "Digital print, variable data, spot UV, perforation",
  },
];

const capabilities = [
  { title: "Variable Data Printing", desc: "Every sleeve can carry unique QR codes, batch numbers, or city names. 500 unique designs in one run." },
  { title: "City-Specific Editions", desc: "One SKU, 47 city variants. Each box carries local landmarks, language, and QR — same cost as single design." },
  { title: "Food-Safe Materials", desc: "All inks and coatings meet EU Framework Regulation (EC) 1935/2004 and FDA 21 CFR 176.170 for food contact." },
];

function ProductCard({ p }: { p: typeof fbProducts[0] }) {
  return (
    <div className="border border-black/5 hover:border-black/10 hover:shadow-sm transition-all" style={{ borderRadius: "4px" }}>
      <PlaceholderImage label={p.name} aspectRatio="3/2" src={p.image} className="w-full" />
      <div className="p-5">
        <h3 className="font-display text-lg text-text-primary">{p.name}</h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="px-2 py-1 font-mono text-xs" style={{ backgroundColor: "rgba(0,184,148,0.08)", color: "#00B894", borderRadius: "2px" }}>{p.specs}</span>
          <span className="px-2 py-1 font-mono text-xs" style={{ backgroundColor: "rgba(0,0,0,0.04)", color: "#6B6B6B", borderRadius: "2px" }}>{p.process}</span>
        </div>
      </div>
    </div>
  );
}

export default function FoodBeveragePackagingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pb-24 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Food & Beverage</span>
          <h1 className="mt-6 font-display text-4xl lg:text-5xl text-off-white leading-tight" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Craft packaging for craft products.
          </h1>
          <p className="mt-4 text-base leading-relaxed max-w-lg" style={{ color: "rgba(253,252,250,0.5)" }}>
            Seasonal labels, city-specific editions, tamper-evident paper for craft breweries and quick commerce. MOQ 500.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg">
            {[
              { v: "500", l: "MOQ Units" },
              { v: "7D", l: "Lead Time" },
              { v: "8", l: "Formats" },
              { v: "FDA", l: "Compliant" },
            ].map((s) => (
              <div key={s.l} className="p-4 text-center" style={{ backgroundColor: "rgba(253,252,250,0.04)", borderRadius: "4px" }}>
                <div className="font-display text-xl font-bold" style={{ color: "#C9A962" }}>{s.v}</div>
                <div className="font-mono text-xs mt-1" style={{ color: "rgba(253,252,250,0.5)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-warm py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Products</span>
          <h2 className="mt-4 font-display text-3xl lg:text-4xl text-text-primary leading-tight">
            Eight formats. Food-grade certified.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fbProducts.map((p) => (
              <ProductCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#FDFCFA" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Capabilities</span>
          <h2 className="mt-4 font-display text-3xl text-text-primary leading-tight">
            What sets us apart in F&B packaging.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="p-6 border border-black/5" style={{ borderRadius: "4px" }}>
                <h3 className="font-display text-lg text-text-primary">{c.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-off-white leading-tight">
            Brewing something new?
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
              style={{ backgroundColor: "#C9A962", color: "#1A1A1A", borderRadius: "2px" }}
            >
              Get F&B Packaging Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
