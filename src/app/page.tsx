import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workspaces from "@/components/Workspaces";
import CTA from "@/components/CTA";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reviews />
        <Workspaces />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
