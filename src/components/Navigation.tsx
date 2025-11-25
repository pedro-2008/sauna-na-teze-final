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

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "backdrop-blur-sm" 
          : ""
      }`}
      style={{ 
        backgroundColor: isScrolled ? 'hsl(var(--nav-bg))' : 'transparent',
        boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-light transition-all duration-300"
            style={{ 
              color: isScrolled ? 'hsl(var(--nav-text))' : 'hsl(var(--hero-heading))',
              textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)'
            }}
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
                style={{ 
                  color: isScrolled ? 'hsl(var(--nav-text))' : 'hsl(var(--hero-heading))',
                  textShadow: isScrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = isScrolled ? 'hsl(var(--nav-hover))' : 'hsl(var(--secondary))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isScrolled ? 'hsl(var(--nav-text))' : 'hsl(var(--hero-heading))';
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="font-medium px-6 py-2 rounded-md transition-all duration-300"
              style={{ 
                backgroundColor: isScrolled ? 'hsl(var(--nav-button-bg))' : 'hsla(0, 0%, 100%, 0.15)',
                color: isScrolled ? 'hsl(var(--nav-button-text))' : 'hsl(var(--hero-heading))',
                backdropFilter: isScrolled ? 'none' : 'blur(8px)',
                border: isScrolled ? 'none' : '1px solid hsla(0, 0%, 100%, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isScrolled ? 'hsl(var(--nav-button-hover))' : 'hsla(0, 0%, 100%, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isScrolled ? 'hsl(var(--nav-button-bg))' : 'hsla(0, 0%, 100%, 0.15)';
              }}
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ 
              color: isScrolled ? 'hsl(var(--nav-text))' : 'hsl(var(--hero-heading))',
              textShadow: isScrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.3)'
            }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden mt-4 pb-4 space-y-3 rounded-lg px-4 py-2"
            style={{
              backgroundColor: isScrolled ? 'transparent' : 'hsla(0, 0%, 0%, 0.3)',
              backdropFilter: isScrolled ? 'none' : 'blur(8px)'
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 font-medium transition-all duration-300"
                style={{ 
                  color: isScrolled ? 'hsl(var(--nav-text))' : 'hsl(var(--hero-heading))'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = isScrolled ? 'hsl(var(--nav-hover))' : 'hsl(var(--secondary))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isScrolled ? 'hsl(var(--nav-text))' : 'hsl(var(--hero-heading))';
                }}
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
