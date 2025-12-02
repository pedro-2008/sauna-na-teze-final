import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/sauna-hero.jpg";
import { SteamParticles } from "./SteamParticles";
import { ChevronDown, Sparkles } from "lucide-react";
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

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110" 
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-transparent to-amber-600/10 animate-pulse" style={{ animationDuration: '8s' }} />
      
      {/* Decorative Frame Lines */}
      <div className="absolute inset-8 md:inset-16 border border-white/10 pointer-events-none" />
      <div className="absolute inset-12 md:inset-20 border border-white/5 pointer-events-none" />
      
      {/* Corner decorations */}
      <div className="absolute top-8 md:top-16 left-8 md:left-16 w-12 h-12 border-l-2 border-t-2 border-amber-400/30 pointer-events-none" />
      <div className="absolute top-8 md:top-16 right-8 md:right-16 w-12 h-12 border-r-2 border-t-2 border-amber-400/30 pointer-events-none" />
      <div className="absolute bottom-8 md:bottom-16 left-8 md:left-16 w-12 h-12 border-l-2 border-b-2 border-amber-400/30 pointer-events-none" />
      <div className="absolute bottom-8 md:bottom-16 right-8 md:right-16 w-12 h-12 border-r-2 border-b-2 border-amber-400/30 pointer-events-none" />
      
      {/* Steam Particles */}
      <SteamParticles />
      
      {/* Oddělovací linka mezi tmavou Hero a světlou About */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ backgroundColor: 'rgba(122, 91, 58, 0.35)' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span className="text-sm font-medium text-amber-100">Relaxace pro tělo i duši</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide animate-fade-in" style={{ color: 'hsl(var(--hero-heading))' }}>
          <span className="block">Sauna</span>
          <span className="block text-amber-300/90 font-normal">Na Teze</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 font-light animate-fade-in-up" style={{ color: 'hsl(var(--hero-accent-text))', animationDelay: '0.2s', animationFillMode: 'backwards' }}>
          Finská sauna na sportovní hale v Hodoníně
        </p>
        
        <p className="text-lg mb-12 max-w-2xl mx-auto animate-fade-in-up opacity-80" style={{ color: 'hsl(var(--hero-main-text))', animationDelay: '0.4s', animationFillMode: 'backwards' }}>
          Přijďte si odpočinout do finské sauny. Dopřejte si relax, regeneraci a pohodu.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-amber-500 hover:bg-amber-400 text-amber-950 font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-amber-500/25 rounded-full" 
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Rezervovat návštěvu
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 bg-transparent border-white/40 hover:bg-white/10 hover:border-white/60 transition-all duration-300 rounded-full" 
            style={{ color: 'hsl(var(--hero-accent-text))' }} 
            onClick={() => {
              const aboutSection = document.querySelector('#about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Zjistit více
          </Button>
        </div>
      </div>
      
      {/* Animated scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer group" onClick={() => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}>
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
          <ChevronDown className="w-6 h-6" style={{ color: 'hsl(var(--hero-accent-text))' }} />
        </div>
      </div>
    </section>
  );
};