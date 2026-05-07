import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Sustainable Packaging Solutions — LinkPrint Pro",
  description:
    "PPWR-ready paper packaging for EU compliance. Mono-material cartons, FSC boxes, water-based inks, and full carbon reporting — MOQ 500.",
};

const complianceItems = [
  { name: "Mono-Material Cartons", spec: "100% Paper · No Plastic Lamination", description: "Single-material construction for effortless recyclability. Meets PPWR Article 6 requirements for recyclable packaging design." },
  { name: "FSC® Certified Boxes", spec: "FSC Mix / FSC Recycled · Chain of Custody", description: "Every fiber traced from certified sources. Full chain-of-custody documentation included with every order." },
  { name: "Water-Based Ink Printing", spec: "Soy-Based · VOC-Free · Pantone Matched", description: "Zero volatile organic compounds. Full Pantone library available on uncoated FSC substrates with ±0.5 delta-E accuracy." },
  { name: "Recycling Labels & Markings", spec: "Waste Framework Directive · Triman Logo", description: "Pre-compliant recycling labels and consumer disposal instructions per EU member state regulations." },
  { name: "Carbon Footprint Report", spec: "Per Unit · Cradle-to-Gate · Gold Standard", description: "Detailed carbon audit for each order. Offsetting via Gold Standard certified projects included at no extra cost." },
];

const journeySteps = [
  { title: "Material Consultation", subtitle: "We analyze your current packaging and recommend PPWR-ready alternatives." },
  { title: "Sample Selection", subtitle: "Choose from 12+ FSC paper stocks with matching ink and finish tests." },
  { title: "Design Adaptation", subtitle: "Our engineers adapt your artwork for mono-material, recyclable construction." },
  { title: "Prototype & Certify", subtitle: "72-hour prototype + compliance documentation package." },
  { title: "Production & Report", subtitle: "Manufacturing with full carbon footprint report and recycling labels." },
];

export default function SustainablePackagingPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="min-h-screen flex items-center bg-warm paper-texture relative">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <PlaceholderImage
            label="PAPER FIBER MACRO — Extreme Close-up of Recycled Paper Texture with Visible Fibers"
            aspectRatio="16/9"
            className="w-full h-full"
            category="sustainable"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 w-full relative z-10">
          <div className="max-w-3xl">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              Sustainable Packaging
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-text-primary">
              PPWR-Ready <br />
              <span className="italic">by Default.</span>
            </h1>
            <p className="mt-6 text-text-secondary text-sm leading-relaxed max-w-xl">
              Every order ships compliant with EU Packaging & Packaging Waste
              Regulation. Mono-material, fully recyclable, FSC-certified — with
              zero plastic and full carbon transparency.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-text-primary text-text-primary text-sm font-body font-medium tracking-wide hover:bg-text-primary hover:text-warm transition-all duration-300"
              >
                Download PPWR Compliance Guide
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 text-text-secondary text-sm font-body font-medium tracking-wide hover:text-text-primary transition-colors duration-300"
              >
                Request Sustainable Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Policy Urgency */}
      <section className="bg-warm py-24 lg:py-32 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-[40%]">
              <span className="font-display text-[10rem] lg:text-[14rem] leading-none text-mint/15 select-none">
                2030
              </span>
            </div>
            <div className="lg:w-[60%] max-w-xl">
              <p className="font-display text-3xl lg:text-4xl text-text-primary leading-tight">
                78% of EU SMEs are unprepared for the 2030 PPWR deadline.
              </p>
              <p className="mt-6 text-text-secondary text-sm leading-relaxed">
                The EU Packaging & Packaging Waste Regulation mandates all
                packaging placed on the EU market must be fully recyclable by
                2030. Non-compliant packaging will be banned from sale. We make
                compliance automatic — every box we produce meets PPWR
                standards today, not tomorrow.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 font-mono text-xs">
                <div>
                  <span className="text-mint text-lg font-bold">100%</span>
                  <p className="text-text-secondary mt-1">Recyclable by Design</p>
                </div>
                <div>
                  <span className="text-mint text-lg font-bold">0%</span>
                  <p className="text-text-secondary mt-1">Plastic Content</p>
                </div>
                <div>
                  <span className="text-mint text-lg font-bold">-73%</span>
                  <p className="text-text-secondary mt-1">Avg. Carbon Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Compliance Specs Table */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Compliance Specifications
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
            Five pillars of <span className="italic">PPWR readiness.</span>
          </h2>
          <div className="mt-16 space-y-0">
            {complianceItems.map((item, i) => (
              <div
                key={item.name}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10 border-t border-black/5 last:border-b last:border-black/5 items-start"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-text-secondary/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-xl text-text-primary">
                    {item.name}
                  </h3>
                </div>
                <div className="md:col-span-1">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">
                    Spec
                  </span>
                  <p className="mt-2 font-mono text-xs text-text-primary leading-relaxed">
                    {item.spec}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Customer Journey Timeline */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Your Journey
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-2xl">
            From plastic to compliant paper{" "}
            <span className="italic">in 5 steps.</span>
          </h2>
          <div className="mt-16 relative">
            {/* Horizontal Timeline */}
            <div className="hidden lg:flex items-start justify-between relative">
              {/* Connecting line */}
              <div className="absolute top-6 left-0 right-0 h-px bg-black/10" />
              {journeySteps.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center relative z-10 w-[18%]">
                  <div className="w-12 h-12 rounded-full bg-mint flex items-center justify-center text-charcoal font-mono text-sm font-bold">
                    {i + 1}
                  </div>
                  <h3 className="mt-6 font-display text-lg text-text-primary text-center">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-text-secondary text-center leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>
            {/* Mobile: vertical */}
            <div className="lg:hidden space-y-10">
              {journeySteps.map((step, i) => (
                <div key={step.title} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center text-charcoal font-mono text-xs font-bold">
                      {i + 1}
                    </div>
                    {i < journeySteps.length - 1 && (
                      <div className="w-px flex-1 bg-black/10 mt-2" />
                    )}
                  </div>
                  <div className="pb-10">
                    <h3 className="font-display text-lg text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs text-text-secondary">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Case Teaser */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <PlaceholderImage
                label="SUSTAINABLE CASE — Premium Gift Box with Embossed Logo on Recycled Kraft Paper"
                aspectRatio="4/3"
                className="w-full"
                category="sustainable"
              />
            </div>
            <div className="lg:w-1/2 max-w-lg">
              <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
                Case Study
              </span>
              <blockquote className="mt-6 font-display text-3xl lg:text-4xl italic text-off-white leading-tight">
                &ldquo;We replaced 12 tons of plastic packaging with
                PPWR-ready paper without changing our fulfilment workflow.&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="text-sm font-body font-medium text-off-white">
                  Lukas Weber
                </p>
                <p className="text-xs font-mono text-off-white/40 mt-1">
                  Sustainability Lead, GreenLeaf Organics
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
