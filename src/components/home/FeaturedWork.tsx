import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyPreviewCard from "@/components/case-studies/CaseStudyPreviewCard";
import Button from "@/components/ui/Button";
import { caseStudies } from "@/lib/caseStudies";

export default function FeaturedWork() {
  return (
    <section className="border-b border-border py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Selected Work" title="Featured case studies" />
          <Button href="/work" variant="secondary" className="self-start sm:self-auto">
            View all work
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyPreviewCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </Container>
    </section>
  );
}
