import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return <section id="about" ref={ref} className="py-24 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Steam effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 left-1/4 w-48 h-96 bg-stone-grey/30 rounded-full blur-3xl animate-steam-rise" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-0 left-1/2 w-40 h-80 bg-stone-grey/25 rounded-full blur-3xl animate-steam-rise" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 right-1/3 w-44 h-88 bg-stone-grey/28 rounded-full blur-3xl animate-steam-rise" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95'
          }`}>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-primary">
              Finská tradice
            </h2>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Sauna Na Teze přináší autentický finský zážitek do Hodonína. 
              Naše sauna je postavena podle tradičních finských postupů 
              s použitím kvalitního severského dřeva.
            </p>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">Věříme v sílu saunování jako cesty k fyzické i mentální pohodě. V naší sauně najdete klid, regeneraci a prostor pro odpočinek od každodenního stresu.</p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-medium mb-2 text-wood-deep">90°C</h3>
                <p className="text-muted-foreground">Optimální teplota</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 text-wood-deep">100%</h3>
                <p className="text-muted-foreground">Přírodní materiály</p>
              </div>
            </div>
          </div>
          
          <div className={`bg-white rounded-lg p-8 shadow-soft hover:shadow-warm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'
          }`}
          style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-medium mb-6 text-primary">
              Proč finská sauna?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-4 flex-shrink-0" />
                <span className="text-muted-foreground">Zlepšuje krevní oběh a imunitní systém</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-4 flex-shrink-0" />
                <span className="text-muted-foreground">Uvolňuje svalové napětí a bolest</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-4 flex-shrink-0" />
                <span className="text-muted-foreground">Podporuje detoxikaci organismu</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-4 flex-shrink-0" />
                <span className="text-muted-foreground">Snižuje stres a zlepšuje náladu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
};