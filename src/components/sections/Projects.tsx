import { Container } from "@/components/layout/Container";
import { HoverCard } from "@/components/motion/HoverCard";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const spans = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
];

export function Projects() {
  return (
    <section id="projetos" className="section">
      <Container>
        <Reveal>
          <SectionHeading label="Projetos" title="" />
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          {profile.projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.06}
              className={`h-full ${spans[index] ?? "md:col-span-3"}`}
            >
              <HoverCard className="h-full">
                <ProjectCard project={project} featured={index === 0} />
              </HoverCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
