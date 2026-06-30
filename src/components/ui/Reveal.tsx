interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Fade-in + slide-up on mount. Uses a CSS animation so content is always
 * visible — no JS IntersectionObserver timing issues.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const style = {
    animationName: "reveal-in",
    animationDuration: "0.5s",
    animationDelay: `${delay}s`,
    animationFillMode: "both" as const,
    animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
