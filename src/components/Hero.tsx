import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/sauna-hero.jpg";
import { SteamParticles } from "./SteamParticles";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50" />
      </div>
      
      {/* Decorative glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-wood-accent/10 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-cream/5 to-transparent blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      {/* Decorative Frame Lines with subtle glow */}
      <div className="absolute inset-8 md:inset-16 border border-white/10 pointer-events-none rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
      <div className="absolute inset-12 md:inset-20 border border-white/5 pointer-events-none rounded-lg" />
      
      {/* Steam Particles */}
      <SteamParticles />
      
      {/* Oddělovací linka mezi tmavou Hero a světlou About s gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-wood-accent/40 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-7xl font-light tracking-wide relative" style={{ 
              color: 'hsl(var(--hero-heading))',
              textShadow: '0 0 40px rgba(255, 255, 255, 0.1), 0 2px 10px rgba(0, 0, 0, 0.5)'
            }}>
              Sauna Na Teze
            </h1>
            {/* Subtle glow effect behind text */}
            <div className="absolute inset-0 blur-2xl opacity-20 bg-gradient-to-r from-wood-accent via-cream to-wood-accent -z-10" />
          </div>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up" style={{ 
          color: 'hsl(var(--hero-accent-text))', 
          animationDelay: '0.2s', 
          animationFillMode: 'backwards',
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
        }}>
          Finská sauna na sportovní hale v Hodoníně
        </p>
        
        <p className="text-lg mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ 
          color: 'hsl(var(--hero-main-text))', 
          animationDelay: '0.4s', 
          animationFillMode: 'backwards',
          textShadow: '0 2px 6px rgba(0, 0, 0, 0.4)'
        }}>
          Přijďte si odpočinout do finské sauny. Dopřejte si relax, regeneraci a pohodu pro tělo i duši.
        </p>
        
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
          <Button 
            variant="outline" 
            size="lg" 
            className="group relative text-lg px-8 py-6 bg-transparent border-2 overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl" 
            style={{ 
              color: 'hsl(var(--hero-accent-text))',
              borderColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(8px)'
            }} 
            onClick={() => {
              const aboutSection = document.querySelector('#about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {/* Gradient border on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-wood-accent/20 via-cream/20 to-wood-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shine effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Přijďte se ohřát
            </span>
          </Button>
        </div>
      </div>
      
      {/* Animated scroll arrow with glow */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer group" 
        onClick={() => {
          const aboutSection = document.querySelector('#about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="relative">
          <ChevronDown className="w-8 h-8 transition-all duration-300 group-hover:scale-125" style={{ color: 'hsl(var(--hero-accent-text))' }} />
          <div className="absolute inset-0 blur-xl opacity-50 bg-wood-accent group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </section>;
};