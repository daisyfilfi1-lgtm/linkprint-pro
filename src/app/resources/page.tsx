"use client";

import { useState } from "react";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

const guides = [
  {
    title: "PPWR Compliance Guide",
    subtitle: "Everything you need to know about EU Packaging & Packaging Waste Regulation",
    format: "PDF · 24 Pages",
    description: "A comprehensive guide to PPWR requirements, timelines, and actionable steps for brand owners. Includes material checklists, compliance deadlines, and case examples.",
  },
  {
    title: "Packaging Cost Calculator",
    subtitle: "Estimate your per-unit packaging cost across materials and volumes",
    format: "XLSX · Interactive",
    description: "Compare material costs, finishing options, and volume tiers. Input your specs and get instant cost projections from MOQ 500 to 50,000 units.",
  },
  {
    title: "Creator's Guide to Small-Batch Packaging",
    subtitle: "From 500-unit drops to sellout success",
    format: "PDF · 18 Pages",
    description: "Learn how creators design, produce, and launch limited-run packaging. Includes die-line templates, finishing comparisons, and fulfilment tips.",
  },
  {
    title: "Exhibition Collateral Checklist",
    subtitle: "Don't miss a thing before your next trade show",
    format: "PDF · 12 Pages",
    description: "A chronological checklist from 8 weeks out to show day. Brochures, signage, giveaways, business cards — with quantities, deadlines, and production timelines.",
  },
  {
    title: "Pharma Compliance Checklist",
    subtitle: "EU MDR 2017/745 packaging requirements at a glance",
    format: "PDF · 16 Pages",
    description: "Regulatory requirements for pharmaceutical and medical device packaging in the EU market. Covers materials, labelling, documentation, and audit readiness.",
  },
];

const blogPosts = [
  {
    title: "PPWR 2030: What Brand Owners Need to Know About Packaging Compliance",
    category: "Compliance",
    date: "Apr 2025",
    excerpt: "The EU Packaging & Packaging Waste Regulation will reshape how brands package products. We break down the key deadlines, material restrictions, and how to prepare starting today.",
  },
  {
    title: "Small-Batch Packaging: Why MOQ 500 is the Sweet Spot for Growing Brands",
    category: "Strategy",
    date: "Mar 2025",
    excerpt: "Why 500 units is the ideal minimum order quantity for DTC brands, creators, and startups. Learn how small batches reduce risk, enable testing, and improve cash flow.",
  },
  {
    title: "Paper vs. Plastic: A Carbon Footprint Comparison for E-Commerce Packaging",
    category: "Sustainability",
    date: "Feb 2025",
    excerpt: "We crunched the numbers on paper vs. plastic packaging emissions across production, transport, and end-of-life. The results might surprise you.",
  },
  {
    title: "The Unboxing Effect: How Premium Packaging Drives Social Share Rates",
    category: "Marketing",
    date: "Jan 2025",
    excerpt: "Data from 200+ brand launches shows that premium paper packaging increases social media share rates by an average of 40%. Here's what makes people post.",
  },
  {
    title: "EU MDR for Packaging: A Practical Guide for Supplement and Medical Device Brands",
    category: "Compliance",
    date: "Dec 2024",
    excerpt: "Navigating EU Medical Device Regulation for packaging doesn't have to be overwhelming. A practical guide to documentation, labelling, and audit preparation.",
  },
];

const faqItems = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "Our standard MOQ is 500 units per SKU. This applies across all packaging types — mailer boxes, folding cartons, rigid boxes, sleeves, and more. For custom structures or complex finishing, MOQ may vary. We also offer sample kits for evaluation before committing to a full run.",
  },
  {
    question: "How fast can you deliver?",
    answer: "Prototyping takes 72 hours from artwork approval. Standard production takes 10 business days, and express production (5 business days) is available at a 15% premium. EU delivery typically adds 2–5 business days depending on destination. Total average time from artwork approval to delivery: 15 days.",
  },
  {
    question: "Can you match Pantone colours on uncoated paper?",
    answer: "Yes. Our in-house ink lab formulates custom soy-based and water-based inks for uncoated FSC stocks. We achieve ±0.5 delta-E colour accuracy and send a physical colour proof before production begins. No digital approximations — you approve the real thing.",
  },
  {
    question: "What certifications do your materials carry?",
    answer: "All our paper stocks are FSC® certified (Chain of Custody). Inks and coatings are REACH compliant. We provide CE marking for EU market distribution and our quality system is ISO 9001:2015 certified. For pharma and medical devices, we support EU MDR 2017/745 documentation.",
  },
  {
    question: "Do you offer design support?",
    answer: "Yes. Our in-house structural and graphic design team can work from reference images, verbal briefs, or rough sketches. We provide die-line creation, artwork adaptation, and structural design consultation. Design support is included in the prototyping fee.",
  },
  {
    question: "Can you ship to fulfilment centres or multiple addresses?",
    answer: "Absolutely. We ship to fulfilment centres across the EU, UK, and US. Flat-packed boxes reduce storage footprint by up to 70%. We can also split orders across multiple addresses and drop-ship direct to end customers with your branded labels.",
  },
  {
    question: "What files do you need to start production?",
    answer: "We accept AI, PDF, SVG, CDR, and EPS files with embedded fonts and 3mm bleed. For structural designs, we need die-line files in AI or PDF format. If you don't have production-ready files, our design team can prepare them from your artwork.",
  },
  {
    question: "How does the sample kit work?",
    answer: "Request a free sample kit through our website. You'll receive 6 paper swatches (350–500gsm), 3 structural samples, 4 process samples (foil, emboss, UV, die-cut), a compliance card, and a material guide booklet. Delivery takes 5–7 business days. Free for qualified brands.",
  },
];

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-warm pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Resources
          </span>
          <h1 className="mt-6 font-display text-4xl lg:text-6xl text-text-primary leading-tight max-w-3xl">
            Guides, insights, and answers{" "}
            <span className="italic">for smarter packaging.</span>
          </h1>
        </div>
      </section>

      {/* Section 1: Guides & Whitepapers */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-[30%] lg:sticky lg:top-32 lg:self-start">
              <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
                Guides
              </span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
                Downloadable{" "}
                <span className="italic">Resources.</span>
              </h2>
              <p className="mt-6 text-text-secondary text-sm leading-relaxed">
                In-depth guides, checklists, and tools to help you make informed
                packaging decisions. Fill in your details to download.
              </p>
            </div>
            <div className="lg:w-[65%] space-y-0">
              {guides.map((guide, i) => (
                <div
                  key={guide.title}
                  className="group border-t border-black/5 py-10 last:border-b last:border-black/5"
                >
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-mono text-xs text-text-secondary/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.15em] text-mint uppercase">
                          {guide.format}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl text-text-primary mb-1">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-text-secondary/70 italic mb-3">
                        {guide.subtitle}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
                        {guide.description}
                      </p>
                    </div>
                    <div className="lg:w-40 lg:flex-shrink-0">
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-text-primary text-text-primary text-xs font-mono tracking-[0.1em] hover:bg-text-primary hover:text-warm transition-all duration-300"
                      >
                        Download →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Blog */}
      <section className="bg-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Blog
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-2xl">
            Insights from the <span className="italic">paper lab.</span>
          </h2>
          <div className="mt-16 space-y-0 max-w-4xl">
            {blogPosts.map((post, i) => (
              <div
                key={post.title}
                className="border-t border-black/5 py-8 last:border-b last:border-black/5"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-mono text-[10px] tracking-[0.15em] text-mint uppercase">
                        {post.category}
                      </span>
                      <span className="font-mono text-[10px] text-text-secondary/40">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-text-primary hover:text-mint transition-colors cursor-default">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed max-w-xl">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="text-sm font-mono text-text-secondary/40 whitespace-nowrap">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: FAQ with Accordion */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            FAQ
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight max-w-2xl">
            Frequently asked{" "}
            <span className="italic">questions.</span>
          </h2>
          <div className="mt-16 space-y-0">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="border-t border-black/5 last:border-b last:border-black/5"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={openFaq === i}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="font-mono text-xs text-text-secondary/40 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg text-text-primary group-hover:text-mint transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <span
                    className={`ml-4 text-mint transition-transform duration-300 flex-shrink-0 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-10 pr-12">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
