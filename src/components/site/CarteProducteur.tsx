import {
  BadgeCheck,
  Building2,
  Hash,
  MapPin,
  Map as MapIcon,
  QrCode,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import qrDemo from "@/assets/qr-demo.svg";

function Field({
  icon: Icon,
  label,
  value,
  strong = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</p>
        <p
          className={`break-words text-sm text-card-foreground ${
            strong ? "font-display font-bold" : "font-medium"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export function CarteProducteur() {
  const { t } = useI18n();
  const c = t.carte;

  return (
    <section id="carte" className="scroll-mt-20 bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow text-primary">{c.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {c.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {c.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:items-center lg:gap-16">
          {/* Carte producteur (visuel de démonstration) */}
          <div className="relative mx-auto w-full max-w-sm">
            <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-card px-3 py-1 text-[11px] font-semibold text-muted-foreground shadow-soft">
              {c.cardBadge}
            </span>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
              {/* En-tête */}
              <div className="surface-deep flex items-center justify-between px-6 pb-5 pt-6">
                <div className="leading-tight">
                  <p className="font-display text-lg font-bold tracking-tight text-ink-foreground">
                    AURUM <span className="text-gold">AGRO</span>
                  </p>
                  <p className="mt-0.5 text-[11px] text-ink-foreground/70">{c.cardTagline}</p>
                </div>
                <span className="rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-foreground">
                  {c.cardHeader}
                </span>
              </div>

              {/* Corps */}
              <div className="grid grid-cols-[1fr_auto] gap-4 p-6 sm:gap-5">
                <div className="min-w-0 space-y-3.5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-16 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <UserRound className="size-8" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-base font-bold leading-tight text-card-foreground">
                        {c.values.nom}
                      </p>
                      <p className="mt-1 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                        <BadgeCheck className="size-3" /> {c.values.statut}
                      </p>
                    </div>
                  </div>
                  <Field icon={Hash} label={c.fields.code} value={c.values.code} strong />
                  <Field icon={Building2} label={c.fields.coop} value={c.values.coop} />
                  <Field icon={MapPin} label={c.fields.loc} value={c.values.loc} />
                  <Field icon={MapIcon} label={c.fields.parcelle} value={c.values.parcelle} />
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="rounded-xl border border-border bg-white p-2">
                    <img
                      src={qrDemo}
                      alt={c.qrAlt}
                      width={88}
                      height={88}
                      loading="lazy"
                      className="size-[88px]"
                    />
                  </div>
                  <p className="flex items-center gap-1 text-[10px] leading-tight text-muted-foreground">
                    <QrCode className="size-3 shrink-0" /> {c.qrCaption}
                  </p>
                </div>
              </div>

              {/* Bandeau bas */}
              <div className="flex items-center gap-3 border-t border-border bg-primary/5 px-6 py-4">
                <ShieldCheck className="size-5 shrink-0 text-primary" />
                <p className="text-xs font-semibold leading-snug text-card-foreground">
                  {c.cardFooter}
                </p>
              </div>
            </div>
          </div>

          {/* Explication en 4 points */}
          <div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {c.points.map((p, i) => (
                <li
                  key={p.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="grid size-8 place-items-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-card-foreground">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{c.disclaimer}</p>
            <Button asChild size="lg" className="mt-6 shadow-soft">
              <a href="#fonctionnement">{c.cta}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
