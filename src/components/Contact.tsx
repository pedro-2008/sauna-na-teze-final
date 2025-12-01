import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return <section id="contact" ref={ref} className="py-24 px-6 bg-gradient-contact relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-radial from-wood-accent/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-radial from-cream/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ color: 'hsl(var(--contact-heading))' }}>
            Kontakt a rezervace
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-transparent via-wood-accent to-transparent" />
          <p className="text-lg" style={{ color: 'hsl(var(--contact-main-text))' }}>
            Těšíme se na vaši návštěvu
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
            <Card 
            className={`group shadow-soft hover:shadow-warm transition-all duration-1000 hover:scale-105 hover:-translate-y-2 rounded-[24px] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              backgroundColor: 'hsl(var(--contact-card-bg))',
              borderColor: 'hsl(var(--contact-card-border))',
              borderWidth: '1px'
            }}
          >
            <CardHeader>
              <CardTitle className="text-xl" style={{ color: 'hsl(var(--contact-card-heading))' }}>Otevírací doba – listopad 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-[1fr,auto,auto] gap-y-4 gap-x-6 items-center">
                <span style={{ color: 'hsl(var(--contact-card-secondary))' }}>Pondělí</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-card-text))' }}>Zavřeno</span>
                <span></span>
                
                <span style={{ color: 'hsl(var(--contact-card-secondary))' }}>Úterý</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-card-text))' }}>16:00 - 21:00</span>
                <span className="text-sm" style={{ color: 'hsl(var(--contact-card-secondary))' }}>muži</span>
                
                <span style={{ color: 'hsl(var(--contact-card-secondary))' }}>Středa</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-card-text))' }}>16:00 - 21:00</span>
                <span className="text-sm" style={{ color: 'hsl(var(--contact-card-secondary))' }}>ženy</span>
                
                <span style={{ color: 'hsl(var(--contact-card-secondary))' }}>Čtvrtek</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-card-text))' }}>16:00 - 21:00</span>
                <span className="text-sm" style={{ color: 'hsl(var(--contact-card-secondary))' }}>společná</span>
                
                <span style={{ color: 'hsl(var(--contact-card-secondary))' }}>Pátek</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-card-text))' }}>16:00 - 21:00</span>
                <span className="text-sm" style={{ color: 'hsl(var(--contact-card-secondary))' }}>společná</span>
                
                <span style={{ color: 'hsl(var(--contact-card-secondary))' }}>Sobota</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-card-text))' }}>15:00 - 20:00</span>
                <span className="text-sm" style={{ color: 'hsl(var(--contact-card-secondary))' }}>společná</span>
                
                <span style={{ color: 'hsl(var(--contact-card-secondary))' }}>Neděle</span>
                <span className="font-medium" style={{ color: 'hsl(var(--contact-card-text))' }}>15:00 - 20:00</span>
                <span className="text-sm" style={{ color: 'hsl(var(--contact-card-secondary))' }}>společná</span>
              </div>
            </CardContent>
          </Card>

          <Card 
            className={`group shadow-soft hover:shadow-warm transition-all duration-1000 hover:scale-105 hover:-translate-y-2 rounded-[24px] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              backgroundColor: 'hsl(var(--contact-card-bg))',
              borderColor: 'hsl(var(--contact-card-border))',
              borderWidth: '1px',
              transitionDelay: '200ms'
            }}
          >
            <CardHeader>
              <CardTitle className="text-xl" style={{ color: 'hsl(var(--contact-card-heading))' }}>Kde nás najdete</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'hsl(var(--contact-card-accent))' }} />
                <div>
                  <p className="mb-1" style={{ color: 'hsl(var(--contact-card-secondary))' }}>Adresa</p>
                  <p className="font-medium" style={{ color: 'hsl(var(--contact-card-accent))' }}>Lipová alej 4110/23, Hodonín</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'hsl(var(--contact-card-accent))' }} />
                <div>
                  <p className="mb-1" style={{ color: 'hsl(var(--contact-card-secondary))' }}>Telefon</p>
                  <p className="font-medium" style={{ color: 'hsl(var(--contact-card-accent))' }}>+420 737 443 674</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'hsl(var(--contact-card-accent))' }} />
                <div>
                  <p className="mb-1" style={{ color: 'hsl(var(--contact-card-secondary))' }}>Email</p>
                  <p className="font-medium" style={{ color: 'hsl(var(--contact-card-accent))' }}>janasportmasaz@seznam.cz</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div 
          className={`mt-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <Card 
            className="group shadow-soft hover:shadow-warm transition-all duration-700 hover:scale-[1.02] rounded-[24px] overflow-hidden"
            style={{ 
              backgroundColor: 'hsl(var(--contact-card-bg))',
              borderColor: 'hsl(var(--contact-card-border))',
              borderWidth: '1px'
            }}
          >
            <CardHeader>
              <CardTitle className="text-xl" style={{ color: 'hsl(var(--contact-card-heading))' }}>Mapa</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.8234567890123!2d17.1234567890123!3d48.8523456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d0a123456789a%3A0x123456789abcdef0!2sLipov%C3%A1%20alej%204110%2F23%2C%20695%2001%20Hodon%C3%ADn!5e0!3m2!1scs!2scz!4v1234567890123!5m2!1scs!2scz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Sauna Na Teze"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};