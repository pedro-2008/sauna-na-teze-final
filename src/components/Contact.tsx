import { Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { WaveDivider } from "@/components/WaveDivider";

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return <section ref={ref} className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full">
        <WaveDivider />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Kontakt a rezervace
          </h2>
          <p className="text-lg text-muted-foreground">
            Těšíme se na vaši návštěvu v Sauna Na Teze
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className={`border-0 shadow-soft hover:shadow-warm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95'
          }`}>
            <CardHeader>
              <CardTitle className="text-xl text-wood-deep">Otevírací doba – listopad 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-[1fr,auto,auto] gap-y-4 gap-x-6 items-center">
                <span className="text-muted-foreground">Pondělí</span>
                <span className="text-primary font-medium">Zavřeno</span>
                <span></span>
                
                <span className="text-muted-foreground">Úterý</span>
                <span className="text-primary font-medium">16:00 - 21:00</span>
                <span className="text-sm text-muted-foreground">muži</span>
                
                <span className="text-muted-foreground">Středa</span>
                <span className="text-primary font-medium">16:00 - 21:00</span>
                <span className="text-sm text-muted-foreground">ženy</span>
                
                <span className="text-muted-foreground">Čtvrtek</span>
                <span className="text-primary font-medium">16:00 - 21:00</span>
                <span className="text-sm text-muted-foreground">společná</span>
                
                <span className="text-muted-foreground">Pátek</span>
                <span className="text-primary font-medium">16:00 - 21:00</span>
                <span className="text-sm text-muted-foreground">společná</span>
                
                <span className="text-muted-foreground">Sobota</span>
                <span className="text-primary font-medium">15:00 - 20:00</span>
                <span className="text-sm text-muted-foreground">společná</span>
                
                <span className="text-muted-foreground">Neděle</span>
                <span className="text-primary font-medium">15:00 - 20:00</span>
                <span className="text-sm text-muted-foreground">společná</span>
              </div>
            </CardContent>
          </Card>

          <Card className={`border-0 shadow-soft hover:shadow-warm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'
          }`}
          style={{ transitionDelay: '200ms' }}
          >
            <CardHeader>
              <CardTitle className="text-xl text-wood-deep">Kde nás najdete</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-1">Adresa</p>
                  <p className="text-primary font-medium">Lipová alej 4110/23, Hodonín</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-1">Telefon</p>
                  <p className="text-primary font-medium">+420 737 443 674</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-1">Email</p>
                  <p className="text-primary font-medium">janasportmasaz@seznam.cz</p>
                </div>
              </div>
              <div className="pt-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61582524922922" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="font-semibold text-lg">Navštivte nás na Facebooku</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};