import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SectionProgress } from "@/components/SectionProgress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SectionProgress />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
