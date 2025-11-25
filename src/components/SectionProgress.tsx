import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Úvod" },
  { id: "about", label: "O nás" },
  { id: "gallery", label: "Galerie" },
  { id: "services", label: "Služby" },
  { id: "pricing", label: "Ceník" },
  { id: "contact", label: "Kontakt" },
];

export const SectionProgress = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show progress bar after scrolling past hero
      setIsVisible(window.scrollY > 100);

      // Find active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {sections.map((section, index) => {
        const isActive = activeSection === section.id;
        const activeIndex = sections.findIndex((s) => s.id === activeSection);
        const isPast = index < activeIndex;

        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center"
            aria-label={`Přejít na sekci ${section.label}`}
          >
            {/* Connecting line */}
            {index < sections.length - 1 && (
              <div
                className={`absolute left-1/2 top-full h-3 w-[2px] -translate-x-1/2 transition-colors duration-300 ${
                  isPast ? "bg-primary" : "bg-border"
                }`}
              />
            )}

            {/* Circle */}
            <div
              className={`relative w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                isActive
                  ? "bg-primary border-primary scale-125"
                  : isPast
                  ? "bg-primary/60 border-primary/60"
                  : "bg-transparent border-muted-foreground/40 hover:border-primary/60"
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              )}
            </div>

            {/* Label on hover */}
            <span
              className={`absolute left-6 whitespace-nowrap text-sm font-medium px-2 py-1 rounded bg-card/90 backdrop-blur-sm shadow-sm border border-border/50 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ${
                isActive ? "text-primary" : "text-foreground"
              }`}
            >
              {section.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
