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
    image: "/images/desktop/DTC品牌邮寄盒.png",
    specs: "E-flute / 1.2mm / 200–400gsm Lining",
    processes: "Foil stamping, spot UV, embossed logo",
    description: "The e-commerce standard. Self-locking, no tape needed.",
  },
  {
    name: "Subscription Sleeve",
    image: "/images/desktop/套筒封套.png",
    specs: "350gsm CCNB / Matte Lamination",
    processes: "Laser die-cut window, hot foil serial number",
    description: "Slim, shippable, designed for recurring touchpoints.",
  },
  {
    name: "Rigid Setup Box",
    image: "/images/desktop/硬盒磁吸扣.png",
    specs: "2mm Greyboard / 150gsm Wrapping Paper",
    processes: "Full-wrap litho, edge gilding, magnetic closure",
    description: "Premium unboxing for luxury DTC and gifting.",
  },
  {
    name: "Folding Carton",
    image: "/images/desktop/D2C-AB测试多版本.png",
    specs: "400gsm Art Paper / AQ Coating",
    processes: "Offset print, emboss, gloss spot UV",
    description: "Cost-efficient, high-volume, retail-ready packaging.",
  },
  {
    name: "Telescopic Box",
    image: "/images/desktop/Telescopic Box.png",
    specs: "1.5mm Solid Board / Kraft Wrap",
    processes: "Inside print, blind emboss, ribbon pull",
    description: "Two-piece box for fragile goods and curated sets.",
  },
  {
    name: "Clamshell Mailer",
    image: "/images/desktop/Clamshell Mailer.png",
    specs: "1mm Recycled Board / PLA Coating",
    processes: "Soy-based print, perforation, compostable window",
    description: "100% plastic-free, curbside recyclable mailer.",
  },
];

const complianceItems = [
  "FSC Certified (Chain of Custody)",
  "REACH Compliant — all materials and inks",
  "CE Marking for EU market distribution",
  "ISO 9001:2015 Quality Management",
  "EU MDR Ready for pharma and medical devices",
  "Carbon-neutral shipping via Gold Standard offsets",
];

const stats = [
  { value: "500", label: "MOQ Units", icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
  { value: "72H", label: "Prototyping", icon: "M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" },
  { value: "15D", label: "Delivery EU", icon: "M5 12h14M12 5l7 7-7 7" },
  { value: "100%", label: "FSC Paper", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
];

function StatCard({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div className="p-6 text-center" style={{ backgroundColor: "rgba(253,252,250,0.04)", borderRadius: "4px" }}>
      <svg className="mx-auto mb-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={icon} />
      </svg>
      <div className="font-display text-2xl font-bold" style={{ color: "#C9A962" }}>{value}</div>
      <div className="font-mono text-xs mt-1" style={{ color: "rgba(253,252,250,0.5)" }}>{label}</div>
    </div>
  );
}

function PainCard({ pp, i }: { pp: { problem: string; solution: string; data: string }; i: number }) {
  return (
    <div className="p-6 border border-black/5 hover:border-black/10 transition-colors" style={{ borderRadius: "4px" }}>
      <div className="flex items-start gap-4">
        <span className="font-mono text-sm flex-shrink-0" style={{ color: "#C9A962" }}>
          {String(i + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-display text-xl text-text-primary">{pp.problem}</h3>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="font-mono text-xs tracking-[0.15em] text-mint uppercase">Solution</span>
              <p className="mt-1 text-sm text-text-secondary leading-relaxed">{pp.solution}</p>
            </div>
            <div>
              <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(107,107,107,0.4)" }}>Data</span>
              <p className="mt-1 text-sm font-medium text-text-primary">{pp.data}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ p, i }: { p: { name: string; image: string; specs: string; processes: string; description: string }; i: number }) {
  return (
    <div className="group p-4 border border-black/5 hover:border-black/10 hover:shadow-sm transition-all" style={{ borderRadius: "4px" }}>
      <PlaceholderImage
        label={p.name}
        aspectRatio="3/2"
        src={p.image}
        className="w-full"
      />
      <div className="mt-4">
        <span className="font-mono text-xs" style={{ color: "rgba(107,107,107,0.4)" }}>
          {String(i + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-1 font-display text-xl text-text-primary">{p.name}</h3>
        <div className="mt-3 space-y-2">
          <div>
            <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(107,107,107,0.4)" }}>Specs</span>
            <p className="mt-0.5 text-sm text-text-secondary">{p.specs}</p>
          </div>
          <div>
            <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(107,107,107,0.4)" }}>Processes</span>
            <p className="mt-0.5 text-sm text-text-secondary">{p.processes}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-text-secondary leading-relaxed">{p.description}</p>
      </div>
    </div>
  );
}

export default function DtcPackagingPage() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col lg:flex-row min-h-[80vh] pt-20">
        <div className="lg:w-1/2 bg-charcoal flex items-center px-6 lg:px-12 py-20 lg:py-0">
          <div className="max-w-lg">
            <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">
              DTC Solutions
            </span>
            <h1 className="mt-6 font-display text-4xl lg:text-5xl text-off-white leading-tight" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
              Packaging that converts.<br />From unboxing to repurchase.
            </h1>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
                style={{
                  backgroundColor: "#C9A962",
                  color: "#1A1A1A",
                  borderRadius: "2px",
                }}
              >
                Start Your Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 min-h-[40vh] lg:min-h-full">
          <PlaceholderImage
            label="DTC Packaging Hero"
            aspectRatio="3/2"
            src="/images/desktop/三种工艺图.png"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-charcoal py-12 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Matrix */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#FDFCFA" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">
            Product Line
          </span>
          <h2 className="mt-4 font-display text-3xl lg:text-4xl text-text-primary leading-tight">
            Six structures. Infinite iterations.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ProductCard key={p.name} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-warm py-16 lg:py-24 border-t border-black/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <PlaceholderImage
                label="Case Study — Onda Wellness"
                aspectRatio="3/2"
                src="/images/desktop/易撕条.png"
                className="w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">
                Case Study
              </span>
              <blockquote className="mt-4 font-display text-2xl lg:text-3xl text-text-primary leading-tight">
                Switching to Top Printing cut our packaging carbon footprint by 73% and lifted our unboxing share rate by 40%.
              </blockquote>
              <div className="mt-6">
                <p className="text-sm font-medium text-text-primary">Sarah Chen</p>
                <p className="text-sm text-text-secondary mt-0.5">Head of Product, Onda Wellness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why brands switch — FAQ */}
      <section className="bg-warm py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">
            Why brands switch
          </span>
          <h2 className="mt-4 font-display text-3xl lg:text-4xl text-text-primary leading-tight">
            DTC packaging is broken. We fixed it.
          </h2>
          <div className="mt-12 space-y-4">
            {painPoints.map((pp, i) => (
              <PainCard key={i} pp={pp} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-charcoal py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">
            Compliance & Certifications
          </span>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {complianceItems.map((item) => (
              <div
                key={item}
                className="px-4 py-3 font-mono text-xs tracking-[0.1em]"
                style={{
                  color: "rgba(253,252,250,0.7)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderRadius: "4px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
