export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="atmosphere-grid absolute inset-0" />

      <div className="absolute -top-48 left-1/2 h-[540px] w-[min(1100px,120vw)] -translate-x-1/2 rounded-full bg-accent/12 blur-[130px] [mask-image:radial-gradient(closest-side,#000,transparent)]" />
      <div className="absolute -right-24 top-1/4 h-[380px] w-[380px] rounded-full bg-accent/6 blur-[120px] [mask-image:radial-gradient(closest-side,#000,transparent)]" />
      <div className="absolute -left-32 top-2/3 h-[320px] w-[420px] rounded-full bg-accent-strong/6 blur-[120px] [mask-image:radial-gradient(closest-side,#000,transparent)]" />

      <div className="atmosphere-grain absolute inset-0 opacity-[0.035] mix-blend-soft-light" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,transparent_55%,var(--color-bg)_100%)]" />
    </div>
  );
}
