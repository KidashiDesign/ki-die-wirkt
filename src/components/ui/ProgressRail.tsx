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
      {steps.map((step, index) => {
        const isActive = index === activeIndex;
        return (
          <div key={step} className="flex flex-col items-center gap-2">
            <span
              className={`font-mono text-[10px] tracking-widest transition-all duration-500 ease-out ${
                isActive ? "text-accent scale-110" : "text-fg-muted scale-100"
              }`}
            >
              {step}
            </span>
            <span
              className={`h-2 w-2 rounded-full transition-all duration-500 ease-out ${
                isActive
                  ? "scale-150 bg-accent shadow-[0_0_10px_2px_rgba(229,73,58,0.65)]"
                  : "scale-100 bg-border shadow-none"
              }`}
            />
            {index < steps.length - 1 && (
              <span
                className={`h-6 w-px transition-colors duration-500 ease-out ${
                  index <= activeIndex ? "bg-accent-dim" : "bg-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
