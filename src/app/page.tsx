import Hero from "@/components/home/Hero";
import Metrics from "@/components/home/Metrics";
import FeaturedWork from "@/components/home/FeaturedWork";
import AboutPreview from "@/components/home/AboutPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <FeaturedWork />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
