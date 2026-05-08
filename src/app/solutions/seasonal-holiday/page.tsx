import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

const seasonalProducts = [
  {
    name: "Advent Calendar",
    holiday: "Christmas / New Year",
    structure: "12/24-grid drawers, magnetic flip lid, layered nesting",
    finishing: "Foil snowflakes, embossed reindeer, soft-touch, metallic ink illustrations",
    material: "FSC White Card + gold/red spot colors + ribbon handle",
    category: "hero_paper",
    imageLabel: "SEASONAL — Luxury Advent Calendar with 24 Drawers and Gold Foil Accents",
  },
  {
    name: "Heart-Shaped Gift Box",
    holiday: "Valentine's Day / 520 / Qixi",
    structure: "Heart-shaped rigid box, magnetic snap, internal divider",
    finishing: "Rose gold foil, embossed rose, soft-touch, inside love letter print",
    material: "Pearlescent paper / cotton paper + velvet ribbon",
    category: "creator",
    imageLabel: "SEASONAL — Heart-Shaped Rigid Box with Rose Gold Foil and Velvet Ribbon",
  },
  {
    name: "Floral Message Box",
    holiday: "Mother's Day / Women's Day",
    structure: "Book-style magnetic lid, pop-up 3D flower",
    finishing: "Debossed petal texture, spot UV dew drops, foil greeting",
    material: "Recycled art paper + linen texture paper",
    category: "dtc_mailer",
    imageLabel: "SEASONAL — Mother's Day Box with Pop-Up Floral Interior and Foil Greeting",
  },
  {
    name: "Black Friday Limited Box",
    holiday: "Black Friday / Cyber Monday / Singles' Day",
    structure: "Dark-themed mailer box, holographic logo, limited VDP numbering",
    finishing: "Holographic foil, soft-touch, spot UV, serialized numbering",
    material: "Black card stock + metallic ink",
    category: "creator",
    imageLabel: "SEASONAL — Black Friday Limited Box with Holographic Foil and Serial Number",
  },
  {
    name: "Multi-Tier Gift Set",
    holiday: "Mid-Autumn / Thanksgiving",
    structure: "3-tier drawer box, belly band, carry handle",
    finishing: "Foil illustration, debossed cloud pattern, soft-touch, ribbon seal",
    material: "FSC art paper + metallized paper + satin ribbon",
    category: "exhibition",
    imageLabel: "SEASONAL — 3-Tier Mid-Autumn Gift Box with Ribbon Seal and Embossed Details",
  },
  {
    name: "Summer Cool Edition",
    holiday: "Summer / Seasonal Refresh",
    structure: "Window cut-out, ventilated structure, cool-toned design",
    finishing: "Spot UV water ripple, silver foil, soft-touch",
    material: "Translucent paper window + white card",
    category: "hero_paper",
    imageLabel: "SEASONAL — Summer Limited Box with Window Cut-Out and Silver Foil Details",
  },
  {
    name: "Corporate Holiday Gift Set",
    holiday: "Year-End / Client Gifts / Employee Gifts",
    structure: "Multi-cell insert, custom logo seal, thank-you card slot",
    finishing: "Foil company branding, embossing, soft-touch, inside brand story print",
    material: "Recycled board + FSC certified + satin ribbon",
    category: "exhibition",
    imageLabel: "SEASONAL — Corporate Gift Box with Multi-Cell Insert and Custom Logo Foil",
  },
  {
    name: "Wedding Favor Box",
    holiday: "Weddings / Engagements",
    structure: "Personalized name printing, magnetic closure, layered reveal",
    finishing: "Foil couple names, 3D embossed motif, soft-touch, edge gilding",
    material: "Cotton paper / pearlescent paper + velvet ribbon",
    category: "creator",
    imageLabel: "SEASONAL — Wedding Favor Box with Personalized Names and Edge Gilding",
  },
];

export default function SeasonalHolidayPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="flex flex-col lg:flex-row min-h-[80vh] pt-20">
        <div className="lg:w-1/2 min-h-[40vh] lg:min-h-full">
          <PlaceholderImage
            label="SEASONAL HERO — Advent Calendar and Gift Boxes Displayed in Festive Setting"
            aspectRatio="1/1"
            className="w-full h-full"
            category="hero_paper"
          />
        </div>
        <div className="lg:w-1/2 bg-warm flex items-center px-6 lg:px-12 py-20 lg:py-0">
          <div className="max-w-lg">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              Seasonal Solutions
            </span>
            <h1 className="mt-6 font-display text-4xl lg:text-6xl text-text-primary leading-tight">
              Seasonal &amp; Holiday <br />
              <span className="italic">Short-Run Customization.</span>
            </h1>
            <p className="mt-6 text-text-secondary text-sm leading-relaxed">
              From concept to shelf in 18 days. Christmas, Valentine&apos;s, Black
              Friday, Mid-Autumn, and every celebration in between — 500 units
              per design, zero plate costs.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 font-mono text-xs tracking-[0.1em]">
              <div>
                <span className="text-text-secondary/40">Turnaround</span>
                <p className="text-text-primary mt-1">18 Days Concept-to-Shelf</p>
              </div>
              <div>
                <span className="text-text-secondary/40">Minimum</span>
                <p className="text-text-primary mt-1">500 Units Per Design</p>
              </div>
              <div>
                <span className="text-text-secondary/40">Versions</span>
                <p className="text-text-primary mt-1">Unlimited A/B/C Testing</p>
              </div>
              <div>
                <span className="text-text-secondary/40">Plate Cost</span>
                <p className="text-text-primary mt-1">Zero (Digital Printing)</p>
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-text-primary text-text-primary text-sm font-body font-medium tracking-wide hover:bg-text-primary hover:text-warm transition-all duration-300"
              >
                Start Your Seasonal Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Product Grid */}
      <section className="bg-warm py-24 lg:py-32 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 mb-16">
            <div className="lg:w-[40%]">
              <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
                Product Line
              </span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
                Eight occasions. <span className="italic">Unlimited iterations.</span>
              </h2>
            </div>
            <div className="lg:w-[55%]">
              <p className="text-text-secondary text-sm leading-relaxed">
                Every seasonal campaign is different. We give you the structural
                platform and finishing flexibility to create unique packaging for
                each holiday — without the setup costs of traditional tooling.
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {seasonalProducts.map((p, i) => (
              <div
                key={p.name}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-t border-black/5 last:border-b last:border-black/5 items-start"
              >
                {/* Number + Name */}
                <div className="lg:col-span-2">
                  <span className="font-mono text-xs text-text-secondary/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-text-primary">
                    {p.name}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-mint uppercase">
                    {p.holiday}
                  </span>
                </div>
                {/* Specs block */}
                <div className="lg:col-span-3">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">
                    Structure
                  </span>
                  <p className="mt-2 font-mono text-xs text-text-primary leading-relaxed">
                    {p.structure}
                  </p>
                  <span className="mt-4 block font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">
                    Finishing
                  </span>
                  <p className="mt-2 font-mono text-xs text-text-primary leading-relaxed">
                    {p.finishing}
                  </p>
                  <span className="mt-4 block font-mono text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase">
                    Material
                  </span>
                  <p className="mt-2 font-mono text-xs text-text-primary leading-relaxed">
                    {p.material}
                  </p>
                </div>
                {/* Description + Image */}
                <div className="lg:col-span-3">
                  <p className="text-sm text-text-secondary italic leading-relaxed">
                    {p.holiday} edition. Short-run ready. Available from 500 units.
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <PlaceholderImage
                    label={p.imageLabel}
                    aspectRatio="4/3"
                    className="w-full"
                    category={p.category}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Key Differentiators */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Why Top Printing
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-off-white leading-tight max-w-2xl">
            Fast, flexible, <span className="italic">and festival-ready.</span>
          </h2>
          <div className="mt-16 font-mono text-sm text-off-white/70 space-y-2 border-t border-white/10 pt-10 max-w-lg">
            <p>72H PROTOTYPE → 15D DELIVERY</p>
            <p>MINIMUM: 500 UNITS PER DESIGN</p>
            <p>VERSIONS: UNLIMITED (A/B/C TESTING FOR SEASONAL DROPS)</p>
            <p>PLATE COST: ZERO (DIGITAL PRINTING)</p>
            <p>FINISHING: FOIL / EMBOSS / SPOT UV / SOFT-TOUCH</p>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-xl mx-auto">
            Ready for your next <span className="italic">seasonal drop?</span>
          </h2>
          <p className="mt-6 text-text-secondary text-sm max-w-lg mx-auto leading-relaxed">
            Start with a sample kit. See our paper stocks and finishes, then
            let&apos;s design your seasonal packaging together.
          </p>
          <div className="mt-10">
            <Link
              href="/sample-kit"
              className="inline-flex items-center px-10 py-4 border-2 border-text-primary text-text-primary text-sm font-body font-medium tracking-wide hover:bg-text-primary hover:text-warm transition-all duration-300"
            >
              Get a Free Sample Kit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
