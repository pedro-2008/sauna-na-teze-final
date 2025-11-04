import { Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: '#3C2410' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <a 
            href="https://www.facebook.com/profile.php?id=61582524922922" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Facebook className="w-5 h-5" />
            <span className="font-semibold">Navštivte nás na Facebooku</span>
          </a>
          <div className="text-center text-white/80">
            <p>© 2025 Sauna Na Teze. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
