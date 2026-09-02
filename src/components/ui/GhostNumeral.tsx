interface GhostNumeralProps {
  number: string;
}

export default function GhostNumeral({ number }: GhostNumeralProps) {
  return (
    <span
      aria-hidden="true"
      className="text-outline pointer-events-none absolute right-0 top-0 select-none font-display text-[30vw] leading-none opacity-40 sm:text-[22vw] lg:text-[16vw]"
    >
      {number}
    </span>
  );
}
