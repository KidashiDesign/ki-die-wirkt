interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
}

export default function CTAButton({ children, href = "#kontakt" }: CTAButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-display text-sm uppercase tracking-wide text-black transition-transform hover:scale-[1.03]"
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}
