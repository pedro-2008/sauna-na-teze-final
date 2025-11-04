import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Baby, Clock, Ticket, Heart } from "lucide-react";

export const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="pricing" ref={ref} className="py-24 px-6 relative bg-gradient-pricing">
      {/* Oddělovací linka na spodku */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(45_40%_75%/0.4)] to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center text-primary">
            Ceník – Finská sauna
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Jednorázový vstup */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-300 rounded-[20px]">
              <CardHeader>
                <CardTitle className="text-2xl text-wood-dark">Jednorázový vstup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">1 osoba / 2 hodiny</span>
                  </div>
                  <span className="text-3xl font-semibold text-eco-green">250 Kč</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Baby className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Děti do 15 let</span>
                  </div>
                  <span className="text-3xl font-semibold text-eco-green">150 Kč</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Časově neomezený vstup</span>
                  </div>
                  <span className="text-3xl font-semibold text-eco-green">350 Kč</span>
                </div>
              </CardContent>
            </Card>

            {/* Permanentky */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-300 rounded-[20px]">
              <CardHeader>
                <CardTitle className="text-2xl text-wood-dark">Permanentky</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Ticket className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">10 vstupů</span>
                  </div>
                  <span className="text-3xl font-semibold text-eco-green">2300 Kč</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Ticket className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">20 vstupů</span>
                  </div>
                  <span className="text-3xl font-semibold text-eco-green">4200 Kč</span>
                </div>
                
                <div className="flex items-start gap-3 pt-4 border-t border-wood-light/20">
                  <Heart className="w-5 h-5 text-eco-green mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Permanentky jsou přenosné – můžete je sdílet s rodinou nebo přáteli.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};