import type { ReactNode } from "react";
import SectionKicker from "../ui/SectionKicker";
import GhostNumeral from "../ui/GhostNumeral";
import StatCard from "../ui/StatCard";
import DiagramPanel from "../ui/DiagramPanel";

interface TextBlock {
  heading: string;
  quote?: string;
  body: ReactNode;
}

interface StatCardData {
  title: string;
  body: ReactNode;
}

interface UseCaseSectionProps {
  id: string;
  kickerLabel: string;
  kickerMeta: string;
  kickerStatus: string;
  headline: ReactNode;
  subline: string;
  ghostNumber: string;
  beatLabel?: ReactNode;
  beatBody: ReactNode;
  diagramCaption: string;
  diagram: ReactNode;
  stats: StatCardData[];
  textBlocks: TextBlock[];
}

export default function UseCaseSection({
  id,
  kickerLabel,
  kickerMeta,
  kickerStatus,
  headline,
  subline,
  ghostNumber,
  beatLabel,
  beatBody,
  diagramCaption,
  diagram,
  stats,
  textBlocks,
}: UseCaseSectionProps) {
  return (
    <section id={id} className="relative overflow-hidden border-t border-border px-6 py-24 sm:px-10 lg:py-32">
      <GhostNumeral number={ghostNumber} />

      <div className="relative mx-auto max-w-6xl">
        <SectionKicker label={kickerLabel} meta={kickerMeta} status={kickerStatus} />

        <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
          {headline}
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-fg-muted">{subline}</p>

        <div className="mt-14 rounded-sm border border-border bg-bg-raised p-8 sm:p-10">
          {beatLabel && (
            <div className="mb-4 font-display text-5xl text-accent text-glow-red sm:text-6xl">
              {beatLabel}
            </div>
          )}
          <p className="max-w-2xl text-lg text-fg">{beatBody}</p>
        </div>

        <div className="mt-14">
          <DiagramPanel caption={diagramCaption}>{diagram}</DiagramPanel>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.title} title={stat.title}>
              {stat.body}
            </StatCard>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {textBlocks.map((block) => (
            <div key={block.heading}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                {block.heading}
              </h3>
              {block.quote && <p className="mb-4 italic text-fg">{block.quote}</p>}
              <p className="leading-relaxed text-fg-muted">{block.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
