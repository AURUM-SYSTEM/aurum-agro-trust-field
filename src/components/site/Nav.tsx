import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  return (
    <div
      className={`inline-flex items-center rounded-full border border-border p-0.5 ${className}`}
      role="group"
      aria-label={t.nav.switchLabel}
    >
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label={t.nav.home}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={t.nav.main}>
          {t.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitch />
          <Button asChild size="sm">
            <a href="#contact">{t.nav.cta}</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangSwitch />
          <button
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.close : t.nav.open}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col" aria-label={t.nav.mobile}>
            {t.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Button asChild className="mt-4 w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              {t.nav.cta}
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
