// Custom components
import { LandingPageHeader } from "@/components/header";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { CallToAction } from "@/components/cta";
import { FrequentlyAskedQuestions } from "@/components/fqa";
import { PrimaryFeatures } from "@/components/primary-features";
import { SecondaryFeatures } from "@/components/secondary-features";

export default function MarketingPage() {
  return (
    <>
      <LandingPageHeader />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction
          tagline={"Get started today"}
          subTagline={
            "It’s time to take control of your books. Buy our software so you canfeel like you’re doing something productive."
          }
          actionLabel={"Register now"}
          actionURL={"/register"}
        />
        <Pricing />
        <Testimonials />
        <FrequentlyAskedQuestions />
      </main>
    </>
  );
}
