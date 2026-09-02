interface SectionKickerProps {
  label: string;
  meta: string;
  status: string;
}

export default function SectionKicker({ label, meta, status }: SectionKickerProps) {
  const isLive = status.toUpperCase().includes("IM EINSATZ");

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-widest text-fg-muted">
      <span className="text-fg">{label}</span>
      <span aria-hidden className="text-border">
        —
      </span>
      <span>{meta}</span>
      <span aria-hidden className="text-border">
        ·
      </span>
      <span className={isLive ? "text-accent" : "text-fg-muted"}>
        STATUS: {status}
      </span>
    </div>
  );
}
