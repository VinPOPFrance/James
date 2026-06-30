import { RefreshCw, TriangleAlert, CircleHelp, Check, Minus, Leaf, ShieldCheck, ArrowRight, Play } from "lucide-react";

export const icons = {
  refresh: RefreshCw,
  alert: TriangleAlert,
  help: CircleHelp,
  check: Check,
  minus: Minus,
  leaf: Leaf,
  shield: ShieldCheck,
  arrow: ArrowRight,
  play: Play,
} as const;

export type IconName = keyof typeof icons;
