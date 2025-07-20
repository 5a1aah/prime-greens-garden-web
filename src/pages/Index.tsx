import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TargetMarkets from "@/components/TargetMarkets";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <TargetMarkets />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
