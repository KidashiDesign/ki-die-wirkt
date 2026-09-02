interface PullQuoteProps {
  children: React.ReactNode;
}

export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="font-body text-xl italic leading-snug text-fg sm:text-2xl">
      „{children}“
    </blockquote>
  );
}
