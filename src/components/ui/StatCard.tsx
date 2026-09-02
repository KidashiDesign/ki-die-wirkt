interface StatCardProps {
  title: string;
  children: React.ReactNode;
}

export default function StatCard({ title, children }: StatCardProps) {
  return (
    <div className="rounded-sm border border-border bg-bg-raised p-6">
      <div className="mb-3 font-display text-2xl uppercase text-fg sm:text-3xl">
        {title}
      </div>
      <p className="text-sm leading-relaxed text-fg-muted">{children}</p>
    </div>
  );
}
