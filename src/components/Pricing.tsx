import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Baby, Clock, Ticket, Heart, Gift, ArrowRight } from "lucide-react";
export const Pricing = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="pricing" ref={ref} className="py-24 px-6 relative bg-gradient-pricing texture-noise">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center" style={{
          color: 'hsl(var(--pricing-heading))'
        }}>
            Ceník – Finská sauna
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Jednorázový vstup */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-300 rounded-[20px]">
              <CardHeader>
                <CardTitle className="text-2xl" style={{
                color: 'hsl(var(--pricing-heading))'
              }}>Jednorázový vstup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5" style={{
                    color: 'hsl(var(--pricing-heading))'
                  }} />
                    <span style={{
                    color: 'hsl(var(--pricing-main-text))'
                  }}>1 osoba / 2 hodiny</span>
                  </div>
                  <span className="text-3xl font-semibold" style={{
                  color: 'hsl(var(--pricing-accent-text))'
                }}>250 Kč</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Baby className="w-5 h-5" style={{
                    color: 'hsl(var(--pricing-heading))'
                  }} />
                    <span style={{
                    color: 'hsl(var(--pricing-main-text))'
                  }}>Děti do 15 let</span>
                  </div>
                  <span className="text-3xl font-semibold" style={{
                  color: 'hsl(var(--pricing-accent-text))'
                }}>150 Kč</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" style={{
                    color: 'hsl(var(--pricing-heading))'
                  }} />
                    <span style={{
                    color: 'hsl(var(--pricing-main-text))'
                  }}>Časově neomezený vstup</span>
                  </div>
                  <span className="text-3xl font-semibold" style={{
                  color: 'hsl(var(--pricing-accent-text))'
                }}>350 Kč</span>
                </div>
              </CardContent>
            </Card>

            {/* Permanentky */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-300 rounded-[20px]">
              <CardHeader>
                <CardTitle className="text-2xl" style={{
                color: 'hsl(var(--pricing-heading))'
              }}>Permanentky</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Ticket className="w-5 h-5" style={{
                    color: 'hsl(var(--pricing-heading))'
                  }} />
                    <span style={{
                    color: 'hsl(var(--pricing-main-text))'
                  }}>10 vstupů</span>
                  </div>
                  <span className="text-3xl font-semibold" style={{
                  color: 'hsl(var(--pricing-accent-text))'
                }}>2300 Kč</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Ticket className="w-5 h-5" style={{
                    color: 'hsl(var(--pricing-heading))'
                  }} />
                    <span style={{
                    color: 'hsl(var(--pricing-main-text))'
                  }}>20 vstupů</span>
                  </div>
                  <span className="text-3xl font-semibold" style={{
                  color: 'hsl(var(--pricing-accent-text))'
                }}>4200 Kč</span>
                </div>
                
                <div className="flex items-start gap-3 pt-4 border-t border-wood-light/20">
                  <Heart className="w-5 h-5 mt-0.5 flex-shrink-0" style={{
                  color: 'hsl(var(--pricing-accent-text))'
                }} />
                  <p className="text-sm" style={{
                  color: 'hsl(var(--pricing-main-text))'
                }}>
                    Permanentky jsou přenosné – můžete je sdílet s rodinou nebo přáteli.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dárkové poukazy */}
          <Card className="mt-8 bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-300 rounded-[20px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1" style={{
            backgroundColor: 'hsl(var(--pricing-accent-text))'
          }} />
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="p-4 rounded-2xl" style={{
                backgroundColor: 'hsl(var(--pricing-accent-text) / 0.1)'
              }}>
                  <Gift className="w-10 h-10" style={{
                  color: 'hsl(var(--pricing-accent-text))'
                }} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2" style={{
                  color: 'hsl(var(--pricing-heading))'
                }}>
                    Dárkové poukazy
                  </h3>
                  <p className="mb-4" style={{
                  color: 'hsl(var(--pricing-main-text))'
                }}>
                    Darujte svým blízkým zážitek plný relaxace a pohody. Dárkové poukazy nabízíme v libovolné hodnotě.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 rounded-full text-sm border" style={{
                    borderColor: 'hsl(var(--pricing-accent-text) / 0.3)',
                    color: 'hsl(var(--pricing-main-text))'
                  }}>
                      Na saunu
                    </span>
                    <span className="px-4 py-1.5 rounded-full text-sm border" style={{
                    borderColor: 'hsl(var(--pricing-accent-text) / 0.3)',
                    color: 'hsl(var(--pricing-main-text))'
                  }}>
                      Na masáže
                    </span>
                    <span className="px-4 py-1.5 rounded-full text-sm border" style={{
                    borderColor: 'hsl(var(--pricing-accent-text) / 0.3)',
                    color: 'hsl(var(--pricing-main-text))'
                  }}>
                      Kombinované
                    </span>
                  </div>
                </div>
                
                
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};