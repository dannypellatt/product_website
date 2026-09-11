import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
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
      </Container>
    </section>
  );
}
