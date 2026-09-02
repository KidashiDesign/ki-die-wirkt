export default function Fig01Diagram() {
  return (
    <div className="relative rounded-sm border border-accent-dim/60 p-4 sm:p-8">
      <p className="mb-8 font-mono text-[11px] uppercase tracking-widest text-fg-muted">
        Ihr Unternehmen — Werksgrenze
      </p>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-4">
          <div className="rounded-sm border border-border bg-bg px-6 py-4 text-center font-mono text-xs uppercase tracking-widest">
            ERP
          </div>
          <div className="rounded-sm border border-border bg-bg px-6 py-4 text-center font-mono text-xs uppercase tracking-widest">
            MASCHINE
          </div>
        </div>

        <div aria-hidden className="font-display text-3xl text-accent lg:rotate-0">
          →
        </div>

        <div className="rounded-sm border border-accent bg-accent/10 px-8 py-6 text-center">
          <p className="font-display text-lg uppercase text-accent sm:text-xl">
            KI — LOKAL
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">
            On-Prem
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div aria-hidden className="relative font-display text-2xl text-fg-muted">
            <span className="opacity-40">- - - ✕ - - -&gt;</span>
          </div>
          <div className="rounded-sm border border-border px-4 py-2 text-center font-mono text-[10px] uppercase tracking-widest text-fg-muted">
            CLOUD
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Kein Abfluss
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3 border-t border-border pt-6">
        <span aria-hidden className="font-display text-xl text-fg-muted opacity-60">
          &lt;- - - -
        </span>
        <p className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">
          Automatisiert zurück
        </p>
      </div>

      <p className="mt-8 -rotate-2 text-center font-display text-sm uppercase tracking-widest text-accent">
        Bleibt im Haus
      </p>
    </div>
  );
}
