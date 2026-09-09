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
import { useI18n } from "@/lib/i18n";

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
  const { t } = useI18n();
  const h = t.hero;
  return (
    <section id="top" className="surface-soft relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3 py-1.5 text-primary">
            <Leaf className="size-3.5" /> {h.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
            {h.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {h.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="shadow-soft">
              <a href="#contact">{h.ctaPrimary}</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#pilote">{h.ctaSecondary}</a>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            {h.stats.map((s) => (
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
              alt={h.imageAlt}
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
                <p className="text-sm font-semibold text-card-foreground">{h.badgeTitle}</p>
                <p className="text-xs text-muted-foreground">{h.badgeText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const problemIcons = [AlertTriangle, FileSearch, Timer, Eye];

export function Probleme() {
  const { t } = useI18n();
  return (
    <Section id="probleme">
      <div className="max-w-3xl">
        <span className="eyebrow text-primary">{t.probleme.eyebrow}</span>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {t.probleme.title}
        </h2>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {t.probleme.items.map((p, i) => {
          const Icon = problemIcons[i]!;
          return (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-soft"
            >
              <Icon className="size-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const moduleIcons = [CloudOff, BarChart3, BrainCircuit, ShieldCheck];

export function Solution() {
  const { t } = useI18n();
  return (
    <Section id="solution" className="bg-surface">
      <div className="max-w-3xl">
        <span className="eyebrow text-primary">{t.solution.eyebrow}</span>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {t.solution.title}
        </h2>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {t.solution.modules.map((m, idx) => {
          const Icon = moduleIcons[idx]!;
          return (
            <article
              key={m.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <span className="font-display text-sm font-bold tracking-widest text-muted-foreground">
                  {t.solution.moduleLabel} 0{idx + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-card-foreground">{m.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {m.items.map((i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

const stepIcons = [MapPin, ClipboardCheck, BarChart3];

export function Fonctionnement() {
  const { t } = useI18n();
  return (
    <Section id="fonctionnement">
      <div className="max-w-3xl">
        <span className="eyebrow text-primary">{t.fonctionnement.eyebrow}</span>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {t.fonctionnement.title}
        </h2>
      </div>
      <ol className="mt-12 grid gap-6 lg:grid-cols-3">
        {t.fonctionnement.steps.map((s, i) => {
          const Icon = stepIcons[i]!;
          return (
            <li key={s.title} className="relative rounded-2xl border border-border bg-card p-7">
              <span className="font-display text-5xl font-bold text-primary/15">0{i + 1}</span>
              <Icon className="mt-3 size-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

const audienceIcons = [ShieldCheck, Users, Leaf];

export function PourQui() {
  const { t } = useI18n();
  return (
    <Section id="pour-qui" className="bg-surface">
      <div className="max-w-3xl">
        <span className="eyebrow text-primary">{t.pourQui.eyebrow}</span>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {t.pourQui.title}
        </h2>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {t.pourQui.items.map((a, i) => {
          const Icon = audienceIcons[i]!;
          return (
            <div key={a.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <Icon className="size-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const diffIcons = [MapPin, Wifi, Users, ShieldCheck, Leaf];

export function Difference() {
  const { t } = useI18n();
  return (
    <section className="surface-deep py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow text-gold">{t.difference.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-ink-foreground sm:text-4xl">
            {t.difference.title}
          </h2>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.difference.items.map((d, i) => {
            const Icon = diffIcons[i]!;
            return (
              <li
                key={d}
                className="flex items-start gap-3 rounded-2xl border border-ink-foreground/12 bg-ink-foreground/6 p-6 backdrop-blur-sm"
              >
                <Icon className="mt-0.5 size-5 shrink-0 text-gold" />
                <span className="text-sm leading-relaxed text-ink-foreground/90">{d}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Pilote() {
  const { t } = useI18n();
  return (
    <Section id="pilote">
      <div className="rounded-3xl border border-border bg-card p-8 shadow-lift sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow text-primary">{t.pilote.eyebrow}</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-card-foreground sm:text-4xl">
              {t.pilote.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {t.pilote.text}
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#contact">{t.pilote.cta}</a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function APropos() {
  const { t } = useI18n();
  return (
    <Section id="a-propos" className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow text-primary">{t.apropos.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {t.apropos.title}
          </h2>
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted-foreground">{t.apropos.text}</p>
          <p className="eyebrow mt-8 text-muted-foreground">{t.apropos.sectorsLabel}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {t.apropos.sectors.map((s) => (
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
