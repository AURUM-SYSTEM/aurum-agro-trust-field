import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "fr" | "en";

const STORAGE_KEY = "aurum-lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof content)["fr"] };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "fr" || stored === "en") {
      setLangState(stored);
      return;
    }
    if (navigator.language?.toLowerCase().startsWith("en")) setLangState("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

export const content = {
  fr: {
    nav: {
      links: [
        { href: "#probleme", label: "Le défi" },
        { href: "#solution", label: "Solution" },
        { href: "#fonctionnement", label: "Fonctionnement" },
        { href: "#pour-qui", label: "Pour qui" },
        { href: "#pilote", label: "Pilote" },
      ],
      cta: "Demander une démonstration",
      home: "AURUM SYSTEM — accueil",
      main: "Navigation principale",
      mobile: "Navigation mobile",
      open: "Ouvrir le menu",
      close: "Fermer le menu",
      switchLabel: "Changer de langue",
    },
    hero: {
      eyebrow: "Filière cacao · Conformité EUDR",
      title: "AURUM Agro : des données terrain fiables pour sécuriser votre cacao.",
      subtitle:
        "Collectez, vérifiez et supervisez les informations producteurs et parcelles, même dans les zones sans connexion internet.",
      ctaPrimary: "Demander une démonstration",
      ctaSecondary: "Commencer un pilote",
      stats: [
        { k: "Hors ligne", v: "Collecte sans réseau" },
        { k: "GPS", v: "Parcelles géolocalisées" },
        { k: "EUDR", v: "Preuves préparées" },
      ],
      imageAlt:
        "Agent terrain dans une plantation de cacao utilisant un smartphone pour enregistrer des données",
      badgeTitle: "Parcelle vérifiée",
      badgeText: "GPS + photo + fiche producteur synchronisés",
    },
    probleme: {
      eyebrow: "Le problème",
      title:
        "Le défi n'est plus seulement de collecter les données. C'est de pouvoir leur faire confiance.",
      items: [
        {
          title: "Erreurs d'attribution",
          text: "Des producteurs associés aux mauvaises parcelles, sans moyen simple de le détecter.",
        },
        {
          title: "Données difficiles à vérifier",
          text: "Aucune preuve claire de qui a collecté quoi, où et quand.",
        },
        {
          title: "Pertes de temps aux contrôles",
          text: "Des semaines à reconstituer des dossiers lors des audits et contrôles.",
        },
        {
          title: "Manque de visibilité",
          text: "Peu de lisibilité sur l'activité réelle des équipes sur le terrain.",
        },
      ],
    },
    solution: {
      eyebrow: "La solution",
      title: "Une solution conçue pour les réalités du terrain africain.",
      moduleLabel: "MODULE",
      modules: [
        {
          title: "Collecte terrain hors ligne",
          items: [
            "Enregistrement des producteurs",
            "Géolocalisation GPS des parcelles",
            "Photos et preuves terrain",
            "Fonctionnement sans réseau",
            "Synchronisation automatique au retour de la connexion",
          ],
        },
        {
          title: "Supervision et gouvernance des données",
          items: [
            "Tableau de bord centralisé",
            "Détection des doublons",
            "Historique des actions des agents",
            "Validation des données par les superviseurs",
          ],
        },
        {
          title: "Intelligence artificielle",
          items: [
            "Assistant Agro — Posez vos questions en langage naturel sur vos données terrain et obtenez une réponse immédiate.",
            "Agro Advisor — Synchronise l'ensemble des données collectées pour vous fournir des recommandations personnalisées.",
          ],
        },
        {
          title: "Traçabilité cacao et conformité",
          items: [
            "Fiches producteurs",
            "Informations parcelles",
            "Documents de suivi",
            "Préparation des éléments nécessaires à la conformité EUDR",
          ],
        },
      ],
    },
    carte: {
      eyebrow: "Identité numérique",
      title: "Une identité numérique pour chaque producteur",
      subtitle:
        "Chaque producteur dispose d'une fiche d'identité unique qui permet de relier ses informations, ses parcelles et son historique de suivi.",
      cardBadge: "Exemple — données fictives",
      cardTagline: "Fiche d'identité numérique du producteur",
      cardHeader: "Carte producteur",
      fields: {
        code: "Code producteur",
        coop: "Coopérative",
        loc: "Localisation",
        parcelle: "Parcelle",
      },
      values: {
        nom: "Jean Mballa",
        code: "PRD-20260917-000123",
        coop: "Coopérative Exemple Cacao",
        loc: "Loum, Littoral, Cameroun",
        statut: "Producteur actif",
        parcelle: "1 parcelle enregistrée",
      },
      qrAlt: "QR code décoratif de démonstration, sans donnée réelle",
      qrCaption: "QR code de démonstration",
      cardFooter: "Un producteur identifié, une filière plus forte.",
      points: [
        {
          title: "Identification",
          text: "Un code producteur unique facilite l'identification et le suivi.",
        },
        {
          title: "Traçabilité",
          text: "Les informations du producteur peuvent être reliées aux parcelles et aux données collectées sur le terrain.",
        },
        {
          title: "Suivi",
          text: "Les données peuvent être actualisées au fil des campagnes et des visites terrain.",
        },
        {
          title: "Portabilité",
          text: "L'identité du producteur peut servir de référence lorsqu'il change de campagne, de coopérative ou de partenaire, selon les droits d'accès définis.",
        },
      ],
      disclaimer:
        "Fiche d'identité numérique du producteur dans AURUM AGRO — il ne s'agit ni d'une pièce d'identité nationale, ni d'un document officiel de l'État, ni d'une certification.",
      cta: "Découvrir comment AURUM AGRO vérifie les données",
    },
    fonctionnement: {
      eyebrow: "Comment ça fonctionne",
      title: "Du plant de cacao à la décision, en trois étapes.",
      steps: [
        {
          title: "Collecte sur le terrain",
          text: "Les agents collectent les informations directement dans les plantations.",
        },
        {
          title: "Vérification et supervision",
          text: "Les responsables vérifient et supervisent les données depuis le tableau de bord.",
        },
        {
          title: "Décisions fiables",
          text: "L'entreprise obtient une meilleure visibilité et des données fiables pour ses décisions.",
        },
      ],
    },
    pourQui: {
      eyebrow: "Pour qui ?",
      title: "Conçu pour les organisations qui dépendent du terrain.",
      items: [
        {
          title: "Exportateurs cacao",
          text: "Réduisez les risques liés aux données de votre chaîne d'approvisionnement.",
        },
        { title: "Coopératives", text: "Digitalisez le suivi de vos producteurs avec un outil simple." },
        { title: "Partenaires agricoles", text: "Améliorez le suivi de vos projets terrain." },
      ],
    },
    difference: {
      eyebrow: "Notre différence",
      title: "Pourquoi AURUM Agro ?",
      items: [
        "Pensé pour les zones rurales africaines.",
        "Fonctionne avec une faible connectivité.",
        "Simple pour les agents terrain.",
        "Met la confiance dans la donnée au centre.",
        "Adapté aux réalités locales.",
      ],
    },
    pilote: {
      eyebrow: "Pilote",
      title: "Testez AURUM Agro sur votre terrain.",
      text: "Nous proposons une phase pilote avec un nombre limité de producteurs afin de mesurer l'amélioration de la qualité des données et du suivi terrain.",
      cta: "Planifier un échange",
    },
    apropos: {
      eyebrow: "À propos de AURUM SYSTEM",
      title: "Une plateforme africaine pour transformer les données terrain.",
      text: "AURUM SYSTEM développe des solutions modulaires pour les organisations qui collectent des données sur le terrain. AURUM Agro est notre première application dédiée au cacao.",
      sectorsLabel: "Secteurs futurs",
      sectors: ["Agriculture", "ONG", "Santé", "Sécurité", "Institutions publiques"],
    },
    contact: {
      eyebrow: "Contact",
      title: "Demandez une démonstration AURUM Agro.",
      text: "Présentez-nous votre chaîne d'approvisionnement : nous vous montrons comment fiabiliser vos données terrain et préparer vos preuves de traçabilité.",
      whatsapp: "WhatsApp",
      whatsappHint: "Réponse rapide",
      whatsappMessage: "Bonjour AURUM Agro, je souhaite une démonstration.",
      email: "E-mail",
      testimonials: "Témoignages clients à venir — premiers pilotes en préparation.",
      fields: {
        nom: "Nom et prénom",
        organisation: "Organisation",
        email: "E-mail professionnel",
        telephone: "Téléphone (optionnel)",
        message: "Votre besoin (optionnel)",
      },
      placeholder: "Nombre de producteurs suivis, zones d'intervention, échéances EUDR…",
      submit: "Demander une démonstration",
      note: "Réponse sous 24 heures ouvrées.",
      noteSent: "Merci, votre demande a bien été prise en compte.",
      toastTitle: "Demande envoyée",
      toastText: "Notre équipe vous recontacte sous 24 heures ouvrées.",
      errors: {
        nom: "Indiquez votre nom.",
        organisation: "Indiquez votre organisation.",
        email: "Adresse e-mail invalide.",
      },
    },
    footer: {
      text: "AURUM Agro — des données terrain fiables pour la filière cacao.",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      links: [
        { href: "#probleme", label: "The challenge" },
        { href: "#solution", label: "Solution" },
        { href: "#fonctionnement", label: "How it works" },
        { href: "#pour-qui", label: "Who it's for" },
        { href: "#pilote", label: "Pilot" },
      ],
      cta: "Request a demo",
      home: "AURUM SYSTEM — home",
      main: "Main navigation",
      mobile: "Mobile navigation",
      open: "Open menu",
      close: "Close menu",
      switchLabel: "Change language",
    },
    hero: {
      eyebrow: "Cocoa supply chain · EUDR compliance",
      title: "AURUM Agro: reliable field data to secure your cocoa.",
      subtitle:
        "Collect, verify and supervise farmer and plot information, even in areas with no internet connection.",
      ctaPrimary: "Request a demo",
      ctaSecondary: "Start a pilot",
      stats: [
        { k: "Offline", v: "Collection without network" },
        { k: "GPS", v: "Geolocated plots" },
        { k: "EUDR", v: "Evidence ready" },
      ],
      imageAlt:
        "Field agent in a cocoa plantation using a smartphone to record data",
      badgeTitle: "Plot verified",
      badgeText: "GPS + photo + farmer record synchronised",
    },
    probleme: {
      eyebrow: "The problem",
      title: "The challenge is no longer collecting data. It is being able to trust it.",
      items: [
        {
          title: "Attribution errors",
          text: "Farmers linked to the wrong plots, with no simple way to detect it.",
        },
        {
          title: "Data that is hard to verify",
          text: "No clear proof of who collected what, where and when.",
        },
        {
          title: "Time lost during audits",
          text: "Weeks spent rebuilding files for audits and inspections.",
        },
        {
          title: "Lack of visibility",
          text: "Little clarity on what field teams are actually doing.",
        },
      ],
    },
    solution: {
      eyebrow: "The solution",
      title: "A solution built for the realities of the African field.",
      moduleLabel: "MODULE",
      modules: [
        {
          title: "Offline field collection",
          items: [
            "Farmer registration",
            "GPS geolocation of plots",
            "Photos and field evidence",
            "Works without network",
            "Automatic sync when connection returns",
          ],
        },
        {
          title: "Data supervision and governance",
          items: [
            "Centralised dashboard",
            "Duplicate detection",
            "Agent activity history",
            "Data validation by supervisors",
          ],
        },
        {
          title: "Artificial intelligence",
          items: [
            "Assistant Agro — Ask questions about your field data in plain language and get an instant answer.",
            "Agro Advisor — Synchronises all collected data to give you tailored recommendations.",
          ],
        },
        {
          title: "Cocoa traceability and compliance",
          items: [
            "Farmer records",
            "Plot information",
            "Monitoring documents",
            "Preparation of the evidence required for EUDR compliance",
          ],
        },
      ],
    },
    carte: {
      eyebrow: "Digital identity",
      title: "A digital identity for every farmer",
      subtitle:
        "Each farmer has a unique identity record that links their information, plots and follow-up history.",
      cardBadge: "Sample — fictional data",
      cardTagline: "Farmer digital identity record",
      cardHeader: "Farmer card",
      fields: {
        code: "Farmer code",
        coop: "Cooperative",
        loc: "Location",
        parcelle: "Plot",
      },
      values: {
        nom: "Jean Mballa",
        code: "PRD-20260917-000123",
        coop: "Sample Cocoa Cooperative",
        loc: "Loum, Littoral, Cameroon",
        statut: "Active farmer",
        parcelle: "1 registered plot",
      },
      qrAlt: "Decorative demonstration QR code, with no real data",
      qrCaption: "Demonstration QR code",
      cardFooter: "A farmer identified, a stronger supply chain.",
      points: [
        {
          title: "Identification",
          text: "A unique farmer code makes identification and follow-up easier.",
        },
        {
          title: "Traceability",
          text: "Farmer information can be linked to plots and to the data collected in the field.",
        },
        {
          title: "Monitoring",
          text: "Data can be updated across seasons and field visits.",
        },
        {
          title: "Portability",
          text: "The farmer's identity can serve as a reference when they change season, cooperative or partner, according to the access rights defined.",
        },
      ],
      disclaimer:
        "Digital identity record of the farmer within AURUM AGRO — it is neither a national identity document, nor an official government document, nor a certification.",
      cta: "Discover how AURUM AGRO verifies the data",
    },
    fonctionnement: {
      eyebrow: "How it works",
      title: "From the cocoa tree to the decision, in three steps.",
      steps: [
        {
          title: "Field collection",
          text: "Agents collect information directly in the plantations.",
        },
        {
          title: "Verification and supervision",
          text: "Managers verify and supervise the data from the dashboard.",
        },
        {
          title: "Reliable decisions",
          text: "The company gains better visibility and trustworthy data for its decisions.",
        },
      ],
    },
    pourQui: {
      eyebrow: "Who it's for",
      title: "Built for organisations that depend on the field.",
      items: [
        {
          title: "Cocoa exporters",
          text: "Reduce the data risks across your supply chain.",
        },
        { title: "Cooperatives", text: "Digitalise farmer monitoring with a simple tool." },
        { title: "Agricultural partners", text: "Improve the follow-up of your field projects." },
      ],
    },
    difference: {
      eyebrow: "Our difference",
      title: "Why AURUM Agro?",
      items: [
        "Designed for rural African areas.",
        "Works with low connectivity.",
        "Simple for field agents.",
        "Puts trust in data at the centre.",
        "Adapted to local realities.",
      ],
    },
    pilote: {
      eyebrow: "Pilot",
      title: "Test AURUM Agro on your own field.",
      text: "We offer a pilot phase with a limited number of farmers to measure the improvement in data quality and field monitoring.",
      cta: "Schedule a call",
    },
    apropos: {
      eyebrow: "About AURUM SYSTEM",
      title: "An African platform to transform field data.",
      text: "AURUM SYSTEM builds modular solutions for organisations that collect data in the field. AURUM Agro is our first application dedicated to cocoa.",
      sectorsLabel: "Future sectors",
      sectors: ["Agriculture", "NGOs", "Health", "Security", "Public institutions"],
    },
    contact: {
      eyebrow: "Contact",
      title: "Request an AURUM Agro demo.",
      text: "Tell us about your supply chain: we will show you how to make your field data reliable and prepare your traceability evidence.",
      whatsapp: "WhatsApp",
      whatsappHint: "Fast reply",
      whatsappMessage: "Hello AURUM Agro, I would like a demo.",
      email: "Email",
      testimonials: "Client testimonials coming soon — first pilots in preparation.",
      fields: {
        nom: "Full name",
        organisation: "Organisation",
        email: "Work email",
        telephone: "Phone (optional)",
        message: "Your needs (optional)",
      },
      placeholder: "Number of farmers monitored, areas covered, EUDR deadlines…",
      submit: "Request a demo",
      note: "Reply within 24 business hours.",
      noteSent: "Thank you, your request has been received.",
      toastTitle: "Request sent",
      toastText: "Our team will get back to you within 24 business hours.",
      errors: {
        nom: "Please enter your name.",
        organisation: "Please enter your organisation.",
        email: "Invalid email address.",
      },
    },
    footer: {
      text: "AURUM Agro — reliable field data for the cocoa supply chain.",
      rights: "All rights reserved.",
    },
  },
};
