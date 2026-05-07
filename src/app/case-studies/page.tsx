import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — LinkPrint Pro",
  description:
    "Real packaging transformations for DTC brands, creators, and pharma companies.",
};

export default function CaseStudiesPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-warm pt-20">
      <div className="max-w-xl mx-auto px-6 text-center py-24">
        <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
          Case Studies
        </span>
        <h1 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
          Coming <span className="italic">Soon</span>
        </h1>
        <p className="mt-6 text-text-secondary text-sm leading-relaxed">
          We&apos;re documenting our favorite packaging transformations. Check
          back for real stories from DTC brands, creators, and pharma companies.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-text-primary text-text-primary text-sm font-body font-medium tracking-wide hover:bg-text-primary hover:text-warm transition-all duration-300"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
