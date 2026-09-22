import Sparkles from "./Sparkles";

interface SparkleDividerProps {
  className?: string;
  heightClassName?: string;
}

export default function SparkleDivider({
  className,
  heightClassName = "h-56",
}: SparkleDividerProps) {
  return (
    <div
      className={[
        "relative mx-auto w-full overflow-hidden",
        heightClassName,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="absolute inset-x-20 top-0 mx-auto h-[2px] w-2/4 bg-gradient-to-r from-transparent via-accent/70 to-transparent blur-[2px]" />
      <div className="absolute inset-x-20 top-0 mx-auto h-px w-2/4 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute inset-x-20 top-0 mx-auto h-px w-1/4 bg-gradient-to-r from-transparent via-[#ffcec8] to-transparent" />

      <Sparkles
        density={700}
        mousemove
        color="#e5493a"
        className="absolute inset-x-0 top-0 h-full w-full [-webkit-mask-image:radial-gradient(ellipse_60%_65%_at_50%_15%,black,transparent_75%)] [mask-image:radial-gradient(ellipse_60%_65%_at_50%_15%,black,transparent_75%)]"
      />
    </div>
  );
}
