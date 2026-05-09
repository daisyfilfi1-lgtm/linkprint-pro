"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions/dtc-packaging", label: "Solutions" },
  { href: "/capabilities-materials", label: "Craft & Materials" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/sample-kit", label: "Sample Kit" },
  { href: "/contact", label: "Quote" },
];

const solutionLinks = [
  { href: "/solutions/dtc-packaging", label: "DTC" },
  { href: "/solutions/seasonal-holiday", label: "Seasonal & Holiday" },
  { href: "/solutions/creator-packaging", label: "Creator" },
  { href: "/solutions/exhibition-collateral", label: "Exhibition" },
  { href: "/solutions/pharma-healthcare", label: "Pharma" },
  { href: "/solutions/food-beverage-packaging", label: "F&B Packaging" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isTransparent = !scrolled && pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-warm/95 backdrop-blur-md border-b border-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Top Printing"
              width={120}
              height={40}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.label === "Solutions") {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                        pathname.startsWith("/solutions")
                          ? "text-mint"
                          : isTransparent
                          ? "text-off-white/80 hover:text-off-white"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                      <div className="bg-warm border border-black/5 shadow-lg py-3 min-w-[180px]">
                        {solutionLinks.map((sl) => (
                          <Link
                            key={sl.href}
                            href={sl.href}
                            className={`block px-5 py-2.5 text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                              pathname === sl.href
                                ? "text-mint"
                                : "text-text-secondary hover:text-text-primary hover:bg-black/5"
                            }`}
                          >
                            {sl.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-mint"
                      : isTransparent
                      ? "text-off-white/80 hover:text-off-white"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-px bg-text-primary transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-text-primary transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-text-primary transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 bg-warm border-t border-black/5">
          {navLinks.map((link) => {
            if (link.label === "Solutions") {
              return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-3 text-sm font-body font-medium border-b border-black/5 ${
                      pathname.startsWith("/solutions") ? "text-mint" : "text-text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                  <div className="pl-4 pb-2">
                    {solutionLinks.map((sl) => (
                      <Link
                        key={sl.href}
                        href={sl.href}
                        className={`block py-2 text-sm font-body border-b border-black/5 last:border-0 ${
                          pathname === sl.href ? "text-mint" : "text-text-secondary"
                        }`}
                      >
                        {sl.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 text-sm font-body font-medium border-b border-black/5 last:border-0 ${
                  pathname === link.href ? "text-mint" : "text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
