import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

const scenes = [
  {
    title: "DTC",
    subtitle: "Direct-to-Consumer Brands",
    description:
      "Custom mailer boxes, subscription packaging, and unboxing experiences built for e-commerce conversion. MOQ from 500 units.",
    imageLabel: "DTC MAILER BOX — Unboxing Scene with Branded Tissue Paper",
  },
  {
    title: "Sustainable",
    subtitle: "Sustainable Switchovers",
    description:
      "Replace plastic and rigid packaging with premium FSC-certified paper. Full carbon footprint audit included with every order.",
    imageLabel: "SUSTAINABLE PACKAGING — Recycled Kraft Box with Soy-Based Ink Print",
  },
  {
    title: "Creator",
    subtitle: "Creator Economy",
    description:
      "Limited drops, merch packaging, and seasonal collections. We match your timeline — 72-hour prototyping, 10-day production.",
    imageLabel: "CREATOR MERCH — Limited Edition Drop Box with Foil Accent",
  },
  {
    title: "Exhibition",
    subtitle: "Exhibition Collateral",
    description:
      "Presentation kits, product sample boxes, and trade show materials that communicate craftsmanship before a handshake.",
    imageLabel: "EXHIBITION KIT — A5 Presentation Folder with Embossed Logo",
  },
  {
    title: "Pharma",
    subtitle: "Pharma & Nutraceuticals",
    description:
      "GMP-compliant paper packaging for supplements, medical devices, and health products. EU MDR ready documentation.",
    imageLabel: "PHARMA BOX — Clinical White Paperboard with Tamper-Evident Seal",
  },
];

const testimonials = [
  {
    quote:
      "Switching from plastic to LinkPrint's paper packaging reduced our packaging carbon footprint by 73%. Our customers noticed — and told us.",
    author: "Sarah Chen",
    role: "Head of Product, Onda Wellness",
  },
  {
    quote:
      "We needed 800 boxes for a limited drop. LinkPrint delivered prototypes in 3 days and full order in 12. Unreal speed for this quality.",
    author: "Marcus Johansson",
    role: "Founder, Studio NINE Copenhagen",
  },
  {
    quote:
      "The compliance documentation alone saved us weeks of EU market entry work. Every pharma startup needs this.",
    author: "Dr. Elena Voss",
    role: "CEO, Voss Bioceuticals",
  },
];

const capabilities = [
  {
    name: "Foil Stamping",
    description: "Matte gold, silver, holographic — precision registration on uncoated stocks",
  },
  {
    name: "Embossing & Debossing",
    description: "Blind, registered, multi-level — custom dies for tactile brand experiences",
  },
  {
    name: "Spot UV",
    description: "High-gloss contrast on matte paper, selective coating for visual hierarchy",
  },
  {
    name: "Soy-Based Flexo",
    description: "Pantone-matched, eco-friendly inks suitable for FSC-certified substrates",
  },
  {
    name: "Laser Die-Cut",
    description: "Complex geometries, micro-perforations, and intricate window cutouts",
  },
  {
    name: "Hot Foil & Edge Gilding",
    description: "Metallic edge finishing and decorative foil accents for premium presentation",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center bg-warm paper-texture">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 w-full">
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-text-primary">
              Precision Paper.
              <br />
              Small Batches.
              <br />
              <span className="italic">Big Brand Impact.</span>
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-text-secondary">
                EU/US
              </span>
              <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-text-secondary/50">
                ·
              </span>
              <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-text-secondary">
                MOQ 500
              </span>
              <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-text-secondary/50">
                ·
              </span>
              <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-text-secondary">
                72H PROTOTYPING
              </span>
              <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-text-secondary/50">
                ·
              </span>
              <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-text-secondary">
                15-DAY DELIVERY
              </span>
            </div>
            <div className="mt-12 flex flex-wrap gap-6">
              <Link
                href="/sample-kit"
                className="inline-flex items-center px-8 py-3 border-2 border-text-primary text-text-primary text-sm font-body font-medium tracking-wide hover:bg-text-primary hover:text-warm transition-all duration-300"
              >
                Get a Free Sample Kit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 text-text-secondary text-sm font-body font-medium tracking-wide hover:text-text-primary transition-colors duration-300"
              >
                Request a Quote →
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-black/5" />
      </section>

      {/* Section 2: Five Scene Cards */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left fixed text */}
            <div className="lg:w-[35%] lg:sticky lg:top-32 lg:self-start">
              <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
                Solutions
              </span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-tight text-text-primary">
                Solutions for brands <span className="italic">that move fast</span>
              </h2>
              <p className="mt-6 text-text-secondary text-sm leading-relaxed">
                Five specialized packaging verticals, one paper-first philosophy.
                Every solution starts with a material consultation and ends with
                delivery to your doorstep.
              </p>
            </div>

            {/* Right scene list */}
            <div className="lg:w-[60%] space-y-0">
              {scenes.map((scene, i) => (
                <div
                  key={scene.title}
                  className="group border-t border-black/5 py-10 last:border-b last:border-black/5 cursor-default"
                >
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-1 transition-all duration-300 lg:group-hover:pl-8">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-mono text-xs text-text-secondary/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-xs tracking-[0.15em] text-mint uppercase">
                          {scene.title}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl italic text-text-primary mb-2">
                        {scene.subtitle}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
                        {scene.description}
                      </p>
                    </div>
                    <div className="lg:w-48 lg:flex-shrink-0 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                      <PlaceholderImage
                        label={scene.imageLabel}
                        aspectRatio="1/1"
                        className="w-48 h-48"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Social Proof */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <blockquote className="font-display text-4xl lg:text-6xl text-off-white leading-tight">
              &ldquo;500+ small-batch orders monthly.&rdquo;
            </blockquote>
            <div className="mt-8 flex justify-center flex-wrap gap-8 font-mono text-xs tracking-[0.15em] text-off-white/50">
              <span>12K+ BOXES DELIVERED</span>
              <span>47 COUNTRIES</span>
              <span>99.3% ON-TIME</span>
              <span>4.9★ SATISFACTION</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t) => (
              <div key={t.author} className="border-t border-white/10 pt-8">
                <blockquote className="font-display text-lg italic text-off-white/90 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="text-sm font-body font-medium text-off-white">
                    {t.author}
                  </p>
                  <p className="text-xs font-mono text-off-white/40 mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Capabilities */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-[35%]">
              <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
                Craft
              </span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-tight text-text-primary">
                Paper-First <span className="italic">Expertise</span>
              </h2>
              <p className="mt-6 text-text-secondary text-sm leading-relaxed">
                Six core processes that define our craft. Every technique is
                available from MOQ 500 — no premium markups for small batches.
              </p>
            </div>
            <div className="lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-8">
              {capabilities.map((cap) => (
                <div key={cap.name} className="border-t border-black/10 pt-6">
                  <h3 className="font-display text-xl text-text-primary mb-2">
                    {cap.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Bottom CTA */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-off-white leading-tight max-w-2xl mx-auto">
            Not sure which packaging
            <br />
            <span className="italic">fits your brand?</span>
          </h2>
          <p className="mt-6 text-off-white/60 text-sm max-w-lg mx-auto leading-relaxed">
            Tell us about your product and volume. We&apos;ll recommend the right
            paper, structure, and finishing — and send you a physical sample
            within 7 days.
          </p>
          <div className="mt-10">
            <Link
              href="/sample-kit"
              className="inline-flex items-center px-10 py-4 bg-mint text-charcoal text-sm font-body font-semibold tracking-wide hover:bg-mint/90 transition-colors duration-300"
            >
              Get My Sample Kit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
