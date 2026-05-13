import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { PRODUCTS } from "@/data/content";
import { ArrowRight, FileDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <Layout>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Nasze Produkty</h1>
            <p className="text-lg text-muted-foreground">
              Oferujemy szeroki wachlarz produktów tworzących podstawowe grupy farb proszkowych, dostosowanych do najbardziej wymagających środowisk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {PRODUCTS.map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden flex flex-col group"
              >
                <div className={`h-3 bg-gradient-to-r ${prod.color}`} />
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-3xl font-display font-bold text-primary">{prod.name}</h2>
                      <span className="text-accent font-semibold text-sm uppercase tracking-wider">{prod.subtitle}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 flex-grow">
                    {prod.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Główne zastosowania:</h4>
                    <div className="flex flex-wrap gap-2">
                      {prod.applications.map(app => (
                        <span key={app} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <Link 
                      href={`/produkty/${prod.id}`}
                      className="flex-1 inline-flex items-center justify-between px-6 py-4 bg-gray-50 group-hover:bg-primary group-hover:text-white rounded-xl text-primary font-bold transition-all"
                    >
                      Szczegóły produktu
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    {prod.pdfUrl && (
                      <a
                        href={`${import.meta.env.BASE_URL}${prod.pdfUrl}`}
                        download={prod.pdfLabel ?? undefined}
                        onClick={e => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-accent/10 hover:bg-accent hover:text-white rounded-xl text-accent font-bold transition-all"
                        title={`Pobierz kartę techniczną ${prod.name}`}
                      >
                        <FileDown className="w-5 h-5" />
                        <span className="sm:hidden">Karta Techniczna</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Potrzebujesz kart technicznych?</h3>
              <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
                Skontaktuj się z naszym działem technologicznym aby uzyskać szczegółowe karty techniczne (TDS) oraz karty charakterystyki (SDS) dla naszych produktów.
              </p>
              <Link href="/produkty/zapytanie" className="inline-block px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold shadow-lg transition-all hover:-translate-y-1">
                Zapytanie o karty techniczne
              </Link>
            </div>
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop')] bg-cover bg-center mix-blend-overlay" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
