import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StorySlide from "@/components/about/StorySlide";
import { storySlides } from "@/lib/aboutStory";

export const metadata: Metadata = {
  title: "About — Your Name",
  description: "The story behind the work.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="About"
            title="My story, in six parts"
            description="Placeholder intro sentence setting up the more personal, story-driven version of the usual bio."
          />
        </Container>
      </section>

      <Container>
        {storySlides.map((slide) => (
          <StorySlide key={slide.index} slide={slide} />
        ))}
      </Container>
    </>
  );
}
