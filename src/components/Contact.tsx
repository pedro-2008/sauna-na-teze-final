import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
export const Contact = () => {
  return <section className="py-24 px-6 bg-gradient-hero">
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
              <CardTitle className="text-xl text-wood-deep">Otevírací doba – říjen 2025</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pondělí</span>
                <span className="text-primary font-medium">Zavřeno</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Úterý</span>
                <span className="text-primary font-medium">Zavřeno</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Středa</span>
                <span className="text-primary font-medium">16:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Čtvrtek</span>
                <span className="text-primary font-medium">16:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pátek</span>
                <span className="text-primary font-medium">Zavřeno</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sobota</span>
                <span className="text-primary font-medium">Zavřeno</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Neděle</span>
                <span className="text-primary font-medium">Zavřeno</span>
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
                <p className="text-primary font-medium">Lipová alej 4110/23, Hodonín</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Telefon</p>
                <p className="text-primary font-medium">+420 737 443 674</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Email</p>
                <p className="text-primary font-medium">janasportmasaz@seznam.cz</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Facebook</p>
                <a 
                  href="https://www.facebook.com/profile.php?id=61582524922922" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Navštivte naši stránku</span>
                </a>
              </div>
              <div className="pt-4">
                <Button className="w-full" size="lg" onClick={() => {
                window.open('tel:+420123456789', '_self');
              }}>
                  Rezervovat nyní
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};