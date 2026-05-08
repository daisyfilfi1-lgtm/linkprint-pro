import Link from "next/link";

export default function SustainableRedirect() {
  return (
    <section className="bg-warm pt-32 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Updated
          </span>
          <h1 className="mt-6 font-display text-4xl lg:text-6xl text-text-primary leading-tight">
            Seasonal &amp; Holiday Packaging
          </h1>
          <p className="mt-6 text-text-secondary text-sm leading-relaxed">
            We&apos;ve moved our sustainable packaging expertise into every solution.
            Explore our new <Link href="/solutions/seasonal-holiday" className="text-mint hover:underline">Seasonal &amp; Holiday</Link> page for short-run festive packaging, or visit <Link href="/capabilities-materials" className="text-mint hover:underline">Craft &amp; Materials</Link> to learn about our sustainable materials and certifications.
          </p>
        </div>
      </div>
    </section>
  );
}
