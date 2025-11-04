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
    <section id="services" ref={ref} className="py-24 px-6 relative bg-gradient-services">
      {/* Oddělovací linka na spodku */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(45_40%_75%/0.4)] to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-primary">Naše služby</h2>
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
                className={`bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 hover:-translate-y-2 rounded-[20px] ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </div>
                  <div className="text-2xl font-semibold text-eco-green mt-2">{service.price}</div>
                </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-eco-green mr-3" />
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