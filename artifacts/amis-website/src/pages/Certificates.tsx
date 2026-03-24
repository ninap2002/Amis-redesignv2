import { Layout } from "@/components/layout/Layout";
import { Award, Shield, FileCheck, CheckCircle } from "lucide-react";

export default function Certificates() {
  const certs = [
    { title: "ISO 9001", desc: "Wdrożony System Zarządzania Jakością (od 2015 r.)", icon: Award },
    { title: "Atest PZH", desc: "Pozytywne opinie Państwowego Zakładu Higieny (od 2010 r.)", icon: FileCheck },
    { title: "QUALICOAT", desc: "Aprobata jakości nr P-1565 (18.12.2018 r.)", icon: Shield },
    { title: "Instytut Kolejnictwa", desc: "Certyfikat zgodności IK CZ-020/2020 wg PN-EN 45545-2:2021-01", icon: CheckCircle },
    { title: "Powłoki Antybakteryjne", desc: "Certyfikat hamowania rozwoju bakterii wg ISO 22196 (od 2017 r.)", icon: Shield },
    { title: "Klasyfikacja Ogniowa", desc: "Reakcja na ogień wg PN-EN 13501-1+A1:2010, wynik: A2-s2, d0", icon: Award },
    { title: "Rzetelna Firma", desc: "Nieprzerwane uczestnictwo w programie (od 2011 r.)", icon: CheckCircle },
    { title: "Ekologia", desc: "Produkty bezpieczne, bez TGIC ani metali ciężkich", icon: FileCheck },
  ];

  return (
    <Layout>
      <div className="bg-gray-50 py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Atesty i Certyfikaty</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Produkty wytwarzane przez Amis Farby Proszkowe charakteryzują się najwyższą jakością zgodną z normami europejskimi. Są ekologiczne, bezpieczne i certyfikowane.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certs.map((c, i) => (
              <div key={i} className="bg-white border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
