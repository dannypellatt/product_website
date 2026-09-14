import Photo from "@/components/ui/Photo";
import { CaseStudy } from "@/lib/caseStudies";

const sections: { key: keyof CaseStudy; label: string }[] = [
  { key: "problem", label: "The Problem" },
  { key: "insight", label: "Customer Insight / Context" },
  { key: "whatIDid", label: "What I Did" },
  { key: "outcome", label: "Outcome" },
];

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

      <dl className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {sections.map(({ key, label }) => (
          <div key={key}>
            <dt className="text-xs uppercase tracking-[0.15em] text-accent">{label}</dt>
            <dd className="mt-3 max-w-md text-base leading-relaxed text-fg">
              {caseStudy[key]}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
