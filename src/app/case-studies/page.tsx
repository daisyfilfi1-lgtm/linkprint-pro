import Link from "next/link";

export default function CaseStudiesRedirect() {
  return (
    <section className="bg-warm pt-32 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Redirect
          </span>
          <h1 className="mt-6 font-display text-4xl lg:text-6xl text-text-primary leading-tight">
            This page has moved.
          </h1>
          <p className="mt-6 text-text-secondary text-sm leading-relaxed">
            Explore our <Link href="/capabilities-materials" className="text-mint hover:underline">Craft & Materials</Link> page to see our packaging capabilities, or visit our <Link href="/solutions/dtc-packaging" className="text-mint hover:underline">Solutions</Link> for industry-specific packaging.
          </p>
        </div>
      </div>
    </section>
  );
}
