import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

const classicFinishes = [
  {
    name: "Foil Stamping",
    english: "烫金",
    definition: "Heat-pressed metallic foil transfers onto paper, creating mirror-like reflection and precious metal质感.",
    bestFor: "Luxury logos, wine labels, beauty boxes",
    image: "/images/desktop/烫金.png",
    imageLabel: "Foil Stamping on Paper",
  },
  {
    name: "Embossing",
    english: "浮雕",
    definition: "Metal dies press the paper surface upward, creating three-dimensional tactile memory.",
    bestFor: "Brand crests, certificates, premium gift boxes",
    image: "/images/desktop/浮雕.png",
    imageLabel: "Embossing Detail",
  },
  {
    name: "Debossing",
    english: "压凹",
    definition: "The reverse of embossing — patterns are pressed into the paper surface creating recessed impressions.",
    bestFor: "Minimalist packaging, combined with soft-touch lamination",
    image: "/images/desktop/压凹.png",
    imageLabel: "Debossing Detail",
  },
  {
    name: "Spot UV Coating",
    english: "局部UV",
    definition: "Selective high-gloss coating creates mirror-like contrast on matte paper surfaces.",
    bestFor: "Tech brands, modern beauty, lifestyle products",
    image: "/images/desktop/局部UV.png",
    imageLabel: "Spot UV Detail",
  },
  {
    name: "Soft-Touch Lamination",
    english: "触感膜",
    definition: "Film lamination that delivers a velvety, peach-skin matte tactile experience.",
    bestFor: "Electronics, perfumes, luxury mailer boxes",
    image: "/images/desktop/触摸感.png",
    imageLabel: "Soft-Touch Surface",
  },
  {
    name: "Textured Varnish",
    english: "纹理上光",
    definition: "Transparent coating embedded with texture simulating leather, linen, or wood grain.",
    bestFor: "Wine gift boxes, premium food packaging",
    image: "/images/desktop/纹理上光.png",
    imageLabel: "Textured Varnish Detail",
  },
  {
    name: "Holographic Foil",
    english: "全息烫印",
    definition: "Heat-transferred holographic foil creating rainbow refraction and anti-counterfeiting effects.",
    bestFor: "Limited drops, anti-counterfeit packaging, young brands",
    image: "/images/desktop/全息烫印.png",
    imageLabel: "Holographic Foil Effect",
  },
  {
    name: "Pearlescent / Metallic Ink",
    english: "珠光/金属油墨",
    definition: "Ink infused with mica or metal particles delivering subtle shimmer without foil.",
    bestFor: "Cosmetics, chocolate, seasonal limited editions",
    image: "/images/desktop/金属油墨.png",
    imageLabel: "Metallic Ink Finish",
  },
];

const digitalInnovations = [
  {
    name: "Digital Foil",
    english: "数字烫金",
    definition: "No plate required — digital nozzles deposit metallic foil layers directly. Water usage reduced by 80% vs traditional foil.",
    bestFor: "500–2,000 seasonal editions, city-specific runs",
  },
  {
    name: "Digital Embossing",
    english: "数字浮雕",
    definition: "Digital UV inks stack to create physical height differences simulating embossing — at 1/5 the cost of traditional dies.",
    bestFor: "Short-run test marketing, A/B testing multiple versions",
  },
  {
    name: "Variable Data Printing (VDP)",
    english: "可变数据印刷",
    definition: "Every sheet can carry different text, patterns, or serial numbers without stopping the press.",
    bestFor: "City-specific labels, serialized traceability, personalized subscription boxes",
  },
  {
    name: "Cold Foil Transfer",
    english: "冷烫金",
    definition: "UV adhesive bonds metallic foil without heat — ideal for heat-sensitive materials and rapid turnaround orders.",
    bestFor: "Food-contact packaging, temperature-sensitive labels, fast-turn orders",
  },
];

const paperStocks = [
  { name: "FSC White Card", gsm: "250-400gsm", trait: "High whiteness, smooth coating, precise color reproduction", use: "Cosmetic boxes, pharma cartons, premium folding cartons", image: "/images/desktop/白卡.png" },
  { name: "FSC Kraft Paper", gsm: "120-350gsm", trait: "Unbleached fibers, natural brown tone, rustic texture", use: "Organic brands, artisan food, sustainable DTC", image: "/images/desktop/牛皮纸.png" },
  { name: "Recycled Art Paper", gsm: "200-350gsm", trait: "PCR post-consumer fibers, subtle impurity texture, unique handfeel", use: "Eco-conscious brands, limited art packaging", image: "/images/desktop/再生艺术纸.png" },
  { name: "Cotton Paper", gsm: "250-450gsm", trait: "Cotton fiber, extremely long fibers, archival quality", use: "Certificates, luxury perfume boxes, jewelry packaging", image: "/images/desktop/棉纸.png" },
  { name: "Hemp Paper", gsm: "200-300gsm", trait: "Hemp fiber, fast-renewable, stronger than wood pulp", use: "Pioneering sustainable brands, CBD/health products", image: "/images/desktop/麻纸.png" },
  { name: "Translucent Paper", gsm: "40-120gsm", trait: "Semi-transparent, grease-resistant, plastic window alternative", use: "Food packaging windows, cosmetic inner liners", image: "/images/desktop/半透明纸.png" },
  { name: "Touch Paper", gsm: "250-350gsm", trait: "Built-in soft-touch coating, no additional lamination needed", use: "Minimalist beauty, electronics boxes", image: "/images/desktop/触感纸.png" },
  { name: "Pearlescent Paper", gsm: "200-300gsm", trait: "Built-in micro-shimmer,光泽 without additional printing", use: "Festival packaging, wedding/party supplies", image: "/images/desktop/珠光纸.png" },
];

const inks = [
  { name: "Soy-based Ink", trait: "Vegetable oil base, low VOC, vibrant color, good paper penetration", compliance: "FDA 21 CFR 176.170 / EU food contact compliant", image: "/images/desktop/大豆油墨.png" },
  { name: "Water-based Ink", trait: "Solvent-free, odourless, fast-drying, suitable for food packaging", compliance: "PFAS-free, meets PPWR recyclability requirements", image: "/images/desktop/水洗油墨.png" },
  { name: "UV-curable Ink", trait: "Instant curing, abrasion-resistant, suitable for non-absorbent materials", compliance: "Low migration, suitable for pharma/food outer packaging", image: "/images/desktop/UV固化油墨.png" },
  { name: "Metallic Ink", trait: "Contains metal particles, can replace some foil needs, recyclable-friendly", compliance: "Easier to recycle than foil,首选 for mono-material structures", image: "/images/desktop/金属油墨.png" },
];

const coatings = [
  { name: "Water-based Lamination", trait: "Solvent-free adhesive, biodegradable, recyclable with paper", trend: "Replacing traditional BOPP/PE lamination, PPWR compliant", image: "/images/desktop/水性覆膜.png" },
  { name: "PLA Bio-lamination", trait: "Corn starch based, compostable, high transparency", trend: "Fastest growing in European food packaging", image: "/images/desktop/PLA生物覆膜.png" },
  { name: "UV Varnish (no film)", trait: "Direct coating, no plastic layer added, maintains paper recyclability", trend: "2025 mainstream, replacing plastic lamination", image: "/images/desktop/无膜UV涂层.png" },
];

const printMethods = [
  { method: "Offset (Heidelberg)", bestFor: "Large runs, precise color", moq: "1,000+", leadTime: "10-15 days", colorRange: "4C + spot" },
  { method: "Digital (HP Indigo)", bestFor: "Short runs, variable data", moq: "500", leadTime: "3-5 days", colorRange: "4C + white" },
  { method: "Hybrid", bestFor: "Mixed requirements", moq: "500", leadTime: "5-7 days", colorRange: "4C + digital foil" },
  { method: "Screen Print", bestFor: "Direct-to-glass/pipette", moq: "1,000+", leadTime: "12-18 days", colorRange: "UV/organic inks" },
];

const processSteps = [
  { step: "FILE PRE-CHECK", detail: "Bleed / Resolution / Font Embedding", image: "/images/desktop/文件预审.png" },
  { step: "COLOR PROOFING", detail: "G7 Digital Proof Approval", image: "/images/desktop/品牌色保真.png" },
  { step: "PLATE/DIGITAL SETUP", detail: "Heidelberg Plate or Digital RIP", image: "/images/desktop/制版数字准备.jpg" },
  { step: "PRODUCTION", detail: "IQC / IPQC / FQC", image: "/images/desktop/生产过程.jpg" },
  { step: "FQC + PACK", detail: "Compliance Documentation", image: "/images/desktop/成品质检.png" },
];

export default function CapabilitiesMaterialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-warm paper-texture">
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
          <PlaceholderImage
            label="Multi-Layer Craft Macro"
            aspectRatio="16/9"
            className="w-full h-full"
            src="/images/desktop/四重工艺叠加.png"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 w-full relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-text-primary">
              The Craft of Paper.
            </h1>
            <p className="mt-4 font-display text-xl text-text-secondary">
              21 finishes. 12 material families. One obsession: precision.
            </p>
            <div className="mt-8 font-mono text-sm tracking-[0.15em] text-text-secondary">
              FOIL · EMBOSS · SOFT-TOUCH · SPOT UV · DIGITAL EMBOSS · G7 COLOR
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{backgroundColor: "#C9A962"}} />
      </section>

      {/* Classic Finishes */}
      <section className="bg-warm py-24 lg:py-32" id="classic-finishes">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 mb-20">
            <div className="lg:w-[60%]">
              <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Classic Finishes</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
                Finishes That Speak Before the Product Does.
              </h2>
            </div>
            <div className="lg:w-[40%]">
              <p className="text-text-secondary text-base leading-relaxed">
                Tactile and visual techniques refined over decades, now matched to contemporary brand needs.
              </p>
            </div>
          </div>
          <div className="space-y-0">
            {classicFinishes.map((finish, i) => (
              <div key={finish.name} className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-t border-black/5 last:border-b last:border-black/5 items-start">
                <div className="lg:col-span-3">
                  <span className="font-mono text-sm text-text-secondary/40">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-2xl text-text-primary">{finish.name}</h3>
                  <span className="font-mono text-xs tracking-[0.15em] text-text-secondary/40 uppercase">{finish.english}</span>
                </div>
                <div className="lg:col-span-2">
                  <span className="font-mono text-xs tracking-[0.15em] text-text-secondary/40 uppercase">Best for</span>
                  <p className="mt-2 font-mono text-sm text-text-primary">{finish.bestFor}</p>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-base text-text-secondary leading-relaxed">{finish.definition}</p>
                </div>
                <div className="lg:col-span-3">
                  <PlaceholderImage
                    label={finish.imageLabel}
                    aspectRatio="4/3"
                    className="w-full"
                    src={finish.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Innovation — Dark Mode */}
      <section className="bg-charcoal py-24 lg:py-32" id="digital-innovation">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 mb-20">
            <div className="lg:w-[60%]">
              <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Digital Innovation</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl text-off-white leading-tight">
                Digital Embellishment: Precision Without Plates.
              </h2>
            </div>
            <div className="lg:w-[40%]">
              <p className="text-off-white/60 text-base leading-relaxed">
                For short runs, seasonal drops, and variable data — where traditional dies become too expensive.
              </p>
            </div>
          </div>
          <div className="space-y-0">
            {digitalInnovations.map((di, i) => (
              <div key={di.name} className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-t border-white/10 last:border-b last:border-white/10 items-start">
                <div className="lg:col-span-3">
                  <span className="font-mono text-sm text-off-white/30">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-2xl text-off-white">{di.name}</h3>
                  <span className="font-mono text-xs tracking-[0.15em] text-off-white/30 uppercase">{di.english}</span>
                </div>
                <div className="lg:col-span-3">
                  <span className="font-mono text-xs tracking-[0.15em] text-mint uppercase">Best for</span>
                  <p className="mt-2 font-mono text-sm text-off-white/70">{di.bestFor}</p>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-base text-off-white/60 leading-relaxed">{di.definition}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 font-mono text-base text-off-white/70 space-y-1 border-t border-white/10 pt-10">
            <p>MINIMUM RUN: 500 UNITS</p>
            <p>PLATE COST: ZERO</p>
            <p>SETUP TIME: 2 HOURS (VS 2 DAYS FOR TRADITIONAL)</p>
            <p>COLOR ACCURACY: G7 CERTIFIED</p>
          </div>
        </div>
      </section>

      {/* Sustainable Materials */}
      <section className="bg-warm py-24 lg:py-32" id="sustainable-materials">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 mb-20">
            <div className="lg:w-[60%]">
              <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Materials</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
                Materials That Pass the Test — and the Next Generation.
              </h2>
            </div>
            <div className="lg:w-[40%]">
              <p className="text-text-secondary text-base leading-relaxed">
                EU PPWR 2030-ready. FSC-certified. Carbon-accounted.
              </p>
            </div>
          </div>

          {/* Paper Stocks — with images */}
          <h3 className="font-display text-3xl text-text-primary mb-10">Paper Stocks</h3>
          <div className="space-y-0 mb-20">
            {paperStocks.map((stock, i) => (
              <div key={stock.name} className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6 border-t border-black/5 last:border-b last:border-black/5 items-start">
                <div className="lg:col-span-2">
                  <span className="font-mono text-sm text-text-secondary/40">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="mt-1 font-display text-lg text-text-primary">{stock.name}</h4>
                </div>
                <div className="lg:col-span-1">
                  <span className="font-mono text-xs tracking-[0.15em] text-text-secondary/40 uppercase">GSM</span>
                  <p className="mt-1 font-mono text-sm text-text-primary">{stock.gsm}</p>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-base text-text-secondary leading-relaxed">{stock.trait}</p>
                </div>
                <div className="lg:col-span-2">
                  <span className="font-mono text-xs tracking-[0.15em] text-text-secondary/40 uppercase">Best for</span>
                  <p className="mt-1 text-sm text-text-primary">{stock.use}</p>
                </div>
                <div className="lg:col-span-4">
                  <PlaceholderImage
                    label={stock.name}
                    aspectRatio="4/3"
                    src={stock.image}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Inks — with images */}
          <h3 className="font-display text-3xl text-text-primary mb-10">Inks</h3>
          <div className="space-y-0 mb-20">
            {inks.map((ink, i) => (
              <div key={ink.name} className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6 border-t border-black/5 last:border-b last:border-black/5 items-start">
                <div className="lg:col-span-2">
                  <span className="font-mono text-sm text-text-secondary/40">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="mt-1 font-display text-lg text-text-primary">{ink.name}</h4>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-base text-text-secondary leading-relaxed">{ink.trait}</p>
                </div>
                <div className="lg:col-span-3">
                  <span className="font-mono text-xs tracking-[0.15em] text-text-secondary/40 uppercase">Compliance</span>
                  <p className="mt-1 text-sm text-text-primary">{ink.compliance}</p>
                </div>
                <div className="lg:col-span-4">
                  <PlaceholderImage
                    label={ink.name}
                    aspectRatio="4/3"
                    src={ink.image}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Coatings — with images */}
          <h3 className="font-display text-3xl text-text-primary mb-10">Coatings &amp; Films</h3>
          <div className="space-y-0">
            {coatings.map((coat, i) => (
              <div key={coat.name} className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6 border-t border-black/5 last:border-b last:border-black/5 items-start">
                <div className="lg:col-span-2">
                  <span className="font-mono text-sm text-text-secondary/40">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="mt-1 font-display text-lg text-text-primary">{coat.name}</h4>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-base text-text-secondary leading-relaxed">{coat.trait}</p>
                </div>
                <div className="lg:col-span-3">
                  <span className="font-mono text-xs tracking-[0.15em] text-text-secondary/40 uppercase">Trend</span>
                  <p className="mt-1 text-sm text-text-primary">{coat.trend}</p>
                </div>
                <div className="lg:col-span-4">
                  <PlaceholderImage
                    label={coat.name}
                    aspectRatio="4/3"
                    src={coat.image}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color & Print */}
      <section className="bg-warm py-24 lg:py-32 border-t border-black/5" id="color-print">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 mb-20">
            <div className="lg:w-[60%]">
              <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Color &amp; Print</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
                Color That Holds Its Promise.
              </h2>
            </div>
            <div className="lg:w-[40%]">
              <p className="text-text-secondary text-base leading-relaxed">
                From screen to sheet, with G7 precision.
              </p>
            </div>
          </div>

          {/* G7 Section — with image */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <div className="lg:w-1/2">
              <h3 className="font-display text-2xl text-text-primary">G7 Certified Color Accuracy</h3>
              <p className="mt-4 text-base text-text-secondary leading-relaxed">
                We don&apos;t match color by eye. We match it by data. G7 grayscale calibration ensures your brand Pantone arrives within ΔE ≤ 1.5 — every run, every season, every country.
              </p>
            </div>
            <div className="lg:w-1/2">
              <PlaceholderImage
                label="G7 Color Calibration"
                aspectRatio="4/3"
                className="w-full"
                src="/images/desktop/G7色彩管理.png"
              />
            </div>
          </div>

          {/* Print Method Comparison */}
          <div className="font-mono text-sm leading-relaxed">
            <div className="grid grid-cols-4 gap-4 py-4 border-t border-black/10 text-text-secondary/60 uppercase tracking-[0.1em]">
              <span>Method</span>
              <span>Best for</span>
              <span>MOQ</span>
              <span>Color Range</span>
            </div>
            {printMethods.map((pm) => (
              <div key={pm.method} className="grid grid-cols-4 gap-4 py-4 border-t border-black/5 text-text-primary">
                <span className="font-semibold">{pm.method}</span>
                <span className="text-text-secondary">{pm.bestFor}</span>
                <span>{pm.moq}</span>
                <span>{pm.colorRange}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Quality — with process images */}
      <section className="bg-charcoal py-24 lg:py-32" id="process-quality">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Process</span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-off-white leading-tight">
            From File to Finish.
          </h2>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((ps, i) => (
              <div key={ps.step} className="flex flex-col items-center">
                <div className="w-full mb-4 overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <PlaceholderImage
                    label={ps.step}
                    aspectRatio="4/3"
                    src={ps.image}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm font-bold mb-3" style={{backgroundColor: "#C9A962", color: "#1A1A1A"}}>
                  {i + 1}
                </div>
                <h3 className="font-display text-lg text-off-white">{ps.step}</h3>
                <p className="mt-2 font-mono text-xs text-off-white/40">{ps.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 font-mono text-sm text-off-white/50 max-w-xl mx-auto text-left space-y-2">
            <p>IQC: Incoming paper grammage / whiteness / folding endurance</p>
            <p>IPQC: Print color deviation ≤ΔE1.5 (ISO 12647)</p>
            <p>FQC: Structural strength / cutting precision / adhesion / traceability code readability</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-xl mx-auto">
            See It. Touch It. Believe It.
          </h2>
          <p className="mt-6 text-text-secondary text-base max-w-lg mx-auto leading-relaxed">
            Order a sample kit with 6 material swatches and 4 finish samples — foil, emboss, soft-touch, and spot UV.
          </p>
          <div className="mt-10">
            <Link
              href="/sample-kit"
              className="inline-flex items-center px-10 py-4 border-2 border-text-primary text-text-primary text-base font-body font-medium tracking-wide hover:bg-text-primary hover:text-warm transition-all duration-300"
            >
              Get Material Sample Kit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
