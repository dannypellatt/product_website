import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Photo from "@/components/ui/Photo";

export default function Hero() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <h1 className="mb-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
            Danny Pellatt
          </h1>
          <p className="text-xs uppercase tracking-[0.15em] text-accent">
            Technical Product Manager
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Software engineer turned product leader with experience taking products from idea through launch,
            scaling SaaS platforms, and working directly with enterprise customers
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/work" variant="secondary">
              View Work
            </Button>
            <Button href="/about" variant="secondary">
              About Me
            </Button>
            <Button href="/about">
              LinkedIn
            </Button>
          </div>
        </div>

        <Photo
          src="/images/danny-hero_square.jpg"
          alt="Danny Pellatt"
          placeholderLabel="Portrait placeholder"
          aspect="aspect-[4/5]"
          priority
        />
      </Container>
    </section>
  );
}
