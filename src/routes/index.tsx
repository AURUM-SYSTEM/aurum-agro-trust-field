import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import {
  Hero,
  Probleme,
  Solution,
  Fonctionnement,
  PourQui,
  Difference,
  Pilote,
  APropos,
} from "@/components/site/Sections";
import { CarteProducteur } from "@/components/site/CarteProducteur";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { LanguageProvider } from "@/lib/i18n";

const title = "AURUM Agro — Données terrain fiables pour la filière cacao";
const description =
  "AURUM Agro aide les exportateurs de cacao, coopératives et partenaires agricoles à fiabiliser leurs données terrain et préparer leur conformité EUDR, même hors connexion.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Nav />
        <main>
          <Hero />
          <Probleme />
          <Solution />
          <CarteProducteur />
          <Fonctionnement />
          <PourQui />
          <Difference />
          <Pilote />
          <APropos />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
