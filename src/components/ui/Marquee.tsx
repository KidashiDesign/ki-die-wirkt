interface MarqueeProps {
  text: string;
  variant?: "solid" | "outline";
  direction?: "left" | "right";
  className?: string;
}

function renderWithAccent(text: string) {
  return text.split(/([·≠])/g).map((part, i) =>
    part === "·" || part === "≠" ? (
      <span key={i} className="text-accent">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function Marquee({ text, variant = "solid", direction = "left", className = "" }: MarqueeProps) {
  const textClass = variant === "outline" ? "text-outline" : "text-fg";

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div
        className={["marquee-track", direction === "right" ? "marquee-track--reverse" : ""]
          .filter(Boolean)
          .join(" ")}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            className={`whitespace-nowrap pr-4 font-display text-4xl uppercase sm:text-6xl ${textClass}`}
          >
            {renderWithAccent(text)}
          </span>
        ))}
      </div>
    </div>
  );
}
