import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const EMAIL = "aurumsystem76@gmail.com";
const WHATSAPP = "237695599387";


const schema = z.object({
  nom: z.string().trim().min(2, "Indiquez votre nom.").max(100),
  organisation: z.string().trim().min(2, "Indiquez votre organisation.").max(120),
  email: z.string().trim().email("Adresse e-mail invalide.").max(255),
  telephone: z.string().trim().max(40).optional(),
  message: z.string().trim().max(1000).optional(),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    setSent(true);
    toast.success("Demande envoyée", {
      description: "Notre équipe vous recontacte sous 24 heures ouvrées.",
    });
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <span className="eyebrow text-primary">Contact</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Demandez une démonstration AURUM Agro.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Présentez-nous votre chaîne d'approvisionnement : nous vous montrons comment fiabiliser
              vos données terrain et préparer vos preuves de traçabilité.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  "Bonjour AURUM Agro, je souhaite une démonstration.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <MessageCircle className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-card-foreground">WhatsApp</span>
                  <span className="block text-xs text-muted-foreground">Réponse rapide</span>
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-card-foreground">E-mail</span>
                  <span className="block text-xs text-muted-foreground">{EMAIL}</span>
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-dashed border-border p-4">
                <span className="grid size-10 place-items-center rounded-lg bg-muted text-muted-foreground">
                  <Phone className="size-5" />
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">
                  Témoignages clients à venir — premiers pilotes en préparation.
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-7 shadow-lift sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nom et prénom" name="nom" error={errors["nom"]} />
              <Field label="Organisation" name="organisation" error={errors["organisation"]} />
              <Field label="E-mail professionnel" name="email" type="email" error={errors["email"]} />
              <Field label="Téléphone (optionnel)" name="telephone" error={errors["telephone"]} />
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Votre besoin (optionnel)</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                maxLength={1000}
                placeholder="Nombre de producteurs suivis, zones d'intervention, échéances EUDR…"
              />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full">
              Demander une démonstration
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              {sent
                ? "Merci, votre demande a bien été prise en compte."
                : "Réponse sous 24 heures ouvrées."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string | undefined;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} maxLength={255} aria-invalid={!!error} />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
