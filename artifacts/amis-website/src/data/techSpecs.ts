export type PolymerizationRow = {
  label: string;
  temps: { [temp: string]: string };
};

export type MechProp = {
  test: string;
  norm: string;
  result: string;
};

export type GlossLevel = {
  name: string;
  range: string;
  min: number;
  max: number;
};

export type TechSpec = {
  tagline: string;
  physicalProps: { label: string; value: string }[];
  application: string;
  productRange: string;
  polymerization: {
    note: string;
    temps: string[];
    rows: PolymerizationRow[];
  };
  glossLevels: GlossLevel[];
  mechProps: MechProp[];
};

export const TECH_SPECS: Record<string, TechSpec> = {
  amipol: {
    tagline:
      "Farba na bazie żywic poliestrowych niezawierająca związku TGIC. Specjalnie opracowana z myślą o zastosowaniu na powierzchniach narażonych na bezpośrednie działanie czynników atmosferycznych — charakteryzuje się wysoką odpornością na korozję i działanie promieni ultrafioletowych.",
    physicalProps: [
      { label: "Opakowanie", value: "Worek plastikowy w opakowaniu kartonowym 20 kg" },
      { label: "Trwałość", value: "24 miesiące w suchym miejscu poniżej 35°C" },
      { label: "Ciężar właściwy", value: "1,3 – 1,7 g/cm³ (zależnie od koloru)" },
    ],
    application:
      "Natrysk elektrostatyczny (Korona) o napięciu powyżej 30 kV lub elektrokinetyczny (tribo).",
    productRange:
      "AMIPOL to produkty na bazie pigmentów pozbawionych ołowiu, bez TGIC. Odznaczają się bardzo dobrą wytrzymałością na działanie czynników atmosferycznych i doskonałą rozlewnością. Dostępne rodzaje powłok: połysk, półpołysk, półmacie, gładkie, w teksturze, metaliczne, transparentne oraz z efektem młotkowym i antycznym.",
    polymerization: {
      note: "Parametry czasowe polimeryzacji w minutach w zależności od temperatury elementu.",
      temps: ["210°C", "200°C", "190°C", "180°C", "170°C", "160°C"],
      rows: [
        { label: "Produkty o standardowym czasie utwardzania", temps: { "200°C": "10", "190°C": "15", "180°C": "12" } },
        { label: "Produkty matowe i półmatowe o standardowym czasie utwardzania", temps: { "200°C": "10", "190°C": "15" } },
        { label: "Produkty o niskiej temperaturze utwardzania", temps: { "170°C": "15", "160°C": "15/20" } },
      ],
    },
    glossLevels: [
      { name: "Połysk", range: ">75%", min: 75, max: 100 },
      { name: "Półpołysk", range: "65–75%", min: 65, max: 75 },
      { name: "Półmat", range: "35–65%", min: 35, max: 65 },
      { name: "Mat", range: "15–35%", min: 15, max: 35 },
      { name: "Głęboki mat", range: "<15%", min: 0, max: 15 },
    ],
    mechProps: [
      { test: "Odporność na mgłę solną z kwasem octowym", norm: "ISO 9227", result: "500 godzin (korozja poniżej 2 mm)" },
      { test: "Próba zginania (sworzeń cylindryczny 6 mm)", norm: "ISO 1519", result: "Wynik pozytywny" },
      { test: "Odporność na uderzenie bezpośrednie i zwrotne", norm: "ISO 6272-1", result: "350–600 mm (w połysku)" },
      { test: "Przyczepność (metoda siatki nacięć)", norm: "ISO 2409", result: "Klasa 0" },
      { test: "Odporność na zarysowanie", norm: "ISO 1518", result: "≥ 2000 g" },
      { test: "Twardość ołówkowa", norm: "ISO 15184", result: "H – 2H" },
    ],
  },

  amipox: {
    tagline:
      "Farba na bazie żywic poliestrowo-epoksydowych. Charakteryzuje się doskonałymi właściwościami mechanicznymi i chemicznymi oraz odpornością na żółknięcie termiczne — idealna do zastosowań wewnętrznych.",
    physicalProps: [
      { label: "Opakowanie", value: "Worek plastikowy w opakowaniu kartonowym 20 kg" },
      { label: "Trwałość", value: "24 miesiące w suchym miejscu poniżej 35°C" },
      { label: "Ciężar właściwy", value: "1,3 – 1,7 g/cm³ (zależnie od koloru)" },
    ],
    application:
      "Natrysk elektrostatyczny (Korona) o napięciu powyżej 30 kV lub elektrokinetyczny (tribo).",
    productRange:
      "AMIPOX to produkty na bazie żywic poliestrowo-epoksydowych. Odznaczają się dobrymi właściwościami mechanicznymi i chemicznymi, odpornością na żółknięcie termiczne oraz doskonałą przyczepnością. Dostępne rodzaje powłok: połysk, półpołysk, półmacie, gładkie, w teksturze, metaliczne oraz z efektem specjalnym.",
    polymerization: {
      note: "Parametry czasowe polimeryzacji w minutach w zależności od temperatury elementu.",
      temps: ["210°C", "200°C", "190°C", "180°C", "170°C", "160°C"],
      rows: [
        { label: "Produkty o standardowym czasie utwardzania", temps: { "200°C": "10", "190°C": "15", "180°C": "12" } },
        { label: "Produkty matowe i półmatowe o standardowym czasie utwardzania", temps: { "200°C": "10", "190°C": "15" } },
        { label: "Produkty o niskiej temperaturze utwardzania", temps: { "170°C": "15", "160°C": "15/20" } },
      ],
    },
    glossLevels: [
      { name: "Połysk", range: ">75%", min: 75, max: 100 },
      { name: "Półpołysk", range: "65–75%", min: 65, max: 75 },
      { name: "Półmat", range: "35–65%", min: 35, max: 65 },
      { name: "Mat", range: "15–35%", min: 15, max: 35 },
      { name: "Głęboki mat", range: "<15%", min: 0, max: 15 },
    ],
    mechProps: [
      { test: "Próba zginania (sworzeń cylindryczny 6 mm)", norm: "ISO 1519", result: "Wynik pozytywny" },
      { test: "Odporność na uderzenie bezpośrednie i zwrotne", norm: "ISO 6272-1", result: "350–600 mm (w połysku)" },
      { test: "Przyczepność (metoda siatki nacięć)", norm: "ISO 2409", result: "Klasa 0" },
      { test: "Odporność na zarysowanie", norm: "ISO 1518", result: "≥ 2000 g" },
      { test: "Twardość ołówkowa", norm: "ISO 15184", result: "H – 2H" },
      { test: "Odporność na żółknięcie termiczne", norm: "ISO 105-A02", result: "Wynik pozytywny" },
    ],
  },

  amiksyd: {
    tagline:
      "Farba na bazie żywic epoksydowych odpowiednio katalizowanych. Wyróżnia się wysoką odpornością na środki chemiczne i korozję, doskonałą przyczepnością i twardością — przeznaczona do wymagających zastosowań przemysłowych.",
    physicalProps: [
      { label: "Opakowanie", value: "Worek plastikowy w opakowaniu kartonowym 20 kg" },
      { label: "Trwałość", value: "24 miesiące w suchym miejscu poniżej 35°C" },
      { label: "Ciężar właściwy", value: "1,3 – 1,7 g/cm³ (zależnie od koloru)" },
    ],
    application:
      "Natrysk elektrostatyczny (Korona) o napięciu powyżej 30 kV lub elektrokinetyczny (tribo).",
    productRange:
      "AMIKSYD to produkty na bazie żywic epoksydowych. Charakteryzują się wysoką odpornością na chemikalia, doskonałą przyczepnością, twardością i odpornością na korozję. Zalecane do powierzchni eksponowanych na środki chemiczne i agresywne warunki przemysłowe. Dostępne w szerokim zakresie kolorów i struktur.",
    polymerization: {
      note: "Parametry czasowe polimeryzacji w minutach w zależności od temperatury elementu.",
      temps: ["210°C", "200°C", "190°C", "180°C", "170°C", "160°C"],
      rows: [
        { label: "Produkty o standardowym czasie utwardzania", temps: { "200°C": "10", "190°C": "15", "180°C": "12" } },
        { label: "Produkty matowe i półmatowe o standardowym czasie utwardzania", temps: { "200°C": "10", "190°C": "15" } },
        { label: "Produkty o niskiej temperaturze utwardzania", temps: { "170°C": "15", "160°C": "15/20" } },
      ],
    },
    glossLevels: [
      { name: "Połysk", range: ">75%", min: 75, max: 100 },
      { name: "Półpołysk", range: "65–75%", min: 65, max: 75 },
      { name: "Półmat", range: "35–65%", min: 35, max: 65 },
      { name: "Mat", range: "15–35%", min: 15, max: 35 },
      { name: "Głęboki mat", range: "<15%", min: 0, max: 15 },
    ],
    mechProps: [
      { test: "Odporność na mgłę solną", norm: "ISO 9227", result: "≥ 1000 godzin" },
      { test: "Próba zginania (sworzeń cylindryczny 6 mm)", norm: "ISO 1519", result: "Wynik pozytywny" },
      { test: "Odporność na uderzenie bezpośrednie i zwrotne", norm: "ISO 6272-1", result: "350–600 mm" },
      { test: "Przyczepność (metoda siatki nacięć)", norm: "ISO 2409", result: "Klasa 0" },
      { test: "Odporność na zarysowanie", norm: "ISO 1518", result: "≥ 2000 g" },
      { test: "Odporność na środki chemiczne (NaOH, H₂SO₄)", norm: "ISO 2812-1", result: "Wynik pozytywny" },
    ],
  },
};
