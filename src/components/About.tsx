import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return <section id="about" ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Steam effect - visible rising steam */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-[15%] w-48 h-96 bg-white/70 rounded-full blur-3xl animate-steam-rise" />
        <div className="absolute bottom-0 left-[45%] w-40 h-80 bg-white/65 rounded-full blur-3xl animate-steam-rise" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-0 left-[75%] w-52 h-[28rem] bg-white/75 rounded-full blur-3xl animate-steam-rise" style={{ animationDelay: '6s' }} />
        <div className="absolute bottom-0 left-[60%] w-36 h-72 bg-white/60 rounded-full blur-3xl animate-steam-rise" style={{ animationDelay: '9s' }} />
        <div className="absolute bottom-0 left-[30%] w-44 h-88 bg-white/55 rounded-full blur-3xl animate-steam-rise" style={{ animationDelay: '4.5s' }} />
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
          
          <div className={`bg-white/60 backdrop-blur-sm rounded-lg p-8 shadow-soft hover:shadow-warm transition-all duration-1000 ${
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