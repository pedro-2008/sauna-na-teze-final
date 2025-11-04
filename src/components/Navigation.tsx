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
      className="fixed top-0 left-0 right-0 z-50" 
      style={{ 
        backgroundColor: 'hsl(var(--nav-bg))',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-light transition-[color]"
            style={{ 
              color: 'hsl(var(--nav-text))',
              transitionDuration: '0.2s',
              transitionTimingFunction: 'ease'
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
                className="font-medium transition-[color]"
                style={{ 
                  color: 'hsl(var(--nav-text))',
                  transitionDuration: '0.2s',
                  transitionTimingFunction: 'ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--nav-hover))'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--nav-text))'}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="font-medium px-6 py-2 rounded-md transition-[background-color]"
              style={{ 
                backgroundColor: 'hsl(var(--nav-button-bg))',
                color: 'hsl(var(--nav-button-text))',
                transitionDuration: '0.2s',
                transitionTimingFunction: 'ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--nav-button-hover))'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--nav-button-bg))'}
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
            style={{ color: 'hsl(var(--nav-text))' }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 font-medium transition-[color]"
                style={{ 
                  color: 'hsl(var(--nav-text))',
                  transitionDuration: '0.2s',
                  transitionTimingFunction: 'ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--nav-hover))'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--nav-text))'}
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
