import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Úvod", id: "hero" },
    { label: "O nás", id: "about" },
    { label: "Služby", id: "services" },
    { label: "Ceník", id: "pricing" },
    { label: "Kontakt", id: "contact" },
  ];

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <nav 
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-nav-bg/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent backdrop-blur-sm'
        }`}
      >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className={`text-2xl font-light transition-all duration-300 ${
              isScrolled ? 'text-nav-text' : 'text-white'
            }`}
          >
            Sauna Na Teze
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(0, -1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:opacity-80 ${
                  isScrolled ? 'text-nav-text' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-medium px-6 py-2 rounded-md transition-all duration-300 ${
                isScrolled 
                  ? 'bg-nav-button-bg text-nav-button-text hover:bg-nav-button-hover' 
                  : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-nav-text' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-3 ${
            isScrolled ? '' : 'bg-black/20 backdrop-blur-md rounded-lg p-4 -mx-2'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-nav-text hover:text-nav-hover' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
      </nav>
    </>
  );
};
