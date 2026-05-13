import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setSent(true);
    }, 1500);
  };

  return (
    <Layout>
      <div className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Kontakt</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami telefonicznie, mailowo lub wypełniając poniższy formularz.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">Siedziba Firmy</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Adres</p>
                    <p className="text-muted-foreground">ul. Piłsudskiego 93g<br/>10-449 Olsztyn, Polska</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Telefon</p>
                    <p className="text-muted-foreground">+48 89 537 51 52</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">E-mail</p>
                    <a href="mailto:biuro@amis.pl" className="text-accent hover:underline">biuro@amis.pl</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">Zakład Produkcyjny</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Adres</p>
                    <p className="text-muted-foreground">Nowa Wieś Mała 32<br/>11-040 Dobre Miasto, Polska</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Telefon</p>
                    <p className="text-muted-foreground">+48 89 532 44 10</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-gray-50 rounded-3xl p-8 md:p-12 border border-border">
            <h3 className="font-display text-3xl font-bold text-primary mb-2">Formularz kontaktowy</h3>
            <p className="text-muted-foreground mb-8">Odpowiemy na Twoje zapytanie najszybciej jak to możliwe.</p>
            
            {sent ? (
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Wiadomość wysłana!</h4>
                <p className="text-muted-foreground">Dziękujemy za kontakt. Nasi specjaliści odezwą się do Ciebie wkrótce.</p>
                <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>Wyślij kolejną wiadomość</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Imię i nazwisko / Firma</Label>
                    <Input id="name" required placeholder="Jan Kowalski" className="bg-white h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Adres e-mail</Label>
                    <Input id="email" type="email" required placeholder="jan@firma.pl" className="bg-white h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Temat (Opcjonalnie)</Label>
                  <Input id="subject" placeholder="Wpisz temat wiadomości" className="bg-white h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Treść wiadomości</Label>
                  <Textarea id="message" required placeholder="W czym możemy pomóc?" className="bg-white min-h-[150px] resize-y" />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-bold text-lg rounded-xl"
                >
                  {isSending ? "Wysyłanie..." : "Wyślij wiadomość"}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Administratorem Twoich danych osobowych jest Amis Farby Proszkowe Sp. z o.o. Wysyłając wiadomość akceptujesz politykę prywatności.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </Layout>
  );
}
