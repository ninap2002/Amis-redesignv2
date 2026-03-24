// Shared data to power generic pages and components
export const PRODUCTS = [
  {
    id: "amipol",
    name: "AMIPOL",
    subtitle: "Farby Poliestrowe",
    description: "Farby, których podstawowym składnikiem są sieciujące żywice poliestrowe. Charakteryzują się bardzo dobrą odpornością na warunki atmosferyczne, korozję i wysokie temperatury.",
    applications: ["Meble ogrodowe", "Znaki drogowe", "Zewnętrzne elementy samochodów", "Rowery", "Zastosowania zewnętrzne"],
    color: "from-blue-500 to-primary",
  },
  {
    id: "amipox",
    name: "AMIPOX",
    subtitle: "Farby Poliestrowo-Epoksydowe",
    description: "Farby, których podstawowym składnikiem są żywice poliestrowo-epoksydowe. Charakteryzują się dobrymi właściwościami mechanicznymi i chemicznymi oraz odpornością na żółknięcie termiczne.",
    applications: ["Meble biurowe", "Oświetlenie domowe", "Obudowy komputerów", "Grzejniki", "Sejfy", "Zastosowania wewnętrzne"],
    color: "from-emerald-500 to-accent",
  },
  {
    id: "amiksyd",
    name: "AMIKSYD",
    subtitle: "Farby Epoksydowe",
    description: "Farby, których podstawowym składnikiem są odpowiednio katalizowane żywice epoksydowe. Charakteryzują się wysoką odpornością na środki chemiczne i korozję.",
    applications: ["Kanistry i baki na paliwo", "Elementy wyposażenia szpitali", "Obudowy maszyn", "Powierzchnie narażone na chemikalia"],
    color: "from-purple-500 to-indigo-800",
  },
  {
    id: "amipur",
    name: "AMIPUR",
    subtitle: "Farby Poliuretanowe",
    description: "Farby klasy premium na bazie żywic poliuretanowych. Oferują najwyższą jakość wykończenia, doskonałą rozlewność i wybitną odporność na czynniki zewnętrzne.",
    applications: ["Wysokiej klasy sprzęt AGD", "Architektura premium", "Elementy wymagające perfekcyjnego wyglądu"],
    color: "from-orange-500 to-red-700",
  }
];

export const GENERIC_PAGES: Record<string, { title: string; content: React.ReactNode | string }> = {
  "zalety": {
    title: "Zalety farb proszkowych",
    content: "Farby proszkowe to nowoczesne, ekologiczne i wysoce wydajne rozwiązanie. W przeciwieństwie do farb ciekłych nie zawierają szkodliwych rozpuszczalników. Gwarantują doskonałe krycie już przy jednej warstwie, odporność na korozję, uszkodzenia mechaniczne i promieniowanie UV. Niewykorzystany proszek można odzyskać, co sprawia, że technologia ta jest niemal bezodpadowa."
  },
  "wydajnosc": {
    title: "Teoretyczna wydajność",
    content: "Wydajność farb proszkowych zależy od wielu czynników, m.in. gęstości właściwej proszku, grubości aplikowanej powłoki oraz sprawności systemu aplikacji i odzysku. W optymalnych warunkach wydajność wynosi od 8 do 14 m² z jednego kilograma farby."
  },
  "zastosowanie": {
    title: "Zastosowanie farb proszkowych",
    content: "Zastosowanie farb proszkowych jest niezwykle szerokie - od przemysłu motoryzacyjnego (felgi, detale karoserii), przez architekturę (profile aluminiowe, fasady), sprzęt AGD, meblarstwo (meble metalowe, biurowe, ogrodowe), aż po maszyny rolnicze i specjalistyczną aparaturę medyczną."
  },
  // Add more as needed...
};
