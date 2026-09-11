type ImagePlaceholderProps = {
  label?: string;
  className?: string;
  aspect?: string;
};

export default function ImagePlaceholder({
  label = "Image placeholder",
  className = "",
  aspect = "aspect-[4/3]",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex ${aspect} items-center justify-center border border-dashed border-border bg-bg-raised ${className}`}
    >
      <span className="px-4 text-center text-xs uppercase tracking-wide text-muted">
        {label}
      </span>
    </div>
  );
}
