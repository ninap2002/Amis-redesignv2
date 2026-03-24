import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Palette, Settings, Clock, Leaf } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PRODUCTS } from "@/data/content";

const FEATURES = [
  { icon: ShieldCheck, title: "Wysoka jakość", desc: "Produkty i usługi poświadczone międzynarodowymi certyfikatami." },
  { icon: Zap, title: "Nowoczesne technologie", desc: "Wykorzystujemy najnowsze rozwiązania w procesie produkcji." },
  { icon: Palette, title: "Szeroki wybór", desc: "Bogata paleta kolorów, połysków i efektów specjalnych." },
  { icon: Settings, title: "Rozwiązania szyte na miarę", desc: "Projektujemy produkty ściśle pod wymagania klienta." },
  { icon: Clock, title: "Elastyczność", desc: "Gwarantujemy krótkie terminy realizacji zamówień." },
  { icon: Leaf, title: "Ekologia", desc: "Nasze farby są w pełni bezpieczne i przyjazne dla środowiska." },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Produkcja farb proszkowych" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-accent font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
              Amis Farby Proszkowe
            </h2>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-balance">
              Nasz wkład w <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300">Wasz sukces</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto text-balance font-medium">
              Jesteśmy wiodącym producentem wysokiej jakości farb proszkowych dla nowoczesnego przemysłu. Poznaj rozwiązania, które chronią i inspirują.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/produkty" className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold text-lg shadow-lg shadow-accent/30 transition-all hover:-translate-y-1">
                Poznaj Ofertę
              </Link>
              <Link href="/kontakt" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold text-lg transition-all hover:-translate-y-1">
                Skontaktuj się
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dlaczego AMIS Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Dlaczego AMIS Farby Proszkowe?
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Wybierając naszą markę, inwestujesz w niezawodność, sprawdzoną jakość i przyjacielskie relacje biznesowe oparte na zaufaniu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <feat.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Główne linie produktów</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Nasze portfolio obejmuje systemy dedykowane do każdego rodzaju powierzchni i środowiska.
              </p>
            </div>
            <Link href="/produkty" className="group flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors">
              Wszystkie produkty
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${prod.color}`} />
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">{prod.name}</h3>
                  <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">{prod.subtitle}</p>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{prod.description}</p>
                  <Link href={`/produkty/${prod.id}`} className="inline-flex items-center justify-center w-full py-3 bg-gray-50 hover:bg-primary hover:text-white text-primary font-bold rounded-xl transition-colors">
                    Dowiedz się więcej
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
