import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, Leaf, CheckCircle2, Flame, Droplet, Sprout } from "lucide-react";
export const About = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="about" ref={ref} className="py-24 px-6 relative overflow-hidden bg-gradient-about">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-radial from-wood-accent/8 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-radial from-eco-green/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-8">
              <div className="w-16 h-1 mb-6 bg-gradient-to-r from-wood-accent via-wood-light to-transparent" />
              <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ color: 'hsl(var(--about-heading))' }}>
                Teplo, ticho a vůně dřeva
              </h2>
            </div>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'hsl(var(--about-main-text))' }}>
              Ticho, teplo a klid.
              Místo, kde si můžete odpočinout od všeho a být sami sebou.
            </p>
            <div className="space-y-4 mb-8">
              <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-500 hover:bg-white/40 hover:shadow-md">
                <div className="p-2 bg-wood-accent/10 rounded-lg group-hover:bg-wood-accent/20 transition-colors duration-500">
                  <Flame className="w-6 h-6 flex-shrink-0 transition-transform duration-500 group-hover:scale-110" style={{ color: 'hsl(var(--about-accent-text))' }} />
                </div>
                <div>
                  <p className="text-lg leading-relaxed font-medium" style={{ color: 'hsl(var(--about-main-text))' }}>
                    Teplo, které léčí
                  </p>
                  <p className="text-sm mt-1 opacity-70" style={{ color: 'hsl(var(--about-main-text))' }}>
                    Prohřeje celé tělo až do hloubky
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-500 hover:bg-white/40 hover:shadow-md">
                <div className="p-2 bg-wood-accent/10 rounded-lg group-hover:bg-wood-accent/20 transition-colors duration-500">
                  <Droplet className="w-6 h-6 flex-shrink-0 transition-transform duration-500 group-hover:scale-110" style={{ color: 'hsl(var(--about-accent-text))' }} />
                </div>
                <div>
                  <p className="text-lg leading-relaxed font-medium" style={{ color: 'hsl(var(--about-main-text))' }}>
                    Očista těla i mysli
                  </p>
                  <p className="text-sm mt-1 opacity-70" style={{ color: 'hsl(var(--about-main-text))' }}>
                    Odvádí toxiny přirozenou cestou
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-500 hover:bg-white/40 hover:shadow-md">
                <div className="p-2 bg-wood-accent/10 rounded-lg group-hover:bg-wood-accent/20 transition-colors duration-500">
                  <Sprout className="w-6 h-6 flex-shrink-0 transition-transform duration-500 group-hover:scale-110" style={{ color: 'hsl(var(--about-accent-text))' }} />
                </div>
                <div>
                  <p className="text-lg leading-relaxed font-medium" style={{ color: 'hsl(var(--about-main-text))' }}>
                    Přírodní materiály
                  </p>
                  <p className="text-sm mt-1 opacity-70" style={{ color: 'hsl(var(--about-main-text))' }}>
                    Kvalitní severské dřevo
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-wood-accent/10 to-transparent rounded-2xl border border-wood-accent/20">
              <div className="p-3 bg-white rounded-xl shadow-md">
                <Thermometer className="w-8 h-8" style={{ color: 'hsl(var(--about-heading))' }} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1" style={{ color: 'hsl(var(--about-heading))' }}>90°C</h3>
                <p className="text-sm" style={{ color: 'hsl(var(--about-accent-text))' }}>Optimální teplota</p>
              </div>
            </div>
          </div>
          
          <Card className={`group bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all rounded-[24px] duration-1000 hover:scale-105 hover:-translate-y-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '200ms'
        }}>
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-wood-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[24px]" />
            
            <CardContent className="p-8 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-wood-accent to-transparent" />
                <Leaf className="w-6 h-6" style={{ color: 'hsl(var(--about-accent-text))' }} />
              </div>
              <h3 className="text-2xl font-medium mb-6" style={{ color: 'hsl(var(--about-heading))' }}>
                Proč finská sauna?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-wood-accent" style={{ color: 'hsl(var(--about-heading))' }} />
                  <span className="transition-colors duration-300 group-hover/item:text-wood-dark" style={{ color: 'hsl(var(--about-main-text))' }}>Zlepšuje krevní oběh a imunitní systém</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-wood-accent" style={{ color: 'hsl(var(--about-heading))' }} />
                  <span className="transition-colors duration-300 group-hover/item:text-wood-dark" style={{ color: 'hsl(var(--about-main-text))' }}>Uvolňuje svalové napětí a bolest</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-wood-accent" style={{ color: 'hsl(var(--about-heading))' }} />
                  <span className="transition-colors duration-300 group-hover/item:text-wood-dark" style={{ color: 'hsl(var(--about-main-text))' }}>Podporuje detoxikaci organismu</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-wood-accent" style={{ color: 'hsl(var(--about-heading))' }} />
                  <span className="transition-colors duration-300 group-hover/item:text-wood-dark" style={{ color: 'hsl(var(--about-main-text))' }}>Snižuje stres a zlepšuje náladu</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};