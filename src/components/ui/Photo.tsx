import Image from "next/image";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { publicImageExists } from "@/lib/images";

type PhotoProps = {
  src: string;
  alt: string;
  placeholderLabel: string;
  aspect?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
};

export default function Photo({
  src,
  alt,
  placeholderLabel,
  aspect = "aspect-[4/3]",
  width,
  height,
  className = "",
  priority = false,
  fit = "cover",
}: PhotoProps) {
  if (!publicImageExists(src)) {
    return <ImagePlaceholder label={placeholderLabel} aspect={aspect} className={className} />;
  }

  // With known intrinsic dimensions, size the box to the image's own aspect
  // ratio exactly, so there's never any letterboxing or cropping.
  if (width && height) {
    return (
      <div className={`overflow-hidden border border-border bg-bg-raised ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="h-auto w-full"
          sizes="(min-width: 1024px) 480px, 100vw"
        />
      </div>
    );
  }

  return (
    <div className={`relative ${aspect} overflow-hidden border border-border bg-bg-raised ${className}`}>
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
