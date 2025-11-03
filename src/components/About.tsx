import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, Leaf, CheckCircle2 } from "lucide-react";
export const About = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="about" ref={ref} className="py-24 px-6 relative overflow-hidden bg-wood-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95'}`}>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-primary">
              Teplo, ticho a vůně dřeva
            </h2>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Sauna Na Teze přináší autentický finský zážitek do Hodonína. 
              Naše sauna je postavena podle tradičních finských postupů 
              s použitím kvalitního severského dřeva.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔥</span>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  Teplo, které léčí
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💧</span>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  Očista těla i mysli
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  Přírodní materiály
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-300 rounded-[20px]">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Thermometer className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-1 text-[hsl(73,21%,60%)]">90°C</h3>
                    <p className="text-sm text-muted-foreground">Optimální teplota</p>
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </div>
          
          <Card className={`bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all rounded-[20px] duration-300 hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'}`} style={{
          transitionDelay: '200ms'
        }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-medium mb-6 text-primary">
                Proč finská sauna?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Zlepšuje krevní oběh a imunitní systém</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Uvolňuje svalové napětí a bolest</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Podporuje detoxikaci organismu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Snižuje stres a zlepšuje náladu</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};