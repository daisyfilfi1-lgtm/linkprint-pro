import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Compliance & Certifications — LinkPrint Pro",
  description:
    "ISO 9001:2015, FSC Chain of Custody, G7 Certification, ISO 15378, and food contact compliance. All certifications available for review upon request.",
};

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management System", standard: "International", detail: "Certified quality management system covering design, production, and delivery of paper packaging. Annual surveillance audits." },
  { name: "FSC Chain of Custody", desc: "Forest Stewardship Council", standard: "FSC-STD-40-004", detail: "Chain of custody certification for FSC Mix, FSC Recycled, and FSC 100% paper stocks. Full traceability from certified sources." },
  { name: "G7 Certification", desc: "Color Management", standard: "G7 Master Printer", detail: "IDEAlliance G7 Master qualification for calibrated, repeatable colour reproduction across offset and digital print processes." },
  { name: "ISO 15378", desc: "Primary Packaging for Medicinal Products", standard: "ISO 15378:2017", detail: "Quality management system for primary packaging materials of medicinal products. GMP-compliant production environment." },
  { name: "EU 1935/2004", desc: "Food Contact Materials Framework", standard: "EC No 1935/2004", detail: "Framework regulation for materials and articles intended to come into contact with food. Full declaration of compliance per batch." },
  { name: "FDA 21 CFR 176.170", desc: "Paper & Paperboard Food Contact", standard: "21 CFR 176.170", detail: "Components of paper and paperboard in contact with aqueous and fatty foods. Migration testing compliant." },
  { name: "SGS Testing Reports", desc: "Third-Party Laboratory Analysis", standard: "SGS Accredited", detail: "Independent third-party testing for food contact migration, heavy metals, VOC emissions, and physical properties." },
  { name: "Export License", desc: "Customs Registration", standard: "EU / US Customs", detail: "Registered exporter with full customs documentation. EU and US market entry documentation included with every order." },
];

const standardsMatrix = [
  { category: "Quality Management", standards: [true, false, false, true, false, false, false, false] },
  { category: "Environmental & Sustainability", standards: [false, true, false, false, false, false, false, false] },
  { category: "Color & Print", standards: [false, false, true, false, false, false, false, false] },
  { category: "Food Contact", standards: [false, false, false, false, true, true, true, false] },
  { category: "Pharma & Medical", standards: [false, false, false, true, false, false, false, false] },
  { category: "Trade & Export", standards: [false, false, false, false, false, false, false, true] },
];

const certShortNames = ["ISO 9001", "FSC", "G7", "ISO 15378", "EU 1935", "FDA CFR", "SGS", "Export"];

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Compliance & Certifications
          </span>
          <h1 className="mt-6 font-display text-4xl lg:text-6xl text-off-white leading-tight max-w-3xl">
            Every standard that{" "}
            backs every order.
          </h1>
          <p className="mt-6 text-off-white/60 text-base leading-relaxed max-w-xl">
            Quality certifications, regulatory compliance, and third-party
            verifications that apply across all our solutions — from DTC to
            Pharma, from F&B to Exhibition.
          </p>
        </div>
      </section>

      {/* Section 1: Certifications List (Specs table style) */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Certifications & Accreditations
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
            Eight credentials,{" "}
            one standard of quality.
          </h2>
          <div className="mt-16 space-y-0">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-t border-black/5 last:border-b last:border-black/5 items-start"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-text-secondary/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-mono text-sm text-text-primary font-medium">
                    {cert.name}
                  </h3>
                  <p className="text-base text-text-secondary mt-1">
                    {cert.desc}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">
                    Standard
                  </span>
                  <p className="mt-2 font-mono text-xs text-text-primary">
                    {cert.standard}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <p className="text-base text-text-secondary leading-relaxed">
                    {cert.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Coverage Matrix */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Coverage Matrix
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-2xl">
            Which certification applies{" "}
            to your need.
          </h2>
          <div className="mt-16 overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="py-4 pr-6 text-text-secondary/40 font-medium">Category</th>
                  {certShortNames.map((name) => (
                    <th key={name} className="py-4 px-3 text-text-secondary/40 font-medium text-center">
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {standardsMatrix.map((row) => (
                  <tr key={row.category} className="border-b border-black/5">
                    <td className="py-4 pr-6 text-text-primary font-medium">
                      {row.category}
                    </td>
                    {row.standards.map((present, idx) => (
                      <td key={idx} className="py-4 px-3 text-center">
                        <span
                          className={`inline-block ${
                            present ? "text-mint" : "text-text-secondary/20"
                          }`}
                        >
                          {present ? "✓" : "—"}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-[10px] font-mono text-text-secondary/40 tracking-[0.1em]">
            CERTIFICATIONS AVAILABLE FOR REVIEW UPON REQUEST · THIRD-PARTY AUDIT REPORTS PROVIDED ON REQUEST
          </p>
        </div>
      </section>

      {/* Section 3: Trust Bar */}
      <section className="bg-charcoal py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-mono text-xs tracking-[0.15em] text-off-white/40 uppercase">
            PHARMA-GRADE QUALITY STANDARDS APPLIED TO ALL ORDERS — ISO 15378 / G7 / FSC / FOOD-CONTACT COMPLIANT
          </p>
        </div>
      </section>
    </>
  );
}
