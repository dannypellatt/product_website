import Container from "@/components/layout/Container";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <section className="border-b border-border py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <ImagePlaceholder label="Portrait placeholder" aspect="aspect-[3/4]" />

        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-accent">About</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            A short placeholder headline about your path into product.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Placeholder paragraph introducing your background, how you think
            about product, and what makes your approach distinct. Full story
            continues on the About page.
          </p>
          <Button href="/about" variant="secondary" className="mt-8">
            Read my story
          </Button>
        </div>
      </Container>
    </section>
  );
}
