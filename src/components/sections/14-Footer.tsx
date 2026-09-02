export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-3">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-muted">
            (Marke)
          </p>
          <p className="font-display text-lg uppercase">
            M²BC — M² Business Consulting GmbH
          </p>
          <p className="mt-2 text-sm text-fg-muted">Pullach im Isartal bei München</p>
          <p className="mt-1 text-sm text-fg-muted">48.06° N · 11.52° O — DACH · EMEA</p>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-muted">
            (Kontakt)
          </p>
          <a href="#kontakt" className="block text-fg hover:text-accent">
            Gespräch vereinbaren →
          </a>
          <a
            href="https://m2bc.de"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-fg hover:text-accent"
          >
            m2bc.de →
          </a>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-muted">
            (Hinweis)
          </p>
          <p className="text-sm leading-relaxed text-fg-muted">
            UC/01 und UC/02 sind anonymisierte Fälle aus unserer Umsetzung. UC/03
            zeigt ein typisches Einsatzszenario.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-fg-muted sm:flex-row">
        <span>Befähigen · Automatisieren · Steuern</span>
        <a href="#hero" className="hover:text-accent">
          Zurück nach oben ↑
        </a>
      </div>
    </footer>
  );
}
