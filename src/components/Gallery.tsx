import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import massage1 from "@/assets/massage-1.jpg";
import massage2 from "@/assets/massage-2.jpg";
import massage3 from "@/assets/massage-3.jpg";
import massage4 from "@/assets/massage-4.jpg";
import saunaInterior from "@/assets/sauna-interior.jpg";

export const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const images = [
    { src: massage1, alt: "Relaxační masáž v sauně", delay: "0ms" },
    { src: massage2, alt: "Masáž obličeje a relaxace", delay: "100ms" },
    { src: massage3, alt: "Hluboká relaxační masáž", delay: "200ms" },
    { src: massage4, alt: "Masáž hlavy a krku", delay: "300ms" },
    { src: saunaInterior, alt: "Interiér finské sauny", delay: "400ms" }
  ];

  return (
    <section id="gallery" ref={ref} className="py-24 px-6 relative overflow-hidden" style={{ background: 'var(--gradient-gallery)' }}>
      {/* Decorative golden glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-wood-accent/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: 'hsl(var(--services-section-heading))' }}>
            Galerie
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-wood-accent to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative rounded-[24px] overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ 
                transitionDelay: image.delay,
                ...(index === 4 && { gridColumn: 'md:span-2 lg:span-1' })
              }}
            >
              {/* 3D Transform Container */}
              <div className="relative transform-gpu transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                {/* Golden border glow on hover */}
                <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"
                     style={{
                       boxShadow: '0 0 40px rgba(139, 108, 79, 0.6), inset 0 0 20px rgba(139, 108, 79, 0.3)'
                     }} />
                
                {/* Image with overlay */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-soft group-hover:shadow-warm">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transform-gpu transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/80 via-wood-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Text reveal on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-cream-light font-medium text-lg drop-shadow-lg">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};