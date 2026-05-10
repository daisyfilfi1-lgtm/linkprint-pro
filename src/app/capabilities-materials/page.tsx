import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

const classicFinishes = [
  {
    name: "Foil Stamping",
    definition: "Turns your logo into liquid metal. Foil catches light like a mirror — customers feel the premium before they open the box. We use recyclable thin-gauge foil that reduces environmental load without reducing impact.",
    idealFor: "Luxury logos, Wine labels, Beauty boxes, Limited editions",
    avoidFor: "Large solid areas, Direct food-contact surfaces",
    image: "/images/desktop/烫金.png",
    imageLabel: "Foil Stamping on Paper",
  },
  {
    name: "Embossing",
    definition: "A logo you can feel with your eyes closed. Blind emboss creates shadows that move as the box turns in the customer's hands.",
    idealFor: "Brand crests, Certificates, Premium gift boxes, Invitations",
    avoidFor: "Thin papers below 200gsm, Intricate fine-line artwork",
    image: "/images/desktop/浮雕.png",
    imageLabel: "Embossing Detail",
  },
  {
    name: "Debossing",
    definition: "Pressed into the surface, not printed on it. Deboss gives minimalist brands a subtle depth that whispers instead of shouts.",
    idealFor: "Minimalist packaging, Soft-touch laminate pairings, Brand marks",
    avoidFor: "Papers below 200gsm, Reverse-side printing over debossed areas",
    image: "/images/desktop/压凹.png",
    imageLabel: "Debossing Detail",
  },
  {
    name: "Spot UV Coating",
    definition: "Gloss where it matters, matte everywhere else. Spot UV creates a tension between shine and shadow that draws the eye exactly where you want it.",
    idealFor: "Tech brands, Modern beauty, Lifestyle products, Photography portfolios",
    avoidFor: "Uncoated papers, Heavy ink coverage underneath",
    image: "/images/desktop/局部UV.png",
    imageLabel: "Spot UV Detail",
  },
  {
    name: "Soft-Touch Lamination",
    definition: "The surface that stops thumbs from scrolling. Soft-touch lamination makes packaging irresistible to hold — and harder to throw away.",
    idealFor: "Electronics, Perfumes, Luxury mailer boxes, High-retention packaging",
    avoidFor: "Compostable-only briefs, Extreme humidity environments",
    image: "/images/desktop/触摸感.png",
    imageLabel: "Soft-Touch Surface",
  },
  {
    name: "Textured Varnish",
    definition: "Paper that mimics leather, linen, or wood grain. Textured varnish adds a layer of sensory deception — looks like fabric, feels like luxury.",
    idealFor: "Wine gift boxes, Premium food packaging, Heritage brands",
    avoidFor: "Tight-register fine print, High-speed filling lines",
    image: "/images/desktop/纹理上光.png",
    imageLabel: "Textured Varnish Detail",
  },
  {
    name: "Holographic Foil",
    definition: "Rainbow refraction that shifts with every angle. Holographic foil turns a static box into a moving experience — and makes counterfeiting nearly impossible.",
    idealFor: "Limited drops, Anti-counterfeit packaging, Youth brands, Event merch",
    avoidFor: "Conservative/corporate identities, CMYK overprint registration",
    image: "/images/desktop/全息烫印.png",
    imageLabel: "Holographic Foil Effect",
  },
  {
    name: "Pearlescent / Metallic Ink",
    definition: "Subtle shimmer without the cost of foil. Mica-infused ink catches light at the edges — for brands that want elegance, not flash.",
    idealFor: "Cosmetics, Chocolate, Seasonal editions, Wedding stationery",
    avoidFor: "High-coverage solid backgrounds, Monochrome-only briefs",
    image: "/images/desktop/金属油墨.png",
    imageLabel: "Metallic Ink Finish",
  },
];

const digitalInnovations = [
  {
    name: "Digital Foil",
    image: "/images/desktop/数字烫金.png",
    imageLabel: "Digital Foil Detail",
    definition: "Seasonal drops without die costs. 500 units of gold foil, delivered in 10 days — not 3 weeks. Water usage reduced by 80% vs traditional methods.",
    idealFor: "500–2,000 seasonal editions, City-specific runs, Rapid-turnaround campaigns",
  },
  {
    name: "Digital Embossing",
    image: "/images/desktop/数字浮雕.png",
    imageLabel: "Digital Embossing Detail",
    definition: "Test-market packaging with real emboss texture. No die investment, no minimums, no regret. Digital UV inks stack to create physical height at 1/5 the cost.",
    idealFor: "Short-run test marketing, A/B testing multiple versions, Crowdfunding rewards",
  },
  {
    name: "Variable Data Printing (VDP)",
    image: "/images/desktop/可变数据印刷.png",
    imageLabel: "Variable Data Printing",
    definition: "One print run, 50 city names. Berlin, Munich, Hamburg — each bottle tells a local story. Variable data printing makes every sheet unique without stopping the press.",
    idealFor: "City-specific labels, Serialized traceability, Personalized subscription boxes",
  },
  {
    name: "Cold Foil Transfer",
    image: "/images/desktop/冷烫金.png",
    imageLabel: "Cold Foil Transfer Detail",
    definition: "Foil on temperature-sensitive materials. Chocolate labels, cosmetic tubes — no heat damage, no compromise. UV adhesive bonds metallic foil cold.",
    idealFor: "Food-contact packaging, Temperature-sensitive labels, Fast-turn orders",
  },
];

const paperStocks = [
  { name: "FSC White Card", gsm: "250-400gsm", trait: "The blank canvas for bold color. Smooth coated surface makes Pantone shades sing — ideal for cosmetics and pharma where color accuracy is trust.", use: "Cosmetic boxes, Pharma cartons, Premium folding cartons", image: "/images/desktop/白卡.png" },
  { name: "FSC Kraft Paper", gsm: "120-350gsm", trait: "Honest packaging that doesn't pretend. Unbleached fibers show the paper's origin — perfect for organic brands that want transparency, not gloss.", use: "Organic brands, Artisan food, Sustainable DTC", image: "/images/desktop/牛皮纸.png" },
  { name: "Recycled Art Paper", gsm: "200-350gsm", trait: "Imperfect by design. Visible fiber fragments tell a recycling story — customers feel the sustainability before they read the label.", use: "Eco-conscious brands, Limited art packaging", image: "/images/desktop/再生艺术纸.png" },
  { name: "Cotton Paper", gsm: "250-450gsm", trait: "Paper that outlasts the product. Cotton fibers create a surface closer to fabric than pulp — for certificates, perfumes, and anything meant to be kept.", use: "Certificates, Luxury perfume boxes, Jewelry packaging", image: "/images/desktop/棉纸.png" },
  { name: "Hemp Paper", gsm: "200-300gsm", trait: "The future fiber, available now. Hemp's natural ribbed texture signals innovation — for CBD, wellness, and brands ahead of the curve.", use: "Pioneering sustainable brands, CBD/Health products", image: "/images/desktop/麻纸.png" },
  { name: "Translucent Paper", gsm: "40-120gsm", trait: "See-through without the plastic guilt. Diffuses light like frosted glass — the PPWR-compliant window for food and cosmetics.", use: "Food packaging windows, Cosmetic inner liners", image: "/images/desktop/半透明纸.png" },
  { name: "Touch Paper", gsm: "250-350gsm", trait: "Velvet touch, built-in. No extra lamination layer means cleaner recycling — and a surface that feels as considered as the brand inside.", use: "Minimalist beauty, Electronics boxes", image: "/images/desktop/触感纸.png" },
  { name: "Pearlescent Paper", gsm: "200-300gsm", trait: "Shimmer born in the paper, not printed on it. Mother-of-pearl glow shifts from warm gold to cool silver as the box moves.", use: "Festival packaging, Wedding/Party supplies", image: "/images/desktop/珠光纸.png" },
];

const inks = [
  { name: "Soy-based Ink", trait: "Vegetable oil base, low VOC, vibrant color, good paper penetration", compliance: "FDA 21 CFR 176.170 / EU food contact compliant", whenToChoose: "Choose when: Food-contact packaging, brands with sustainability reporting requirements", image: "/images/desktop/大豆油墨.png" },
  { name: "Water-based Ink", trait: "Solvent-free, odourless, fast-drying, suitable for food packaging", compliance: "PFAS-free, meets PPWR recyclability requirements", whenToChoose: "Choose when: Direct food contact, enclosed packaging, odour-sensitive products", image: "/images/desktop/水洗油墨.png" },
  { name: "UV-curable Ink", trait: "Instant curing, abrasion-resistant, suitable for non-absorbent materials", compliance: "Low migration, suitable for pharma/food outer packaging", whenToChoose: "Choose when: Non-porous substrates, high-speed lines, abrasion-prone applications", image: "/images/desktop/UV固化油墨.png" },
  { name: "Metallic Ink", trait: "Contains metal particles, can replace some foil needs, recyclable-friendly", compliance: "Easier to recycle than foil, preferred for mono-material structures", whenToChoose: "Choose when: Budget-conscious metallic effects, mono-material recyclability targets", image: "/images/desktop/金属油墨.png" },
];

const coatings = [
  { name: "Water-based Lamination", trait: "Solvent-free adhesive, biodegradable, recyclable with paper", trend: "Replacing traditional BOPP/PE lamination, PPWR compliant", whenToChoose: "Choose when: Recyclability-first briefs, EU PPWR compliance required", image: "/images/desktop/水性覆膜.png" },
  { name: "PLA Bio-lamination", trait: "Corn starch based, compostable, high transparency", trend: "Fastest growing in European food packaging", whenToChoose: "Choose when: Industrial compostability required, Plant-based brand positioning", image: "/images/desktop/PLA生物覆膜.png" },
  { name: "UV Varnish (no film)", trait: "Direct coating, no plastic layer added, maintains paper recyclability", trend: "2025 mainstream, replacing plastic lamination", whenToChoose: "Choose when: Maximum recyclability, Mono-material structures, Light protection needed without film", image: "/images/desktop/无膜UV涂层.png" },
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
                </div>
                <div className="lg:col-span-2">
                  <span className="font-mono text-xs tracking-[0.15em] text-text-secondary/40 uppercase">Ideal for</span>
                  <p className="mt-2 text-sm text-text-primary">{finish.idealFor}</p>
                  {finish.avoidFor && (
                    <>
                      <span className="mt-3 block font-mono text-xs tracking-[0.15em] text-text-secondary/40 uppercase">Avoid for</span>
                      <p className="mt-2 text-sm text-text-secondary/70">{finish.avoidFor}</p>
                    </>
                  )}
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

      {/* Transition: Classic → Digital */}
      <section className="bg-warm">
        <div className="text-center py-12 border-t border-black/5">
          <p className="font-display text-xl italic text-text-secondary max-w-xl mx-auto leading-relaxed">
            &ldquo;When traditional dies become too expensive or too slow, digital takes over.&rdquo;
          </p>
        </div>
      </section>

      {/* Digital Innovation — Dark Mode */}
      <section className="bg-charcoal py-24 lg:py-32" id="digital-innovation">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 mb-12">
            <div className="lg:w-[60%]">
              <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Digital Innovation</span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl text-off-white leading-tight">
                Digital Embellishment: Precision Without Plates.
              </h2>
              <p className="mt-4 font-display text-xl italic text-off-white/40 max-w-xl">
                Precision without plates. Short runs without compromise.
              </p>
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
                </div>
                <div className="lg:col-span-2">
                  <span className="font-mono text-xs tracking-[0.15em] text-mint uppercase">Ideal for</span>
                  <p className="mt-2 text-sm text-off-white/70">{di.idealFor}</p>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-base text-off-white/60 leading-relaxed">{di.definition}</p>
                </div>
                <div className="lg:col-span-3">
                  <PlaceholderImage
                    label={di.imageLabel || di.name}
                    aspectRatio="4/3"
                    src={di.image}
                    className="w-full"
                  />
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

          {/* Paper Stocks — grouped by family */}
          <h3 className="font-display text-3xl text-text-primary mb-4">Paper Stocks</h3>
          <p className="text-text-secondary text-sm mb-10 max-w-xl">FSC-certified. PFAS-free. Selected for recyclability and sensory impact.</p>

          {/* Family 1: Coated & Smooth */}
          <div className="mb-16">
            <div className="border-t-2 border-text-primary/10 pt-6 mb-6">
              <h4 className="font-display text-xl text-text-primary">Coated &amp; Smooth</h4>
              <p className="mt-1 text-sm text-text-secondary/70">For brands that want maximum color impact</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {paperStocks.filter(s => ["FSC White Card", "Touch Paper", "Pearlescent Paper"].includes(s.name)).map((stock) => (
                <div key={stock.name} className="flex flex-col p-6 border border-black/5 hover:border-black/10 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-display text-lg text-text-primary">{stock.name}</h4>
                      <span className="font-mono text-xs text-text-secondary/50">{stock.gsm}</span>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-1">{stock.trait}</p>
                  <div className="mt-3">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">Ideal for</span>
                    <p className="text-xs text-text-primary mt-1">{stock.use}</p>
                  </div>
                  <div className="mt-4">
                    <PlaceholderImage label={stock.name} aspectRatio="4/3" src={stock.image} className="w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Family 2: Natural & Textured */}
          <div className="mb-16">
            <div className="border-t-2 border-text-primary/10 pt-6 mb-6">
              <h4 className="font-display text-xl text-text-primary">Natural &amp; Textured</h4>
              <p className="mt-1 text-sm text-text-secondary/70">For brands that want honesty and handfeel</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {paperStocks.filter(s => ["FSC Kraft Paper", "Recycled Art Paper", "Hemp Paper"].includes(s.name)).map((stock) => (
                <div key={stock.name} className="flex flex-col p-6 border border-black/5 hover:border-black/10 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-display text-lg text-text-primary">{stock.name}</h4>
                      <span className="font-mono text-xs text-text-secondary/50">{stock.gsm}</span>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-1">{stock.trait}</p>
                  <div className="mt-3">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">Ideal for</span>
                    <p className="text-xs text-text-primary mt-1">{stock.use}</p>
                  </div>
                  <div className="mt-4">
                    <PlaceholderImage label={stock.name} aspectRatio="4/3" src={stock.image} className="w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Family 3: Specialty & Premium */}
          <div className="mb-20">
            <div className="border-t-2 border-text-primary/10 pt-6 mb-6">
              <h4 className="font-display text-xl text-text-primary">Specialty &amp; Premium</h4>
              <p className="mt-1 text-sm text-text-secondary/70">For the unexpected — papers that surprise and elevate</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {paperStocks.filter(s => ["Cotton Paper", "Translucent Paper"].includes(s.name)).map((stock) => (
                <div key={stock.name} className="flex flex-col p-6 border border-black/5 hover:border-black/10 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-display text-lg text-text-primary">{stock.name}</h4>
                      <span className="font-mono text-xs text-text-secondary/50">{stock.gsm}</span>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-1">{stock.trait}</p>
                  <div className="mt-3">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">Ideal for</span>
                    <p className="text-xs text-text-primary mt-1">{stock.use}</p>
                  </div>
                  <div className="mt-4">
                    <PlaceholderImage label={stock.name} aspectRatio="4/3" src={stock.image} className="w-full" />
                  </div>
                </div>
              ))}
            </div>
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
                  <p className="mt-2 text-xs italic text-text-secondary/60">{ink.whenToChoose}</p>
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
                  <p className="mt-2 text-xs italic text-text-secondary/60">{coat.whenToChoose}</p>
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
            Your Brand, in Your Hands.
          </h2>
          <p className="mt-6 text-text-secondary text-base max-w-lg mx-auto leading-relaxed">
            Order a physical sample kit with 6 paper swatches and 4 finish samples — foil, emboss, soft-touch, and spot UV. Feel the difference before you commit.
          </p>
          <div className="mt-10">
            <Link
              href="/sample-kit"
              className="inline-flex items-center px-10 py-4 border-2 border-text-primary text-text-primary text-base font-body font-medium tracking-wide hover:bg-text-primary hover:text-warm transition-all duration-300"
            >
              Request Your Sample Kit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
