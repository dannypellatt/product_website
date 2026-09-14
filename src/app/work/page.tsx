import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudySelector from "@/components/work/CaseStudySelector";
import CaseStudyDetail from "@/components/work/CaseStudyDetail";
import ContactCTA from "@/components/shared/ContactCTA";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Work — Danny Pellatt",
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
            description="A few examples of how I’ve helped with product growth, new launches, and customer-driven features."
          />
        </Container>
      </section>

      <CaseStudySelector caseStudies={caseStudies} />

      <Container>
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyDetail key={caseStudy.slug} caseStudy={caseStudy} index={index} />
        ))}
      </Container>

      <ContactCTA />
    </>
  );
}
