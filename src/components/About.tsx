import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, Leaf, CheckCircle2, Flame, Droplet, Sprout } from "lucide-react";
export const About = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="about" ref={ref} className="py-24 px-6 relative overflow-hidden bg-gradient-about">
      {/* Oddělovací linka mezi světlými sekcemi About a Services */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ backgroundColor: 'rgba(216, 199, 170, 0.35)' }} />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ color: 'hsl(var(--about-heading))' }}>
              Teplo, ticho a vůně dřeva
            </h2>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'hsl(var(--about-main-text))' }}>
              Ticho, teplo a klid.
              Místo, kde si můžete odpočinout od všeho a být sami sebou.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Flame className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'hsl(var(--about-accent-text))' }} />
                <p className="text-lg leading-relaxed font-medium" style={{ color: 'hsl(var(--about-main-text))' }}>
                  Teplo, které léčí
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Droplet className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'hsl(var(--about-accent-text))' }} />
                <p className="text-lg leading-relaxed font-medium" style={{ color: 'hsl(var(--about-main-text))' }}>
                  Očista těla i mysli
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sprout className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'hsl(var(--about-accent-text))' }} />
                <p className="text-lg leading-relaxed font-medium" style={{ color: 'hsl(var(--about-main-text))' }}>
                  Přírodní materiály
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Thermometer className="w-8 h-8" style={{ color: 'hsl(var(--about-heading))' }} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1" style={{ color: 'hsl(var(--about-heading))' }}>90°C</h3>
                <p className="text-sm" style={{ color: 'hsl(var(--about-accent-text))' }}>Optimální teplota</p>
              </div>
            </div>
          </div>
          
          <Card className={`bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all rounded-[20px] duration-1000 hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '200ms'
        }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-medium mb-6" style={{ color: 'hsl(var(--about-heading))' }}>
                Proč finská sauna?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--about-heading))' }} />
                  <span style={{ color: 'hsl(var(--about-main-text))' }}>Zlepšuje krevní oběh a imunitní systém</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--about-heading))' }} />
                  <span style={{ color: 'hsl(var(--about-main-text))' }}>Uvolňuje svalové napětí a bolest</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--about-heading))' }} />
                  <span style={{ color: 'hsl(var(--about-main-text))' }}>Podporuje detoxikaci organismu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--about-heading))' }} />
                  <span style={{ color: 'hsl(var(--about-main-text))' }}>Snižuje stres a zlepšuje náladu</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};