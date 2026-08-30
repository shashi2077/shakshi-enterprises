import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
