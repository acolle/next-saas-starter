// Custom components
import { LandingPageHeader } from "@/components/header";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { CallToAction } from "@/components/cta";
import { FrequentlyAskedQuestions } from "@/components/fqa";
import { PrimaryFeatures } from "@/components/primary-features";
import { SecondaryFeatures } from "@/components/secondary-features";
import { Footer } from "@/components/footer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            "Now is the time to show your customers what your app has to offer. Sign up for a free account to get started."
          }
          actionLabel={"Register now"}
          actionURL={"/sign-up"}
        />

        <Pricing />
        <Testimonials />
        <FrequentlyAskedQuestions />
      </main>

      <Footer />
    </>
  );
}
