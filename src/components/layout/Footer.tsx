import { LINKEDIN_URL } from "@/lib/nav";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Danny Pellatt. All rights reserved.</p>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#" className="hover:text-accent">
            Resume
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            LinkedIn
          </a>
          <a href="mailto:you@example.com" className="hover:text-accent">
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
