import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import AboutPreview from "@/components/AboutPreview";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <ServicesPreview />
    <AboutPreview />
    <Footer />
  </div>
);

export default Index;
