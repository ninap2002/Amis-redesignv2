import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Laboratory from "@/pages/Laboratory";
import Certificates from "@/pages/Certificates";
import Contact from "@/pages/Contact";
import GenericPage from "@/pages/GenericPage";
import NotFound from "@/pages/not-found";

// Redirect component for old URLs
import { Redirect } from "@/components/Redirects";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Old URL Redirects */}
      <Route path="/1/strona-glowna"><Redirect to="/" /></Route>
      <Route path="/pl/o-firmie"><Redirect to="/o-firmie" /></Route>
      <Route path="/pl/o-firmie/siec-dystrybucji"><Redirect to="/o-firmie/siec-dystrybucji" /></Route>
      <Route path="/pl/o-firmie/referencje"><Redirect to="/o-firmie/referencje" /></Route>
      <Route path="/pl/skontaktuj-sie-z-nami"><Redirect to="/kontakt" /></Route>
      <Route path="/pl/formularz-kontaktowy"><Redirect to="/kontakt" /></Route>
      <Route path="/pl/produkty"><Redirect to="/produkty" /></Route>
      <Route path="/pl/produkty/amipol"><Redirect to="/produkty/amipol" /></Route>
      <Route path="/pl/produkty/amipox"><Redirect to="/produkty/amipox" /></Route>
      <Route path="/pl/produkty/amiksyd"><Redirect to="/produkty/amiksyd" /></Route>
      <Route path="/pl/produkty/zapytanie-o-karty-techniczne"><Redirect to="/produkty/zapytanie" /></Route>
      <Route path="/pl/laboratorium"><Redirect to="/laboratorium" /></Route>
      <Route path="/pl/dlaczego-amis-farby-proszkowe"><Redirect to="/" /></Route>
      <Route path="/pl/b2b"><Redirect to="/b2b" /></Route>
      <Route path="/pl/atesty-i-certyfikaty"><Redirect to="/atesty-i-certyfikaty" /></Route>
      <Route path="/pl/o-farbach-proszkowych"><Redirect to="/o-farbach-proszkowych" /></Route>
      <Route path="/pl/o-farbach-proszkowych/zalety-farb-proszkowych"><Redirect to="/o-farbach-proszkowych/zalety" /></Route>
      <Route path="/pl/o-farbach-proszkowych/teoretyczna-wydajnosc"><Redirect to="/o-farbach-proszkowych/wydajnosc" /></Route>
      <Route path="/pl/o-farbach-proszkowych/zastosowanie"><Redirect to="/o-farbach-proszkowych/zastosowanie" /></Route>
      <Route path="/pl/o-farbach-proszkowych/dostepne-kolory-i-efekty"><Redirect to="/o-farbach-proszkowych/kolory" /></Route>
      <Route path="/pl/o-farbach-proszkowych/proces-produkcji"><Redirect to="/o-farbach-proszkowych/produkcja" /></Route>
      <Route path="/pl/o-farbach-proszkowych/kontrola-jakosci"><Redirect to="/o-farbach-proszkowych/jakosc" /></Route>
      <Route path="/pl/o-farbach-proszkowych/przechowywanie"><Redirect to="/o-farbach-proszkowych/przechowywanie" /></Route>
      <Route path="/pl/o-farbach-proszkowych/przygotowanie-podloza"><Redirect to="/o-farbach-proszkowych/podloze" /></Route>
      <Route path="/pl/o-farbach-proszkowych/aplikacja-farb-proszkowych"><Redirect to="/o-farbach-proszkowych/aplikacja" /></Route>
      <Route path="/pl/o-farbach-proszkowych/proces-utwardzania"><Redirect to="/o-farbach-proszkowych/utwardzanie" /></Route>
      <Route path="/pl/regulamin-b2b"><Redirect to="/regulamin-b2b" /></Route>
      <Route path="/pl/systemy-antykorozyjne-amis"><Redirect to="/systemy-antykorozyjne" /></Route>
      <Route path="/pl/kontakt"><Redirect to="/kontakt" /></Route>
      <Route path="/pl/kontakt/przedstawiciele-rynek-krajowy"><Redirect to="/kontakt/przedstawiciele" /></Route>
      <Route path="/pl/kontakt/dzial-eksportu"><Redirect to="/kontakt/eksport" /></Route>
      <Route path="/pl/aktualnosci"><Redirect to="/aktualnosci" /></Route>
      <Route path="/pl/projekty-ue"><Redirect to="/projekty-ue" /></Route>
      <Route path="/pl/praca"><Redirect to="/praca" /></Route>

      {/* Main Routes */}
      <Route path="/" component={Home} />
      <Route path="/o-firmie" component={About} />
      <Route path="/produkty" component={Products} />
      <Route path="/produkty/zapytanie">
        {() => <GenericPage title="Zapytanie o karty techniczne" content="Prosimy o kontakt przez formularz w dziale Kontakt w celu uzyskania kart technicznych produktów." />}
      </Route>
      <Route path="/produkty/:slug" component={ProductDetail} />
      <Route path="/laboratorium" component={Laboratory} />
      <Route path="/atesty-i-certyfikaty" component={Certificates} />
      <Route path="/o-farbach-proszkowych">
        {() => <GenericPage title="Baza wiedzy o farbach proszkowych" content="Wybierz interesujący Cię temat z menu, aby dowiedzieć się więcej o produkcji, zastosowaniu i zaletach farb proszkowych." />}
      </Route>
      <Route path="/o-farbach-proszkowych/:slug">
        {() => <GenericPage isSubpage={true} />}
      </Route>
      <Route path="/kontakt" component={Contact} />
      
      {/* Informational Pages */}
      <Route path="/b2b">
        {() => <GenericPage title="Strefa B2B" content="Platforma hurtowa dostępna wyłącznie dla zweryfikowanych partnerów biznesowych. Skontaktuj się z działem handlowym, aby uzyskać dostęp." />}
      </Route>
      <Route path="/aktualnosci">
        {() => <GenericPage title="Aktualności" content="Brak nowych wiadomości w tym momencie." />}
      </Route>
      <Route path="/projekty-ue">
        {() => <GenericPage title="Projekty UE" content="Amis Farby Proszkowe Sp. z o.o. bierze czynny udział w programach dofinansowywanych ze środków Unii Europejskiej." />}
      </Route>
      <Route path="/praca">
        {() => <GenericPage title="Praca / Kariera" content="Aktualnie nie prowadzimy rekrutacji. Zachęcamy do przesłania CV na adres biuro@amis.pl w celu umieszczenia w bazie kandydatów." />}
      </Route>
      <Route path="/systemy-antykorozyjne">
        {() => <GenericPage title="Systemy antykorozyjne" content="Specjalistyczne rozwiązania zapewniające ochronę elementów metalowych w środowiskach silnie korozyjnych." />}
      </Route>
      <Route path="/regulamin-b2b">
        {() => <GenericPage title="Regulamin B2B" content="Szczegółowy regulamin korzystania z platformy hurtowej dostępny jest dla zalogowanych partnerów." />}
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
