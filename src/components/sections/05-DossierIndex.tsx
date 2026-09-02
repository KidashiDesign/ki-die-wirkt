interface DossierRow {
  nr: string;
  title: string;
  meta: string;
  status: "live" | "scenario";
  href: string;
  featured?: boolean;
}

const rows: DossierRow[] = [
  {
    nr: "01",
    title: "KI, die im Haus bleibt",
    meta: "Maschinenbau · Produktion",
    status: "live",
    href: "#uc-01",
  },
  {
    nr: "02",
    title: "Erfahrung, die bleibt",
    meta: "Maschinenbau · Wissen",
    status: "live",
    href: "#uc-02",
  },
  {
    nr: "03",
    title: "Das CRM, das sich selbst pflegt",
    meta: "B2B-Vertrieb · Sprach-KI",
    status: "scenario",
    href: "#uc-03",
    featured: true,
  },
];

export default function DossierIndex() {
  return (
    <section id="dossier" className="border-t border-border px-6 py-24 sm:px-10">
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-6">
        <h2 className="font-display text-4xl uppercase leading-none sm:text-6xl">
          Drei Fälle. Ein Muster.
        </h2>
        <p className="hidden font-mono text-xs uppercase tracking-widest text-fg-muted sm:block">
          (Dossier öffnen)
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl divide-y divide-border border-y border-border">
        {rows.map((row) => (
          <a
            key={row.nr}
            href={row.href}
            className={`flex flex-col gap-2 py-6 pl-4 transition-colors hover:bg-bg-raised sm:flex-row sm:items-center sm:justify-between ${
              row.featured ? "border-l-2 border-accent" : "border-l-2 border-transparent"
            }`}
          >
            <div className="flex items-baseline gap-6">
              <span
                className={`font-mono text-sm ${row.featured ? "text-accent" : "text-fg-muted"}`}
              >
                {row.nr}
              </span>
              <span className="font-display text-xl uppercase sm:text-2xl">{row.title}</span>
            </div>
            <div className="flex items-center gap-6 pl-16 sm:pl-0">
              <span className="font-mono text-xs uppercase tracking-widest text-fg-muted">
                {row.meta}
              </span>
              <span
                className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${
                  row.status === "live" ? "text-accent" : "text-fg-muted"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    row.status === "live" ? "bg-accent" : "bg-fg-muted"
                  }`}
                />
                {row.status === "live" ? "Im Einsatz" : "Szenario"}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
