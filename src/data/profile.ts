// Conteúdo do portfólio — fonte única de dados. Copy em pt-BR.
// TODO: adicionar as datas dos projetos pessoais (não informadas) em `projects`.

export type Social = {
  label: string;
  href: string;
};

export type Experience = {
  role: string;
  company: string;
  companyHref?: string;
  start: string;
  end: string;
  description: string;
  tags: string[];
};

export type Project = {
  title: string;
  date?: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  headline: string;
  summary: string;
  about: string[];
  education: string;
  languages: string;
  socials: Social[];
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
};

export const profile: Profile = {
  name: "Guilherme Souza ",
  role: "Desenvolvedor Full Stack",
  location: "Montes Claros, MG",
  headline:
    "Construo integrações e sistemas com foco em performance e escalabilidade.",
  summary:
    "Desenvolvedor Full Stack com experiência em Laravel, React, Node.js e PHP, atuando em integração de e-commerce e sistemas institucionais. Graduado em Sistemas de Informação pela Unimontes.",
  about: [
    "Desenvolvedor Full Stack graduado em Sistemas de Informação pela Unimontes, com experiência em integração com e-commerce, desenvolvimento de APIs REST e sistemas institucionais.",
    "Atuo com Laravel, React, Node.js e PHP, com foco em processamento assíncrono com Jobs e Filas, integração via Webhooks e autenticação com LDAP/RADIUS.",
  ],
  education: "Bacharelado em Sistemas de Informação — Unimontes",
  languages: "Português (nativo) · Inglês (intermediário) · Espanhol (básico)",
  socials: [
    { label: "GitHub", href: "https://github.com/GuilhermeSouza01" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gui-souza" },
    { label: "Email", href: "mailto:ghostgui60@gmail.com" },
  ],
  experience: [
    {
      role: "Desenvolvedor Full Stack",
      company: "Megleo Tecnologia",
      start: "Set 2025",
      end: "Mai 2026",
      description:
        "Integração de plataformas de e-commerce (Bling) com o sistema interno, processando mais de 1.000 pedidos diários, além de integrações com transportadoras, Jobs e Filas e Webhooks para sincronização assíncrona, com tratamento de erros e monitoramento em produção.",
      tags: [
        "PHP",
        "Laravel",
        "APIs REST",
        "Webhooks",
        "Jobs/Queues",
        "Bling API",
        "MySQL",
      ],
    },
    {
      role: "Desenvolvedor Web (Freelancer)",
      company: "Laboratório Multiusuário LIEIV – Unimontes",
      start: "Jul 2024",
      end: "Mai 2025",
      description:
        "Desenvolvimento do site institucional do laboratório vinculado ao Hospital Universitário da Unimontes, com WordPress e Elementor, CSS personalizado, formulários com envio automático e migração para o servidor institucional.",
      tags: ["WordPress", "Elementor", "CSS"],
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "Diretoria de Tecnologia da Informação – Unimontes",
      start: "Nov 2023",
      end: "Dez 2024",
      description:
        "Desenvolvimento de sistemas internos com Laravel e Bootstrap, modelagem e gerenciamento de bancos MySQL/MariaDB, autenticação e controle de acesso com LDAP e RADIUS e manutenção de sites WordPress.",
      tags: [
        "PHP",
        "Laravel",
        "Bootstrap",
        "Tailwind CSS",
        "WordPress",
        "LDAP",
        "RADIUS",
        "MySQL/MariaDB",
      ],
    },
  ],
  projects: [
    {
      title: "MERN Blog",
      description:
        "Aplicação full-stack de blog com React, Node.js e MongoDB, com criação, edição e atualização de posts e autenticação de usuários.",
      tags: ["React", "Node.js", "MongoDB"],
      repo: "https://github.com/GuilhermeSouza01/mern-blog",
    },
    {
      title: "GitHub Finder",
      description:
        "Aplicação React para busca de perfis via API do GitHub, exibindo repositórios, seguidores e informações detalhadas dos usuários.",
      tags: ["React", "GitHub API"],
      repo: "https://github.com/GuilhermeSouza01/github-finder",
    },
    {
      title: "FeedBack App",
      description:
        "Aplicação React para coleta de feedbacks com avaliação por nota e campo de observação, voltada para análise de experiência do usuário.",
      tags: ["React"],
      repo: "https://github.com/GuilhermeSouza01/FeedBackApp",
    },
    {
      title: "Sistema de Gerenciamento de Funcionários",
      description:
        "Sistema Laravel com CRUD completo de funcionários, interface intuitiva e integração com banco de dados relacional.",
      tags: ["PHP", "Laravel", "MySQL"],
      repo: "https://github.com/GuilhermeSouza01/employee--project",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        "Tailwind CSS",
        "JavaScript",
        "ReactJS",
        "Next.js",
        "Redux",
        "TanStack Query",
        "Vue.js",
      ],
    },
    {
      category: "Backend",
      items: ["PHP", "Laravel", "Node.js"],
    },
    {
      category: "Bancos de Dados",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Ferramentas",
      items: ["Git", "Linux", "WordPress", "Elementor"],
    },
  ],
};
