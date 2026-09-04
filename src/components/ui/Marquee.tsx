import { useLayoutEffect, useRef, useState } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLSpanElement>(null);
  const [repeats, setRepeats] = useState(2);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const item = itemRef.current;
    if (!container || !item) return;

    const updateRepeats = () => {
      const containerWidth = container.offsetWidth;
      const itemWidth = item.offsetWidth;
      if (!itemWidth) return;
      // One group must be at least as wide as the container, so the
      // -50% loop always wraps on identical content and never runs out.
      setRepeats(Math.max(2, Math.ceil(containerWidth / itemWidth) + 1));
    };

    updateRepeats();

    const observer = new ResizeObserver(updateRepeats);
    observer.observe(container);
    observer.observe(item);
    return () => observer.disconnect();
  }, [text]);

  const renderItem = (key: number, ref?: React.Ref<HTMLSpanElement>) => (
    <span
      key={key}
      ref={ref}
      className={`whitespace-nowrap pr-4 font-display text-4xl uppercase sm:text-6xl ${textClass}`}
    >
      {renderWithAccent(text)}
    </span>
  );

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`} aria-hidden="true">
      <div
        className={["marquee-track", direction === "right" ? "marquee-track--reverse" : ""]
          .filter(Boolean)
          .join(" ")}
      >
        {[0, 1].map((group) => (
          <span key={group} className="flex">
            {Array.from({ length: repeats }, (_, i) => renderItem(i, group === 0 && i === 0 ? itemRef : undefined))}
          </span>
        ))}
      </div>
    </div>
  );
}
