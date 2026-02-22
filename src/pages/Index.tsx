import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import DemoShowcase from "@/components/sections/DemoShowcase";
import ServicesPreview from "@/components/sections/ServicesPreview";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <DemoShowcase />
        <ServicesPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
