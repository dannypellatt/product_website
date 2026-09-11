import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
          Danny Pellatt
        </h1>
        <p className="text-xs uppercase tracking-[0.15em] text-accent">
          Product Manager &middot; Technical Product Manager
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Software engineer turned product leader with experience taking products from idea through launch, 
          scaling SaaS platforms, and working directly with enterprise customers
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/work">View Work</Button>
          <Button href="/about" variant="secondary">
            About Me
          </Button>
          <Button href="/about" variant="secondary">
            LinkedIn*
          </Button>
        </div>
      </Container>
    </section>
  );
}
