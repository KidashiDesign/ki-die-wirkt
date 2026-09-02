interface DiagramPanelProps {
  caption: string;
  children: React.ReactNode;
}

export default function DiagramPanel({ caption, children }: DiagramPanelProps) {
  return (
    <figure className="rounded-sm border border-border bg-bg-raised">
      <div className="p-6 sm:p-10">{children}</div>
      <figcaption className="border-t border-border px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-fg-muted sm:px-10">
        {caption}
      </figcaption>
    </figure>
  );
}
