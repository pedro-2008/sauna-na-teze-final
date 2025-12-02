import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Sparkles, CircleDot, Brain, Flame, Bed, Bandage, Waves, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const services = [{
    title: "Sportovní masáž",
    price: "400 - 800 Kč",
    description: "Specializovaná masáž pro sportovce zaměřená na regeneraci svalů a prevenci zranění.",
    features: ["Hluboké svalové techniky", "Individuální přístup", "30-60 minut"],
    icon: Dumbbell,
    accent: "from-orange-400 to-amber-400"
  }, {
    title: "Relaxační masáž",
    price: "1200 Kč",
    description: "Jemná celotělová masáž pro úplné uvolnění a odstranění stresu.",
    features: ["Celotělová masáž", "Aromatické oleje", "90 minut"],
    icon: Sparkles,
    accent: "from-amber-400 to-yellow-400"
  }, {
    title: "Baňkování",
    price: "450 - 500 Kč",
    description: "Tradiční čínská metoda léčby pomocí podtlakových baněk pro zlepšení krevního oběhu.",
    features: ["Detoxikace organismu", "Zlepšení krevního oběhu", "30-40 minut"],
    icon: CircleDot,
    accent: "from-rose-400 to-orange-400"
  }, {
    title: "Antistresová masáž hlavy",
    price: "450 Kč",
    description: "Speciální masáž hlavy a krční páteře pro uvolnění napětí a migrény.",
    features: ["Uvolnění krčních svalů", "Proti migréně", "30-40 minut"],
    icon: Brain,
    accent: "from-purple-400 to-pink-400"
  }, {
    title: "Masáž lávovými kameny",
    price: "950 Kč",
    description: "Masáž s využitím horkých vulkanických kamenů pro hlubokou relaxaci.",
    features: ["Horké lávové kameny", "Hluboká relaxace", "60 minut"],
    icon: Flame,
    accent: "from-red-400 to-orange-400"
  }, {
    title: "Autotrakční lehátko",
    price: "100 - 200 Kč",
    description: "Moderní terapeutické zařízení pro protažení páteře a uvolnění zablokovaných kloubů.",
    features: ["Trakce páteře", "Terapeutické protažení", "10-20 minut"],
    icon: Bed,
    accent: "from-blue-400 to-cyan-400"
  }, {
    title: "Kineziotejping",
    price: "Dle rozsahu",
    description: "Aplikace speciálních pásek pro podporu svalů a kloubů při rehabilitaci.",
    features: ["Podpora svalů", "Rehabilitace", "Individuální aplikace"],
    icon: Bandage,
    accent: "from-green-400 to-teal-400"
  }, {
    title: "Vířivé vany",
    price: "250 / 500 Kč",
    description: "Relaxace ve vířivých vanách s hydromasážními tryskami pro úplné uvolnění.",
    features: ["Hydromasážní trysky", "Regulace teploty", "30/60 minut"],
    icon: Waves,
    accent: "from-cyan-400 to-blue-400"
  }];
  
  return (
    <section id="services" ref={ref} className="py-28 px-6 relative bg-gradient-services overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="absolute top-40 -left-20 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-white/10 border border-white/20" style={{ color: 'hsl(var(--services-section-heading))' }}>
            Kompletní péče
          </span>
          <h2 className="text-4xl md:text-6xl font-light mb-6" style={{ color: 'hsl(var(--services-section-heading))' }}>
            Naše služby
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-80" style={{ color: 'hsl(var(--services-section-text))' }}>
            Finská sauna, vířivé vany a masážní služby pro vaši regeneraci
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`group relative shadow-soft hover:shadow-warm transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 rounded-[24px] border-0 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ 
                  backgroundColor: 'hsl(var(--services-card-bg))',
                  transitionDelay: `${index * 75}ms`
                }}
              >
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${service.accent} bg-opacity-10`} style={{ backgroundColor: 'hsl(var(--muted))' }}>
                      <Icon className="w-5 h-5" style={{ color: 'hsl(var(--services-heading))' }} />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-medium" style={{ color: 'hsl(var(--services-heading))' }}>{service.title}</CardTitle>
                  <div className="text-xl font-semibold mt-1" style={{ color: 'hsl(var(--services-accent-text))' }}>{service.price}</div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'hsl(var(--services-main-text))' }}>
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs" style={{ color: 'hsl(var(--services-main-text))' }}>
                        <ArrowRight className="w-3 h-3 mr-2 opacity-50" />
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