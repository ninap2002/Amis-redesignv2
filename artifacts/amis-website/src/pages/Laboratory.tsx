import { Layout } from "@/components/layout/Layout";
import { FlaskConical, Activity, Microscope, ScanSearch } from "lucide-react";

export default function Laboratory() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src={`${import.meta.env.BASE_URL}images/lab-bg.png`} className="w-full h-full object-cover" alt="Laboratorium AMIS" />
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-widest uppercase mb-4 block">Badania i Rozwój</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Nowoczesne Laboratorium
            </h1>
            <p className="text-xl text-blue-100">
              Nieprzerwanie inwestujemy w nasz sprzęt badawczy, by dostarczać produkty najwyższej jakości i wyznaczać nowe standardy w branży.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="prose prose-lg text-muted-foreground">
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Pełna kontrola jakości</h2>
              <p>
                Laboratorium Amis Farby Proszkowe Sp. z o.o. wyposażone jest w nowoczesne urządzenia niezbędne do wiernego odtworzenia procesu produkcji i aplikacji. Dzięki temu mamy pewność, że każda partia farby opuszczająca nasz zakład spełnia rygorystyczne normy.
              </p>
              <p>
                Testujemy powłoki pod kątem ich odporności na korozję i czynniki zewnętrzne oraz dokonujemy precyzyjnych pomiarów parametrów fizykochemicznych.
              </p>
              <p>
                To pozwala nam na opracowywanie nowych gam produktów i efektów specjalnych oraz zapewnia pełne wsparcie techniczne dla naszych klientów i Działu Sprzedaży.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Microscope, label: "Analiza struktury" },
                { icon: Activity, label: "Testy mechaniczne" },
                { icon: FlaskConical, label: "Testy chemiczne" },
                { icon: ScanSearch, label: "Pomiary precyzyjne" }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl text-center border border-border hover:border-accent/50 hover:shadow-md transition-all">
                  <item.icon className="w-10 h-10 mx-auto text-accent mb-4" />
                  <h4 className="font-bold text-foreground">{item.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
