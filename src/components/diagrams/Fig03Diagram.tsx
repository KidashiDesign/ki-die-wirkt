export default function Fig03Diagram() {
  return (
    <div>
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-border">
            <span aria-hidden className="font-display text-lg text-fg">
              )))
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">
            Audio-Briefing
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-accent">
            Vor dem Termin
          </p>
        </div>

        <span aria-hidden className="hidden font-display text-2xl text-fg-muted sm:block">
          →
        </span>

        <div className="rounded-sm border border-accent bg-accent/10 px-6 py-4 text-center">
          <p className="font-display text-lg uppercase text-accent">Termin</p>
        </div>

        <span aria-hidden className="hidden font-display text-2xl text-fg-muted sm:block">
          →
        </span>

        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-border">
            <span aria-hidden className="font-display text-lg text-fg">
              ?
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">
            Anruf / 3 Fragen
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-accent">
            Nach dem Termin
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 border-t border-border pt-6 text-center">
        <span aria-hidden className="font-display text-xl text-fg-muted opacity-60">
          - - - - -&gt;
        </span>
        <p className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">
          Automatisch
        </p>
        <div className="rounded-sm border border-border bg-bg px-6 py-4 text-center font-mono text-xs uppercase tracking-widest">
          CRM — Strukturiert
        </div>
      </div>

      <p className="mt-8 text-center font-display text-sm uppercase tracking-widest text-accent">
        Steuern statt raten
      </p>
    </div>
  );
}
