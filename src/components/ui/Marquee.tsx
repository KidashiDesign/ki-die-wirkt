interface MarqueeProps {
  text: string;
  variant?: "solid" | "outline";
  className?: string;
}

export default function Marquee({ text, variant = "solid", className = "" }: MarqueeProps) {
  const textClass = variant === "outline" ? "text-outline" : "text-fg";

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((i) => (
          <span
            key={i}
            className={`whitespace-nowrap px-4 font-display text-4xl uppercase sm:text-6xl ${textClass}`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
