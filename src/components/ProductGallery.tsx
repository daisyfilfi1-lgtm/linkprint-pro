import PlaceholderImage from "./PlaceholderImage";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="bg-warm py-16 lg:py-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <span className="font-mono text-sm tracking-[0.2em] text-mint uppercase">Gallery</span>
          <h3 className="mt-4 font-display text-3xl text-text-primary">
            {title} — Product Range
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <PlaceholderImage
                label={`${title} ${idx + 1}`}
                aspectRatio="4/3"
                src={img}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
