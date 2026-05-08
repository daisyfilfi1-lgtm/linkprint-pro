import Link from "next/link";

export default function ResourcesRedirect() {
  return (
    <section className="bg-warm pt-32 pb-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
            Moved
          </span>
          <h1 className="mt-6 font-display text-4xl lg:text-6xl text-text-primary leading-tight">
            Our resources have moved.
          </h1>
          <p className="mt-6 text-text-secondary text-sm leading-relaxed">
            Visit our new <Link href="/blog" className="text-mint hover:underline">Blog</Link> for insights, guides, and packaging answers.
          </p>
        </div>
      </div>
    </section>
  );
}
