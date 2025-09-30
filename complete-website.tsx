import React from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import heroImage from "@/assets/sauna-hero.jpg";

// Hero Component
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Sauna Na Teze
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
          Autentická finská sauna v srdci Hodonína
        </p>
        <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
          Objevte sílu tradičního finského saunování v našem moderním wellness centru. 
          Relaxace, regenerace a pohoda pro tělo i duši.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => {
              toast({
                title: "Rezervace",
                description: "Pro rezervaci volejte +420 123 456 789 nebo navštivte sekci Kontakt",
              });
            }}
          >
            Rezervace
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary"
            onClick={() => {
              const aboutSection = document.querySelector('#about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Více informací
          </Button>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  const benefits = [
    "Zlepšení krevního oběhu",
    "Detoxikace organismu", 
    "Snížení stresu a napětí",
    "Posílení imunitního systému",
    "Zlepšení kvality spánku",
    "Uvolnění svalů po sportě"
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-primary">
              Finská tradice v moderním pojetí
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Naše sauna kombinuje autentickou finskou tradici s moderním komfortem. 
              V klidném prostředí můžete relaxovat, regenerovat tělo a načerpat novou energii.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Věříme v sílu saunování jako způsobu života. Každá návštěva je rituálem 
              očisty těla i mysli, který vám pomůže najít rovnováhu v hektickém světě.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-light text-accent mb-2">80-90°C</div>
                <div className="text-sm text-muted-foreground">Ideální teplota</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-light text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Přírodní dřevo</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-8 text-wood-deep">Zdravotní benefity</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-soft">
                  <div className="w-2 h-2 rounded-full bg-accent mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      title: "Finská sauna",
      description: "Tradiční finská sauna s teplotou 80-90°C. Ideální pro regeneraci a relaxaci.",
      features: ["Severské dřevo", "Kamna na dřevo", "Kapacita 8 osob"]
    },
    {
      title: "Odpočívárna",
      description: "Klidný prostor pro relaxaci mezi saunovými sezeními s občerstvením.",
      features: ["Pohodlné lehátka", "Čerstvé ovoce", "Bylinné čaje"]
    },
    {
      title: "Venkovní terasa",
      description: "Prostor pro ochlazení a odpočinek na čerstvém vzduchu.",
      features: ["Dřevěná terasa", "Zahradní sprcha", "Posezení"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Naše služby
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kompletní saunový zážitek s veškerým komfortem pro vaši pohodu
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-wood-deep">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  return (
    <section className="py-24 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Kontakt a rezervace
          </h2>
          <p className="text-lg text-muted-foreground">
            Těšíme se na vaši návštěvu v Sauna Na Teze
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl text-wood-deep">Otevírací doba</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pondělí - Pátek</span>
                <span className="text-primary font-medium">15:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sobota - Neděle</span>
                <span className="text-primary font-medium">10:00 - 22:00</span>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Rezervace doporučujeme předem telefonicky nebo online
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl text-wood-deep">Kde nás najdete</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-muted-foreground mb-1">Adresa</p>
                <p className="text-primary font-medium">Na Teze 123, Hodonín</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Telefon</p>
                <p className="text-primary font-medium">+420 123 456 789</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Email</p>
                <p className="text-primary font-medium">info@saunanateze.cz</p>
              </div>
              <div className="pt-4">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => {
                    window.open('tel:+420123456789', '_self');
                  }}
                >
                  Rezervovat nyní
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-soft">
          <h3 className="text-2xl font-medium mb-4 text-wood-deep">Ceník</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-light text-accent mb-2">150 Kč</div>
              <div className="text-sm text-muted-foreground">1 hodina</div>
            </div>
            <div>
              <div className="text-3xl font-light text-accent mb-2">250 Kč</div>
              <div className="text-sm text-muted-foreground">2 hodiny</div>
            </div>
            <div>
              <div className="text-3xl font-light text-accent mb-2">400 Kč</div>
              <div className="text-sm text-muted-foreground">Celý den</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Index Page
const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

// NotFound Component
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

// Main App Component
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Render the App
createRoot(document.getElementById("root")!).render(<App />);

export default App;

/* 
=== CSS STYLES (src/index.css) ===

@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

@layer base {
  :root {
    /* Base colors */
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    
    /* Primary - Nordic forest green */
    --primary: 152 30% 25%;
    --primary-foreground: 0 0% 98%;
    
    /* Secondary - Warm wood tone */
    --secondary: 28 25% 88%;
    --secondary-foreground: 0 0% 9%;
    
    /* Muted - Subtle gray */
    --muted: 210 20% 95%;
    --muted-foreground: 215 16% 47%;
    
    /* Accent - Warm copper */
    --accent: 15 35% 65%;
    --accent-foreground: 0 0% 9%;
    
    /* Destructive */
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    
    /* Border colors */
    --border: 214 32% 91%;
    --input: 214 32% 91%;
    --ring: 152 30% 25%;
    
    /* Nordic sauna theme colors */
    --wood-light: 28 40% 85%;
    --wood-medium: 28 35% 70%;
    --wood-deep: 25 30% 35%;
    --nordic-frost: 200 25% 95%;
    --sauna-heat: 15 50% 75%;
    
    /* Gradients */
    --gradient-hero: linear-gradient(135deg, hsl(152 30% 25% / 0.9), hsl(25 30% 35% / 0.8));
    --gradient-soft: linear-gradient(180deg, hsl(210 20% 98%), hsl(210 20% 95%));
    
    /* Shadows */
    --shadow-soft: 0 2px 10px -2px hsl(152 30% 25% / 0.1);
    --shadow-warm: 0 8px 25px -8px hsl(15 35% 65% / 0.3);
    
    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 152 30% 40%;
    --primary-foreground: 0 0% 9%;
    --secondary: 28 25% 15%;
    --secondary-foreground: 0 0% 98%;
    --muted: 217 32% 17%;
    --muted-foreground: 215 20% 65%;
    --accent: 15 35% 55%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62% 30%;
    --destructive-foreground: 0 0% 98%;
    --border: 217 32% 17%;
    --input: 217 32% 17%;
    --ring: 152 30% 40%;
    
    --wood-light: 28 30% 25%;
    --wood-medium: 28 25% 35%;
    --wood-deep: 25 30% 70%;
    --nordic-frost: 200 25% 15%;
    --sauna-heat: 15 40% 45%;
    
    --gradient-hero: linear-gradient(135deg, hsl(152 30% 15% / 0.9), hsl(25 30% 20% / 0.8));
    --gradient-soft: linear-gradient(180deg, hsl(217 32% 8%), hsl(217 32% 12%));
    
    --shadow-soft: 0 2px 10px -2px hsl(0 0% 0% / 0.3);
    --shadow-warm: 0 8px 25px -8px hsl(15 35% 35% / 0.4);
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

=== TAILWIND CONFIG (tailwind.config.ts) ===

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Nordic sauna theme
        wood: {
          light: "hsl(var(--wood-light))",
          medium: "hsl(var(--wood-medium))",
          deep: "hsl(var(--wood-deep))",
        },
        nordic: {
          frost: "hsl(var(--nordic-frost))",
        },
        sauna: {
          heat: "hsl(var(--sauna-heat))",
        },
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-soft': 'var(--gradient-soft)',
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'warm': 'var(--shadow-warm)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

=== HTML (index.html) ===

<!doctype html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sauna Na Teze | Finská sauna v Hodoníně</title>
    <meta name="description" content="Autentická finská sauna v srdci Hodonína. Relaxace, regenerace a pohoda pro tělo i duši. Rezervujte si návštěvu ještě dnes!" />
    <meta name="keywords" content="sauna, finská sauna, Hodonín, wellness, relaxace, regenerace" />
    <meta property="og:title" content="Sauna Na Teze | Finská sauna v Hodoníně" />
    <meta property="og:description" content="Autentická finská sauna v srdci Hodonína. Relaxace, regenerace a pohoda pro tělo i duši." />
    <meta property="og:type" content="website" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://saunanateze.cz" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

*/