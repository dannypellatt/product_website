import Link from "next/link";
import Photo from "@/components/ui/Photo";
import { CaseStudy } from "@/lib/caseStudies";

export default function CaseStudyPreviewCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article className="flex flex-col border-t border-border pt-6">
      <Link href={`/work#${caseStudy.slug}`} className="group flex flex-col gap-6">
        <Photo
          src={caseStudy.photoSrc ?? `/images/${caseStudy.slug}.jpg`}
          alt={caseStudy.imageAlt}
          placeholderLabel={caseStudy.imageAlt}
          fit="contain"
        />

        <div>
          <h3 className="font-serif text-xl leading-snug group-hover:text-accent">
            {caseStudy.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {caseStudy.summary}
          </p>

          <ul className="mt-4 space-y-1.5 text-sm text-fg">
            {caseStudy.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-2">
                <span aria-hidden="true" className="text-accent">
                  &mdash;
                </span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent">
            View case study
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
