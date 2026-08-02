import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="surface-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="text-ink-foreground">
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            AURUM Agro — des données terrain fiables pour la filière cacao.
          </p>
        </div>
        <p className="text-xs text-ink-foreground/60">
          © {new Date().getFullYear()} AURUM SYSTEM. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
