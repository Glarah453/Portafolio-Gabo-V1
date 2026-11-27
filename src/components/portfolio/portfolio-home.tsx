

"use client";

import { useState } from "react";
import Image from "next/image";


interface PortfolioHomeProps {
  currentYear: number;
}

type Language = "es" | "en";

const content = {
  es: {
    navigation: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre mí", href: "#about" },
      { label: "Habilidades", href: "#skills" },
      { label: "Proyectos", href: "#projects" },
      { label: "Publicaciones", href: "#publications" },
      { label: "Contacto", href: "#contact" },
    ],
    availability: "Disponible para oportunidades",
    greeting: "Hola, soy",
    name: "Gabriel Lara Hormazábal",
    role: "Data Scientist & Machine Learning Engineer",
    secondaryRole: "Data Analyst · Full Stack Developer",
    description:
      "Desarrollo soluciones basadas en datos, inteligencia artificial y software, conectando investigación científica con aplicaciones reales.",
    projectsButton: "Explorar proyectos",
    contactButton: "Contactar conmigo",
    aboutLabel: "01 / SOBRE MÍ",
    aboutTitle: "Transformando datos en soluciones reales.",
    aboutDescription:
      "Mi trabajo combina ciencia de datos, aprendizaje automático, investigación científica y desarrollo de software. Me interesa construir soluciones tecnológicas que permitan resolver problemas reales mediante el análisis y la aplicación de inteligencia artificial.",
    skillsLabel: "02 / HABILIDADES",
    skillsTitle: "Tecnologías y herramientas",
    projectsLabel: "03 / PROYECTOS",
    projectsTitle: "Proyectos destacados",
    projectsDescription:
      "Una selección de proyectos donde combino investigación, desarrollo de software y ciencia de datos.",
    publicationsLabel: "04 / PUBLICACIONES",
    publicationsTitle: "Investigación y publicaciones científicas",
    publicationsDescription:
      "Contribuciones a investigaciones científicas que integran aprendizaje automático, química computacional y análisis de interacciones proteína-ligando.",
    contactLabel: "05 / CONTACTO",
    contactTitle: "Construyamos algo interesante.",
    contactDescription:
      "Estoy abierto a oportunidades laborales, colaboraciones y proyectos relacionados con tecnología, datos e inteligencia artificial.",
    footer: "Diseñado y desarrollado por Gabriel Lara.",
  },
  en: {
    navigation: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Publications", href: "#publications" },
      { label: "Contact", href: "#contact" },
    ],
    availability: "Open to opportunities",
    greeting: "Hello, I'm",
    name: "Gabriel Lara Hormazábal",
    role: "Data Scientist & Machine Learning Engineer",
    secondaryRole: "Data Analyst · Full Stack Developer",
    description:
      "I build data-driven solutions through artificial intelligence, scientific research and software development, connecting research with real-world applications.",
    projectsButton: "Explore projects",
    contactButton: "Get in touch",
    aboutLabel: "01 / ABOUT ME",
    aboutTitle: "Turning data into real-world solutions.",
    aboutDescription:
      "My work combines data science, machine learning, scientific research and software development. I am interested in building technological solutions that address real-world problems through data analysis and artificial intelligence.",
    skillsLabel: "02 / SKILLS",
    skillsTitle: "Technologies and tools",
    projectsLabel: "03 / PROJECTS",
    projectsTitle: "Featured projects",
    projectsDescription:
      "A selection of projects combining research, software development and data science.",
    publicationsLabel: "04 / PUBLICATIONS",
    publicationsTitle: "Scientific research and publications",
    publicationsDescription:
      "Contributions to scientific research integrating machine learning, computational chemistry and protein-ligand interaction analysis.",
    contactLabel: "05 / CONTACT",
    contactTitle: "Let's build something interesting.",
    contactDescription:
      "I am open to job opportunities, collaborations and projects related to technology, data and artificial intelligence.",
    footer: "Designed and developed by Gabriel Lara.",
  },
};

const skillGroups = [
  {
    category: "Programming & Data",
    skills: ["Python", "SQL", "Pandas", "NumPy", "PostgreSQL"],
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "PyTorch",
      "Deep Learning",
    ],
  },
  {
    category: "Development",
    skills: ["Next.js", "React", "TypeScript", "FastAPI", "Git"],
  },
];

const projects = [
  {
    number: "01",
    category: "Data Science & Customer Analytics",
    title: "Customer Intelligence",
    image: "/images/projects/customer-intelligence.png",
    description: {
      es: "Plataforma de inteligencia de clientes que integra segmentación RFM, clustering K-Means, análisis de cohortes, Customer Lifetime Value (CLV) y análisis de Churn.",
      en: "Customer intelligence platform integrating RFM segmentation, K-Means clustering, cohort analysis, Customer Lifetime Value (CLV) and Churn analysis.",
    },
    technologies: ["Python", "Machine Learning", "RFM", "K-Means", "Next.js"],
    demoUrl: "https://customer-intelligence-sigma.vercel.app/",
    githubUrl: "https://github.com/Glarah453/customer-intelligence",
  },
  {
    number: "02",
    category: "Full Stack Development",
    title: "Acme – Financial Dashboard",
    image: "/images/projects/acme-dashboard.png",
    description: {
      es: "Dashboard financiero desarrollado para visualizar información empresarial mediante indicadores y componentes de análisis de datos.",
      en: "Financial dashboard developed to visualize business information through key indicators and data analysis components.",
    },
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    demoUrl:
      "https://extreme-routes-1fudgqf7c-gabriel-laras-projects-3e146784.vercel.app/",
    githubUrl: "https://github.com/Glarah453/extreme-routes",
  },
  {
    number: "03",
    category: "Scientific Machine Learning",
    title: "MolPAI – Molecular Affinity Prediction",
    image: "/images/projects/molpai.png",
    description: {
      es: "Plataforma web de aprendizaje automático orientada a predecir la afinidad de interacción entre proteínas odorantes y compuestos orgánicos volátiles, apoyando la investigación y el descubrimiento de semioquímicos.",
      en: "Machine learning web platform designed to predict binding affinity between odorant-binding proteins and volatile organic compounds, supporting research and semiochemical discovery.",
    },
    technologies: ["Python", "XGBoost", "LightGBM", "FastAPI", "PostgreSQL"],
    demoUrl: "",
    githubUrl: "",
  },
];


const publications = [
  {
    number: "01",
    year: "2025",
    journal: "International Journal of Molecular Sciences",
    volume: "26(5), 2302",
    title:
      "Insight into the Relationships Between Chemical, Protein and Functional Variables in the PBP/GOBP Family in Moths Based on Machine Learning",
    contribution: {
      es: "Contribución al desarrollo de modelos de aprendizaje automático, análisis de datos químicos, optimización de hiperparámetros y visualización de resultados.",
      en: "Contributed to machine learning model development, chemical data analysis, hyperparameter optimization and results visualization.",
    },
    doi: "https://doi.org/10.3390/ijms26052302",
  },
  {
    number: "02",
    year: "2026",
    journal: "Computational Biology and Chemistry",
    volume: "120, Part 1, 108794",
    title:
      "Accelerating VOC-OBP interaction screening via machine learning and molecular docking: Towards semiochemicals discovery for moth pests",
    contribution: {
      es: "Contribución al análisis de datos, caracterización química, validación de resultados y procesamiento de información experimental.",
      en: "Contributed to data analysis, chemical characterization, results validation and experimental data processing.",
    },
    doi: "https://doi.org/10.1016/j.compbiolchem.2025.108794",
  },
];


export default function PortfolioHome({
  currentYear,
}: PortfolioHomeProps) {
  const [language, setLanguage] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = content[language];

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            GL<span className="text-accent-highlight">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {t.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setLanguage(language === "es" ? "en" : "es")
              }
              className="rounded-lg border border-border px-3 py-2 text-xs font-semibold transition-colors hover:border-accent-highlight"
              aria-label="Change language"
            >
              {language === "es" ? "ES / EN" : "EN / ES"}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-white md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-border bg-background px-6 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-5">
              {t.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-muted hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="hero-glow portfolio-grid relative flex min-h-screen items-center px-6 pt-24 lg:px-10"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 py-24 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-highlight" />
              <span className="text-xs font-medium tracking-wide text-rose-200">
                {t.availability}
              </span>
            </div>

            <p className="mb-3 text-lg text-muted">
              {t.greeting}
            </p>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Gabriel Lara
              <span className="text-gradient block">
                Hormazábal.
              </span>
            </h1>

            <h2 className="mt-8 text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              {t.role}
            </h2>

            <p className="mt-2 text-sm tracking-wide text-accent-highlight">
              {t.secondaryRole}
            </p>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted">
              {t.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-highlight hover:shadow-lg hover:shadow-accent/20"
              >
                {t.projectsButton} ↗
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-highlight hover:bg-surface"
              >
                {t.contactButton}
              </a>
            </div>
          </div>

          <div className="relative hidden lg:flex lg:justify-center">
            <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-accent/30 bg-gradient-to-br from-surface-elevated to-background shadow-2xl shadow-accent/10">
              <div className="absolute inset-5 rounded-full border border-white/[0.06]" />
              <div className="text-center">
                <span className="text-8xl font-bold tracking-tighter text-gradient">
                  GL.
                </span>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted">
                  Data & Technology
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted md:block">
          Scroll to explore ↓
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-semibold tracking-[0.25em] text-accent-highlight">
            {t.aboutLabel}
          </p>

          <div className="grid gap-10 md:grid-cols-2 md:gap-20">
            <h2 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
              {t.aboutTitle}
            </h2>

            <p className="text-base leading-9 text-muted">
              {t.aboutDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-border bg-surface/40 px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-accent-highlight">
            {t.skillsLabel}
          </p>

          <h2 className="mb-14 text-4xl font-bold sm:text-5xl">
            {t.skillsTitle}
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <div
                key={group.category}
                className="rounded-xl border border-border bg-surface p-7 transition-colors hover:border-accent/60"
              >
                <span className="text-sm font-semibold text-accent-highlight">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {group.category}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background px-3 py-2 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-border px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-accent-highlight">
            {t.projectsLabel}
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            {t.projectsTitle}
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-muted">
            {t.projectsDescription}
          </p>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
              >
                <div className="relative aspect-video overflow-hidden bg-background">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-md border border-white/10 bg-background/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    {project.number}
                  </span>
                </div>

                <div className="p-7">
                  <p className="text-xs font-medium uppercase tracking-wide text-accent-highlight">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-5 min-h-24 text-sm leading-7 text-muted">
                    {project.description[language]}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-accent px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-accent-highlight"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-border px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-accent-highlight"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {!project.demoUrl && !project.githubUrl && (
                      <span className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2.5 text-xs font-medium text-rose-200">
                        {language === "es"
                          ? "Proyecto de investigación"
                          : "Research project"}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section
        id="publications"
        className="border-t border-border bg-surface/40 px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-accent-highlight">
            {t.publicationsLabel}
          </p>

          <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            {t.publicationsTitle}
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-muted">
            {t.publicationsDescription}
          </p>

          <div className="mt-14 space-y-5">
            {publications.map((publication) => (
              <article
                key={publication.number}
                className="group rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:border-accent/60 md:p-9"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-accent-highlight">
                    PUBLICATION {publication.number}
                  </span>

                  <span className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted">
                    {publication.year}
                  </span>
                </div>

                <h3 className="mt-7 max-w-5xl text-xl font-bold leading-relaxed transition-colors group-hover:text-rose-200 md:text-2xl">
                  {publication.title}
                </h3>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-muted">
                  <span className="font-medium text-white">
                    {publication.journal}
                  </span>
                  <span className="text-accent-highlight">·</span>
                  <span>{publication.volume}</span>
                </div>

                <div className="mt-7 border-l-2 border-accent pl-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent-highlight">
                    {language === "es"
                      ? "Mi contribución"
                      : "My contribution"}
                  </p>

                  <p className="max-w-4xl text-sm leading-7 text-muted">
                    {publication.contribution[language]}
                  </p>
                </div>

                <a
                  href={publication.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-rose-200 transition-colors hover:text-accent-highlight"
                >
                  View publication <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="hero-glow border-t border-border px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-accent-highlight">
            {t.contactLabel}
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
            {t.contactTitle}
          </h2>

          <p className="mt-7 max-w-2xl leading-8 text-muted">
            {t.contactDescription}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-muted sm:flex-row">
          {/* <span>© {new Date().getFullYear()} Gabriel Lara Hormazábal.</span> */}
          <span>© {currentYear} Gabriel Lara Hormazábal.</span>
          <span>{t.footer}</span>
        </div>
      </footer>
    </main>
  );
}
