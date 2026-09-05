import { useEffect, useState } from "react";

const tickerMessages = [
  "ERP-Datensatz erkannt → lokale Verarbeitung gestartet",
  "Keine Verbindung zu externen Cloud-Diensten aufgebaut",
  "Analyse abgeschlossen → Ergebnis an Maschine zurückgespielt",
  "0 Byte Produktionsdaten haben das Haus verlassen",
  "Bereit. Warte auf nächstes Ereignis …",
];

const ACCENT = "#e5493a";
const FG = "#f0ece2";
const FG_MUTED = "#8a8a86";
const BORDER = "#2a2a2a";
const MONO = "'IBM Plex Mono', monospace";
const DISPLAY = "Anton, sans-serif";

function ArrowDefs({ suffix }: { suffix: string }) {
  return (
    <defs>
      <marker id={`fig01-arrow-active${suffix}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M2 1.5L7.5 5L2 8.5" fill="none" stroke="rgba(229,73,58,0.55)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </marker>
      <marker id={`fig01-arrow-muted${suffix}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M2 1.5L7.5 5L2 8.5" fill="none" stroke="rgba(138,138,134,0.4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </marker>
    </defs>
  );
}

function FlowDot({
  path,
  duration,
  delay,
  size,
  opacity,
}: {
  path: string;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
}) {
  return (
    <circle r={size} fill={ACCENT} opacity={opacity}>
      <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
    </circle>
  );
}

function PulseDot({ cx, cy, delay }: { cx: number; cy: number; delay: number }) {
  return (
    <circle cx={cx} cy={cy} r={2.6} fill={ACCENT}>
      <animate attributeName="opacity" values="0.25;1;0.25" dur="1.2s" begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
  );
}

function NodeBox({
  x,
  y,
  w,
  h,
  label,
  muted = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  muted?: boolean;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="2" fill="#0a0a0a" stroke={BORDER} />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fontSize="11" fill={muted ? FG_MUTED : FG} fontFamily={MONO} letterSpacing="0.08em">
        {label}
      </text>
    </g>
  );
}

function KiBox({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const cx = x + w / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="2" fill="rgba(229,73,58,0.1)" stroke={ACCENT} />
      <text x={cx} y={y + 36} textAnchor="middle" fontSize="16" fill={ACCENT} fontFamily={DISPLAY} letterSpacing="0.03em">
        KI — LOKAL
      </text>
      <text x={cx} y={y + 56} textAnchor="middle" fontSize="10" fill={FG_MUTED} fontFamily={MONO} letterSpacing="0.08em">
        ON-PREM
      </text>
      <PulseDot cx={cx - 20} cy={y + 74} delay={0} />
      <PulseDot cx={cx} cy={y + 74} delay={0.4} />
      <PulseDot cx={cx + 20} cy={y + 74} delay={0.8} />
      <text x={cx} y={y + 96} textAnchor="middle" fontSize="8.5" fill="rgba(229,73,58,0.55)" fontFamily={MONO}>
        lokales llm · dsgvo-konform
      </text>
    </g>
  );
}

function BlockedCross({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      <line x1={cx - 6} y1={cy - 6} x2={cx + 6} y2={cy + 6} stroke="rgba(138,138,134,0.45)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1={cx + 6} y1={cy - 6} x2={cx - 6} y2={cy + 6} stroke="rgba(138,138,134,0.45)" strokeWidth="1.5" strokeLinecap="round" />
    </>
  );
}

function LoopIcon({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const orbit = `M${cx},${cy - r} A${r},${r} 0 1 1 ${cx - 0.01},${cy - r}`;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(229,73,58,0.35)" strokeWidth="1.5" strokeDasharray="2 4" />
      <circle r="2.4" fill={ACCENT}>
        <animateMotion dur="2.2s" repeatCount="indefinite" path={orbit} />
      </circle>
    </g>
  );
}

export default function Fig01Diagram() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % tickerMessages.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative rounded-sm border border-accent-dim/60 p-4 sm:p-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <p className="font-mono text-[11px] uppercase tracking-widest text-fg-muted">
          Ihr Unternehmen — Werksgrenze
        </p>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Verarbeitung · Lokal
          </span>
        </div>
      </div>

      {/* Desktop / Tablet — horizontaler Datenfluss */}
      <div className="hidden md:-mx-8 md:block md:overflow-x-auto md:px-8">
        <svg viewBox="0 0 640 200" className="block w-full min-w-[560px]" aria-hidden="true">
          <ArrowDefs suffix="-d" />

          <path d="M150,48 C196,48 202,60 246,60" fill="none" stroke="rgba(229,73,58,0.28)" strokeWidth="1.5" strokeDasharray="3 5" markerEnd="url(#fig01-arrow-active-d)" />
          <path d="M150,104 C196,104 202,112 246,112" fill="none" stroke="rgba(229,73,58,0.28)" strokeWidth="1.5" strokeDasharray="3 5" markerEnd="url(#fig01-arrow-active-d)" />
          <path d="M416,58 C440,58 448,44 470,42" fill="none" stroke="rgba(138,138,134,0.35)" strokeWidth="1.5" strokeDasharray="3 5" markerEnd="url(#fig01-arrow-muted-d)" />
          <path d="M400,164 L60,164" fill="none" stroke="rgba(229,73,58,0.32)" strokeWidth="1.5" strokeDasharray="3 5" markerEnd="url(#fig01-arrow-active-d)" />

          <BlockedCross cx={443} cy={51} />

          <FlowDot path="M150,48 C196,48 202,60 246,60" duration={1.05} delay={0} size={2.5} opacity={1} />
          <FlowDot path="M150,48 C196,48 202,60 246,60" duration={1.05} delay={0.35} size={1.8} opacity={0.65} />
          <FlowDot path="M150,48 C196,48 202,60 246,60" duration={1.05} delay={0.7} size={1.3} opacity={0.35} />

          <FlowDot path="M150,104 C196,104 202,112 246,112" duration={0.88} delay={0.18} size={2.5} opacity={1} />
          <FlowDot path="M150,104 C196,104 202,112 246,112" duration={0.88} delay={0.62} size={1.8} opacity={0.65} />

          <FlowDot path="M400,164 L60,164" duration={1.3} delay={0.1} size={2.2} opacity={0.9} />
          <FlowDot path="M400,164 L60,164" duration={1.3} delay={0.65} size={1.5} opacity={0.55} />

          <NodeBox x={20} y={28} w={130} h={40} label="ERP" />
          <NodeBox x={20} y={84} w={130} h={40} label="MASCHINE" />
          <KiBox x={246} y={30} w={170} h={110} />
          <NodeBox x={470} y={22} w={140} h={38} label="CLOUD" muted />

          <text x={540} y="76" textAnchor="middle" fontSize="10" fill={ACCENT} fontFamily={MONO} letterSpacing="0.08em">
            Kein Abfluss
          </text>
          <text x={320} y="186" textAnchor="middle" fontSize="10" fill={FG_MUTED} fontFamily={MONO} letterSpacing="0.08em">
            Automatisiert zurück
          </text>
        </svg>
      </div>

      {/* Mobile — vertikaler Datenfluss */}
      <svg viewBox="0 0 300 440" className="block w-full md:hidden" aria-hidden="true">
        <ArrowDefs suffix="-m" />

        <path d="M80,52 C80,90 110,100 130,112" fill="none" stroke="rgba(229,73,58,0.28)" strokeWidth="1.5" strokeDasharray="3 5" markerEnd="url(#fig01-arrow-active-m)" />
        <path d="M220,52 C220,90 190,100 170,112" fill="none" stroke="rgba(229,73,58,0.28)" strokeWidth="1.5" strokeDasharray="3 5" markerEnd="url(#fig01-arrow-active-m)" />
        <path d="M150,242 L150,278" fill="none" stroke="rgba(138,138,134,0.35)" strokeWidth="1.5" strokeDasharray="3 5" markerEnd="url(#fig01-arrow-muted-m)" />

        <BlockedCross cx={150} cy={260} />

        <FlowDot path="M80,52 C80,90 110,100 130,112" duration={1.05} delay={0} size={2.4} opacity={1} />
        <FlowDot path="M80,52 C80,90 110,100 130,112" duration={1.05} delay={0.5} size={1.6} opacity={0.5} />

        <FlowDot path="M220,52 C220,90 190,100 170,112" duration={0.9} delay={0.2} size={2.4} opacity={1} />
        <FlowDot path="M220,52 C220,90 190,100 170,112" duration={0.9} delay={0.65} size={1.6} opacity={0.5} />

        <NodeBox x={20} y={10} w={120} h={42} label="ERP" />
        <NodeBox x={160} y={10} w={120} h={42} label="MASCHINE" />
        <KiBox x={45} y={112} w={210} h={130} />
        <NodeBox x={90} y={278} w={120} h={40} label="CLOUD" muted />

        <text x={150} y="336" textAnchor="middle" fontSize="10" fill={ACCENT} fontFamily={MONO} letterSpacing="0.08em">
          Kein Abfluss
        </text>

        <LoopIcon cx={150} cy={388} r={16} />
        <text x={150} y="422" textAnchor="middle" fontSize="10" fill={FG_MUTED} fontFamily={MONO} letterSpacing="0.08em">
          Automatisiert zurück
        </text>
      </svg>

      <div className="mt-6 flex items-start gap-2 border-t border-border pt-4">
        <span className="shrink-0 font-mono text-xs text-accent/60">›</span>
        <p key={tick} className="fig01-ticker font-mono text-[11px] leading-relaxed text-fg-muted">
          {tickerMessages[tick]}
        </p>
      </div>

      <p className="mt-8 -rotate-2 text-center font-display text-sm uppercase tracking-widest text-accent">
        Bleibt im Haus
      </p>
    </div>
  );
}
