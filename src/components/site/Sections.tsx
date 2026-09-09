import {
  AlertTriangle,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  CloudOff,
  Eye,
  FileSearch,
  Leaf,
  MapPin,
  ShieldCheck,
  Timer,
  Users,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-agent.jpg";

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 lg:px-8">{children}</div>
    </section>
  );
}

export function Hero() {
  return (
    <section id="top" className="surface-soft relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3 py-1.5 text-primary">
            <Leaf className="size-3.5" /> Filière cacao · Conformité EUDR
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
            AURUM Agro : des données terrain fiables pour sécuriser votre cacao.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Collectez, vérifiez et supervisez les informations producteurs et parcelles, même dans
            les zones sans connexion internet.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="shadow-soft">
              <a href="#contact">Demander une démonstration</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#pilote">Commencer un pilote</a>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              { k: "Hors ligne", v: "Collecte sans réseau" },
              { k: "GPS", v: "Parcelles géolocalisées" },
              { k: "EUDR", v: "Preuves préparées" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-sm font-bold text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={heroImage}
              alt="Agent terrain dans une plantation de cacao utilisant un smartphone pour enregistrer des données"
              width={1408}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-border bg-card p-4 shadow-lift sm:left-8 sm:right-auto sm:w-72">
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <CheckCircle2 className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-card-foreground">Parcelle vérifiée</p>
                <p className="text-xs text-muted-foreground">
                  GPS + photo + fiche producteur synchronisés
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const problems = [
  {
    icon: AlertTriangle,
    title: "Erreurs d'attribution",
    text: "Des producteurs associés aux mauvaises parcelles, sans moyen simple de le détecter.",
  },
  {
    icon: FileSearch,
    title: "Données difficiles à vérifier",
    text: "Aucune preuve claire de qui a collecté quoi, où et quand.",
  },
  {
    icon: Timer,
    title: "Pertes de temps aux contrôles",
    text: "Des semaines à reconstituer des dossiers lors des audits et contrôles.",
  },
  {
    icon: Eye,
    title: "Manque de visibilité",
    text: "Peu de lisibilité sur l'activité réelle des équipes sur le terrain.",
  },
];

export function Probleme() {
  return (
    <Section id="probleme">
      <div className="max-w-3xl">
        <span className="eyebrow text-primary">Le problème</span>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Le défi n'est plus seulement de collecter les données. C'est de pouvoir leur faire
          confiance.
        </h2>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {problems.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-soft"
          >
            <p.icon className="size-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold text-card-foreground">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const modules = [
  {
    n: "01",
    icon: CloudOff,
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
    n: "02",
    icon: BarChart3,
    title: "Supervision et gouvernance des données",
    items: [
      "Tableau de bord centralisé",
      "Détection des doublons",
      "Historique des actions des agents",
      "Validation des données par les superviseurs",
    ],
  },
  {
    n: "03",
    icon: BrainCircuit,
    title: "Intelligence artificielle",
    items: [
      "Assistant Agro — Posez vos questions en langage naturel sur vos données terrain et obtenez une réponse immédiate.",
      "Agro Advisor — Synchronise l'ensemble des données collectées pour vous fournir des recommandations personnalisées.",
    ],
  },
  {
    n: "04",
    icon: ShieldCheck,
    title: "Traçabilité cacao et conformité",
    items: [
      "Fiches producteurs",
      "Informations parcelles",
      "Documents de suivi",
      "Préparation des éléments nécessaires à la conformité EUDR",
    ],
  },
];

export function Solution() {
  return (
    <Section id="solution" className="bg-surface">
      <div className="max-w-3xl">
        <span className="eyebrow text-primary">La solution</span>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Une solution conçue pour les réalités du terrain africain.
        </h2>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {modules.map((m) => (
          <article
            key={m.n}
            className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <m.icon className="size-5" />
              </span>
              <span className="font-display text-sm font-bold tracking-widest text-muted-foreground">
                MODULE {m.n}
              </span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-card-foreground">{m.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {m.items.map((i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

const steps = [
  {
    icon: MapPin,
    title: "Collecte sur le terrain",
    text: "Les agents collectent les informations directement dans les plantations.",
  },
  {
    icon: ClipboardCheck,
    title: "Vérification et supervision",
    text: "Les responsables vérifient et supervisent les données depuis le tableau de bord.",
  },
  {
    icon: BarChart3,
    title: "Décisions fiables",
    text: "L'entreprise obtient une meilleure visibilité et des données fiables pour ses décisions.",
  },
];

export function Fonctionnement() {
  return (
    <Section id="fonctionnement">
      <div className="max-w-3xl">
        <span className="eyebrow text-primary">Comment ça fonctionne</span>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Du plant de cacao à la décision, en trois étapes.
        </h2>
      </div>
      <ol className="mt-12 grid gap-6 lg:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="relative rounded-2xl border border-border bg-card p-7">
            <span className="font-display text-5xl font-bold text-primary/15">0{i + 1}</span>
            <s.icon className="mt-3 size-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold text-card-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const audiences = [
  {
    icon: ShieldCheck,
    title: "Exportateurs cacao",
    text: "Réduisez les risques liés aux données de votre chaîne d'approvisionnement.",
  },
  {
    icon: Users,
    title: "Coopératives",
    text: "Digitalisez le suivi de vos producteurs avec un outil simple.",
  },
  {
    icon: Leaf,
    title: "Partenaires agricoles",
    text: "Améliorez le suivi de vos projets terrain.",
  },
];

export function PourQui() {
  return (
    <Section id="pour-qui" className="bg-surface">
      <div className="max-w-3xl">
        <span className="eyebrow text-primary">Pour qui ?</span>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Conçu pour les organisations qui dépendent du terrain.
        </h2>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {audiences.map((a) => (
          <div key={a.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <a.icon className="size-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold text-card-foreground">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const diffs = [
  { icon: MapPin, text: "Pensé pour les zones rurales africaines." },
  { icon: Wifi, text: "Fonctionne avec une faible connectivité." },
  { icon: Users, text: "Simple pour les agents terrain." },
  { icon: ShieldCheck, text: "Met la confiance dans la donnée au centre." },
  { icon: Leaf, text: "Adapté aux réalités locales." },
];

export function Difference() {
  return (
    <section className="surface-deep py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow text-gold">Notre différence</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-ink-foreground sm:text-4xl">
            Pourquoi AURUM Agro ?
          </h2>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diffs.map((d) => (
            <li
              key={d.text}
              className="flex items-start gap-3 rounded-2xl border border-ink-foreground/12 bg-ink-foreground/6 p-6 backdrop-blur-sm"
            >
              <d.icon className="mt-0.5 size-5 shrink-0 text-gold" />
              <span className="text-sm leading-relaxed text-ink-foreground/90">{d.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Pilote() {
  return (
    <Section id="pilote">
      <div className="rounded-3xl border border-border bg-card p-8 shadow-lift sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow text-primary">Pilote</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-card-foreground sm:text-4xl">
              Testez AURUM Agro sur votre terrain.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Nous proposons une phase pilote avec un nombre limité de producteurs afin de mesurer
              l'amélioration de la qualité des données et du suivi terrain.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#contact">Planifier un échange</a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

const sectors = ["Agriculture", "ONG", "Santé", "Sécurité", "Institutions publiques"];

export function APropos() {
  return (
    <Section id="a-propos" className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow text-primary">À propos de AURUM SYSTEM</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Une plateforme africaine pour transformer les données terrain.
          </h2>
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted-foreground">
            AURUM SYSTEM développe des solutions modulaires pour les organisations qui collectent
            des données sur le terrain. AURUM Agro est notre première application dédiée au cacao.
          </p>
          <p className="eyebrow mt-8 text-muted-foreground">Secteurs futurs</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {sectors.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
