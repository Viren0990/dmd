import Contact from "@/components/Contact";
import FeaturesCarousel from "@/components/FeatureCarousel";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Contact />
      <Features />
      <FeaturesCarousel />
      <Footer />
    </div>
  );
}
