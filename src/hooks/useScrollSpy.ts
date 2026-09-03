import { useEffect, useState } from "react";

export default function useScrollSpy(ids: string[]): number {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });

        if (visible.size === 0) return;

        const topMostVisibleIndex = ids
          .map((id, index) => (visible.has(id) ? index : -1))
          .filter((index) => index !== -1)
          .pop();

        if (topMostVisibleIndex !== undefined) {
          setActiveIndex(topMostVisibleIndex);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return activeIndex;
}
