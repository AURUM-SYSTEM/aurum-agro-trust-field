import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const links = [
  { href: "#probleme", label: "Le défi" },
  { href: "#solution", label: "Solution" },
  { href: "#fonctionnement", label: "Fonctionnement" },
  { href: "#pour-qui", label: "Pour qui" },
  { href: "#pilote", label: "Pilote" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label="AURUM SYSTEM — accueil">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <a href="#contact">Demander une démonstration</a>
          </Button>
        </div>

        <button
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col" aria-label="Navigation mobile">
            {links.map((l) => (
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
              Demander une démonstration
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
