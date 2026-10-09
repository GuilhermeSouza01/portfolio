/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/data/profile";

const STACK_ICONS: Record<string, string> = {
  HTML: "html5",
  CSS: "css",
  "Tailwind CSS": "tailwindcss",
  JavaScript: "javascript",
  ReactJS: "react",
  "Next.js": "nextdotjs/FFFFFF",
  Redux: "redux",
  "TanStack Query": "tanstack",
  "Vue.js": "vuedotjs",
  PHP: "php",
  Laravel: "laravel",
  "Node.js": "nodedotjs",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Git: "git",
  Linux: "linux",
  VirtualBox: "virtualbox",
  WordPress: "wordpress",
  Elementor: "elementor",
};

const items = profile.skills.flatMap((group) => group.items);

function StackItem({ name }: { name: string }) {
  const icon = STACK_ICONS[name];

  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-muted">
      {icon ? (
        <img
          src={`https://cdn.simpleicons.org/${icon}`}
          alt=""
          width={18}
          height={18}
          loading="lazy"
          className="h-[18px] w-[18px]"
        />
      ) : (
        <span
          aria-hidden="true"
          className="h-1 w-1 rounded-full bg-accent/50"
        />
      )}
      {name}
    </span>
  );
}

function StackRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>
          <StackItem name={item} />
        </li>
      ))}
    </ul>
  );
}

export function Skills() {
  return (
    <section id="habilidades" aria-label="Tecnologias" className="py-12 sm:py-16">
      <Reveal delay={0.05}>
        <div className="marquee py-2">
          <div className="marquee-track flex">
            <StackRow />
            <StackRow ariaHidden />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
