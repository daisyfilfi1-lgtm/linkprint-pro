import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

const painPoints = [
  {
    problem: "You need 800 boxes, not 10,000.",
    solution: "We start at MOQ 500 — no minimum markup. Same paper, same processes.",
    data: "500–5,000 units per run. No rigid MOQ tiers.",
  },
  {
    problem: "Your packaging takes 6 weeks from concept to delivery.",
    solution: "72-hour prototyping + 10-day production. Standard timeline, not expedited.",
    data: "13 days average from artwork approval to dispatch.",
  },
  {
    problem: "Suppliers can't match Pantones on uncoated paper.",
    solution: "In-house ink lab. Soy-based flexo and offset on any FSC substrate.",
    data: "±0.5 delta-E color accuracy on uncoated stocks.",
  },
  {
    problem: "Your current packaging cracks in transit.",
    solution: "Engineered paper structures — E-flute, solid board, reinforced corners.",
    data: "0.2% transit damage rate across 12K+ shipments.",
  },
  {
    problem: "EU compliance paperwork takes weeks.",
    solution: "We include REACH, FSC, and CE documentation with every order.",
    data: "Full compliance package delivered within 48h of order confirmation.",
  },
];

const products = [
  {
    name: "Mailer Box",
    specs: "E-flute / 1.2mm / 200–400gsm Lining",
    processes: "Foil stamping, spot UV, embossed logo",
    description: "The e-commerce standard. Self-locking, no tape needed.",
  },
  {
    name: "Subscription Sleeve",
    specs: "350gsm CCNB / Matte Lamination",
    processes: "Laser die-cut window, hot foil serial number",
    description: "Slim, shippable, designed for recurring touchpoints.",
  },
  {
    name: "Rigid Setup Box",
    specs: "2mm Greyboard / 150gsm Wrapping Paper",
    processes: "Full-wrap litho, edge gilding, magnetic closure",
    description: "Premium unboxing for luxury DTC and gifting.",
  },
  {
    name: "Folding Carton",
    specs: "400gsm Art Paper / AQ Coating",
    processes: "Offset print, emboss, gloss spot UV",
    description: "Cost-efficient, high-volume, retail-ready packaging.",
  },
  {
    name: "Telescopic Box",
    specs: "1.5mm Solid Board / Kraft Wrap",
    processes: "Inside print, blind emboss, ribbon pull",
    description: "Two-piece box for fragile goods and curated sets.",
  },
  {
    name: "Clamshell Mailer",
    specs: "1mm Recycled Board / PLA Coating",
    processes: "Soy-based print, perforation, compostable window",
    description: "100% plastic-free, curbside recyclable mailer.",
  },
];

const complianceItems = [
  "FSC® Certified (Chain of Custody)",
  "REACH Compliant — all materials and inks",
  "CE Marking for EU market distribution",
  "ISO 9001:2015 Quality Management",
  "EU MDR Ready for pharma and medical devices",
  "Carbon-neutral shipping via Gold Standard offsets",
];

export default function DtcPackagingPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="flex flex-col lg:flex-row min-h-[80vh] pt-20">
        <div className="lg:w-1/2 bg-charcoal flex items-center px-6 lg:px-12 py-20 lg:py-0">
          <div className="max-w-lg">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              DTC Solutions
            </span>
            <h1 className="mt-6 font-display text-4xl lg:text-6xl text-off-white leading-tight">
              Packaging that converts. <br />
              <span className="italic">From unboxing to repurchase.</span>
            </h1>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 font-mono text-xs tracking-[0.1em]">
              <div>
                <span className="text-off-white/40">MOQ</span>
                <p className="text-off-white mt-1">500 Units</p>
              </div>
              <div>
                <span className="text-off-white/40">Prototyping</span>
                <p className="text-off-white mt-1">72 Hours</p>
              </div>
              <div>
                <span className="text-off-white/40">Delivery</span>
                <p className="text-off-white mt-1">15 Days EU</p>
              </div>
              <div>
                <span className="text-off-white/40">Materials</span>
                <p className="text-off-white mt-1">100% FSC Paper</p>
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-off-white text-off-white text-sm font-body font-medium tracking-wide hover:bg-off-white hover:text-charcoal transition-all duration-300"
              >
                Start Your Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 min-h-[40vh] lg:min-h-full">
          <PlaceholderImage
            label="DTC PACKAGING HERO — Assembled Mailer Boxes on White Background"
            aspectRatio="1/1"
            className="w-full h-full"
            category="dtc_mailer"
          />
        </div>
      </section>

      {/* Section 2: Pain Point Matrix */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Why brands switch
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-2xl">
            DTC packaging is broken.
            <br />
            <span className="italic">We fixed it.</span>
          </h2>

          <div className="mt-16 space-y-0">
            {painPoints.map((pp, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-t border-black/5 last:border-b last:border-black/5"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-text-secondary/40 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-lg text-text-primary">
                    {pp.problem}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-mint uppercase">
                    Solution
                  </span>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {pp.solution}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">
                    Data
                  </span>
                  <p className="mt-2 text-sm font-mono text-text-primary">
                    {pp.data}
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
            Product Line
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
            Six structures. <span className="italic">Infinite iterations.</span>
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
                  <p className="text-sm text-text-secondary leading-relaxed italic">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Case Teaser */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <PlaceholderImage
                label="CASE STUDY — Onda Wellness Unboxing Series"
                aspectRatio="4/3"
                className="w-full"
                category="dtc_mailer"
              />
            </div>
            <div className="lg:w-1/2 max-w-lg">
              <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
                Case Study
              </span>
              <blockquote className="mt-6 font-display text-3xl lg:text-4xl italic text-text-primary leading-tight">
                &ldquo;Switching to LinkPrint cut our packaging carbon footprint
                by 73% and lifted our unboxing share rate by 40%.&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="text-sm font-body font-medium text-text-primary">
                  Sarah Chen
                </p>
                <p className="text-xs font-mono text-text-secondary mt-1">
                  Head of Product, Onda Wellness
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

      {/* Section 5: Trust Bar */}
      <section className="bg-charcoal py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              Compliance & Certifications
            </span>
            <div className="mt-8 flex flex-wrap justify-center gap-x-12 gap-y-4">
              {complianceItems.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs tracking-[0.1em] text-off-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
