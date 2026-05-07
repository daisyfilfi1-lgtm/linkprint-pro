import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources — LinkPrint Pro",
  description:
    "Packaging guides, material specs, and compliance documentation for brand owners.",
};

export default function ResourcesPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-warm pt-20">
      <div className="max-w-xl mx-auto px-6 text-center py-24">
        <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
          Resources
        </span>
        <h1 className="mt-6 font-display text-4xl lg:text-5xl text-text-primary leading-tight">
          Coming <span className="italic">Soon</span>
        </h1>
        <p className="mt-6 text-text-secondary text-sm leading-relaxed">
          Guides, material specifications, compliance checklists, and more. We&apos;re
          building a library to help you make informed packaging decisions.
        </p>
        <div className="mt-10">
          <Link
            href="/sample-kit"
            className="inline-flex items-center px-8 py-3 border-2 border-text-primary text-text-primary text-sm font-body font-medium tracking-wide hover:bg-text-primary hover:text-warm transition-all duration-300"
          >
            Get a Sample Kit
          </Link>
        </div>
      </div>
    </section>
  );
}
