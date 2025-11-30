import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import saunaInterior from '@/assets/sauna-interior.jpg';

export const ParallaxSeparator = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          willChange: 'transform',
        }}
      >
        <img
          src={saunaInterior}
          alt="Finská sauna interiér"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 animate-fade-in">
          Restartujte svou Imunitu. Využijte Finskou Sílu.
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl animate-fade-in">
          Pravidelné prohřátí posiluje zdraví a uvolňuje svaly.
        </p>
        <Button
          size="lg"
          onClick={handleScrollToPricing}
          className="bg-[hsl(25,40%,30%)] hover:bg-[hsl(25,40%,25%)] text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in"
        >
          Ceník a Otevírací Doba
        </Button>
      </div>
    </section>
  );
};
