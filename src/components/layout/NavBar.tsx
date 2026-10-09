"use client";

import { useEffect, useState } from "react";
import { LayoutGroup, m } from "motion/react";

const links = [
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
];

const sectionIds = [...links.map((link) => link.id), "contato"];

export function NavBar() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-1/2 top-3 z-40 -translate-x-1/2 sm:top-4">
      <nav
        aria-label="Navegação principal"
        className="flex max-w-[calc(100vw-1rem)] items-center gap-0.5 rounded-full border border-border bg-surface/70 p-1 shadow-lg shadow-black/30 backdrop-blur-xl"
      >
        <LayoutGroup>
          <ul className="flex items-center gap-0.5">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id} className="relative">
                  {isActive && (
                    <m.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full border border-border-strong bg-surface-2"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative z-10 block whitespace-nowrap rounded-full px-2 py-1 text-[11px] transition-colors sm:px-3 sm:py-1.5 sm:text-sm ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </LayoutGroup>
        <a
          href="#contato"
          aria-current={active === "contato" ? "true" : undefined}
          className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium text-on-accent transition-colors sm:px-4 sm:py-1.5 sm:text-sm ${
            active === "contato"
              ? "bg-accent-strong"
              : "bg-accent hover:bg-accent-strong"
          }`}
        >
          Contato
        </a>
      </nav>
    </div>
  );
}
