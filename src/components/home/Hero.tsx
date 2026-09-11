import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function Hero() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-accent">
            Product Manager &middot; Technical Product Manager
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
            Your Name
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Placeholder positioning statement describing the kind of products
            you build, who you build them for, and the impact you drive.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/work">View Work</Button>
            <Button href="/about" variant="secondary">
              About Me
            </Button>
          </div>
        </div>

        <ImagePlaceholder label="Portrait placeholder" aspect="aspect-[4/5]" />
      </Container>
    </section>
  );
}
