import { Metadata } from "next";
import {
  HeroSection,
  AboutSection,
  // TeamSection,
  FeaturesSection,
  CoverageAreas,
  ProcessSection,
  CtaSection,
} from "@/components/sections";
import { metaData } from "@/data/website";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: metaData.title.default,
  description: metaData.description,
  keywords: metaData.keywords,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Container>
        <AboutSection />
        <FeaturesSection />
        <CoverageAreas />
        {/* <TeamSection /> */}
        <ProcessSection />
        <CtaSection />
      </Container>
    </>
  );
}
