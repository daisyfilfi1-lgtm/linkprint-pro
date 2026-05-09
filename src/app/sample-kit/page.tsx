"use client";

import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";

const sceneOptions = [
  "DTC / E-commerce",
  "Sustainable Switchover",
  "Creator / Limited Drop",
  "Exhibition / Trade Show",
  "Pharma / Nutraceutical",
];

const volumeOptions = [
  { value: "500-1000", label: "500 – 1,000 units" },
  { value: "1000-3000", label: "1,000 – 3,000 units" },
  { value: "3000-5000", label: "3,000 – 5,000 units" },
  { value: "5000+", label: "5,000+ units" },
];

const kitContents = [
  "6 paper swatches (350gsm – 500gsm, coated & uncoated)",
  "3 structural samples (mailer, sleeve, folding carton)",
  "4 process samples (foil, emboss, UV, die-cut)",
  "1 compliance card (FSC, REACH, CE credentials)",
  "1 material guide booklet",
  "1 welcome letter from our lead paper engineer",
];

export default function SampleKitPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    address: "",
    scene: [] as string[],
    volume: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSceneToggle = (scene: string) => {
    setFormData((prev) => ({
      ...prev,
      scene: prev.scene.includes(scene)
        ? prev.scene.filter((s) => s !== scene)
        : [...prev.scene, scene],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/sample-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-warm pt-20">
        <div className="max-w-lg mx-auto px-6 text-center py-24">
          <div className="w-16 h-16 bg-mint/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-mint text-2xl">✓</span>
          </div>
          <h1 className="font-display text-4xl text-text-primary leading-tight">
            Your sample kit is on its way.
          </h1>
          <p className="mt-6 text-text-secondary text-base leading-relaxed">
            We&apos;ll send a confirmation to {formData.email} within 24 hours
            with tracking details. In the meantime, feel free to browse our
            solutions.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-warm pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              Free Sample Kit
            </span>
            <h1 className="mt-6 font-display text-4xl lg:text-6xl text-text-primary leading-tight">
              Feel the quality{" "}
              before you order.
            </h1>
            <p className="mt-6 text-text-secondary text-base leading-relaxed max-w-xl">
              Not sure which paper weight, finish, or structure fits your
              product? We&apos;ll send a curated sample kit with our most popular
              materials and processes — tailored to your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Content Showcase + Form */}
      <section className="bg-warm pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: Kit Contents */}
            <div className="lg:w-1/2">
              <PlaceholderImage
                label="SAMPLE KIT — Open Box with Papers, Swatches, and Compliance Card"
                aspectRatio="4/3"
                className="w-full mb-10"
                category="dtc_mailer"
              />
              <h3 className="font-display text-2xl text-text-primary mb-6">
                What&apos;s inside
              </h3>
              <ul className="space-y-4">
                {kitContents.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-base text-text-secondary"
                  >
                    <span className="text-mint mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs font-mono text-text-secondary/40 tracking-[0.1em]">
                DELIVERY: 5–7 DAYS EXPRESS · FREE FOR QUALIFIED BRANDS
              </p>
            </div>

            {/* Right: Form */}
            <div className="lg:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono tracking-[0.1em] text-text-secondary mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-black/10 py-3 text-base text-text-primary focus:outline-none focus:border-mint transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono tracking-[0.1em] text-text-secondary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-black/10 py-3 text-base text-text-primary focus:outline-none focus:border-mint transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono tracking-[0.1em] text-text-secondary mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-black/10 py-3 text-base text-text-primary focus:outline-none focus:border-mint transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono tracking-[0.1em] text-text-secondary mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-black/10 py-3 text-base text-text-primary focus:outline-none focus:border-mint transition-colors"
                      placeholder="Country"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-[0.1em] text-text-secondary mb-2">
                    Shipping Address *
                  </label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-black/10 py-3 text-base text-text-primary focus:outline-none focus:border-mint transition-colors resize-none"
                    rows={2}
                    placeholder="Street, city, postal code, country"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-[0.1em] text-text-secondary mb-4">
                    Interested Scene (select all that apply)
                  </label>
                  <div className="space-y-3">
                    {sceneOptions.map((scene) => (
                      <label
                        key={scene}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div
                          className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                            formData.scene.includes(scene)
                              ? "border-mint bg-mint"
                              : "border-black/20 group-hover:border-mint"
                          }`}
                          onClick={() => handleSceneToggle(scene)}
                        >
                          {formData.scene.includes(scene) && (
                            <span className="text-charcoal text-[10px] font-bold">
                              ✓
                            </span>
                          )}
                        </div>
                        <span className="text-base text-text-secondary group-hover:text-text-primary transition-colors">
                          {scene}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-[0.1em] text-text-secondary mb-4">
                    Estimated Order Volume
                  </label>
                  <div className="space-y-3">
                    {volumeOptions.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                            formData.volume === opt.value
                              ? "border-mint"
                              : "border-black/20 group-hover:border-mint"
                          }`}
                          onClick={() =>
                            setFormData({ ...formData, volume: opt.value })
                          }
                        >
                          {formData.volume === opt.value && (
                            <div className="w-2 h-2 rounded-full bg-mint" />
                          )}
                        </div>
                        <span className="text-base text-text-secondary group-hover:text-text-primary transition-colors">
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-mint text-charcoal text-base font-body font-semibold tracking-wide hover:bg-mint/90 transition-colors duration-300 disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Ship My Sample Kit"}
                </button>

                <p className="text-[10px] font-mono text-text-secondary/40 text-center">
                  Free for qualified brands. We&apos;ll verify your request
                  within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
