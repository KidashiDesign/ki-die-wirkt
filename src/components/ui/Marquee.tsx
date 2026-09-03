import { useEffect, useRef, useState } from "react";

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
  const [fast, setFast] = useState(false);
  const resetTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => {
      setFast(true);
      if (resetTimeout.current) clearTimeout(resetTimeout.current);
      resetTimeout.current = setTimeout(() => setFast(false), 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (resetTimeout.current) clearTimeout(resetTimeout.current);
    };
  }, []);

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div
        className={[
          "marquee-track",
          direction === "right" ? "marquee-track--reverse" : "",
          fast ? "marquee-track--fast" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            className={`whitespace-nowrap px-4 font-display text-4xl uppercase sm:text-6xl ${textClass}`}
          >
            {renderWithAccent(text)}
          </span>
        ))}
      </div>
    </div>
  );
}
