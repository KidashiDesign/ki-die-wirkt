import { useEffect, useState } from "react";

const timeFormatter = new Intl.DateTimeFormat("de-DE", {
  timeZone: "Europe/Berlin",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const zoneFormatter = new Intl.DateTimeFormat("de-DE", {
  timeZone: "Europe/Berlin",
  timeZoneName: "short",
});

function getBerlinTime(date: Date) {
  const zonePart = zoneFormatter
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName");

  return {
    time: timeFormatter.format(date),
    zone: zonePart?.value ?? "MEZ",
  };
}

export default function LiveStatusBar() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const { time, zone } = getBerlinTime(now);

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-4 rounded-full border border-border bg-bg-raised/80 py-2.5 pl-4 pr-2.5 backdrop-blur sm:right-10">
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-fg-muted">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="text-accent">Live</span>
        <span className="text-border">·</span>
        <span className="tabular-nums text-fg">
          {time} {zone}
        </span>
      </div>

      <a
        href="#kontakt"
        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-display text-[11px] uppercase tracking-wide text-fg transition-colors hover:border-accent hover:text-accent"
      >
        Gespräch
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}
