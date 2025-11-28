import { Facebook, Heart, Flame } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden py-20" style={{ backgroundColor: 'hsl(25 40% 12%)' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
              <Flame className="w-6 h-6" style={{ color: '#DAA553' }} />
            </div>
            <span className="text-3xl font-light text-white" style={{ fontFamily: 'serif' }}>
              Sauna Na Teze
            </span>
          </div>
          
          {/* Description */}
          <p className="text-white/60 text-center mb-12 max-w-xl font-light text-base leading-relaxed">
            Autentická finská sauna v srdci Hodonína. Relaxace, regenerace a pohoda pro tělo i duši.
          </p>
          
          {/* Facebook Button */}
          <div className="mb-12">
            <a 
              href="https://www.facebook.com/profile.php?id=61582524922922" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 bg-transparent hover:bg-white/5 text-white rounded-full transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              <Facebook className="w-5 h-5" />
              <span className="font-normal">Facebook</span>
            </a>
          </div>
          
          {/* Decorative Divider */}
          <div className="relative flex items-center gap-4 w-full max-w-md mb-10">
            <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(218, 165, 83, 0.3))' }} />
            <div className="w-2 h-2 rotate-45 border" style={{ borderColor: 'rgba(218, 165, 83, 0.6)' }} />
            <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(to left, transparent, rgba(218, 165, 83, 0.3))' }} />
          </div>
          
          {/* Copyright */}
          <p className="text-white/40 text-sm flex items-center gap-2 justify-center">
            © {currentYear} Sauna Na Teze. Vytvořeno s 
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            v Hodoníně.
          </p>
        </div>
      </div>
    </footer>
  );
};