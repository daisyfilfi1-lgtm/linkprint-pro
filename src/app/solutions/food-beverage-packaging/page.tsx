import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProductGallery from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "F&B Packaging Solutions — LinkPrint Pro",
  description:
    "Seasonal labels, city-specific editions, tamper-evident paper for craft breweries, artisan food brands, and quick commerce. MOQ 500, 15-day delivery.",
};

const painPoints = [
  {
    pain: "Local label printers demand 5,000+ MOQ for seasonal beers",
    solution: "We start at 500 labels. Spring brew to winter ale, change designs every season.",
    result: "MOQ: 500 LABELS",
  },
  {
    pain: "City-specific editions are impossible with traditional flexo",
    solution: "Digital variable data. Print 300 labels for Berlin, 300 for Munich, same run.",
    result: "VARIABLE DATA: PER-UNIT",
  },
  {
    pain: "Quick commerce needs tamper-evident packaging, fast",
    solution: "Paper-based tamper strips and sealed mailer boxes. Food-safe adhesive. 7-day delivery.",
    result: "TAMPER-EVIDENT: PAPER-ONLY",
  },
  {
    pain: "Chocolate brands need food-grade folding cartons for limited drops",
    solution: "FSC food-grade paper with grease-resistant coating. 500-unit limited edition boxes.",
    result: "FOOD-GRADE: FSC + BARRIER COATING",
  },
];

const products = [
  {
    name: "Craft Beer Labels",
    moq: "500 labels",
    leadTime: "7-10 days",
    processes: "Wet-strength / coated paper, foil stamping, emboss, condensation-resistant",
  },
  {
    name: "6-Pack Carrier Boxes",
    moq: "500 units",
    leadTime: "10-15 days",
    processes: "FSC kraft paper, handle die-cut, dual-side print",
  },
  {
    name: "Chocolate Folding Cartons",
    moq: "500 units",
    leadTime: "10-15 days",
    processes: "Food-grade grease-resistant coating, foil / emboss, inner card insert",
  },
  {
    name: "Snack Mailer Boxes",
    moq: "500 units",
    leadTime: "10-15 days",
    processes: "Water-resistant coating, easy-tear strip, branded insert card",
  },
  {
    name: "Coffee Gift Sets",
    moq: "500 units",
    leadTime: "12-18 days",
    processes: "Magnetic-closure rigid box, variable origin labels, ribbon closure",
  },
  {
    name: "Tamper-Evident Paper Strips",
    moq: "1,000 strips",
    leadTime: "5-7 days",
    processes: "Food-grade adhesive, frangible fiber, one-tear destruction, serialised",
  },
  {
    name: "Quick Commerce Paper Bags",
    moq: "1,000 bags",
    leadTime: "7-10 days",
    processes: "Grease-proof lining, twisted paper handles, brand single/duotone print",
  },
  {
    name: "Seasonal Sleeves / Belly Bands",
    moq: "500 sleeves",
    leadTime: "5-7 days",
    processes: "Variable data ready, fits existing packaging, quick seasonal refresh",
  },
];

const differentiations = [
  {
    title: "From Concept to Shelf in 18 Days",
    description:
      "Traditional flexo printing carries high plate-change costs and long lead times. Digital printing makes seasonal editions — cherry blossom spring, citrus summer, spice winter — a standard capability, not a risk. Change designs every season with zero plate cost.",
    specs: ["DESIGN CHANGE: ZERO PLATE COST", "TURNAROUND: 72H PROTOTYPE → 15D DELIVERY", "EDITION SIZE: 500-2,000 UNITS"],
    label: "F&B DIFFERENTIATION — Seasonal Beer Label Series Side by Side Showing Spring, Summer, Winter Designs",
  },
  {
    title: "One Print Run, Unlimited Cities",
    description:
      "The same beer batch can carry labels that automatically switch city names, QR codes, and batch numbers. Berlin edition and Paris edition produced in a single order — no additional plate-making, no separate runs.",
    specs: ["VARIABLE FIELDS: CITY / QR CODE / BATCH No. / BEST-BEFORE", "DATA SOURCE: CSV / EXCEL / API", "PRINT ENGINE: HP INDIGO / XEIKON EQUIVALENT"],
    label: "F&B DIFFERENTIATION — City Specific Beer Labels Berlin Munich Paris Side by Side",
  },
  {
    title: "Paper That Protects",
    description:
      "Quick commerce platforms require tamper-evident packaging for food delivery. Our paper frangible strips and sealed cartons use food-safe adhesive that destroys the material upon removal — impossible to reapply, fully compliant.",
    specs: ["MATERIAL: WET-STRENGTH PAPER + FOOD-SAFE ADHESIVE", "TAMPER EVIDENCE: FIBER TEAR / VOID PATTERN", "COMPLIANCE: EU FRAMEWORK REGULATION (EC) No 1935/2004"],
    label: "F&B DIFFERENTIATION — Tamper Evident Paper Strip Macro Texture Close Up",
  },
];

const caseTeasers = [
  {
    client: "GERMAN CRAFT BREWERY",
    title: '"4 Seasonal Labels, 500 Units Each, Delivered Before the First Tap."',
    results: ["4 DESIGNS", "500 LABELS EACH", "12-DAY DELIVERY", "35% COST SAVING VS LOCAL"],
    label: "F&B CASE — Craft Beer Bottle Label Close Up in Dark Taproom Lighting with Gold Foil Reflection",
  },
  {
    client: "BELGIAN ARTISAN CHOCOLATIER",
    title: '"500-Unit Christmas Box Sold Out in 72 Hours. Followed by Valentine\'s Edition."',
    results: ["500 UNITS", "FSC PAPER + GOLD FOIL", "15-DAY DELIVERY", "REORDERED 3 SEASONS"],
    label: "F&B CASE — Chocolate Gift Box at 45 Degree Angle with Gold Foil Snowflake and Pine Branch Props",
  },
  {
    client: "UK QUICK-COMMERCE KITCHEN CHAIN",
    title: '"10,000 Tamper-Evident Paper Strips. Delivered in 5 Days for Platform Compliance."',
    results: ["10,000 STRIPS", "5-DAY TURNAROUND", "FOOD-SAFE ADHESIVE", "SEAL INTEGRITY 100%"],
    label: "F&B CASE — Tamper Evident Strip Macro with Frangible Fiber Texture and SEALED Embossing",
  },
];

const complianceItems = [
  { name: "EU FRAMEWORK REGULATION (EC) No 1935/2004", description: "Food contact materials — general safety requirements" },
  { name: "FDA 21 CFR 176.170", description: "Components of paper and paperboard in contact with aqueous and fatty foods" },
  { name: "EU 10/2011", description: "Plastic materials in food contact (for barrier coatings)" },
  { name: "FSC Chain of Custody", description: "Sustainable sourcing for food brands' ESG reporting" },
];

const galleryImages = [
  "/images/desktop/啤酒.png",
  "/images/desktop/巧克力.png",
  "/images/desktop/咖啡订阅盒.png",
  "/images/desktop/健康零食邮寄盒.png",
  "/images/desktop/城市限定.png",
  "/images/desktop/季节酒款限定.png",
];

export default function FoodBeveragePackagingPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="flex flex-col lg:flex-row min-h-[80vh] pt-20">
        <div className="lg:w-1/2 bg-charcoal flex items-center px-6 lg:px-12 py-20 lg:py-0">
          <div className="max-w-lg">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              F&B Solutions
            </span>
            <h1 className="mt-6 font-display text-4xl lg:text-6xl text-off-white leading-tight">
              Seasonal Editions,{" "}
              City-Specific Runs.
            </h1>
            <p className="mt-6 text-off-white/60 text-sm leading-relaxed font-body">
              Paper packaging for craft brands that move faster than local
              factories can print.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 font-mono text-xs tracking-[0.1em]">
              <div>
                <span className="text-off-white/40">MOQ</span>
                <p className="text-off-white mt-1">500 Units</p>
              </div>
              <div>
                <span className="text-off-white/40">Lead Time</span>
                <p className="text-off-white mt-1">10-15 Days</p>
              </div>
              <div>
                <span className="text-off-white/40">Variable Data</span>
                <p className="text-off-white mt-1">City QR · Batch · Season ID</p>
              </div>
              <div>
                <span className="text-off-white/40">Material</span>
                <p className="text-off-white mt-1">FSC Kraft · Food-Grade</p>
              </div>
              <div className="col-span-2">
                <span className="text-off-white/40">Compliance</span>
                <p className="text-off-white mt-1">EU 1935/2004 · FDA 21 CFR 176.170</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/sample-kit"
                className="inline-flex items-center px-8 py-3 border-2 border-mint text-mint text-sm font-body font-medium tracking-wide hover:bg-mint hover:text-charcoal transition-all duration-300"
              >
                Get F&B Sample Kit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 text-off-white/70 text-sm font-body font-medium tracking-wide hover:text-off-white transition-colors duration-300"
              >
                Request Seasonal Quote →
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 min-h-[40vh] lg:min-h-full">
          <PlaceholderImage
            label="F&B HERO — Craft Beer Bottle Label Macro with Wet-Strength Paper Texture and Gold Foil Detail in Side Light"
            aspectRatio="1/1"
            className="w-full h-full"
            category="hero_paper"
          />
        </div>
      </section>

      {/* Section 2: Pain Point Matrix */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Pain Points
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
            Four barriers to F&B packaging{" "}
            that we eliminate.
          </h2>
          <div className="mt-16 space-y-0">
            {painPoints.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-t border-black/5 last:border-b last:border-black/5 items-start"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-text-secondary/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    &ldquo;{item.pain}&rdquo;
                  </p>
                </div>
                <div className="md:col-span-4">
                  <p className="text-sm text-text-primary leading-relaxed font-medium">
                    {item.solution}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <span className="font-mono text-xs tracking-[0.1em] text-mint">
                    {item.result}
                  </span>
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
            F&B Range
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
            Eight products for{" "}
            food & beverage packaging.
          </h2>
          <div className="mt-16 space-y-0">
            {products.map((p, i) => (
              <div
                key={p.name}
                className="grid grid-cols-1 md:grid-cols-6 gap-6 py-10 border-t border-black/5 last:border-b last:border-black/5 items-start"
              >
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-text-secondary/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-text-primary">
                    {p.name}
                  </h3>
                </div>
                <div className="md:col-span-1">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">
                    MOQ
                  </span>
                  <p className="mt-2 font-mono text-xs text-text-primary">
                    {p.moq}
                  </p>
                </div>
                <div className="md:col-span-1">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">
                    Lead Time
                  </span>
                  <p className="mt-2 font-mono text-xs text-text-primary">
                    {p.leadTime}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">
                    Processes
                  </span>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {p.processes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Differentiation */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Differentiation
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-3xl">
            Three capabilities that set us apart{" "}
            in F&B packaging.
          </h2>
          <div className="mt-16 space-y-24">
            {differentiations.map((diff, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row gap-12 items-center"
              >
                <div className="lg:w-[60%]">
                  <span className="font-mono text-xs text-text-secondary/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-3xl lg:text-4xl text-text-primary leading-tight">
                    {diff.title}
                  </h3>
                  <p className="mt-6 text-sm text-text-secondary leading-relaxed">
                    {diff.description}
                  </p>
                  <div className="mt-6 space-y-2 font-mono text-xs tracking-[0.05em]">
                    {diff.specs.map((spec) => (
                      <p key={spec} className="text-text-primary/70">
                        {spec}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="lg:w-[35%]">
                  <PlaceholderImage
                    label={diff.label}
                    aspectRatio="4/3"
                    className="w-full"
                    category="hero_paper"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Case Teasers */}
      <section className="space-y-0">
        {caseTeasers.map((cs, i) => (
          <section key={i} className="relative min-h-[70vh] bg-charcoal flex items-center overflow-hidden">
            <div className="absolute inset-0">
              <PlaceholderImage
                label={cs.label}
                aspectRatio="16/9"
                className="w-full h-full"
                category="hero_paper"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
            </div>
            <div className="relative z-10 w-full px-6 lg:px-12 py-24">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-2xl">
                  <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
                    {cs.client}
                  </span>
                  <blockquote className="mt-4 font-display text-2xl lg:text-3xl text-off-white leading-tight">
                    {cs.title}
                  </blockquote>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {cs.results.map((result) => (
                      <span
                        key={result}
                        className="font-mono text-[10px] tracking-[0.1em] text-off-white/60 border border-off-white/20 px-3 py-1.5"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>

      {/* Section 6: Compliance */}
      <section className="bg-[#F0EEEB] py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-text-secondary uppercase">
            Food-Safe Paper Packaging Compliance
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
            Regulations we{" "}
            meet on every order.
          </h2>
          <div className="mt-16 space-y-0">
            {complianceItems.map((item, i) => (
              <div
                key={item.name}
                className="py-8 border-t border-black/10 last:border-b last:border-black/10"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <span className="font-mono text-xs text-text-secondary/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-sm text-text-primary flex-1">
                    {item.name}
                  </span>
                  <span className="text-sm text-text-secondary leading-relaxed md:w-1/3">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-text-secondary/60 leading-relaxed max-w-xl">
            All food-contact paper packaging ships with a Material Safety Data
            Sheet (SDS) and a Declaration of Compliance per order. Third-party
            testing reports available upon request.
          </p>
        </div>
      </section>

      {/* Section 7: Trust Bar */}
      <section className="bg-warm py-12 border-t border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-mono text-xs tracking-[0.15em] text-text-secondary/60 uppercase">
            PHARMA-GRADE QUALITY STANDARDS APPLIED TO ALL ORDERS — ISO 15378 /
            G7 / FSC / FOOD-CONTACT COMPLIANT
          </p>
        </div>
      </section>

      {/* Product Gallery */}
      <ProductGallery images={galleryImages} title="Food & Beverage Packaging" />

      {/* Section 8: Bottom CTA */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-off-white leading-tight max-w-2xl mx-auto">
            Brewing Something{" "}
            New?
          </h2>
          <p className="mt-6 text-off-white/60 text-sm max-w-lg mx-auto leading-relaxed">
            Get a food-grade sample kit with wet-strength label swatches, folding
            carton structures, and tamper-evident paper strips.
          </p>
          <div className="mt-10">
            <Link
              href="/sample-kit"
              className="inline-flex items-center px-10 py-4 bg-mint text-charcoal text-sm font-body font-semibold tracking-wide hover:bg-mint/90 transition-colors duration-300"
            >
              Get F&B Sample Kit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
