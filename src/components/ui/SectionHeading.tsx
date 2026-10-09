export function SectionHeading({
  id,
  label,
  title,
}: {
  id?: string;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
        <p
          id={id}
          className="text-xs font-medium uppercase tracking-[0.22em] text-accent"
        >
          {label}
        </p>
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
