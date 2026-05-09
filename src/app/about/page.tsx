import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

const milestones = [
  { year: "2014", event: "Founded in Zhuhai, China — 500㎡ workshop, 8-person team" },
  { year: "2016", event: "Expanded to 2,000㎡ facility, first Heidelberg press installed" },
  { year: "2018", event: "FSC® Chain of Custody certification obtained" },
  { year: "2019", event: "ISO 9001:2015 quality management system certified" },
  { year: "2020", event: "G7 Master Printer qualification achieved" },
  { year: "2021", event: "Digital printing division launched — HP Indigo, Scodix digital embellishment" },
  { year: "2023", event: "Expanded to 5,000㎡ production facility, 90+ team members" },
  { year: "2024", event: "PPWR compliance framework established for EU market exports" },
  { year: "2025", event: "Soy-based and water-based ink systems fully adopted across all production" },
];

const certifications = [
  { name: "FSC® Chain of Custody", description: "Responsible forestry — every fiber traced from certified sources" },
  { name: "ISO 9001:2015", description: "Quality management systems — consistent processes, continuous improvement" },
  { name: "Soy-Based Inks", description: "Low-VOC, FDA-compliant, renewable vegetable oil base" },
  { name: "PPWR Compliance", description: "EU Packaging & Packaging Waste Regulation ready — mono-material design" },
  { name: "G7 Master Printer", description: "Color accuracy certified — ΔE ≤ 1.5 across all substrates" },
];

const equipment = [
  { name: "Heidelberg Offset Presses", detail: "XL 106 / CD 102 — 6-color + coating" },
  { name: "HP Indigo 12000", detail: "Digital sheet-fed — 4C + white, 1200 dpi" },
  { name: "Scodix E106", detail: "Digital foil, emboss, and spot UV enhancement" },
  { name: "KAMA ProCut 74", detail: "Die-cutting, creasing, and foil stamping" },
  { name: "Bobst Folder-Gluers", detail: "Visionfold / Media 100-II — auto carton assembly" },
  { name: "Konica Minolta AccurioShine", detail: "Digital embellishment with foil and varnish" },
];

const values = [
  { title: "Paper-First Philosophy", description: "We believe paper is the most advanced packaging material ever invented. Every project starts with material selection — because the right paper makes everything else possible." },
  { title: "Precision at Every Scale", description: "From 500 units to 50,000, the same G7 color accuracy, the same ISO 9001 quality checks, the same attention to die-line registration." },
  { title: "Sustainable by Default", description: "FSC-certified stocks, soy-based inks, water-based coatings, and mono-material design — sustainability is engineered in, not added on." },
  { title: "Partnership Over Transaction", description: "We grow with our clients — from first prototype to repeat orders, from small batches to full-scale production." },
];

export default function AboutPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 w-full">
          <div className="max-w-3xl">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              About Top Printing
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-text-primary">
              Paper is our medium. <br />
              Precision is our signature.
            </h1>
            <p className="mt-6 text-text-secondary text-base leading-relaxed max-w-xl">
              A premium paper packaging manufacturer with 90+ craftspeople, 5,000㎡ of production space, and one unwavering commitment: deliver exceptional print quality at any scale.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-black/5" />
      </section>

      {/* Section 2: Our Story */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <PlaceholderImage
                label="TOP PRINTING FACILITY — Clean Production Floor with Heidelberg Press in Operation"
                aspectRatio="4/3"
                className="w-full"
                category="exhibition"
                variant={0}
              />
            </div>
            <div className="lg:w-1/2 max-w-lg">
              <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
                Our Story
              </span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
                Built in 2014. Refined every year since.
              </h2>
              <p className="mt-6 text-text-secondary text-base leading-relaxed">
                Top Printing was founded in Zhuhai, China, with a simple idea: make 
                premium paper packaging accessible to brands of every size. From a 
                500㎡ workshop with 8 people, we&apos;ve grown into a 5,000㎡ production 
                facility with 90+ skilled team members — designers, engineers, press 
                operators, and quality inspectors.
              </p>
              <p className="mt-4 text-text-secondary text-base leading-relaxed">
                Today we serve clients across the EU, UK, and US — from DTC brands 
                launching their first product to established names requiring 
                compliance-ready pharmaceutical packaging. Every box we produce 
                carries the same G7-certified color accuracy and ISO 9001 quality 
                assurance, regardless of batch size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Culture & Values */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Values
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-2xl">
            What drives us — every print, every day.
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((v) => (
              <div key={v.title} className="border-t border-black/10 pt-8">
                <h3 className="font-display text-2xl text-text-primary">{v.title}</h3>
                <p className="mt-4 text-base text-text-secondary leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Milestones */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Milestones
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-2xl">
            A decade of growth.
          </h2>
          <div className="mt-16 space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="grid grid-cols-[80px_1fr] gap-8 py-6 border-t border-black/5 last:border-b last:border-black/5 items-start">
                <span className="font-mono text-lg text-mint font-semibold">{m.year}</span>
                <div>
                  <p className="text-base text-text-primary">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Certifications */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Certifications
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-off-white leading-tight max-w-2xl">
            Certified quality, from fiber to finish.
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="border-t border-white/10 pt-8">
                <h3 className="font-display text-xl text-mint">{cert.name}</h3>
                <p className="mt-3 text-base text-off-white/60 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Equipment */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Equipment
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-2xl">
            Machines that match our ambition.
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((eq) => (
              <div key={eq.name} className="border-t border-black/10 pt-8">
                <h3 className="font-display text-xl text-text-primary">{eq.name}</h3>
                <p className="mt-2 text-sm font-mono text-text-secondary">{eq.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Showroom */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <PlaceholderImage
                label="SHOWROOM — Material Swatches and Finish Samples Displayed on Walnut Table"
                aspectRatio="4/3"
                className="w-full"
                category="creator"
                variant={0}
              />
            </div>
            <div className="lg:w-1/2 max-w-lg">
              <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
                Showroom
              </span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
                See the craft in person.
              </h2>
              <p className="mt-6 text-text-secondary text-base leading-relaxed">
                Our material library features over 200 paper swatches, 50+ finish 
                samples, and dozens of structural prototypes. Visit our Zhuhai showroom 
                to feel the difference between cotton and kraft, between soft-touch 
                and textured varnish — before you commit to production.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-text-primary text-text-primary text-sm font-body font-medium tracking-wide hover:bg-text-primary hover:text-warm transition-all duration-300"
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: CTA */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-off-white leading-tight max-w-2xl mx-auto">
            Ready to work with <br />
            a real print partner?
          </h2>
          <p className="mt-6 text-off-white/60 text-base max-w-lg mx-auto leading-relaxed">
            Start with a sample kit. See our paper stocks, feel our finishes, 
            and let us show you what precision packaging means.
          </p>
          <div className="mt-10">
            <Link
              href="/sample-kit"
              className="inline-flex items-center px-10 py-4 bg-mint text-charcoal text-sm font-body font-semibold tracking-wide hover:bg-mint/90 transition-colors duration-300"
            >
              Get Your Sample Kit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
