import Marquee from "../ui/Marquee";

export default function MarqueeSection() {
  return (
    <section className="border-y border-border py-8">
      <div className="border-b border-border pb-8">
        <Marquee text="BEFÄHIGEN · AUTOMATISIEREN · STEUERN ·" variant="solid" />
      </div>
      <div className="pt-8">
        <Marquee text="WIRKUNG · FERTIG ≠ WIRKUNG · FERTIG ≠ WIRKUNG ·" variant="outline" />
      </div>
    </section>
  );
}
