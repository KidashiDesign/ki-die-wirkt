interface ProgressRailProps {
  steps: string[];
  activeIndex?: number;
}

export default function ProgressRail({ steps, activeIndex = 0 }: ProgressRailProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
    >
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center gap-2">
          <span
            className={`font-mono text-[10px] tracking-widest ${
              index === activeIndex ? "text-accent" : "text-fg-muted"
            }`}
          >
            {step}
          </span>
          <span
            className={`h-2 w-2 rounded-full ${
              index === activeIndex ? "bg-accent" : "bg-border"
            }`}
          />
          {index < steps.length - 1 && (
            <span
              className={`h-6 w-px ${
                index === activeIndex ? "bg-accent-dim" : "bg-border"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
