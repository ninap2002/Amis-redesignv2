import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Users, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="bg-primary pt-20 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={`${import.meta.env.BASE_URL}images/factory.png`} className="w-full h-full object-cover mix-blend-overlay" alt="" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">O Firmie</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto text-balance">
            Poznaj historię marki AMIS i naszą filozofię budowania trwałych relacji z klientami przemysłowymi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-border">
          <div className="prose prose-lg prose-blue max-w-none text-foreground/80">
            <p className="lead text-2xl font-medium text-primary mb-8 text-balance">
              <strong>Amis Farby Proszkowe Sp. z o.o.</strong> jest firmą produkcyjną wytwarzającą wysokiej jakości farby proszkowe przeznaczone dla różnorodnych branż przemysłowych.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 my-12">
              <div>
                <h3 className="font-display text-2xl text-primary font-bold mb-4">Nasza Historia</h3>
                <p>
                  Spółka została założona w 2005 roku pod nazwą Naber Polska Sp. z o.o. i od tamtej pory dynamicznie rozwija swoją działalność. W ramach długoterminowej strategii handlowo-marketingowej opartej na zarejestrowanym znaku towarowym, spółka dokonała rebrandingu, zmieniając w dn. 4.09.2019 r. dotychczasową nazwę na <strong>Amis Farby Proszkowe Sp. z o.o.</strong>
                </p>
                <p>
                  Marka <strong>AMIS</strong> (z fr. przyjaciele) wraz z wizualną oprawą to kwintesencja niezawodności, sprawdzonej jakości i najlepszych rozwiązań. Przyjacielskie relacje oparte na zaspokajaniu oczekiwań i potrzeb technologicznych Klientów to nasz główny cel.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-auto">
                <img src={`${import.meta.env.BASE_URL}images/factory.png`} alt="Factory" className="w-full h-full object-cover" />
              </div>
            </div>

            <h3 className="font-display text-2xl text-primary font-bold mb-6">Rozwój i Inwestycje</h3>
            <p>
              Systematycznie inwestując w park maszynowy, możemy zapewniać naszym klientom i partnerom handlowym szybkość i elastyczność w realizacji zamówień. Nieprzerwanie inwestujemy również w laboratorium, kupując nowoczesne urządzenia do testowania powłok, odporności na korozję i precyzyjnych pomiarów. 
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-border">
            {[
              { icon: Target, title: "Wizja", desc: "Być pierwszym wyborem dla wymagających klientów przemysłowych." },
              { icon: Users, title: "Relacje", desc: "Budujemy partnerskie więzi oparte na zaufaniu i doradztwie." },
              { icon: TrendingUp, title: "Innowacje", desc: "Stale badamy i wdrażamy nowe gamy produktów i efekty specjalne." },
            ].map((v, i) => (
              <div key={i} className="text-center px-4">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent">
                  <v.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl mb-2 text-primary">{v.title}</h4>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
