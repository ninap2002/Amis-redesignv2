import { Layout } from "@/components/layout/Layout";
import { PRODUCTS } from "@/data/content";
import { useParams, Link } from "wouter";
import { ArrowLeft, CheckCircle2, FileDown } from "lucide-react";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find(p => p.id === slug);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex items-center justify-center flex-col gap-4 text-center px-4">
          <h1 className="text-4xl font-bold text-primary">Produkt nie znaleziony</h1>
          <p className="text-muted-foreground">Przepraszamy, ale strona tego produktu nie istnieje.</p>
          <Link href="/produkty" className="text-accent font-bold hover:underline">Wróć do listy produktów</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={`h-2 bg-gradient-to-r ${product.color} w-full`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/produkty" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" /> Powrót do produktów
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-wider uppercase mb-4">
              {product.subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary mb-6">
              {product.name}
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 border border-border mb-8">
              <h3 className="text-xl font-bold text-primary mb-6">Zalecane zastosowanie:</h3>
              <ul className="space-y-4">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-foreground/80 font-medium">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <Link href="/kontakt" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Skontaktuj się z nami
              </Link>
              {product.pdfUrl ? (
                <a
                  href={`${import.meta.env.BASE_URL}${product.pdfUrl}`}
                  download={product.pdfLabel ?? undefined}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <FileDown className="w-5 h-5" />
                  Pobierz Kartę Techniczną (PDF)
                </a>
              ) : (
                <Link href="/produkty/zapytanie" className="px-8 py-4 bg-white border-2 border-primary text-primary hover:bg-gray-50 rounded-xl font-bold text-center transition-all">
                  Zapytaj o Kartę Techniczną
                </Link>
              )}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px]">
            <img 
              src={`${import.meta.env.BASE_URL}images/powder-explosion.png`}
              alt={`${product.name} farba proszkowa`}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-tr ${product.color} mix-blend-multiply opacity-40`} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
