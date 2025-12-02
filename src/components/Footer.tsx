import { Facebook, Heart, MapPin, Phone, Mail, Sparkles } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: 'hsl(25 40% 10%)' }}>
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
      
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-amber-400/10 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand column */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="font-display text-2xl font-medium text-white">
                Sauna Na Teze
              </span>
            </div>
            <p className="text-white/50 font-light leading-relaxed">
              Autentická finská sauna v srdci Hodonína. Relaxace, regenerace a pohoda pro tělo i duši.
            </p>
          </div>
          
          {/* Quick contact */}
          <div className="text-center">
            <h4 className="text-amber-300 font-medium mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a href="tel:+420737443674" className="flex items-center justify-center gap-2 text-white/60 hover:text-amber-300 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+420 737 443 674</span>
              </a>
              <a href="mailto:janasportmasaz@seznam.cz" className="flex items-center justify-center gap-2 text-white/60 hover:text-amber-300 transition-colors">
                <Mail className="w-4 h-4" />
                <span>janasportmasaz@seznam.cz</span>
              </a>
            </div>
          </div>
          
          {/* Address & Social */}
          <div className="text-center md:text-right">
            <h4 className="text-amber-300 font-medium mb-4">Kde nás najdete</h4>
            <div className="flex items-center justify-center md:justify-end gap-2 text-white/60 mb-6">
              <MapPin className="w-4 h-4" />
              <span>Lipová alej 4110/23, Hodonín</span>
            </div>
            <a 
              href="https://www.facebook.com/profile.php?id=61582524922922" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1877F2]/10 hover:bg-[#1877F2] text-white rounded-full transition-all duration-300 hover:scale-105 border border-[#1877F2]/30 hover:border-[#1877F2]"
            >
              <Facebook className="w-4 h-4" />
              <span className="text-sm font-medium">Facebook</span>
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-md mx-auto mb-8">
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, hsl(39 68% 58% / 0.2))' }} />
          <div className="w-2 h-2 rotate-45 border border-amber-400/30" />
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(to left, transparent, hsl(39 68% 58% / 0.2))' }} />
        </div>
        
        <p className="text-white/40 text-sm flex items-center gap-2 justify-center">
          © {currentYear} Sauna Na Teze. Vytvořeno s 
          <Heart className="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" />
          v Hodoníně.
        </p>
      </div>
      
      {/* Bottom golden glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-40 blur-[120px] pointer-events-none"
        style={{ backgroundColor: 'hsl(39 68% 50% / 0.08)' }}
      />
    </footer>
  );
};
