import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export const Services = () => {
  const services = [{
    title: "Sportovní masáž",
    price: "400 - 800 Kč",
    description: "Specializovaná masáž pro sportovce zaměřená na regeneraci svalů a prevenci zranění.",
    features: ["Hluboké svalové techniky", "Individuální přístup", "30-60 minut"]
  }, {
    title: "Relaxační masáž",
    price: "1200 Kč",
    description: "Jemná celotělová masáž pro úplné uvolnění a odstranění stresu.",
    features: ["Celotělová masáž", "Aromatické oleje", "90 minut"]
  }, {
    title: "Baňkování",
    price: "450 - 500 Kč",
    description: "Tradiční čínská metoda léčby pomocí podtlakových baněk pro zlepšení krevního oběhu.",
    features: ["Detoxikace organismu", "Zlepšení krevního oběhu", "30-40 minut"]
  }, {
    title: "Antistresová masáž hlavy",
    price: "450 Kč",
    description: "Speciální masáž hlavy a krční páteře pro uvolnění napětí a migrény.",
    features: ["Uvolnění krčních svalů", "Proti migréně", "30-40 minut"]
  }, {
    title: "Masáž lávovými kameny",
    price: "950 Kč",
    description: "Luxusní masáž s využitím horkých vulkanických kamenů pro hlubokou relaxaci.",
    features: ["Horké lávové kameny", "Hluboká relaxace", "60 minut"]
  }, {
    title: "Autotrakční lehátko",
    price: "100 - 200 Kč",
    description: "Moderní terapeutické zařízení pro protažení páteře a uvolnění zablokovaných kloubů.",
    features: ["Trakce páteře", "Terapeutické protažení", "10-20 minut"]
  }, {
    title: "Kineziotejping",
    price: "Dle rozsahu",
    description: "Aplikace speciálních pásek pro podporu svalů a kloubů při rehabilitaci.",
    features: ["Podpora svalů", "Rehabilitace", "Individuální aplikace"]
  }, {
    title: "Vířivé vany",
    price: "30 min 250 Kč / 60 min 500 Kč",
    description: "Relaxace ve vířivých vanách s hydromasážními tryskami pro úplné uvolnění.",
    features: ["Hydromasážní trysky", "Regulace teploty", "10-20 minut"]
  }];
  return <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">Naše služby</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Komplexní wellness a masážní služby pro vaše zdraví a pohodu
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <Card key={index} className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-wood-deep">{service.title}</CardTitle>
                <div className="text-2xl font-light text-accent mt-2">{service.price}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                      {feature}
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};