import { useEffect, useState } from "react";

export default function useAttentionCycle(enabled: boolean, count: number, intervalMs = 1400): number {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setIndex(0);
      return;
    }

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [enabled, count, intervalMs]);

  return index;
}
