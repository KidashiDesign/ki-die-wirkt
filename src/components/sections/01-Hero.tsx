import NeuralBackground from "../ui/NeuralBackground";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-24 sm:px-10">
      <NeuralBackground className="absolute inset-0 z-0" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-bg via-bg/40 to-bg/80" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5] flex select-none items-center justify-center overflow-hidden"
      >
        <span className="animate-hero-zoom whitespace-nowrap font-display uppercase leading-none text-fg/[0.06] blur-[1px] text-[26vw] sm:text-[20vw]">
          ERGEBNISSE
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <h1 className="font-display uppercase leading-[0.92] text-5xl sm:text-7xl lg:text-8xl">
          <span className="text-outline block">KI HABEN VIELE.</span>
          <span className="block">
            <span className="text-glow-red">ERGEBNISSE</span> DIE
          </span>
          <span className="block">WENIGSTEN.</span>
        </h1>

        <p className="mt-10 max-w-xl text-lg text-fg-muted sm:text-xl">
          <span className="font-semibold text-fg">
            Drei Fälle aus dem industriellen Mittelstand.
          </span>{" "}
          Was blockiert hat. Was den Weg frei gemacht hat. Und was am Ende dabei
          herauskommt — im Alltag, nicht auf der Folie.
        </p>

        <div className="mt-16 flex items-center gap-6 font-mono text-sm tracking-widest text-fg-muted">
          <span className="text-accent">01</span>
          <span className="h-px w-8 bg-border" />
          <span>02</span>
          <span className="h-px w-8 bg-border" />
          <span>03</span>
        </div>
      </div>

      <div className="absolute z-10 bottom-10 right-6 flex flex-col items-center gap-2 sm:right-10">
        <span className="font-mono text-[10px] uppercase tracking-widest text-fg-muted [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-10 w-px bg-border" />
      </div>
    </section>
  );
}
