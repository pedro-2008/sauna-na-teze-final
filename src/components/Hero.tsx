import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/nase-sauna.jpg";
import { SteamParticles } from "./SteamParticles";

export const Hero = () => {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50" />
      </div>
      
      {/* Steam Particles */}
      <SteamParticles />
      
      {/* Oddělovací linka mezi tmavou Hero a světlou About */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ backgroundColor: 'rgba(122, 91, 58, 0.35)' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide animate-fade-in animate-float" style={{ color: 'hsl(var(--hero-heading))' }}>
          Sauna Na Teze
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up" style={{ color: 'hsl(var(--hero-accent-text))', animationDelay: '0.2s', animationFillMode: 'backwards' }}>Finská sauna na sportovní hale v Hodoníně</p>
        <p className="text-lg mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ color: 'hsl(var(--hero-main-text))', animationDelay: '0.4s', animationFillMode: 'backwards' }}>Přijďte si odpočinout do finské sauny. Dopřejte si relax, regeneraci a pohodu pro tělo i duši.</p>
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent border-white/80 hover:bg-white/20 hover:border-white transition-all duration-300 hover:scale-110 hover:shadow-xl" style={{ color: 'hsl(var(--hero-accent-text))' }} onClick={() => {
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