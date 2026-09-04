export default function Logo() {
  return (
    <a
      href="#hero"
      className="fixed left-6 top-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-fg p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur transition-transform hover:scale-105 sm:left-10"
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
