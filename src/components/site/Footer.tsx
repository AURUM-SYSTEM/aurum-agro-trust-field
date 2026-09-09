import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="surface-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="text-ink-foreground">
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            {t.footer.text}
          </p>
        </div>
        <p className="text-xs text-ink-foreground/60">
          © {new Date().getFullYear()} AURUM SYSTEM. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
