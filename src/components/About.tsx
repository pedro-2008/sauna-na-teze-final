import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, Leaf, CheckCircle2, Flame, Droplet, Sprout, Quote } from "lucide-react";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="about" ref={ref} className="py-28 px-6 relative overflow-hidden bg-gradient-about">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Quote decoration */}
            <div className="mb-6">
              <Quote className="w-10 h-10 text-amber-300/50 rotate-180" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight" style={{ color: 'hsl(var(--about-heading))' }}>
              Teplo, ticho a<br />
              <span className="text-amber-700">vůně dřeva</span>
            </h2>
            
            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'hsl(var(--about-main-text))' }}>
              Ticho, teplo a klid.
              Místo, kde si můžete odpočinout od všeho a být sami sebou.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-soft">
                <Flame className="w-6 h-6 mx-auto mb-2" style={{ color: 'hsl(var(--about-accent-text))' }} />
                <p className="text-sm font-medium" style={{ color: 'hsl(var(--about-heading))' }}>Teplo, které léčí</p>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-soft">
                <Droplet className="w-6 h-6 mx-auto mb-2" style={{ color: 'hsl(var(--about-accent-text))' }} />
                <p className="text-sm font-medium" style={{ color: 'hsl(var(--about-heading))' }}>Očista těla i mysli</p>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-soft">
                <Sprout className="w-6 h-6 mx-auto mb-2" style={{ color: 'hsl(var(--about-accent-text))' }} />
                <p className="text-sm font-medium" style={{ color: 'hsl(var(--about-heading))' }}>Přírodní materiály</p>
              </div>
            </div>
            
            {/* Temperature highlight */}
            <div className="inline-flex items-center gap-4 p-4 bg-gradient-to-r from-amber-100/80 to-amber-50/50 rounded-2xl">
              <div className="p-3 bg-white rounded-xl shadow-soft">
                <Thermometer className="w-8 h-8" style={{ color: 'hsl(var(--about-heading))' }} />
              </div>
              <div>
                <h3 className="text-3xl font-semibold" style={{ color: 'hsl(var(--about-heading))' }}>90°C</h3>
                <p className="text-sm" style={{ color: 'hsl(var(--about-accent-text))' }}>Optimální teplota</p>
              </div>
            </div>
          </div>
          
          <Card className={`bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all rounded-[28px] duration-1000 hover:scale-[1.02] border-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
            transitionDelay: '200ms'
          }}>
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Leaf className="w-5 h-5" style={{ color: 'hsl(var(--about-heading))' }} />
                </div>
                <h3 className="text-2xl font-medium" style={{ color: 'hsl(var(--about-heading))' }}>
                  Proč finská sauna?
                </h3>
              </div>
              
              <ul className="space-y-5">
                {[
                  "Zlepšuje krevní oběh a imunitní systém",
                  "Uvolňuje svalové napětí a bolest",
                  "Podporuje detoxikaci organismu",
                  "Snižuje stres a zlepšuje náladu"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="p-1 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors">
                      <CheckCircle2 className="w-5 h-5" style={{ color: 'hsl(var(--about-heading))' }} />
                    </div>
                    <span className="text-lg" style={{ color: 'hsl(var(--about-main-text))' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};