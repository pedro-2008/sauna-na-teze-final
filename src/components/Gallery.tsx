import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Camera } from "lucide-react";
import massage1 from "@/assets/massage-1.jpg";
import massage2 from "@/assets/massage-2.jpg";

export const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="gallery" ref={ref} className="py-24 px-6 relative overflow-hidden" style={{ background: 'var(--gradient-gallery)' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-100/15 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/5 border border-amber-900/10 mb-4">
            <Camera className="w-4 h-4" style={{ color: 'hsl(var(--gallery-heading))' }} />
            <span className="text-sm font-medium" style={{ color: 'hsl(var(--gallery-heading))' }}>Galerie</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light" style={{ color: 'hsl(var(--gallery-heading))' }}>
            Nahlédněte do našeho prostředí
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: '200ms' }}>
            <div className="relative rounded-[24px] overflow-hidden shadow-soft group-hover:shadow-warm transition-all duration-500">
              <img 
                src={massage1} 
                alt="Relaxační masáž v sauně" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  Relaxační masáž
                </span>
              </div>
            </div>
          </div>
          
          <div className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: '400ms' }}>
            <div className="relative rounded-[24px] overflow-hidden shadow-soft group-hover:shadow-warm transition-all duration-500">
              <img 
                src={massage2} 
                alt="Masáž obličeje a relaxace" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  Masáž obličeje
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};