"use client";

import { useState } from "react";

const steps = [
  { key: "scene", label: "Scene" },
  { key: "product_type", label: "Product" },
  { key: "specs", label: "Specs" },
  { key: "upload", label: "Upload" },
  { key: "contact", label: "Contact" },
];

const sceneOptions = [
  "DTC / E-commerce Packaging",
  "Sustainable / Eco Switchover",
  "Creator / Limited Edition",
  "Exhibition / Trade Show",
  "Pharma / Nutraceutical",
  "Other",
];

const productTypeOptions = [
  "Mailer Box",
  "Subscription Sleeve",
  "Rigid Setup Box",
  "Folding Carton",
  "Telescopic Box",
  "Clamshell Mailer",
  "Custom Structure",
];

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    scene: "",
    product_type: "",
    specs: "",
    file: null as File | null,
    name: "",
    email: "",
    company: "",
    country: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          file_url: formData.file ? formData.file.name : "",
        }),
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

  const canProceed = (): boolean => {
    switch (step) {
      case 0:
        return !!formData.scene;
      case 1:
        return !!formData.product_type;
      case 2:
        return !!formData.specs;
      case 3:
        return true;
      case 4:
        return !!formData.name && !!formData.email && !!formData.company && !!formData.country;
      default:
        return false;
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
            Your request is in review.
          </h1>
          <p className="mt-6 text-text-secondary text-base leading-relaxed">
            We&apos;ll respond within 24 hours with your quote and compliance
            advice. A confirmation has been sent to {formData.email}.
          </p>
        </div>
      </section>
    );
  }

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3 className="font-display text-2xl text-text-primary mb-2">
              What scene are you packaging for?
            </h3>
            <p className="text-base text-text-secondary mb-8">
              Tell us about your brand and use case so we can recommend the right
              materials.
            </p>
            <div className="space-y-3">
              {sceneOptions.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-3 cursor-pointer group p-4 border border-black/5 hover:border-mint/30 transition-colors"
                >
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      formData.scene === opt
                        ? "border-mint"
                        : "border-black/20"
                    }`}
                    onClick={() => updateField("scene", opt)}
                  >
                    {formData.scene === opt && (
                      <div className="w-2.5 h-2.5 rounded-full bg-mint" />
                    )}
                  </div>
                  <span className="text-base text-text-primary">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h3 className="font-display text-2xl text-text-primary mb-2">
              What type of packaging?
            </h3>
            <p className="text-base text-text-secondary mb-8">
              Select the structure that best matches your product.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {productTypeOptions.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-3 cursor-pointer group p-4 border border-black/5 hover:border-mint/30 transition-colors"
                >
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      formData.product_type === opt
                        ? "border-mint"
                        : "border-black/20"
                    }`}
                    onClick={() => updateField("product_type", opt)}
                  >
                    {formData.product_type === opt && (
                      <div className="w-2.5 h-2.5 rounded-full bg-mint" />
                    )}
                  </div>
                  <span className="text-base text-text-primary">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="font-display text-2xl text-text-primary mb-2">
              Tell us about your specs
            </h3>
            <p className="text-base text-text-secondary mb-8">
              Dimensions, volume, material preference, finishing, or any special
              requirements.
            </p>
            <textarea
              value={formData.specs}
              onChange={(e) => updateField("specs", e.target.value)}
              className="w-full bg-transparent border border-black/10 p-4 text-base text-text-primary focus:outline-none focus:border-mint transition-colors resize-none min-h-[200px]"
              placeholder="Example: 200mm x 150mm x 40mm, 1,200 units, 400gsm art paper, matte lamination, foil stamp logo on front..."
            />
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="font-display text-2xl text-text-primary mb-2">
              Upload reference files
            </h3>
            <p className="text-base text-text-secondary mb-8">
              Artwork, design files, or reference images. Optional but
              recommended for accurate quoting. (AI, PDF, PNG, JPG)
            </p>
            <div
              className="border-2 border-dashed border-black/10 p-12 text-center hover:border-mint/30 transition-colors cursor-pointer"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <input
                id="file-upload"
                type="file"
                accept=".ai,.pdf,.png,.jpg,.jpeg,.svg"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setFormData((prev) => ({
                      ...prev,
                      file: e.target.files![0],
                    }));
                  }
                }}
              />
              {formData.file ? (
                <div>
                  <span className="text-mint text-base font-medium">
                    {formData.file.name}
                  </span>
                  <p className="text-xs text-text-secondary/40 mt-2">
                    Click to change file
                  </p>
                </div>
              ) : (
                <div>
                  <span className="text-text-secondary/60 text-base">
                    Drop files here or click to browse
                  </span>
                  <p className="text-xs text-text-secondary/40 mt-2">
                    AI, PDF, PNG, JPG, SVG
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className="font-display text-2xl text-text-primary mb-2">
              Your contact details
            </h3>
            <p className="text-base text-text-secondary mb-8">
              We&apos;ll send your quote and compliance advice within 24 hours.
            </p>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono tracking-[0.1em] text-text-secondary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
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
                    onChange={(e) => updateField("email", e.target.value)}
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
                    onChange={(e) => updateField("company", e.target.value)}
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
                    onChange={(e) => updateField("country", e.target.value)}
                    className="w-full bg-transparent border-b border-black/10 py-3 text-base text-text-primary focus:outline-none focus:border-mint transition-colors"
                    placeholder="Country"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Page layout */}
      <section className="min-h-screen bg-warm pt-20 flex flex-col lg:flex-row">
        {/* Left: Contact Info */}
        <div className="lg:w-[35%] bg-charcoal text-off-white px-6 lg:px-12 py-16 lg:py-32">
          <div className="max-w-sm">
            <span className="font-mono text-xs tracking-[0.2em] text-mint uppercase">
              Get in Touch
            </span>
            <h1 className="mt-6 font-display text-4xl lg:text-5xl text-off-white leading-tight">
              Quote + Compliance Advice{" "}
              within 24 hours.
            </h1>

            <div className="mt-12 space-y-8">
              <div>
                <h4 className="text-xs font-mono tracking-[0.15em] text-mint uppercase mb-3">
                  EU Contact
                </h4>
                <p className="text-base text-off-white/70">
                  WhatsApp: +44 20 1234 5678
                </p>
                <p className="text-base text-off-white/70">
                  LinkedIn: /company/linkprint-pro
                </p>
                <p className="text-base text-off-white/70">
                  Email: eu@linkprint.pro
                </p>
              </div>
              <div>
                <h4 className="text-xs font-mono tracking-[0.15em] text-mint uppercase mb-3">
                  US Contact
                </h4>
                <p className="text-base text-off-white/70">
                  Phone: +1 212 555 0198
                </p>
                <p className="text-base text-off-white/70">
                  Email: us@linkprint.pro
                </p>
              </div>
              <div>
                <h4 className="text-xs font-mono tracking-[0.15em] text-mint uppercase mb-3">
                  EU Hub
                </h4>
                <p className="text-base text-off-white/70 leading-relaxed">
                  LinkPrint Pro EU<br />
                  Prinsengracht 250<br />
                  1016 HE Amsterdam<br />
                  Netherlands
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-xs font-mono text-off-white/40 tracking-[0.1em]">
                ALL INQUIRIES RESPONDED WITHIN 24 HOURS
              </p>
              <p className="text-xs font-mono text-off-white/40 tracking-[0.1em] mt-2">
                WEEKDAY SUPPORT · CET 09:00–18:00 · EST 08:00–17:00
              </p>
            </div>
          </div>
        </div>

        {/* Right: Quote Form */}
        <div className="lg:w-[65%] px-6 lg:px-12 py-16 lg:py-32">
          <div className="max-w-2xl">
            {/* Stepper */}
            <div className="flex items-center mb-12">
              {steps.map((s, i) => (
                <div key={s.key} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 text-xs font-mono rounded-full transition-colors ${
                      i <= step
                        ? "bg-mint text-charcoal"
                        : "bg-transparent border border-black/10 text-text-secondary/40"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={`ml-2 text-[10px] font-mono tracking-[0.1em] hidden sm:block ${
                      i <= step ? "text-mint" : "text-text-secondary/40"
                    }`}
                  >
                    {s.label}
                  </span>
                  {i < steps.length - 1 && (
                    <div
                      className={`stepper-line mx-3 ${
                        i < step ? "active" : ""
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            {renderStepContent()}

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center">
              {step > 0 ? (
                <button
                  onClick={handleBack}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors font-body"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              {step < steps.length - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="px-8 py-3 bg-charcoal text-off-white text-sm font-body font-medium tracking-wide hover:bg-charcoal/90 transition-colors disabled:opacity-30"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed() || submitting}
                  className="px-10 py-4 bg-mint text-charcoal text-sm font-body font-semibold tracking-wide hover:bg-mint/90 transition-colors disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Get My Quote"}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
