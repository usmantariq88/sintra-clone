import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workspaces from "@/components/Workspaces";
import CTA from "@/components/CTA";
import Reviews from "@/components/Reviews";
import BrainHeader from "@/components/BrainHeader";
import BrainVideo from "@/components/BrainVideo";
import Integrations from "@/components/Integrations";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CharacterReveal from "@/components/CharacterReveal";
import Automations from "@/components/Automations";
import Present from "@/components/Present";
import HelperCarousel from "@/components/HelperCarousel";

export default function Home() {
  return (
    <>
      {/* Navbar is absolute inside this relative wrapper so it
          overlays the hero and scrolls away — NOT sticky */}
      <div style={{ position: "relative" }}>
        <Navbar />
        <Hero />
      </div>
      <main>
        <CharacterReveal />
        <HelperCarousel />
        <Automations />
        <Present />
        <BrainHeader />
        <BrainVideo />
        <Integrations />
        <Workspaces />
        <Reviews />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
