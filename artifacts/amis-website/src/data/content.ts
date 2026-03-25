// Shared data to power generic pages and components
export const PRODUCTS = [
  {
    id: "amipol",
    name: "AMIPOL",
    subtitle: "Farby Poliestrowe",
    description: "Farby, których podstawowym składnikiem są sieciujące żywice poliestrowe. Charakteryzują się bardzo dobrą odpornością na warunki atmosferyczne, korozję i wysokie temperatury.",
    applications: ["Meble ogrodowe", "Znaki drogowe", "Zewnętrzne elementy samochodów", "Rowery", "Zastosowania zewnętrzne"],
    color: "from-blue-500 to-primary",
    pdfUrl: "pdfs/amipol-karta-techniczna.pdf",
    pdfLabel: "AMIPOL – Karta Techniczna",
    specImageUrl: "specs/amipol-specyfikacja.jpg",
  },
  {
    id: "amipox",
    name: "AMIPOX",
    subtitle: "Farby Poliestrowo-Epoksydowe",
    description: "Farby, których podstawowym składnikiem są żywice poliestrowo-epoksydowe. Charakteryzują się dobrymi właściwościami mechanicznymi i chemicznymi oraz odpornością na żółknięcie termiczne.",
    applications: ["Meble biurowe", "Oświetlenie domowe", "Obudowy komputerów", "Grzejniki", "Sejfy", "Zastosowania wewnętrzne"],
    color: "from-emerald-500 to-accent",
    pdfUrl: "pdfs/amipox-karta-techniczna.pdf",
    pdfLabel: "AMIPOX – Karta Techniczna",
    specImageUrl: "specs/amipox-specyfikacja.jpg",
  },
  {
    id: "amiksyd",
    name: "AMIKSYD",
    subtitle: "Farby Epoksydowe",
    description: "Farby, których podstawowym składnikiem są odpowiednio katalizowane żywice epoksydowe. Charakteryzują się wysoką odpornością na środki chemiczne i korozję.",
    applications: ["Kanistry i baki na paliwo", "Elementy wyposażenia szpitali", "Obudowy maszyn", "Powierzchnie narażone na chemikalia"],
    color: "from-purple-500 to-indigo-800",
    pdfUrl: "pdfs/amiksyd-karta-techniczna.pdf",
    pdfLabel: "AMIKSYD – Karta Techniczna",
    specImageUrl: "specs/amiksyd-specyfikacja.jpg",
  },
  {
    id: "amipur",
    name: "AMIPUR",
    subtitle: "Farby Poliuretanowe",
    description: "Farby klasy premium na bazie żywic poliuretanowych. Oferują najwyższą jakość wykończenia, doskonałą rozlewność i wybitną odporność na czynniki zewnętrzne.",
    applications: ["Wysokiej klasy sprzęt AGD", "Architektura premium", "Elementy wymagające perfekcyjnego wyglądu"],
    color: "from-orange-500 to-red-700",
    pdfUrl: null,
    pdfLabel: null,
    specImageUrl: null,
  }
];

export const GENERIC_PAGES: Record<string, { title: string; content: React.ReactNode | string }> = {
  "zalety": {
    title: "Zalety farb proszkowych",
    content: "Farby proszkowe to nowoczesne, ekologiczne i wysoce wydajne rozwiązanie. W przeciwieństwie do farb ciekłych nie zawierają szkodliwych rozpuszczalników organicznych. Gwarantują doskonałe krycie już przy jednej warstwie, trwałą odporność na korozję, uszkodzenia mechaniczne i promieniowanie UV. Niewykorzystany proszek można odzyskać i ponownie użyć, co sprawia, że technologia ta jest niemal bezodpadowa. Powłoka proszkowa odznacza się równomierną grubością nawet na trudno dostępnych powierzchniach, jest odporna na pęknięcia, łuszczenie i zarysowania — a jej żywotność wielokrotnie przewyższa konwencjonalne farby ciekłe."
  },
  "wydajnosc": {
    title: "Teoretyczna wydajność",
    content: "Wydajność farb proszkowych zależy od wielu czynników, m.in. gęstości właściwej proszku, grubości aplikowanej powłoki oraz sprawności systemu aplikacji i odzysku. W optymalnych warunkach wydajność wynosi od 8 do 14 m² z jednego kilograma farby przy grubości powłoki 60–80 µm. Gęstość właściwa produktów AMIS mieści się w zakresie 1,3–1,7 g/cm³ w zależności od koloru i rodzaju wyrobu. Nowoczesne kabiny proszkowe z systemem odzysku umożliwiają osiąganie sprawności transferu powyżej 95%."
  },
  "zastosowanie": {
    title: "Zastosowanie farb proszkowych",
    content: "Zastosowanie farb proszkowych jest niezwykle szerokie — od przemysłu motoryzacyjnego (felgi, detale karoserii, ramy rowerów), przez architekturę (profile aluminiowe, fasady, balustrady), sprzęt AGD, meblarstwo (meble metalowe, biurowe i ogrodowe), aż po maszyny rolnicze, grzejniki i specjalistyczną aparaturę medyczną. Produkty AMIS sprawdzają się zarówno w zastosowaniach zewnętrznych — gdzie kluczowa jest odporność na korozję i promieniowanie UV — jak i wewnętrznych, gdzie ważne są estetyka i właściwości mechaniczne."
  },
  "kolory": {
    title: "Dostępne kolory i efekty",
    content: "Farby AMIS dostępne są w praktycznie nieograniczonej gamie kolorów, opartej na palecie RAL Classic oraz RAL Design System. Oprócz kolorów gładkich oferujemy szerokie spektrum efektów specjalnych: struktury (drobna i gruba faktura), efekt młotkowy, antyczny, piaskowy, metaliczny i perłowy, a także powłoki transparentne. Produkty matowe, półmatowe i połyskowe pozwalają uzyskać dowolny stopień połysku od głębokiego matu (<15%) aż po wysoki połysk (>75%). Kolory i efekty niestandardowe realizujemy na zlecenie — prosimy o kontakt z działem handlowym."
  },
  "produkcja": {
    title: "Proces produkcji",
    content: "Produkcja farb proszkowych AMIS przebiega w kilku etapach: ważenie i mieszanie surowców (żywice, pigmenty, środki pomocnicze), wytłaczanie na gorąco w ekstruderze, chłodzenie i kruszenie, a następnie mielenie do odpowiedniej granulacji i przesiewanie. Gotowy proszek poddawany jest kontroli jakości, pakowany w 20-kilogramowe worki i kierowany do magazynu. Każda partia produkcyjna jest archiwizowana, co umożliwia pełną identyfikowalność wyrobu. Zakład produkcyjny AMIS zlokalizowany jest w Nowej Wsi Małej k. Dobrego Miasta."
  },
  "jakosc": {
    title: "Kontrola jakości",
    content: "Laboratorium AMIS prowadzi kompleksową kontrolę jakości na każdym etapie produkcji. Badania obejmują m.in.: czas żelowania, granulację, przyczepność powłoki (metoda siatki nacięć wg ISO 2409), odporność na mgłę solną (ISO 9227), próbę zginania (ISO 1519), odporność na uderzenie (ISO 6272-1), twardość (ISO 15184) oraz pomiar połysku pod kątem 60°. Każda partia produkcyjna jest archiwizowana i dostępna do weryfikacji. Na życzenie klienta wystawiamy certyfikat jakości z wynikami badań dla konkretnej dostawy."
  },
  "przechowywanie": {
    title: "Przechowywanie farb proszkowych",
    content: "Farby proszkowe AMIS należy przechowywać w oryginalnych, szczelnie zamkniętych opakowaniach, w suchym i chłodnym miejscu, z dala od źródeł ciepła i wilgoci. Optymalna temperatura składowania wynosi poniżej 25°C — w żadnym wypadku nie należy przekraczać 35°C, gdyż może to prowadzić do aglomeracji proszku i pogorszenia właściwości aplikacyjnych. W tych warunkach trwałość produktu wynosi 24 miesiące od daty produkcji. Po otwarciu opakowania proszek należy zużyć jak najszybciej i nie przechowywać z dostępem powietrza przez dłuższy czas."
  },
  "podloze": {
    title: "Przygotowanie podłoża",
    content: "Kluczowym warunkiem trwałości powłoki proszkowej jest właściwe przygotowanie podłoża. Stal należy oczyścić z rdzy, zgorzeliny i tłuszczów (odtłuszczanie, piaskowanie lub śrutowanie), a następnie poddać konwersji chemicznej — fosforanowaniu żelazowym lub cynkowym — bądź nanieść podkład epoksydowy. Aluminium i jego stopy wymagają trawienia oraz chromianowania lub anodowania. Dla zastosowań zewnętrznych i wymagających rekomenduje się zastosowanie systemów dwuwarstwowych (podkład + nawierzchnia). Prawidłowo przygotowane podłoże decyduje o przyczepności i żywotności powłoki w znacznie większym stopniu niż sam produkt."
  },
  "aplikacja": {
    title: "Aplikacja farb proszkowych",
    content: "Farby proszkowe AMIS nakłada się metodą natrysku elektrostatycznego przy użyciu pistoletów koronowych (napięcie powyżej 30 kV) lub elektrokinetycznych (tribo). Elementy powinny być prawidłowo uziemione. Zalecana grubość powłoki to 60–100 µm, co uzyskuje się przy właściwie dobranych parametrach aplikacji (napięcie, przepływ proszku, odległość pistoletu). Po aplikacji element trafia do pieca utwardzającego. Recyrkulacja proszku z kabin odzysku jest możliwa, jednak powinna być monitorowana — zaleca się nie przekraczać 30% udziału recyrkulatu."
  },
  "utwardzanie": {
    title: "Proces utwardzania",
    content: "Po nałożeniu powłoki proszkowej element poddawany jest procesowi utwardzania (polimeryzacji) w piecu konwekcyjnym lub na podczerwień (IR). Standardowe parametry utwardzania dla produktów AMIS wynoszą 180–200°C w czasie 10–15 minut (mierzone na elemencie). Dostępne są również produkty niskotopliwe przeznaczone do utwardzania w 160–170°C, odpowiednie dla podłoży wrażliwych na wysoką temperaturę (np. MDF, tworzywa sztuczne). Piec powinien zapewniać równomierny rozkład temperatury — dopuszczalna różnica wewnątrz komory to ±5°C. Po wyjęciu z pieca powłoka jest w pełni utwardzona i gotowa do użytku."
  },
};
