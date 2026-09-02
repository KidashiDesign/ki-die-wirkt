import ProgressRail from "../ui/ProgressRail";

interface TrennerMessbandProps {
  activeIndex?: number;
}

export default function TrennerMessband({ activeIndex = 0 }: TrennerMessbandProps) {
  return (
    <section aria-hidden="true" className="border-t border-border py-12 sm:py-20">
      <ProgressRail steps={["01", "02", "03"]} activeIndex={activeIndex} />
    </section>
  );
}
