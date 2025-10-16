export const Pricing = () => {
  return <section className="py-24 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center bg-white rounded-lg p-8 shadow-soft animate-scale-in hover:shadow-warm transition-shadow duration-300">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">Ceník</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <div>
              <div className="text-3xl font-light text-accent mb-2">250 Kč</div>
              <div className="text-sm text-muted-foreground">1 osoba/2 hod</div>
            </div>
            <div>
              <div className="text-3xl font-light text-accent mb-2">150 Kč</div>
              <div className="text-sm text-muted-foreground">Děti do 15 let</div>
            </div>
            <div>
              <div className="text-3xl font-light text-accent mb-2">350 Kč</div>
              <div className="text-sm text-muted-foreground">Časově neomezený vstup</div>
            </div>
            <div>
              <div className="text-3xl font-light text-accent mb-2">2300 Kč</div>
              <div className="text-sm text-muted-foreground">Permanentka 10 vstupů</div>
            </div>
            <div>
              <div className="text-3xl font-light text-accent mb-2">4200 Kč</div>
              <div className="text-sm text-muted-foreground">Permanentka 20 vstupů</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};