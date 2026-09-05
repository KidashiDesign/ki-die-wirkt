import SparkleDivider from "../ui/SparkleDivider";

export default function TheseBeat() {
  return (
    <section className="px-6 pb-24 sm:px-10">
      <p
        className="mx-auto max-w-4xl text-center font-display text-3xl uppercase leading-tight text-fg sm:text-5xl"
        style={{ paddingRight: "50px" }}
      >
        <span aria-hidden className="mr-3 text-accent">
          →
        </span>
        Sondern wie daraus ein Ergebnis wird.
      </p>
      <SparkleDivider className="mt-16 sm:mt-20" />
    </section>
  );
}
