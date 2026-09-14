import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { EMAIL, LINKEDIN_URL, PHONE_HREF } from "@/lib/nav";

export default function ContactCTA() {
  return (
    <section className="py-20">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl">
            Let&apos;s talk about your product.
          </h2>
          <p className="mt-2 text-muted">
            Open to Product Manager and Technical Product Manager roles.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button href={`mailto:${EMAIL}`}>Email</Button>
          <Button href={PHONE_HREF} variant="secondary">
            Phone
          </Button>
          <Button href={LINKEDIN_URL} variant="secondary" external>
            LinkedIn
          </Button>
        </div>
      </Container>
    </section>
  );
}
