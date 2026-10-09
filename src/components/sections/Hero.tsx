import { Container } from "@/components/layout/Container";
import { HeroReveal } from "@/components/motion/HeroReveal";
import { profile } from "@/data/profile";

const facts = [
  { label: "Localização", value: profile.location },
  { label: "Foco", value: profile.role },
  { label: "Formação", value: profile.education },
  { label: "Idiomas", value: profile.languages },
];

export function Hero() {
  return (
    <section id="top" className="pt-28 pb-20 sm:pt-36 sm:pb-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {profile.name}
            </p>
            <HeroReveal
              text={profile.role}
              className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-[-0.02em] text-fg sm:text-4xl"
            />
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg sm:text-xl">
              {profile.headline}
            </p>
            <div className="mt-4 max-w-xl space-y-3 text-sm leading-relaxed text-muted">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                  >
                    {social.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <dl className="space-y-6 self-center rounded-card border border-border bg-surface/50 p-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-fg">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
