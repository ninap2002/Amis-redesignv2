import { Link } from "wouter";
import { Droplet, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12143A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                <Droplet className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight text-white tracking-wide">
                  AMIS
                </span>
                <span className="text-[0.65rem] font-semibold text-accent/80 uppercase tracking-widest leading-none">
                  Farby Proszkowe
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Producent wysokiej jakości farb proszkowych przeznaczonych dla różnorodnych branż przemysłowych. Nasz wkład w Wasz sukces.
            </p>
          </div>

          {/* Siedziba */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-bold text-lg">Siedziba Firmy</h3>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>ul. Piłsudskiego 93g<br/>10-449 Olsztyn, Polska</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+48 89 537 51 52</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:biuro@amis.pl" className="hover:text-accent transition-colors">biuro@amis.pl</a>
              </li>
            </ul>
          </div>

          {/* Zakład */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-bold text-lg">Zakład Produkcyjny</h3>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Nowa Wieś Mała 32<br/>11-040 Dobre Miasto, Polska</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+48 89 532 44 10</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-bold text-lg">Na Skróty</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm font-medium">
              {[
                { label: "O firmie", href: "/o-firmie" },
                { label: "Nasze Produkty", href: "/produkty" },
                { label: "Laboratorium", href: "/laboratorium" },
                { label: "Atesty i Certyfikaty", href: "/atesty-i-certyfikaty" },
                { label: "Kariera", href: "/praca" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 hover:text-accent transition-colors group">
                    <ArrowRight className="w-4 h-4 text-accent/0 group-hover:text-accent -ml-6 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>COPYRIGHT {currentYear} by AMIS FARBY PROSZKOWE SP. Z O.O. / All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/regulamin-b2b" className="hover:text-white transition-colors">Regulamin B2B</Link>
            <Link href="/projekty-ue" className="hover:text-white transition-colors">Projekty UE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
