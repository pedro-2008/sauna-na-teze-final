import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import saunaInterior from "@/assets/sauna-interior.jpg";

export const Separator = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url(${saunaInterior})`,
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: 'transform'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-white animate-fade-in">
          Restartujte svou Imunitu. Využijte Finskou Sílu.
        </h2>
        <p className="text-lg md:text-xl mb-10 text-white/90 font-light animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
          Pravidelné prohřátí posiluje zdraví a uvolňuje svaly.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-[hsl(var(--sauna-wood-dark))] hover:bg-[hsl(var(--sauna-wood-dark))]/90 text-white border-none transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={handleClick}
          >
            Ceník a Otevírací Doba
          </Button>
        </div>
      </div>
    </section>
  );
};
