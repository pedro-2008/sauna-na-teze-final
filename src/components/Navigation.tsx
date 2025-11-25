import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const textColor = isScrolled ? 'hsl(var(--nav-text))' : 'hsl(0 0% 100%)';
  const hoverColor = isScrolled ? 'hsl(var(--nav-hover))' : 'hsl(0 0% 85%)';

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
      style={{ 
        backgroundColor: isScrolled ? 'hsl(var(--nav-bg))' : 'transparent',
        boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.05)' : 'none',
        backdropFilter: isScrolled ? 'none' : 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-light transition-all duration-300"
            style={{ color: textColor }}
          >
            Sauna Na Teze
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(0, -1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-medium transition-all duration-300"
                style={{ color: textColor }}
                onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
                onMouseLeave={(e) => e.currentTarget.style.color = textColor}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="font-medium px-6 py-2 rounded-md transition-all duration-300"
              style={{ 
                backgroundColor: isScrolled ? 'hsl(var(--nav-button-bg))' : 'rgba(255, 255, 255, 0.2)',
                color: isScrolled ? 'hsl(var(--nav-button-text))' : 'hsl(0 0% 100%)',
                border: isScrolled ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isScrolled ? 'hsl(var(--nav-button-hover))' : 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isScrolled ? 'hsl(var(--nav-button-bg))' : 'rgba(255, 255, 255, 0.2)';
              }}
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: textColor }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden mt-4 pb-4 space-y-3 rounded-lg px-4 py-2"
            style={{
              backgroundColor: isScrolled ? 'transparent' : 'rgba(0, 0, 0, 0.3)',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 font-medium transition-all duration-300"
                style={{ color: textColor }}
                onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
                onMouseLeave={(e) => e.currentTarget.style.color = textColor}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};