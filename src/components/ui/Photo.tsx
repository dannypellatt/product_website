import Image from "next/image";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { publicImageExists } from "@/lib/images";

type PhotoProps = {
  src: string;
  alt: string;
  placeholderLabel: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
};

export default function Photo({
  src,
  alt,
  placeholderLabel,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
  fit = "cover",
}: PhotoProps) {
  if (!publicImageExists(src)) {
    return <ImagePlaceholder label={placeholderLabel} aspect={aspect} className={className} />;
  }

  return (
    <div className={`relative ${aspect} overflow-hidden bg-bg-raised ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={fit === "contain" ? "object-contain" : "object-cover"}
        sizes="(min-width: 1024px) 480px, 100vw"
      />
    </div>
  );
}
