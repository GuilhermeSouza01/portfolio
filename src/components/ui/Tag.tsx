import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] tracking-wide text-faint">
      <span
        aria-hidden="true"
        className="h-1 w-1 shrink-0 rounded-full bg-accent/50"
      />
      {children}
    </span>
  );
}
