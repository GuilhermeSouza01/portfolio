import { Container } from "./Container";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer id="contato" className="section border-t border-border">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <p className="font-display text-2xl font-semibold tracking-tight text-fg">
            Vamos conversar.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Estou aberto a novos projetos e oportunidades. Entre em contato por
            qualquer um dos canais abaixo.
          </p>
        </div>
        <ul className="flex flex-col gap-3 text-sm sm:items-end">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <span className="font-mono text-xs uppercase tracking-widest">
                  {social.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <Container className="mt-14">
        <p className="font-mono text-xs text-faint">
          © {profile.name}. Feito com Next.js.
        </p>
      </Container>
    </footer>
  );
}
