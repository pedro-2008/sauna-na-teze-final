import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/sauna-hero.jpg";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(243, 238, 230, 0.15)' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide animate-fade-in animate-float">
          Sauna Na Teze
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>Finská sauna na sportovní hale v Hodoníně</p>
        <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>Objevte sílu tradičního finského saunování.
Relaxace, regenerace a pohoda pro tělo i duši.</p>
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse-glow" onClick={() => {
          const aboutSection = document.querySelector('#about');
          if (aboutSection) {
            aboutSection.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }}>
            Více informací
          </Button>
        </div>
      </div>
    </section>;
};