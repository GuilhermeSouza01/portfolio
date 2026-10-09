import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { profile, type Experience as ExperienceItem } from "@/data/profile";

function ExperienceRow({ job }: { job: ExperienceItem }) {
  const body = (
    <>
      <span className="pt-1 font-mono text-xs text-faint">
        {job.start} — {job.end}
      </span>
      <div>
        <h3 className="font-display text-base font-medium tracking-tight text-fg transition-colors group-hover:text-accent">
          {job.role}
          <span className="text-muted"> · {job.company}</span>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {job.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </>
  );

  const rowClass =
    "experience-item group grid gap-x-6 gap-y-2 rounded-card border border-transparent p-4 transition duration-200 sm:grid-cols-[9rem_1fr]";

  if (job.companyHref) {
    return (
      <a
        href={job.companyHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${rowClass} hover:border-border hover:bg-surface`}
      >
        {body}
      </a>
    );
  }

  return <div className={rowClass}>{body}</div>;
}

export function Experience() {
  return (
    <section id="experiencia" className="section">
      <Container>
        <Reveal>
          <SectionHeading label="Experiência" title="" />
        </Reveal>
        <Reveal delay={0.05}>
          <ol className="experience-list space-y-1">
            {profile.experience.map((job, index) => (
              <li key={`${job.company}-${index}`}>
                <ExperienceRow job={job} />
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
