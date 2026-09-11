import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { StorySlide as StorySlideType } from "@/lib/aboutStory";

export default function StorySlide({ slide }: { slide: StorySlideType }) {
  const imageFirst = slide.index % 2 === 0;

  return (
    <section className="border-b border-border py-16 last:border-none sm:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
          <ImagePlaceholder
            label={`Photo placeholder — ${slide.title}`}
            aspect="aspect-[4/3]"
          />
        </div>

        <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
          <p className="font-serif text-sm text-accent">
            {String(slide.index).padStart(2, "0")}
          </p>
          <h2 className="mt-3 max-w-lg font-serif text-3xl leading-tight sm:text-4xl">
            {slide.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            {slide.body}
          </p>

          {slide.isFinal && (
            <Button href="/work" className="mt-8">
              View the portfolio
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
