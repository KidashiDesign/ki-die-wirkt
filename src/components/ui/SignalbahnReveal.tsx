interface SignalbahnRevealProps {
  kicker?: string;
  outlineLine: string;
  solidLines: string[];
}

export default function SignalbahnReveal({
  kicker,
  outlineLine,
  solidLines,
}: SignalbahnRevealProps) {
  return (
    <div className="mx-auto max-w-4xl px-6 text-center">
      {kicker && (
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-fg-muted">
          {kicker}
        </p>
      )}
      <p className="text-outline font-display text-3xl uppercase leading-tight sm:text-5xl">
        {outlineLine}
      </p>
      <div className="mt-4 space-y-1">
        {solidLines.map((line, index) => (
          <p
            key={line}
            className="font-display text-3xl uppercase leading-tight text-fg sm:text-5xl"
          >
            {index === solidLines.length - 1 && (
              <span aria-hidden className="mr-3 text-accent">
                →
              </span>
            )}
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
