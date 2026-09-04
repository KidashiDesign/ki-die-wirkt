export default function Logo() {
  return (
    <a
      href="#hero"
      className="fixed left-6 top-6 z-50 flex w-[154px] aspect-[156.4/187.2] items-center justify-center rounded-2xl border border-border bg-fg p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur transition-transform hover:scale-105 sm:left-10 sm:w-[202px]"
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
