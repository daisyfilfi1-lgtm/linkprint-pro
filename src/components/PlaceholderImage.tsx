"use client";

import Image from "next/image";
import { useState } from "react";

interface PlaceholderImageProps {
  label: string;
  className?: string;
  aspectRatio?: string;
  category?: string;
}

const categoryImages: Record<string, { src: string; alt: string }> = {
  hero_paper: { src: "/images/hero_paper_texture_0.png", alt: "Hero paper texture background" },
  dtc_mailer: { src: "/images/mailer_box_dtc_0.png", alt: "DTC mailer box" },
  sustainable: { src: "/images/sustainable_paper_0.png", alt: "Sustainable paper packaging" },
  creator: { src: "/images/creator_art_box_0.png", alt: "Creator art box" },
  exhibition: { src: "/images/exhibition_booth_0.png", alt: "Exhibition booth" },
  pharma: { src: "/images/pharma_carton_0.png", alt: "Pharma carton" },
};

export default function PlaceholderImage({
  label,
  className = "",
  aspectRatio = "4/3",
  category,
}: PlaceholderImageProps) {
  const [imgError, setImgError] = useState(false);
  const imageDef = category ? categoryImages[category] : null;
  const showImage = imageDef && !imgError;

  if (showImage) {
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

  // Fallback: gray placeholder
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center overflow-hidden ${className}`}
      style={{ aspectRatio }}
      data-placeholder={label}
    >
      <div className="text-center px-4">
        <span className="text-xs font-mono text-text-secondary/60 tracking-[0.1em] uppercase block">
          {label}
        </span>
        <span className="text-[10px] font-mono text-text-secondary/40 mt-1 block">
          Placeholder
        </span>
      </div>
    </div>
  );
}
