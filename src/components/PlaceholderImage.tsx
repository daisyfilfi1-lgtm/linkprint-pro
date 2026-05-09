"use client";

import Image from "next/image";
import { useState } from "react";

interface PlaceholderImageProps {
  label: string;
  className?: string;
  aspectRatio?: string;
  category?: string;
  /** Optional index to cycle through variants of the same category for visual diversity */
  variant?: number;
  /** Direct image source path — overrides category lookup when provided */
  src?: string;
}

const categoryImages: Record<string, string[]> = {
  hero_paper: ["/images/hero_paper_texture_0.png", "/images/hero_paper_texture_1.png", "/images/hero_paper_texture_2.png", "/images/hero_paper_texture_3.png"],
  dtc_mailer: ["/images/mailer_box_dtc_0.png", "/images/mailer_box_dtc_1.png", "/images/mailer_box_dtc_2.png", "/images/mailer_box_dtc_3.png"],
  sustainable: ["/images/sustainable_paper_0.png", "/images/sustainable_paper_1.png", "/images/sustainable_paper_2.png", "/images/sustainable_paper_3.png"],
  creator: ["/images/creator_art_box_0.png", "/images/creator_art_box_1.png", "/images/creator_art_box_2.png", "/images/creator_art_box_3.png"],
  exhibition: ["/images/exhibition_booth_0.png", "/images/exhibition_booth_1.png", "/images/exhibition_booth_2.png", "/images/exhibition_booth_3.png"],
  pharma: ["/images/pharma_carton_0.png", "/images/pharma_carton_1.png", "/images/pharma_carton_2.png", "/images/pharma_carton_3.png"],
  fb_packaging: ["/images/fb_packaging_0.png"],
};

const categoryAlts: Record<string, string> = {
  hero_paper: "Paper texture macro detail",
  dtc_mailer: "DTC mailer box",
  sustainable: "Sustainable paper packaging",
  creator: "Creator art box",
  exhibition: "Exhibition booth",
  pharma: "Pharma carton",
  fb_packaging: "F&B packaging",
};

export default function PlaceholderImage({
  label,
  className = "",
  aspectRatio = "4/3",
  category,
  variant,
  src,
}: PlaceholderImageProps) {
  const [imgError, setImgError] = useState(false);
  
  let imageDef: { src: string; alt: string } | null = null;
  
  if (src && !imgError) {
    // Direct src takes priority
    imageDef = { src, alt: label };
  } else if (category && !imgError) {
    // Category-based lookup with variant distribution
    const images = categoryImages[category];
    if (images && images.length > 0) {
      let imageIndex = 0;
      if (variant !== undefined) {
        imageIndex = variant % images.length;
      } else {
        let hash = 0;
        for (let i = 0; i < label.length; i++) {
          hash = ((hash << 5) - hash) + label.charCodeAt(i);
          hash |= 0;
        }
        imageIndex = Math.abs(hash) % images.length;
      }
      imageDef = { src: images[imageIndex], alt: categoryAlts[category] || label };
    }
  }

  if (imageDef) {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ aspectRatio }}
        data-placeholder={label}
      >
        <Image
          src={imageDef.src}
          alt={imageDef.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Fallback: label-based placeholder with more visual info
  return (
    <div
      className={`bg-gradient-to-br from-warm to-off-white flex items-center justify-center overflow-hidden border border-black/5 ${className}`}
      style={{ aspectRatio }}
      data-placeholder={label}
    >
      <div className="text-center px-4">
        <span className="text-xs font-mono text-text-secondary/60 tracking-[0.1em] uppercase block">
          {label}
        </span>
        <span className="text-[10px] font-mono text-text-secondary/40 mt-1 block">
          Image Coming
        </span>
      </div>
    </div>
  );
}
