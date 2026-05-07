interface PlaceholderImageProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

export default function PlaceholderImage({
  label,
  className = "",
  aspectRatio = "4/3",
}: PlaceholderImageProps) {
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
