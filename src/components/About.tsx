export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-primary">
              Finská tradice
            </h2>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Sauna Na Teze přináší autentický finský zážitek do Hodonína. 
              Naše sauna je postavena podle tradičních finských postupů 
              s použitím kvalitního severského dřeva.
            </p>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              Věříme v sílu saunování jako cesty k fyzické i mentální pohodě. 
              V naší sauna najdete klid, regeneraci a prostor pro odpočinek 
              od každodenního stresu.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-medium mb-2 text-wood-deep">85°C</h3>
                <p className="text-muted-foreground">Optimální teplota</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 text-wood-deep">100%</h3>
                <p className="text-muted-foreground">Přírodní materiály</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-soft">
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
    </section>
  );
};