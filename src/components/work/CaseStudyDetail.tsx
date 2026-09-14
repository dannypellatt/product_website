import Photo from "@/components/ui/Photo";
import { CaseStudy } from "@/lib/caseStudies";

export default function CaseStudyDetail({
  caseStudy,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) {
  return (
    <article id={caseStudy.slug} className="scroll-mt-32 border-b border-border py-16 last:border-none sm:py-20">
      <p className="font-serif text-sm text-accent">
        {String(index + 1).padStart(2, "0")} / Case Study
      </p>
      <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
        {caseStudy.title}
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        {caseStudy.summary}
      </p>

      <Photo
        src={caseStudy.photoSrc ?? `/images/${caseStudy.slug}.jpg`}
        alt={caseStudy.imageAlt}
        placeholderLabel={caseStudy.imageAlt}
        width={caseStudy.photoWidth}
        height={caseStudy.photoHeight}
        className="mt-10"
        aspect="aspect-[16/9]"
      />

      <div className="mt-12 space-y-12">
        <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] text-accent">The Problem</dt>
            <dd className="mt-3 text-base leading-relaxed text-fg">{caseStudy.problem}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] text-accent">
              Customer Insight / Context
            </dt>
            <dd className="mt-3 text-base leading-relaxed text-fg">{caseStudy.insight}</dd>
          </div>
        </dl>

        <dl>
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] text-accent">What I Did</dt>
            <dd className="mt-3 text-base leading-relaxed text-fg">
              <p>{caseStudy.whatIDid.summary}</p>
              <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                {caseStudy.whatIDid.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span aria-hidden="true" className="text-accent">
                      &mdash;
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <dl>
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] text-accent">Outcome</dt>
            <dd className="mt-3 text-base leading-relaxed text-fg">{caseStudy.outcome}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
