interface DossierRow {
  nr: string;
  title: string;
  meta: string;
  status: "live" | "scenario";
  featured?: boolean;
}

const rows: DossierRow[] = [
  {
    nr: "01",
    title: "KI, die im Haus bleibt",
    meta: "Maschinenbau · Produktion",
    status: "live",
  },
  {
    nr: "02",
    title: "Erfahrung, die bleibt",
    meta: "Maschinenbau · Wissen",
    status: "live",
  },
  {
    nr: "03",
    title: "Das CRM, das sich selbst pflegt",
    meta: "B2B-Vertrieb · Sprach-KI",
    status: "scenario",
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
          (Übersicht)
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl divide-y divide-border border-y border-border">
        {rows.map((row) => (
          <div
            key={row.nr}
            className={`group relative flex cursor-default flex-col gap-2 overflow-hidden py-6 pl-4 transition-colors duration-300 hover:bg-bg-raised sm:flex-row sm:items-center sm:justify-between ${
              row.featured ? "border-l-2 border-accent" : "border-l-2 border-transparent"
            }`}
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 select-none font-display text-[6rem] leading-none transition-transform duration-700 ease-out group-hover:scale-125 sm:text-[9rem] ${
                row.featured
                  ? "text-accent/10 group-hover:text-accent/20"
                  : "text-fg-muted/10 group-hover:text-fg-muted/20"
              }`}
            >
              {row.nr}
            </span>

            <div className="relative flex items-baseline gap-6 transition-transform duration-500 ease-out group-hover:translate-x-2">
              <span
                className={`font-mono text-sm ${row.featured ? "text-accent" : "text-fg-muted"}`}
              >
                {row.nr}
              </span>
              <span className="origin-left font-display text-xl uppercase transition-transform duration-500 ease-out group-hover:scale-105 sm:text-2xl">
                {row.title}
              </span>
            </div>
            <div className="relative flex items-center gap-6 pl-16 sm:pl-0">
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
          </div>
        ))}
      </div>
    </section>
  );
}
