import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { CatalogueCta } from "@/components/sections/catalogue-cta";
import { FinalEnquiryCta } from "@/components/sections/final-enquiry-cta";
import { HeroSection } from "@/components/sections/hero-section";
import { IndustriesServed } from "@/components/sections/industries-served";
import { ProductCategories } from "@/components/sections/product-categories";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FloatingContactActions } from "@/components/shared/floating-contact-actions";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
        <WhyChooseUs />
        <IndustriesServed />
        <CatalogueCta />
        <FinalEnquiryCta />
      </main>
      <Footer />
      <FloatingContactActions />
    </>
  );
}
