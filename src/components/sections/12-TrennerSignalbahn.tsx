import SignalbahnReveal from "../ui/SignalbahnReveal";
import SparkleDivider from "../ui/SparkleDivider";

export default function TrennerSignalbahn2() {
  return (
    <section className="border-t border-border px-6 py-24 sm:px-10">
      <SignalbahnReveal
        outlineLine="Wir schliessen die Lücke"
        solidLines={["Zwischen Fertig", "Und Wirkung."]}
      />
      <SparkleDivider />
    </section>
  );
}
