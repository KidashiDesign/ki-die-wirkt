export default function Fig02Diagram() {
  const gridCells = ["fill-white", "fill-white", "fill-accent", "fill-accent"];

  return (
    <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-[1fr_auto_1fr]">
      <div className="text-center">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-fg-muted">
          Implizit — Erfahrung, Bauchgefühl
        </p>
        <svg viewBox="0 0 120 120" className="mx-auto h-28 w-28" aria-hidden="true">
          <circle cx="60" cy="60" r="55" fill="none" stroke="#2a2a2a" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="38" fill="none" stroke="#2a2a2a" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="21" fill="none" stroke="#2a2a2a" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="6" fill="#e5493a" />
        </svg>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-fg-muted">
          Steht in keinem Handbuch
        </p>
      </div>

      <div aria-hidden className="flex flex-col items-center text-center">
        <span className="font-display text-2xl text-accent">→</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">
          Sessions + KI
        </span>
      </div>

      <div className="text-center">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-fg-muted">
          Explizit — Abrufbar
        </p>
        <div className="mx-auto grid w-28 grid-cols-4 gap-1.5" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className={`aspect-square border ${
                i < gridCells.length
                  ? gridCells[i] === "fill-white"
                    ? "border-fg bg-fg"
                    : "border-accent bg-accent"
                  : "border-border bg-transparent"
              }`}
            />
          ))}
        </div>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-fg-muted">
          Wissensbausteine — im Alltag
        </p>
      </div>
    </div>
  );
}
