import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import AboutPreview from "@/components/home/AboutPreview";
import ContactCTA from "@/components/shared/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
