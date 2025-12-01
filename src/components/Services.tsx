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
    description: "Masáž s využitím horkých vulkanických kamenů pro hlubokou relaxaci.",
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
    features: ["Hydromasážní trysky", "Regulace teploty", "30/60 minut"],
    icon: Waves
  }];
  return (
    <section id="services" ref={ref} className="py-24 px-6 relative bg-gradient-services overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-radial from-wood-accent/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-radial from-cream/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ color: 'hsl(var(--services-section-heading))' }}>Naše služby</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-transparent via-wood-accent to-transparent" />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--services-section-text))' }}>
            Finská sauna, vířivé vany a masážní služby
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`group shadow-soft hover:shadow-warm transition-all duration-700 hover:scale-105 hover:-translate-y-3 rounded-[24px] ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ 
                  backgroundColor: 'hsl(var(--services-card-bg))',
                  transitionDelay: `${index * 100}ms`,
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-wood-accent/0 via-wood-accent/0 to-wood-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-wood-accent/20 transition-colors duration-500">
                      <Icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ color: 'hsl(var(--services-heading))' }} />
                    </div>
                    <CardTitle className="text-xl" style={{ color: 'hsl(var(--services-heading))' }}>{service.title}</CardTitle>
                  </div>
                  <div className="text-2xl font-semibold mt-2 group-hover:text-wood-accent transition-colors duration-500" style={{ color: 'hsl(var(--services-accent-text))' }}>{service.price}</div>
                </CardHeader>
              <CardContent>
                <p className="mb-6 leading-relaxed" style={{ color: 'hsl(var(--services-main-text))' }}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm" style={{ color: 'hsl(var(--services-main-text))' }}>
                      <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ backgroundColor: 'hsl(var(--services-accent-text))' }} />
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