import { useEffect, useRef, useState } from "react";

const FADE_DELAY_MS = 5000;

export default function Logo() {
  const [visible, setVisible] = useState(true);
  const hideTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(true);
      clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => setVisible(false), FADE_DELAY_MS);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimeout.current);
    };
  }, []);

  return (
    <a
      href="#hero"
      className={`fixed left-4 top-4 z-50 flex w-14 aspect-[156.4/187.2] items-center justify-center rounded-xl border border-border bg-fg p-1.5 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur transition-[opacity,transform] duration-700 ease-out hover:scale-105 sm:left-8 sm:top-6 sm:w-16 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="M² Business Consulting — Zurück zum Start"
    >
      <img
        src="/images/M2-Business-Consulting-Create-the-unexpected-footer.svg"
        alt="M² Business Consulting"
        className="h-full w-full object-contain"
      />
    </a>
  );
}
