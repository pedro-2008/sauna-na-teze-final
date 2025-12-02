import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Baby, Clock, Ticket, Heart, Gift, Sparkles } from "lucide-react";

export const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="pricing" ref={ref} className="py-24 px-6 relative bg-gradient-pricing texture-noise">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-400/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-amber-400/5 blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-amber-900/10 border border-amber-900/20" style={{ color: 'hsl(var(--pricing-accent-text))' }}>
              Ceník služeb
            </span>
            <h2 className="text-4xl md:text-6xl font-light mb-4" style={{ color: 'hsl(var(--pricing-heading))' }}>
              Finská sauna
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'hsl(var(--pricing-main-text))' }}>
              Dopřejte si čas jen pro sebe
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Jednorázový vstup */}
            <Card className="group bg-white/90 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-500 rounded-[24px] border-0 overflow-hidden hover:scale-[1.02] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl shadow-sm">
                    <User className="w-5 h-5" style={{ color: 'hsl(var(--pricing-heading))' }} />
                  </div>
                  <CardTitle className="text-2xl font-medium" style={{ color: 'hsl(var(--pricing-heading))' }}>Jednorázový vstup</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-5 relative">
                <div className="flex items-center justify-between py-3 border-b border-amber-100">
                  <div className="flex items-center gap-3">
                    <span style={{ color: 'hsl(var(--pricing-main-text))' }}>1 osoba / 2 hodiny</span>
                  </div>
                  <span className="text-2xl font-semibold" style={{ color: 'hsl(var(--pricing-accent-text))' }}>250 Kč</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-amber-100">
                  <div className="flex items-center gap-3">
                    <Baby className="w-4 h-4" style={{ color: 'hsl(var(--pricing-accent-text))' }} />
                    <span style={{ color: 'hsl(var(--pricing-main-text))' }}>Děti do 15 let</span>
                  </div>
                  <span className="text-2xl font-semibold" style={{ color: 'hsl(var(--pricing-accent-text))' }}>150 Kč</span>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4" style={{ color: 'hsl(var(--pricing-accent-text))' }} />
                    <span style={{ color: 'hsl(var(--pricing-main-text))' }}>Časově neomezený</span>
                  </div>
                  <span className="text-2xl font-semibold" style={{ color: 'hsl(var(--pricing-accent-text))' }}>350 Kč</span>
                </div>
              </CardContent>
            </Card>

            {/* Permanentky - Featured */}
            <Card className="group relative bg-gradient-to-br from-amber-900 to-amber-950 shadow-warm transition-all duration-500 rounded-[24px] border-0 overflow-hidden hover:scale-[1.02] hover:-translate-y-1 lg:scale-105 lg:-translate-y-2">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-[28px] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              
              {/* Popular badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-amber-400 text-amber-950 text-xs font-bold rounded-full flex items-center gap-1 z-10">
                <Sparkles className="w-3 h-3" />
                Nejoblíbenější
              </div>
              
              <CardHeader className="relative pt-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 bg-amber-400/20 rounded-xl">
                    <Ticket className="w-5 h-5 text-amber-300" />
                  </div>
                  <CardTitle className="text-2xl font-medium text-amber-100">Permanentky</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-5 relative">
                <div className="flex items-center justify-between py-3 border-b border-amber-800/50">
                  <span className="text-amber-200">10 vstupů</span>
                  <div className="text-right">
                    <span className="text-2xl font-semibold text-amber-300">2 300 Kč</span>
                    <span className="block text-xs text-amber-400/70">Ušetříte 200 Kč</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-amber-800/50">
                  <span className="text-amber-200">20 vstupů</span>
                  <div className="text-right">
                    <span className="text-2xl font-semibold text-amber-300">4 200 Kč</span>
                    <span className="block text-xs text-amber-400/70">Ušetříte 800 Kč</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 pt-4">
                  <Heart className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" />
                  <p className="text-sm text-amber-200/80">
                    Permanentky jsou přenosné – sdílejte je s rodinou nebo přáteli.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dárkové poukazy */}
            <Card className="group bg-white/90 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-500 rounded-[24px] border-0 overflow-hidden hover:scale-[1.02] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 bg-gradient-to-br from-rose-100 to-amber-50 rounded-xl shadow-sm">
                    <Gift className="w-5 h-5" style={{ color: 'hsl(var(--pricing-heading))' }} />
                  </div>
                  <CardTitle className="text-2xl font-medium" style={{ color: 'hsl(var(--pricing-heading))' }}>Dárkové poukazy</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-5 relative">
                <p className="text-base leading-relaxed" style={{ color: 'hsl(var(--pricing-main-text))' }}>
                  Darujte svým blízkým zážitek plný relaxace a pohody.
                </p>
                
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 py-2.5 px-4 bg-amber-50/80 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-sm font-medium" style={{ color: 'hsl(var(--pricing-main-text))' }}>Na saunu</span>
                  </div>
                  <div className="flex items-center gap-3 py-2.5 px-4 bg-rose-50/80 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="text-sm font-medium" style={{ color: 'hsl(var(--pricing-main-text))' }}>Na masáže</span>
                  </div>
                  <div className="flex items-center gap-3 py-2.5 px-4 bg-gradient-to-r from-amber-50/80 to-rose-50/80 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-rose-400" />
                    <span className="text-sm font-medium" style={{ color: 'hsl(var(--pricing-main-text))' }}>Kombinované balíčky</span>
                  </div>
                </div>
                
                <p className="text-sm pt-2" style={{ color: 'hsl(var(--pricing-accent-text))' }}>
                  Poukazy jsou dostupné na všechny naše služby.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
