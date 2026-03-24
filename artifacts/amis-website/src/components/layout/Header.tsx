import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Droplet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const MAIN_NAV = [
  { label: "O firmie", href: "/o-firmie" },
  { 
    label: "Produkty", 
    href: "/produkty",
    dropdown: [
      { label: "Przegląd Produktów", href: "/produkty" },
      { label: "AMIPOL (Poliestrowe)", href: "/produkty/amipol" },
      { label: "AMIPOX (Poliestrowo-epoksydowe)", href: "/produkty/amipox" },
      { label: "AMIKSYD (Epoksydowe)", href: "/produkty/amiksyd" },
      { label: "Zapytanie o karty", href: "/produkty/zapytanie" },
    ]
  },
  { label: "Laboratorium", href: "/laboratorium" },
  { label: "Atesty i Certyfikaty", href: "/atesty-i-certyfikaty" },
  { 
    label: "Wiedza", 
    href: "/o-farbach-proszkowych",
    dropdown: [
      { label: "O farbach proszkowych", href: "/o-farbach-proszkowych" },
      { label: "Zalety", href: "/o-farbach-proszkowych/zalety" },
      { label: "Zastosowanie", href: "/o-farbach-proszkowych/zastosowanie" },
      { label: "Proces produkcji", href: "/o-farbach-proszkowych/produkcja" },
    ]
  },
  { label: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-nav py-3" : "bg-white py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Droplet className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-tight text-primary tracking-wide">
                AMIS
              </span>
              <span className="text-[0.65rem] font-semibold text-accent uppercase tracking-widest leading-none">
                Farby Proszkowe
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {MAIN_NAV.map((item) => (
              <div 
                key={item.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1",
                    location === item.href || location.startsWith(item.href + '/')
                      ? "text-primary bg-primary/5" 
                      : "text-foreground/80 hover:text-primary hover:bg-gray-50"
                  )}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2 w-64"
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden p-2 flex flex-col gap-1">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.href}
                              href={dropItem.href}
                              className={cn(
                                "px-4 py-2.5 rounded-md text-sm font-medium transition-colors",
                                location === dropItem.href
                                  ? "bg-accent/10 text-accent"
                                  : "text-foreground/70 hover:bg-gray-50 hover:text-primary"
                              )}
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/b2b"
              className="hidden md:flex px-5 py-2.5 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold text-sm shadow-md shadow-accent/20 transition-all hover:-translate-y-0.5"
            >
              Strefa B2B
            </Link>
            
            <button 
              className="lg:hidden p-2 text-foreground/80 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {MAIN_NAV.map((item) => (
                <div key={item.href} className="flex flex-col gap-2">
                  <Link 
                    href={item.href}
                    className="font-display font-bold text-lg text-primary"
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="flex flex-col pl-4 border-l-2 border-border gap-2 mt-1">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          className="text-foreground/70 text-sm font-medium"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                href="/b2b"
                className="mt-4 px-5 py-3 bg-accent text-white text-center rounded-lg font-semibold shadow-md"
              >
                Przejdź do Strefy B2B
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
