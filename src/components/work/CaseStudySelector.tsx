import { CaseStudy } from "@/lib/caseStudies";

export default function CaseStudySelector({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <nav aria-label="Case studies" className="sticky top-16 z-30 -mx-6 overflow-x-auto border-b border-border bg-bg/95 px-6 backdrop-blur-sm sm:top-20 sm:mx-0 sm:px-0">
      <ol className="flex min-w-max gap-8 py-4 text-sm sm:min-w-0">
        {caseStudies.map((caseStudy, index) => (
          <li key={caseStudy.slug}>
            <a
              href={`#${caseStudy.slug}`}
              className="flex items-baseline gap-2 text-muted transition-colors hover:text-accent"
            >
              <span className="font-serif text-xs text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              {caseStudy.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
