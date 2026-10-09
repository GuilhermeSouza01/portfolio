import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/profile";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-colors duration-200 group-hover:border-border-strong group-hover:bg-surface-2 sm:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <h3
          className={`font-display font-semibold tracking-tight text-fg ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        {project.date && (
          <span className="font-mono text-xs text-faint">{project.date}</span>
        )}
      </div>
      <p
        className={`mt-3 flex-1 leading-relaxed text-muted ${
          featured ? "text-base" : "text-sm"
        }`}
      >
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-4">
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
        {(project.href || project.repo) && (
          <div className="ml-auto flex gap-5 text-sm">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent transition-colors hover:text-accent-strong"
              >
                Ver projeto
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
              >
                Código
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
