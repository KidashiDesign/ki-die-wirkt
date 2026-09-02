import CTAButton from "../ui/CTAButton";

export default function BreakCTA() {
  return (
    <section id="kontakt" className="border-t border-border px-6 py-24 text-center sm:px-10 sm:py-32">
      <p className="mb-6 font-mono text-xs uppercase tracking-widest text-fg-muted">
        (Der nächste Schritt)
      </p>

      <h2 className="font-display text-4xl uppercase leading-tight sm:text-6xl">
        20 MINUTEN.
        <br />
        <span className="accent-em">KEIN PITCH.</span>
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg text-fg-muted">
        Wir klären gemeinsam, welcher dieser Fälle Ihrer Ausgangslage am
        nächsten kommt — und welcher Use Case sich bei Ihnen zuerst rechnet.
        Danach wissen Sie, ob es sich lohnt, weiterzusprechen.
      </p>

      <div className="mt-10 flex justify-center">
        <CTAButton>Gespräch vereinbaren</CTAButton>
      </div>

      <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-fg-muted">
        Erster Use Case im Alltag: 6–12 Wochen
      </p>
    </section>
  );
}
