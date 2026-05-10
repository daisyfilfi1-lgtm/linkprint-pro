import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

const pharmaProducts = [
  {
    name: "Pharma Folding Cartons",
    image: "/images/desktop/药盒.png",
    description: "GMP-compliant folding cartons for tablets, capsules, and medical devices. Tamper-evident seal, braille embossing available.",
    specs: "350-400gsm SBS board, aqueous coating, child-resistant option",
    compliance: "EU MDR 2017/745, ISO 15378, FDA 21 CFR",
  },
  {
    name: "Patient Information Leaflets",
    image: "/images/desktop/说明书标签.png",
    description: "Multi-language PILs printed on pharmaceutical-grade paper. Folded to fit carton dimensions. Batch-coded for traceability.",
    specs: "40-60gsm pharma paper, up to 32 panels, micro-font clear",
    compliance: "EMA QRD template compliant, braille ready",
  },
  {
    name: "Compliance Document Pack",
    image: "/images/desktop/防篡改.png",
    description: "Complete compliance documentation package shipped with every order. REACH, FSC, CE, and batch traceability reports included.",
    specs: "Digital and physical documentation, 48h delivery",
    compliance: "Full EU and FDA documentation set",
  },
];

const certBadges = [
  "ISO 9001:2015",
  "FSC Certified",
  "EU MDR 2017/745",
  "REACH Compliant",
  "CE Marking",
  "ISO 15378",
];

const processSteps = [
  { step: "1", title: "Material Audit", desc: "Paper and ink compliance verification against EU MDR and FDA requirements." },
  { step: "2", title: "Artwork Review", desc: "Braille, font size, and safety symbol verification per EMA QRD guidelines." },
  { step: "3", title: "Pre-Production Sample", desc: "Physical sample with batch coding, tamper-evident seal, and color proof." },
  { step: "4", title: "Production Run", desc: "GMP environment, IQC/IPQC/FQC at every stage. Real-time batch tracking." },
  { step: "5", title: "Lab Testing", desc: "Migration testing, extractables, and leachables per ISO and FDA standards." },
  { step: "6", title: "Documentation Pack", desc: "Full compliance dossier shipped with order. Digital archive for audits." },
];

function ProductCard({ p }: { p: typeof pharmaProducts[0] }) {
  return (
    <div className="border border-black/5 hover:border-black/10 hover:shadow-sm transition-all" style={{ borderRadius: "4px" }}>
      <PlaceholderImage label={p.name} aspectRatio="3/2" src={p.image} className="w-full" />
      <div className="p-5">
        <h3 className="font-display text-xl text-text-primary">{p.name}</h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">{p.description}</p>
        <div className="mt-3 space-y-1">
          <div className="flex gap-2">
            <span className="font-mono text-xs flex-shrink-0" style={{ color: "rgba(107,107,107,0.4)" }}>Specs:</span>
            <span className="text-sm text-text-secondary">{p.specs}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono text-xs flex-shrink-0" style={{ color: "rgba(107,107,107,0.4)" }}>Compliance:</span>
            <span className="text-sm text-mint">{p.compliance}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PharmaHealthcarePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pb-24 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Pharma & Healthcare</span>
          <h1 className="mt-6 font-display text-4xl lg:text-5xl text-off-white leading-tight" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            GMP-compliant packaging. Small-batch flexibility.
          </h1>
          <p className="mt-4 text-base leading-relaxed max-w-lg" style={{ color: "rgba(253,252,250,0.5)" }}>
            Paper packaging for supplements, medical devices, and health products. EU MDR ready documentation included with every order.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg">
            {[
              { v: "GMP", l: "Certified" },
              { v: "500", l: "MOQ" },
              { v: "EU MDR", l: "Ready" },
              { v: "48H", l: "Compliance Docs" },
            ].map((s) => (
              <div key={s.l} className="p-4 text-center" style={{ backgroundColor: "rgba(253,252,250,0.04)", borderRadius: "4px" }}>
                <div className="font-display text-xl font-bold" style={{ color: "#C9A962" }}>{s.v}</div>
                <div className="font-mono text-xs mt-1" style={{ color: "rgba(253,252,250,0.5)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Badges */}
      <section className="bg-warm py-12 border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {certBadges.map((cert) => (
              <div
                key={cert}
                className="px-3 py-3 text-center font-mono text-xs tracking-[0.1em]"
                style={{
                  backgroundColor: "rgba(0,0,0,0.03)",
                  borderRadius: "4px",
                  color: "#6B6B6B",
                }}
              >
                {cert}
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
            Pharmaceutical-grade paper packaging.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pharmaProducts.map((p) => (
              <ProductCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#FDFCFA" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Process</span>
          <h2 className="mt-4 font-display text-3xl text-text-primary leading-tight">
            6-step compliance workflow.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {processSteps.map((ps) => (
              <div key={ps.step} className="p-5 border border-black/5" style={{ borderRadius: "4px" }}>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm font-bold mb-3"
                  style={{ backgroundColor: "#C9A962", color: "#1A1A1A" }}
                >
                  {ps.step}
                </div>
                <h4 className="font-display text-lg text-text-primary">{ps.title}</h4>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">{ps.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-off-white leading-tight">
            Need compliant pharmaceutical packaging?
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
              style={{ backgroundColor: "#C9A962", color: "#1A1A1A", borderRadius: "2px" }}
            >
              Request Compliance Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
