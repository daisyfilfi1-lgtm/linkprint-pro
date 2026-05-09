import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Pharma & Healthcare Packaging — LinkPrint Pro",
  description:
    "GMP-compliant paper packaging for supplements, medical devices, and health products. EU MDR ready. MOQ 500, full compliance documentation.",
};

const products = [
  {
    name: "Pharma Folding Cartons",
    image: "/images/desktop/药盒.png",
    specs: "400–600gsm SBS / Art Paper · AQ or UV Coating",
    processes: "Offset print, emboss, batch number, tamper-evident seal",
    description: "Primary and secondary packaging for solid dosage forms, medical devices, and diagnostic kits. EU MDR compliant.",
  },
  {
    name: "Patient Information Leaflets",
    image: "/images/desktop/说明书标签.png",
    specs: "40–70gsm Uncoated · Multi-Fold / Booklet",
    processes: "Offset or digital, multi-language, braille-ready scoring",
    description: "CE-marked leaflets with IFU content. Multi-language edition support with regulatory review readiness.",
  },
  {
    name: "Compliance Document Pack",
    image: "/images/desktop/防篡改.png",
    specs: "A4 Ring-Binder / Custom Folder · Full Documentation",
    processes: "Offset cover, tab dividers, foil-stamped branding",
    description: "Complete compliance dossier — certificate of analysis, batch records, and EU declaration of conformity.",
  },
];

const complianceSteps = [
  { title: "File Pre-Check", subtitle: "Review artwork for regulatory compliance markers and structural integrity." },
  { title: "Compliance Audit", subtitle: "Cross-check materials against EU MDR, REACH, FSC chain-of-custody requirements." },
  { title: "Digital Proof", subtitle: "FDA/EU-compliant digital proof with measurement call-outs and material declarations." },
  { title: "Production", subtitle: "GMP-controlled manufacturing with batch traceability and environmental monitoring." },
  { title: "FQC", subtitle: "Full quality control — dimensional, color, adhesion, and seal integrity testing." },
  { title: "Delivery", subtitle: "Batch-sealed delivery with CoA, batch certificate, and EU declaration of conformity." },
];


export default function PharmaHealthcarePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="flex flex-col lg:flex-row min-h-[80vh] pt-20">
        <div className="lg:w-1/2 bg-charcoal flex items-center px-6 lg:px-12 py-20 lg:py-0">
          <div className="max-w-lg">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              Pharma Solutions
            </span>
            <h1 className="mt-6 font-display text-4xl lg:text-6xl text-off-white leading-tight">
              Pharma-Grade Compliance,{" "}
              Small-Batch Flexibility.
            </h1>
            <p className="mt-6 text-off-white/60 text-sm leading-relaxed">
              GMP-compliant paper packaging for supplements, medical devices,
              and nutraceuticals. Full EU MDR documentation included with every
              order — from MOQ 500.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 font-mono text-xs tracking-[0.1em]">
              <div>
                <span className="text-off-white/40">MOQ</span>
                <p className="text-off-white mt-1">500 Units</p>
              </div>
              <div>
                <span className="text-off-white/40">Compliance</span>
                <p className="text-off-white mt-1">EU MDR · GMP · REACH</p>
              </div>
              <div>
                <span className="text-off-white/40">Documentation</span>
                <p className="text-off-white mt-1">Full Batch Records</p>
              </div>
              <div>
                <span className="text-off-white/40">Audit Ready</span>
                <p className="text-off-white mt-1">ISO 9001:2015</p>
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-off-white text-off-white text-sm font-body font-medium tracking-wide hover:bg-off-white hover:text-charcoal transition-all duration-300"
              >
                Request Pharma Compliance Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 min-h-[40vh] lg:min-h-full">
          <PlaceholderImage
            label="PHARMA HERO — Clinical White Folding Carton with Tamper-Evident Seal and Batch Number"
            aspectRatio="1/1"
            className="w-full h-full"
            category="pharma"
          />
        </div>
      </section>

      {/* Section 2: Certifications Wall */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              Certifications
            </span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
              Standards we stand by.
            </h2>
            <p className="mt-4 text-text-secondary text-sm max-w-xl mx-auto">
              All certifications apply globally across every solution we offer —
              from DTC to Pharma. No shortcuts, no exceptions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "ISO 9001:2015", desc: "Quality Management System" },
              { name: "FSC® Certified", desc: "Chain of Custody" },
              { name: "EU MDR 2017/745", desc: "Medical Device Ready" },
              { name: "REACH Compliant", desc: "All Materials & Inks" },
              { name: "CE Marking", desc: "EU Market Distribution" },
            ].map((cert) => (
              <div key={cert.name} className="border border-black/5 p-6 bg-off-white text-center">
                <PlaceholderImage
                  label={`CERTIFICATION — ${cert.name} Certificate Scan`}
                  aspectRatio="1/1"
                  className="w-full mb-4"
                  category="pharma"
                />
                <h3 className="font-mono text-xs tracking-[0.1em] text-text-primary font-medium">
                  {cert.name}
                </h3>
                <p className="text-[10px] text-text-secondary/60 mt-1">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-[10px] font-mono text-text-secondary/40 tracking-[0.1em]">
              CERTIFICATIONS AVAILABLE FOR REVIEW UPON REQUEST · STANDARDS APPLY ACROSS ALL SOLUTIONS
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Product Grid */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Pharma Range
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
            Three essentials for{" "}
            regulated packaging.
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
                  <div className="mb-3 w-16 h-16 overflow-hidden">
                    <PlaceholderImage
                      label={p.name}
                      aspectRatio="1/1"
                      src={p.image}
                      className="w-full h-full"
                    />
                  </div>
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

      {/* Section 4: Compliance Process */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Compliance Workflow
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-2xl">
            Six steps from file{" "}
            to regulated delivery.
          </h2>
          <div className="mt-16">
            {/* Desktop horizontal */}
            <div className="hidden lg:flex items-start justify-between relative">
              <div className="absolute top-6 left-0 right-0 h-px bg-black/10" />
              {complianceSteps.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center relative z-10 w-[15%]">
                  <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center text-off-white font-mono text-sm font-bold">
                    {i + 1}
                  </div>
                  <h3 className="mt-6 font-display text-base text-text-primary text-center">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[10px] text-text-secondary text-center leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>
            {/* Mobile vertical */}
            <div className="lg:hidden space-y-10">
              {complianceSteps.map((step, i) => (
                <div key={step.title} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-off-white font-mono text-xs font-bold">
                      {i + 1}
                    </div>
                    {i < complianceSteps.length - 1 && (
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
                label="PHARMA CASE — Clinical Folding Carton with Batch Code, Tamper-Evident Seal, and Barcode Micro Macro"
                aspectRatio="4/3"
                className="w-full"
                category="pharma"
              />
            </div>
            <div className="lg:w-1/2 max-w-lg">
              <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
                Case Study
              </span>
              <blockquote className="mt-6 font-display text-3xl lg:text-4xl text-off-white leading-tight">
                &ldquo;1,000 EMA-compliant drug cartons delivered with full
                batch documentation in 14 days.&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="text-sm font-body font-medium text-off-white">
                  Dr. Elena Voss
                </p>
                <p className="text-xs font-mono text-off-white/40 mt-1">
                  CEO, Voss Bioceuticals
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

      {/* Product Gallery */}
    </>
  );
}
