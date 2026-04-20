import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workspaces from "@/components/Workspaces";
import CTA from "@/components/CTA";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CharacterReveal from "@/components/CharacterReveal";
import Automations from "@/components/Automations";
import Present from "@/components/Present";
import HelperCarousel from "@/components/HelperCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CharacterReveal />
        <Automations />
        <Present />
        <HelperCarousel />
        <Workspaces />
        <Reviews />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
