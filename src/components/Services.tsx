import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Sparkles, CircleDot, Brain, Flame, Bed, Bandage, Waves } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const services = [{
    title: "Sportovní masáž",
    price: "400 - 800 Kč",
    description: "Specializovaná masáž pro sportovce zaměřená na regeneraci svalů a prevenci zranění.",
    features: ["Hluboké svalové techniky", "Individuální přístup", "30-60 minut"],
    icon: Dumbbell
  }, {
    title: "Relaxační masáž",
    price: "1200 Kč",
    description: "Jemná celotělová masáž pro úplné uvolnění a odstranění stresu.",
    features: ["Celotělová masáž", "Aromatické oleje", "90 minut"],
    icon: Sparkles
  }, {
    title: "Baňkování",
    price: "450 - 500 Kč",
    description: "Tradiční čínská metoda léčby pomocí podtlakových baněk pro zlepšení krevního oběhu.",
    features: ["Detoxikace organismu", "Zlepšení krevního oběhu", "30-40 minut"],
    icon: CircleDot
  }, {
    title: "Antistresová masáž hlavy",
    price: "450 Kč",
    description: "Speciální masáž hlavy a krční páteře pro uvolnění napětí a migrény.",
    features: ["Uvolnění krčních svalů", "Proti migréně", "30-40 minut"],
    icon: Brain
  }, {
    title: "Masáž lávovými kameny",
    price: "950 Kč",
    description: "Luxusní masáž s využitím horkých vulkanických kamenů pro hlubokou relaxaci.",
    features: ["Horké lávové kameny", "Hluboká relaxace", "60 minut"],
    icon: Flame
  }, {
    title: "Autotrakční lehátko",
    price: "100 - 200 Kč",
    description: "Moderní terapeutické zařízení pro protažení páteře a uvolnění zablokovaných kloubů.",
    features: ["Trakce páteře", "Terapeutické protažení", "10-20 minut"],
    icon: Bed
  }, {
    title: "Kineziotejping",
    price: "Dle rozsahu",
    description: "Aplikace speciálních pásek pro podporu svalů a kloubů při rehabilitaci.",
    features: ["Podpora svalů", "Rehabilitace", "Individuální aplikace"],
    icon: Bandage
  }, {
    title: "Vířivé vany",
    price: "30 min 250 Kč / 60 min 500 Kč",
    description: "Relaxace ve vířivých vanách s hydromasážními tryskami pro úplné uvolnění.",
    features: ["Hydromasážní trysky", "Regulace teploty", "10-20 minut"],
    icon: Waves
  }];
  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-[#f1ebe4] to-[#f7f3ee] relative overflow-hidden">
      {/* Vlnka oddělovač */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,10 600,60 T1200,60 L1200,0 L0,0 Z" 
                className="fill-[#f7f3ee]"></path>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-light mb-6 text-primary">Naše služby</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finská sauna, vířivé vany a masážní služby
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`bg-white/80 border-0 shadow-soft hover:shadow-warm transition-all duration-700 hover:scale-105 hover:-translate-y-1 group rounded-[20px] ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent group-hover:animate-spin-slow" />
                    </div>
                    <CardTitle className="text-xl text-wood-deep font-playfair">{service.title}</CardTitle>
                  </div>
                  <div className="text-2xl font-light text-[hsl(73,21%,60%)] mt-2">{service.price}</div>
                </CardHeader>
              <CardContent>
                <p className="text-[#3E3B2F]/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-[#3E3B2F]/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(73,21%,60%)] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};