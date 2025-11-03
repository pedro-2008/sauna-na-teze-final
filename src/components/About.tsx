import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, Leaf, CheckCircle2 } from "lucide-react";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return <section id="about" ref={ref} className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#f7f3ee] to-[#f1ebe4]">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white"></path>
        </svg>
      </div>
      
      {/* Steam effect - visible rising steam */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute bottom-0 left-[15%] w-48 h-96 bg-white/80 rounded-full blur-3xl" style={{ animation: 'steam-rise 15s ease-in-out infinite' }} />
        <div className="absolute bottom-0 left-[45%] w-40 h-80 bg-white/75 rounded-full blur-3xl" style={{ animation: 'steam-rise 18s ease-in-out infinite', animationDelay: '3s' }} />
        <div className="absolute bottom-0 left-[75%] w-52 h-[28rem] bg-white/85 rounded-full blur-3xl" style={{ animation: 'steam-rise 20s ease-in-out infinite', animationDelay: '6s' }} />
        <div className="absolute bottom-0 left-[60%] w-36 h-72 bg-white/70 rounded-full blur-3xl" style={{ animation: 'steam-rise 16s ease-in-out infinite', animationDelay: '9s' }} />
        <div className="absolute bottom-0 left-[30%] w-44 h-88 bg-white/65 rounded-full blur-3xl" style={{ animation: 'steam-rise 17s ease-in-out infinite', animationDelay: '4.5s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95'
          }`}>
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
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Teplo, které léčí</strong> – optimální teplota 90°C pro dokonalou regeneraci
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💧</span>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Očista těla i mysli</strong> – detoxikace organismu a uvolnění stresu
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Přírodní materiály</strong> – severské dřevo a tradiční finské postupy
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/60 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Thermometer className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-1 text-wood-deep">90°C</h3>
                    <p className="text-sm text-muted-foreground">Optimální teplota</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/60 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Leaf className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-1 text-wood-deep">100%</h3>
                    <p className="text-sm text-muted-foreground">Přírodní materiály</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card className={`bg-white/60 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'
          }`}
          style={{ transitionDelay: '200ms' }}
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-medium mb-6 text-primary">
                Proč finská sauna?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Zlepšuje krevní oběh a imunitní systém</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Uvolňuje svalové napětí a bolest</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Podporuje detoxikaci organismu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Snižuje stres a zlepšuje náladu</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};