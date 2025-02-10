import { LandingPageHeader } from "@/components/header";
import { Footer } from "@/components/footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingPageHeader />
      <div className="bg-white py-16 sm:py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
