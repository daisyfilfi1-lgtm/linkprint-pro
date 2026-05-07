import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-off-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-display italic text-off-white">
                LinkPrint
              </span>
              <span className="text-[10px] font-mono text-mint tracking-[0.2em] uppercase mt-1">
                Pro
              </span>
            </div>
            <p className="text-sm text-off-white/60 leading-relaxed max-w-xs">
              Precision paper packaging for growing brands. Small batches, fast
              turnaround, uncompromising quality.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.15em] uppercase text-off-white/50 mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/solutions/dtc-packaging", label: "DTC Solutions" },
                { href: "/solutions/sustainable-packaging", label: "Sustainable" },
                { href: "/solutions/creator-packaging", label: "Creator" },
                { href: "/solutions/exhibition-collateral", label: "Exhibition" },
                { href: "/solutions/pharma-healthcare", label: "Pharma" },
                { href: "/solutions/food-beverage-packaging", label: "F&B Packaging" },
                { href: "/sample-kit", label: "Sample Kit" },
                { href: "/contact", label: "Get a Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-off-white/70 hover:text-mint transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.15em] uppercase text-off-white/50 mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-off-white/70">
              <li>EU: +44 20 1234 5678</li>
              <li>US: +1 212 555 0198</li>
              <li>hello@linkprint.pro</li>
              <li className="pt-2 text-off-white/50 font-mono text-xs">
                MOQ 500 · 72H Prototyping · 15-Day Delivery
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-off-white/40">
            &copy; {new Date().getFullYear()} LinkPrint Pro. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-off-white/40">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <Link href="/compliance" className="hover:text-mint transition-colors duration-200">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
