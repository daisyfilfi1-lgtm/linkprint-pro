import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";

type CaseCategory = "hero_paper" | "dtc_mailer" | "sustainable" | "creator" | "exhibition" | "pharma";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageLabel: string;
  category: CaseCategory;
  metrics: string[];
  quote: string;
  author: string;
  role: string;
}

export const metadata: Metadata = {
  title: "Case Studies — LinkPrint Pro",
  description:
    "Real packaging transformations for DTC brands, creators, and pharma companies.",
};

const caseStudies: CaseStudy[] = [
  {
    id: "dtc-skincare",
    title: "DTC — US Skincare Brand",
    subtitle: "A/B Testing 3 Seasonal Designs",
    description:
      "A rapidly growing US skincare brand needed to test three seasonal packaging designs with minimal financial risk. We produced 800 units of each variant — mailer boxes with seasonal foil colours, embossed patterns, and custom tissue paper. The A/B test ran across their email and social channels; the winning design lifted conversion by 28%. Full reorder came within 3 weeks.",
    imageLabel: "DTC CASE STUDY — Three Seasonal Mailer Box Variants with Foil Accents Side by Side",
    category: "dtc_mailer",
    metrics: ["800 units per variant", "3 designs A/B tested", "28% conversion uplift", "3-week reorder"],
    quote: "A/B testing packaging was a game-changer. We found our audience's favourite in under a month.",
    author: "US Skincare Brand",
    role: "DTC & E-commerce",
  },
  {
    id: "sustainable-plastic",
    title: "Sustainable — Plastic to Paper",
    subtitle: "Replacing Plastic with PPWR-Ready Paper",
    description:
      "A European organic food brand needed to replace their plastic stand-up pouches with fully recyclable paper packaging ahead of PPWR deadlines. We engineered a mono-material paper carton with a water-based barrier coating, matched their existing shelf dimensions, and delivered 5,000 units with full carbon footprint documentation. The switch eliminated 12 tons of plastic annually.",
    imageLabel: "SUSTAINABLE CASE STUDY — Kraft Paper Carton Next to Plastic Pouch, Side-by-side Comparison",
    category: "sustainable",
    metrics: ["5,000 units delivered", "12 tons plastic eliminated", "100% recyclable", "Full PPWR compliance"],
    quote: "We replaced 12 tons of plastic without changing our fulfilment workflow.",
    author: "GreenLeaf Organics",
    role: "Sustainability Lead",
  },
  {
    id: "creator-art-print",
    title: "Creator — Limited Art Print Box",
    subtitle: "500-Unit Limited Art Print Box",
    description:
      "A Copenhagen-based visual artist needed 500 numbered, archival-quality boxes for a limited edition art print drop. We produced rigid setup boxes with hot-foil serial numbers, archival paper lining, and magnetic closures. The entire run — from artwork approval to delivery — took 12 days. Every box sold out within 48 hours of launch.",
    imageLabel: "CREATOR CASE STUDY — Numbered Art Print Box with Archival Interior and Foil Serial Number",
    category: "creator",
    metrics: ["500 numbered units", "12-day turnaround", "Foil serial numbers", "48-hour sellout"],
    quote: "500 numbered boxes, delivered in 12 days. Our community shared every single unboxing.",
    author: "Studio NINE Copenhagen",
    role: "Founder",
  },
  {
    id: "exhibition-rescue",
    title: "Exhibition — 7-Day Kit Rescue",
    subtitle: "7-Day Exhibition Kit Rescue",
    description:
      "A Nordic design fair organiser's original supplier collapsed 10 days before the event. We produced 2,000 brochures, 500 gift boxes, 1,000 business cards, and 20 posters — all with matching paper stocks, consistent colour, and unified branding — in 7 days. Delivered to the booth 48 hours before doors opened.",
    imageLabel: "EXHIBITION CASE STUDY — Full Exhibition Collateral Suite Displayed on Booth Table",
    category: "exhibition",
    metrics: ["7-day production", "4 collateral types", "Unified visual identity", "48-hour pre-show delivery"],
    quote: "From brief to booth in one week. They saved our exhibition.",
    author: "Nordic Design Fair",
    role: "Event Director",
  },
  {
    id: "pharma-drug-cartons",
    title: "Pharma — EMA-Compliant Cartons",
    subtitle: "1,000 EMA-Compliant Drug Cartons",
    description:
      "A UK-based bioceutical startup needed 1,000 folding cartons for their first EU market entry — compliant with EU MDR 2017/745, complete with tamper-evident seals, batch numbering, and full documentation. We delivered the entire batch with Certificate of Analysis, batch records, and EU Declaration of Conformity in 14 days.",
    imageLabel: "PHARMA CASE STUDY — White Folding Cartons with Tamper-Evident Seal and Batch Code on Production Line",
    category: "pharma",
    metrics: ["1,000 units", "EU MDR compliant", "Full batch documentation", "14-day delivery"],
    quote: "1,000 EMA-compliant drug cartons delivered with full batch documentation in 14 days.",
    author: "Voss Bioceuticals",
    role: "CEO",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Case Studies
          </span>
          <h1 className="mt-6 font-display text-4xl lg:text-6xl text-text-primary leading-tight max-w-3xl">
            Packaging transformations{" "}
            <span className="italic">that speak for themselves.</span>
          </h1>
        </div>
      </section>

      {/* Case Study Sections */}
      {caseStudies.map((cs, i) => (
        <section
          key={cs.id}
          className="relative min-h-screen bg-charcoal flex items-center overflow-hidden"
        >
          {/* Full-screen image */}
          <div className="absolute inset-0">
            <PlaceholderImage
              label={cs.imageLabel}
              aspectRatio="16/9"
              className="w-full h-full"
              category={cs.category}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
          </div>

          {/* Content overlay */}
          <div className="relative z-10 w-full px-6 lg:px-12 py-24 mt-20">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-2xl">
                <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
                  Case {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-4xl lg:text-6xl text-off-white leading-tight">
                  {cs.title}
                </h2>
                <p className="mt-2 font-display text-xl italic text-mint">
                  {cs.subtitle}
                </p>

                {/* Metrics */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {cs.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="font-mono text-[10px] tracking-[0.1em] text-off-white/60 border border-off-white/20 px-3 py-1.5"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <p className="mt-8 text-sm text-off-white/70 leading-relaxed max-w-xl">
                  {cs.description}
                </p>

                <blockquote className="mt-8 font-display text-xl italic text-mint border-l-2 border-mint pl-4">
                  &ldquo;{cs.quote}&rdquo;
                  <footer className="mt-3 font-body text-sm not-italic text-off-white/50">
                    — {cs.author}, {cs.role}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
