import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudySelector from "@/components/work/CaseStudySelector";
import CaseStudyDetail from "@/components/work/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Work — Your Name",
  description: "Selected product case studies.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work"
            description="Placeholder intro paragraph describing the kinds of problems covered in these case studies and how to navigate them."
          />
        </Container>
      </section>

      <CaseStudySelector caseStudies={caseStudies} />

      <Container>
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyDetail key={caseStudy.slug} caseStudy={caseStudy} index={index} />
        ))}
      </Container>
    </>
  );
}
