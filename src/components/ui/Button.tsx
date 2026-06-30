import Link from "next/link";
import { clsx } from "clsx";

type Variant = "primary" | "secondary";
type Surface = "light" | "dark";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  /** Set true for external URLs — renders <a> with target="_blank" rel="noopener noreferrer" */
  external?: boolean;
  variant?: Variant;
  /** The background the button sits ON. Picks the correct contrast pair automatically. */
  surface?: Surface;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * The four valid CTA states, derived from the locked contrast rule.
 * There is no combination that yields light-on-light or white-on-white.
 */
const styles: Record<Surface, Record<Variant, string>> = {
  light: {
    primary:
      "bg-navy text-ivory border border-navy hover:bg-navy-light hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-navy border-[1.5px] border-navy hover:bg-navy hover:text-ivory",
  },
  dark: {
    primary:
      "bg-copper text-navy border border-copper hover:bg-copper-light hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-ivory border-[1.5px] border-ivory hover:bg-ivory/15",
  },
};

const base =
  "inline-flex items-center justify-center rounded-[11px] px-6 py-3.5 text-[15px] font-medium cursor-pointer transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2";

export function Button({
  children,
  href,
  external = false,
  variant = "primary",
  surface = "light",
  fullWidth = false,
  className,
  onClick,
}: ButtonProps) {
  const cls = clsx(base, styles[surface][variant], fullWidth && "w-full", className);

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
