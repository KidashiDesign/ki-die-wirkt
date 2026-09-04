interface GhostNumeralProps {
  number: string;
  backgroundImage?: string;
}

export default function GhostNumeral({ number, backgroundImage }: GhostNumeralProps) {
  return (
    <>
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 w-[38%] max-w-lg select-none opacity-50 sm:w-[32%] lg:w-[26%]"
        />
      )}
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute right-0 top-0 select-none font-display text-[30vw] leading-none opacity-40 sm:text-[22vw] lg:text-[16vw]"
      >
        {number}
      </span>
    </>
  );
}
