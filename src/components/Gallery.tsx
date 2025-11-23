import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import massage1 from "@/assets/massage-1.jpg";
import massage2 from "@/assets/massage-2.jpg";

export const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="gallery" ref={ref} className="py-24 px-6 relative overflow-hidden bg-gradient-gallery">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: '200ms' }}>
            <div className="rounded-[20px] overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 hover:scale-105">
              <img 
                src={massage1} 
                alt="Relaxační masáž v sauně" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: '400ms' }}>
            <div className="rounded-[20px] overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 hover:scale-105">
              <img 
                src={massage2} 
                alt="Masáž obličeje a relaxace" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};