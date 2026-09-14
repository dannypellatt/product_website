import Container from "@/components/layout/Container";
import { CaseStudy } from "@/lib/caseStudies";

export default function CaseStudySelector({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <nav aria-label="Case studies" className="sticky top-16 z-30 border-b border-border bg-bg/95 backdrop-blur-sm sm:top-20">
      <Container>
        <ol className="flex gap-8 overflow-x-auto py-4 text-sm">
          {caseStudies.map((caseStudy, index) => (
            <li key={caseStudy.slug} className="shrink-0">
              <a
                href={`#${caseStudy.slug}`}
                className="flex items-baseline gap-2 text-muted transition-colors hover:text-accent"
              >
                <span className="font-serif text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                {caseStudy.title}
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
