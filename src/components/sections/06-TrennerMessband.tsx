import { useEffect, useRef, useState } from "react";
import { GradientTracing } from "../ui/gradient-tracing";

export default function TrennerMessband() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => setWidth(el.offsetWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {width > 0 && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 drop-shadow-[0_0_6px_rgba(229,73,58,0.65)]"
        >
          <GradientTracing
            width={width}
            height={2}
            baseColor="transparent"
            gradientColors={["#e5493a", "#ffcec8", "#e5493a"]}
            strokeWidth={2}
            animationDuration={3.5}
          />
        </div>
      )}
      <section aria-hidden="true" className="border-t border-border py-0" />
    </div>
  );
}
