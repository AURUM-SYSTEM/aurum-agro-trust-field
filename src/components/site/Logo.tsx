export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`grid size-9 place-items-center rounded-lg ${
          inverted ? "bg-ink-foreground/15" : "bg-primary"
        }`}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M12 3l7.5 17H16l-4-9.6L8 20H4.5L12 3z"
            fill={inverted ? "currentColor" : "var(--primary-foreground)"}
            className={inverted ? "text-gold" : undefined}
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-sm font-bold tracking-[0.14em] ${
            inverted ? "text-ink-foreground" : "text-foreground"
          }`}
        >
          AURUM
        </span>
        <span
          className={`block text-[10px] font-semibold tracking-[0.28em] ${
            inverted ? "text-ink-foreground/60" : "text-muted-foreground"
          }`}
        >
          SYSTEM
        </span>
      </span>
    </span>
  );
}
