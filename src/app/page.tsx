import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";

const scenes = [
  {
    title: "DTC",
    subtitle: "Direct-to-Consumer Brands",
    description:
      "Custom mailer boxes, subscription packaging, and unboxing experiences built for e-commerce conversion. MOQ from 500 units.",
    imageLabel: "DTC MAILER BOX — Unboxing Scene with Branded Tissue Paper",
    href: "/solutions/dtc-packaging",
    category: "dtc_mailer",
  },
  {
    title: "Seasonal",
    subtitle: "Seasonal & Holiday",
    description:
      "18 days from concept to shelf. Christmas, Valentine's, Black Friday — 500 units per design.",
    imageLabel: "SEASONAL PACKAGING — Luxury Advent Calendar with Foil Accents and Drawers",
    href: "/solutions/seasonal-holiday",
    category: "hero_paper",
  },
  {
    title: "Creator",
    subtitle: "Creator Economy",
    description:
      "Limited drops, merch packaging, and seasonal collections. We match your timeline — 72-hour prototyping, 10-day production.",
    imageLabel: "CREATOR MERCH — Limited Edition Drop Box with Foil Accent",
    href: "/solutions/creator-packaging",
    category: "creator",
  },
  {
    title: "Exhibition",
    subtitle: "Exhibition Collateral",
    description:
      "Presentation kits, product sample boxes, and trade show materials that communicate craftsmanship before a handshake.",
    imageLabel: "EXHIBITION KIT — A5 Presentation Folder with Embossed Logo",
    href: "/solutions/exhibition-collateral",
    category: "exhibition",
  },
  {
    title: "Pharma",
    subtitle: "Pharma & Nutraceuticals",
    description:
      "GMP-compliant paper packaging for supplements, medical devices, and health products. EU MDR ready documentation.",
    imageLabel: "PHARMA BOX — Clinical White Paperboard with Tamper-Evident Seal",
    href: "/solutions/pharma-healthcare",
    category: "pharma",
  },
  {
    title: "F&B",
    subtitle: "Craft Food & Beverage",
    description:
      "Seasonal labels, city-specific editions, tamper-evident paper for craft breweries and quick commerce. 500 units.",
    imageLabel: "F&B PACKAGING — Craft Beer Label Close-up with Foil Detail",
    href: "/solutions/food-beverage-packaging",
    category: "fb_packaging",
  },
];

const testimonials = [
  {
    quote:
      "Switching from plastic to Top Printing\u2019s paper packaging reduced our packaging carbon footprint by 73%. Our customers noticed \u2014 and told us.",
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

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <span style={{ color: "#C9A962" }}>
      {"★".repeat(count)}
    </span>
  );
}

function QuoteIcon() {
  return (
    <span
      className="font-display text-6xl leading-none"
      style={{ color: "#C9A962", opacity: 0.3 }}
    >
      &ldquo;
    </span>
  );
}

function DataIcon({ type }: { type: "boxes" | "globe" | "clock" | "star" }) {
  const paths = {
    boxes: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    globe: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    clock: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    star: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  };
  return <div className="mb-3">{paths[type]}</div>;
}

export default function HomePage() {
  return (
    <>
      {/* ─── Section 1: Hero ─── */}
      <section className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
        {/* Background image right side */}
        <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
          style={{ opacity: 0.3 }}
        >
          <Image
            src="/images/hero_paper_texture_0.png"
            alt="Premium printing and packaging showcase"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-32 w-full relative z-10">
          <div className="max-w-3xl">
            <h1
              className="font-display text-off-white leading-[1.05]"
              style={{ fontSize: "clamp(48px, 5vw, 72px)" }}
            >
              Precision Print<br />&amp; Premium Packaging.
            </h1>
            <p
              className="mt-8 text-base leading-relaxed max-w-xl"
              style={{ color: "rgba(253,252,250,0.5)" }}
            >
              From food, cosmetics, pharma and spirits to automotive parts and electronics — we deliver packaging solutions for every industry need.
            </p>
            {/* Tags row */}
            <div className="mt-10 flex flex-wrap gap-5">
              <span
                className="font-mono text-xs sm:text-sm tracking-[0.15em]"
                style={{ color: "#C9A962" }}
              >
                ISO 9001 · FSC-COC
              </span>
              <span
                className="font-mono text-xs sm:text-sm tracking-[0.15em]"
                style={{ color: "#C9A962" }}
              >
                MOQ 500
              </span>
              <span
                className="font-mono text-xs sm:text-sm tracking-[0.15em]"
                style={{ color: "#C9A962" }}
              >
                72H PROTOTYPING
              </span>
              <span
                className="font-mono text-xs sm:text-sm tracking-[0.15em]"
                style={{ color: "#C9A962" }}
              >
                15-DAY DELIVERY
              </span>
            </div>
            {/* CTA buttons */}
            <div className="mt-12 flex flex-wrap gap-6">
              <Link
                href="/sample-kit"
                className="inline-flex items-center px-8 py-3 text-sm font-body font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#C9A962",
                  color: "#1A1A1A",
                  borderRadius: "2px",
                }}
              >
                Get a Free Sample Kit
              </Link>
          <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-sm font-body font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5"
              style={{
                border: "1px solid rgba(253,252,250,0.3)",
                color: "rgba(253,252,250,0.7)",
                borderRadius: "2px",
              }}
            >
              Request a Quote →
            </Link>
            </div>
          </div>
        </div>

        {/* Gold bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: "rgba(201,169,98,0.3)" }} />
      </section>

      {/* ─── Section 2: Six Solutions (Zigzag) ─── */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Title area */}
          <div className="mb-20 max-w-2xl">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              Solutions
            </span>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
              Solutions for brands <span className="italic">that move fast</span>
            </h2>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-xl">
              Six specialized packaging verticals — DTC, Seasonal &amp; Holiday, Creator, F&amp;B, Exhibition, Pharma — one paper-first philosophy. Every solution starts with a material consultation and ends with delivery to your doorstep.
            </p>
          </div>

          {/* Zigzag cards */}
          <div className="space-y-0">
            {scenes.map((scene, i) => {
              const isReverse = i % 2 === 0;
              return (
                <div key={scene.title}>
                  <Link
                    href={scene.href}
                    className={`group flex flex-col lg:flex-row items-stretch gap-0 py-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                      isReverse ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image half */}
                    <div className="lg:w-1/2 overflow-hidden">
                      <PlaceholderImage
                        label={scene.imageLabel}
                        aspectRatio="4/3"
                        category={scene.category}
                        variant={i}
                        className="w-full h-full"
                      />
                    </div>
                    {/* Text half */}
                    <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:px-12 py-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span
                          className="font-mono text-xs tracking-[0.15em]"
                          style={{ color: "#C9A962" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-xs tracking-[0.15em] text-mint uppercase">
                          {scene.title}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl italic text-text-primary mb-3">
                        {scene.subtitle}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
                        {scene.description}
                      </p>
                      <span
                        className="mt-6 font-mono text-xs tracking-[0.1em] inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                        style={{ color: "#C9A962" }}
                      >
                        View Solution →
                      </span>
                    </div>
                  </Link>
                  {i < scenes.length - 1 && (
                    <div className="h-px w-full" style={{ backgroundColor: "rgba(201,169,98,0.2)" }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Trust Data (Stats + Testimonials) ─── */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Slogan */}
          <div className="text-center mb-16">
            <blockquote className="font-display text-3xl lg:text-5xl text-off-white leading-tight">
              &ldquo;500+ small-batch orders monthly. 10M+ annual revenue.&rdquo;
            </blockquote>
          </div>

          {/* Data metrics row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {[
              { icon: "boxes" as const, number: "12K+", label: "BOXES DELIVERED" },
              { icon: "globe" as const, number: "47", label: "COUNTRIES" },
              { icon: "clock" as const, number: "99.3%", label: "ON-TIME" },
              { icon: "star" as const, number: "4.9★", label: "SATISFACTION" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-6 rounded-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: "rgba(253,252,250,0.03)" }}
              >
                <DataIcon type={item.icon} />
                <div
                  className="font-display text-3xl font-bold"
                  style={{ color: "#C9A962" }}
                >
                  {item.number}
                </div>
                <div className="font-mono text-xs mt-1" style={{ color: "rgba(253,252,250,0.5)" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="p-8 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: "rgba(253,252,250,0.03)" }}
              >
                <QuoteIcon />
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(253,252,250,0.8)" }}>
                  {t.quote}
                </p>
                <div className="my-6 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                    style={{ backgroundColor: "rgba(0,184,148,0.3)", color: "#FDFCFA" }}
                  >
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-off-white">{t.author}</p>
                    <StarRating count={5} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Craft Capabilities (Image Grid) ─── */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Title area */}
          <div className="mb-16 max-w-2xl">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              Craft
            </span>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
              Paper-First <span className="italic">Craft</span>
            </h2>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              Six core processes that define our craft. Every technique is available from MOQ 500 — no premium markups for small batches.
            </p>
          </div>

          {/* Capability cards as image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div
                key={cap.name}
                className="rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ backgroundColor: "rgba(255,255,255,0.3)", backdropFilter: "blur(4px)" }}
              >
                <PlaceholderImage
                  label={cap.name}
                  aspectRatio="4/3"
                  category={"dtc_mailer"}
                  variant={i}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl text-text-primary mb-2">
                    {cap.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: Bottom CTA ─── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-off-white leading-tight max-w-2xl mx-auto">
            Not sure which packaging
            <br />
            <span className="italic">fits your brand?</span>
          </h2>
          <p
            className="mt-6 text-sm max-w-lg mx-auto leading-relaxed"
            style={{ color: "rgba(253,252,250,0.6)" }}
          >
            Tell us about your product and volume. We&apos;ll recommend the right paper, structure, and finishing — and send you a physical sample within 7 days.
          </p>
          <div className="mt-12">
            <Link
              href="/sample-kit"
              className="group inline-flex items-center px-10 py-4 text-sm font-body font-semibold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:brightness-110"
              style={{
                backgroundColor: "#C9A962",
                color: "#1A1A1A",
                borderRadius: "2px",
              }}
            >
              <span className="transition-transform duration-300 group-hover:scale-[1.02]">
                Get My Sample Kit
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
