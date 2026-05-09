import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";

const scenes = [
  {
    title: "DTC",
    subtitle: "Direct-to-Consumer Brands",
    description:
      "Custom mailer boxes, subscription packaging, and unboxing experiences built for e-commerce conversion. MOQ from 500 units.",
    href: "/solutions/dtc-packaging",
    images: [
      "/images/desktop/DTC品牌邮寄盒.png",
      "/images/desktop/DTC-订阅盒.png",
      "/images/desktop/D2C-AB测试多版本.png",
      "/images/desktop/D2C-插页感谢卡.png",
      "/images/desktop/D2C吊牌.png",
      "/images/desktop/D2C退货包装.png",
    ],
  },
  {
    title: "Seasonal",
    subtitle: "Seasonal & Holiday",
    description:
      "18 days from concept to shelf. Christmas, Valentine's, Black Friday — 500 units per design.",
    href: "/solutions/seasonal-holiday",
    images: [
      "/images/desktop/seasonal-holiday圣诞倒数礼盒.png",
      "/images/desktop/seasonal-holiday情人节心形礼盒.png",
      "/images/desktop/seasonal-holiday母亲节花语礼盒.png",
      "/images/desktop/seasonal-holiday黑五限定盒.png",
      "/images/desktop/中秋节.png",
      "/images/desktop/夏日清爽限定.png",
    ],
  },
  {
    title: "Creator",
    subtitle: "Creator Economy",
    description:
      "Limited drops, merch packaging, and seasonal collections. We match your timeline — 72-hour prototyping, 10-day production.",
    href: "/solutions/creator-packaging",
    images: [
      "/images/desktop/设计师品牌邮寄.png",
      "/images/desktop/限量发售.png",
      "/images/desktop/NFT.png",
      "/images/desktop/众筹.png",
      "/images/desktop/快闪活动.png",
    ],
  },
  {
    title: "Exhibition",
    subtitle: "Exhibition Collateral",
    description:
      "Presentation kits, product sample boxes, and trade show materials that communicate craftsmanship before a handshake.",
    href: "/solutions/exhibition-collateral",
    images: [
      "/images/desktop/展会礼盒.png",
      "/images/desktop/展会礼盒2.png",
      "/images/desktop/展会急救包.png",
      "/images/desktop/海报.png",
      "/images/desktop/宣传册目录.png",
      "/images/desktop/名片吊牌贴纸.png",
    ],
  },
  {
    title: "Pharma",
    subtitle: "Pharma & Nutraceuticals",
    description:
      "GMP-compliant paper packaging for supplements, medical devices, and health products. EU MDR ready documentation.",
    href: "/solutions/pharma-healthcare",
    images: [
      "/images/desktop/OTC零售药盒.png",
      "/images/desktop/保健品礼盒.png",
      "/images/desktop/冷链药品包装.png",
      "/images/desktop/药盒.png",
      "/images/desktop/医美化妆品盒.png",
      "/images/desktop/防篡改.png",
    ],
  },
  {
    title: "F&B",
    subtitle: "Craft Food & Beverage",
    description:
      "Seasonal labels, city-specific editions, tamper-evident paper for craft breweries and quick commerce. 500 units.",
    href: "/solutions/food-beverage-packaging",
    images: [
      "/images/desktop/啤酒.png",
      "/images/desktop/巧克力.png",
      "/images/desktop/咖啡订阅盒.png",
      "/images/desktop/健康零食邮寄盒.png",
      "/images/desktop/城市限定.png",
      "/images/desktop/季节酒款限定.png",
    ],
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
    image: "/images/desktop/烫金.png",
  },
  {
    name: "Embossing & Debossing",
    description: "Blind, registered, multi-level — custom dies for tactile brand experiences",
    image: "/images/desktop/浮雕.png",
  },
  {
    name: "Spot UV",
    description: "High-gloss contrast on matte paper, selective coating for visual hierarchy",
    image: "/images/desktop/局部UV.png",
  },
  {
    name: "Soy-Based Flexo",
    description: "Pantone-matched, eco-friendly inks suitable for FSC-certified substrates",
    image: "/images/desktop/大豆油墨.png",
  },
  {
    name: "Laser Die-Cut",
    description: "Complex geometries, micro-perforations, and intricate window cutouts",
    image: "/images/desktop/四重工艺叠加.png",
  },
  {
    name: "Hot Foil & Edge Gilding",
    description: "Metallic edge finishing and decorative foil accents for premium presentation",
    image: "/images/desktop/冷烫金.png",
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
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
        {/* Full-bleed background image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/desktop/hero-main-bg.png"
            alt="Premium printing and packaging showcase"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay — depth without crushing the image */}
          <div 
            className="absolute inset-0"
            style={{ 
              background: "linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.55) 100%)" 
            }}
          />
          {/* Subtle grain texture */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px"
          }} />
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
              className="mt-8 text-lg leading-relaxed max-w-xl"
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
              Solutions for brands that move fast
            </h2>
            <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-xl">
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
                    {/* Image half — representative product shot */}
                    <div className="lg:w-1/2 overflow-hidden">
                      <PlaceholderImage
                        label={scene.title}
                        aspectRatio="4/3"
                        src={scene.images[0]}
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
                      <h3 className="font-display text-2xl text-text-primary mb-3">
                        {scene.subtitle}
                      </h3>
                      <p className="text-base text-text-secondary leading-relaxed max-w-lg">
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
                <p className="mt-2 text-base leading-relaxed" style={{ color: "rgba(253,252,250,0.8)" }}>
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
              Paper-First Craft
            </h2>
            <p className="mt-4 text-base text-text-secondary leading-relaxed">
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
                  src={cap.image}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl text-text-primary mb-2">
                    {cap.name}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed">
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
            <span className="">fits your brand?</span>
          </h2>
          <p
            className="mt-6 text-base max-w-lg mx-auto leading-relaxed"
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
