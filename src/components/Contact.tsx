import { Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return <section id="contact" ref={ref} className="py-24 px-6 bg-gradient-contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ color: 'hsl(var(--contact-heading))' }}>
            Kontakt a rezervace
          </h2>
          <p className="text-lg" style={{ color: 'hsl(var(--contact-main-text))' }}>
            Těšíme se na vaši návštěvu v Sauna Na Teze
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className={`border-0 bg-white/90 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CardHeader>
              <CardTitle className="text-xl" style={{ color: 'hsl(var(--contact-heading))' }}>Otevírací doba – listopad 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-[1fr,auto,auto] gap-y-4 gap-x-6 items-center">
                <span style={{ color: 'hsl(var(--contact-secondary-text))' }}>Pondělí</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-main-text))' }}>Zavřeno</span>
                <span></span>
                
                <span style={{ color: 'hsl(var(--contact-secondary-text))' }}>Úterý</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-main-text))' }}>16:00 - 21:00</span>
                <span className="text-sm" style={{ color: 'hsl(var(--contact-secondary-text))' }}>muži</span>
                
                <span style={{ color: 'hsl(var(--contact-secondary-text))' }}>Středa</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-main-text))' }}>16:00 - 21:00</span>
                <span className="text-sm" style={{ color: 'hsl(var(--contact-secondary-text))' }}>ženy</span>
                
                <span style={{ color: 'hsl(var(--contact-secondary-text))' }}>Čtvrtek</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-main-text))' }}>16:00 - 21:00</span>
                <span className="text-sm" style={{ color: 'hsl(var(--contact-secondary-text))' }}>společná</span>
                
                <span style={{ color: 'hsl(var(--contact-secondary-text))' }}>Pátek</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-main-text))' }}>16:00 - 21:00</span>
                <span className="text-sm" style={{ color: 'hsl(var(--contact-secondary-text))' }}>společná</span>
                
                <span style={{ color: 'hsl(var(--contact-secondary-text))' }}>Sobota</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-main-text))' }}>15:00 - 20:00</span>
                <span className="text-sm" style={{ color: 'hsl(var(--contact-secondary-text))' }}>společná</span>
                
                <span style={{ color: 'hsl(var(--contact-secondary-text))' }}>Neděle</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-main-text))' }}>15:00 - 20:00</span>
                <span className="text-sm" style={{ color: 'hsl(var(--contact-secondary-text))' }}>společná</span>
              </div>
            </CardContent>
          </Card>

          <Card className={`border-0 bg-white/90 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
          >
            <CardHeader>
              <CardTitle className="text-xl" style={{ color: 'hsl(var(--contact-heading))' }}>Kde nás najdete</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'hsl(var(--contact-icon))' }} />
                <div>
                  <p className="mb-1" style={{ color: 'hsl(var(--contact-secondary-text))' }}>Adresa</p>
                  <p className="font-medium" style={{ color: 'hsl(var(--contact-accent))' }}>Lipová alej 4110/23, Hodonín</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'hsl(var(--contact-icon))' }} />
                <div>
                  <p className="mb-1" style={{ color: 'hsl(var(--contact-secondary-text))' }}>Telefon</p>
                  <p className="font-medium" style={{ color: 'hsl(var(--contact-accent))' }}>+420 737 443 674</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'hsl(var(--contact-icon))' }} />
                <div>
                  <p className="mb-1" style={{ color: 'hsl(var(--contact-secondary-text))' }}>Email</p>
                  <p className="font-medium" style={{ color: 'hsl(var(--contact-accent))' }}>janasportmasaz@seznam.cz</p>
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