"use client";

import Image from "next/image";
import { useState } from "react";
import {
  contactInfo,
  locales,
  portfolioContent,
  type Locale,
  type ProjectItem,
} from "@/data/portfolio";

const navItems = [
  ["about", "01"],
  ["experience", "02"],
  ["projects", "03"],
  ["data", "04"],
  ["contact", "05"],
] as const;

const ecosystem = [
  { label: "Python", type: "language", projects: ["Arkam", "Observatory", "Accessibility"] },
  { label: "SQL", type: "language", projects: ["Arkam", "Reporting"] },
  { label: "Power BI", type: "interface", projects: ["Crowdfunding", "Reporting"] },
  { label: "Streamlit", type: "interface", projects: ["Arkam", "Accessibility"] },
  { label: "ETL", type: "system", projects: ["Crowdfunding", "Arkam"] },
  { label: "WCAG 2.1", type: "standard", projects: ["Accessibility", "Observatory"] },
  { label: "GenAI", type: "system", projects: ["Delivery agent"] },
];

function SectionMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-marker">
      <span>{number}</span>
      <span>{label}</span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="data-tag">{children}</span>;
}

function ProjectCaseStudy({
  project,
  index,
  labels,
}: {
  project: ProjectItem;
  index: number;
  labels: { context: string; approach: string; technology: string; result: string; open: string; close: string };
}) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`case-study ${open ? "case-study-open" : ""}`}>
      <button
        type="button"
        className="case-study-trigger"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="case-study-index">0{index + 1}</span>
        <span className="case-study-name">{project.name}</span>
        <span className="case-study-context">{project.context}</span>
        <span className="case-study-toggle">{open ? "−" : "+"}</span>
      </button>
      <div className="case-study-preview">
        <p>{project.description}</p>
        <div className="case-study-tags">{project.technologies.slice(0, 4).map((tech) => <Tag key={tech}>{tech}</Tag>)}</div>
      </div>
      {open ? (
        <div className="case-study-details">
          <div>
            <span className="micro-label">01</span>
            <strong>{labels.context}</strong>
            <p>{project.context}</p>
          </div>
          <div>
            <span className="micro-label">02</span>
            <strong>{labels.approach}</strong>
            <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </div>
          <div>
            <span className="micro-label">03</span>
            <strong>{labels.technology}</strong>
            <div className="case-study-tags">{project.technologies.map((tech) => <Tag key={tech}>{tech}</Tag>)}</div>
          </div>
          <div className="case-study-result">
            <span className="micro-label">04</span>
            <strong>{labels.result}</strong>
            <p>{project.highlights[project.highlights.length - 1]}</p>
          </div>
        </div>
      ) : null}
      <span className="sr-only">{open ? labels.close : labels.open}</span>
    </article>
  );
}

export function PortfolioPage() {
  const [language, setLanguage] = useState<Locale>("en");
  const content = portfolioContent[language];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const resumeHref = `${basePath}${language === "en" ? "/resume-en.pdf" : "/resume-fr.pdf"}`;
  const profileImageSrc = `${basePath}/profile-editorial.jpg`;
  const copy = language === "en"
    ? {
        status: "SYSTEM.STATUS = AVAILABLE",
        location: "LOCATION = TUNISIA",
        focus: "FOCUS = SOFTWARE + DATA",
        portrait: "Portrait of Dhia Ben Cheikh",
        profileTitle: "A software and data professional",
        profileText: "I work where systems, information, and people meet: engineering reliable data flows, making patterns visible, and building interfaces that turn analysis into action.",
        labels: { context: "Context", approach: "Approach & result", technology: "Technology", result: "What changed", open: "Expand case study", close: "Collapse case study" },
        ecosystemTitle: "Technology ecosystem",
        ecosystemIntro: "A map of the tools and standards that recur across my work. The relationships matter more than a list of isolated skills.",
        projectCount: "selected projects",
        experienceLabel: "experience",
      }
    : {
        status: "SYSTEM.STATUS = DISPONIBLE",
        location: "LOCATION = TUNISIE",
        focus: "FOCUS = LOGICIEL + DATA",
        portrait: "Portrait de Dhia Ben Cheikh",
        profileTitle: "Un professionnel du logiciel et de la donnée",
        profileText: "Je travaille à l’intersection des systèmes, de l’information et des usages : construire des flux fiables, rendre les tendances lisibles et transformer l’analyse en action.",
        labels: { context: "Contexte", approach: "Approche & résultat", technology: "Technologies", result: "Ce qui a changé", open: "Ouvrir l’étude de cas", close: "Fermer l’étude de cas" },
        ecosystemTitle: "Écosystème technologique",
        ecosystemIntro: "Une cartographie des outils et standards qui reviennent dans mon travail. Les relations comptent davantage qu’une liste de compétences isolées.",
        projectCount: "projets sélectionnés",
        experienceLabel: "d’expérience",
      };

  return (
    <div className="site-shell">
      <div className="background-grid" aria-hidden="true" />
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Dhia Ben Cheikh, home">
          <span className="brand-mark">DB<span>·</span></span>
          <span>Dhia Ben Cheikh</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([id, number]) => <a key={id} href={`#${id}`}><span>{number}</span>{content.nav[id as keyof typeof content.nav]}</a>)}
        </nav>
        <div className="header-actions">
          <a className="resume-link" href={resumeHref} target="_blank" rel="noreferrer">{content.nav.resume}<span>↗</span></a>
          <div className="language-switcher" aria-label="Language">
            {locales.map((locale) => (
              <button key={locale} type="button" aria-pressed={language === locale} onClick={() => setLanguage(locale)}>
                {locale.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-layout">
          <div className="hero-copy">
            <div className="status-line"><span className="status-dot" />{copy.status}</div>
            <p className="hero-kicker">DATA ENGINEER / BI ANALYST / GENAI</p>
            <h1>{content.hero.name}<span>.</span></h1>
            <p className="hero-positioning">{copy.profileTitle}</p>
            <p className="hero-description">{copy.profileText}</p>
            <div className="hero-ctas">
              <a className="button button-primary" href="#contact">{content.hero.primaryCta}<span>↘</span></a>
              <a className="button button-quiet" href="#projects">{content.hero.secondaryCta}</a>
            </div>
            <div className="hero-meta">
              <span>{copy.location}</span>
              <span>{copy.focus}</span>
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a>
            </div>
          </div>

          <div className="portrait-stage">
            <div className="coordinate coordinate-top">36.8065° N / 10.1815° E</div>
            <div className="portrait-frame">
              <Image src={profileImageSrc} alt={copy.portrait} fill priority sizes="(max-width: 900px) 90vw, 460px" />
              <div className="portrait-overlay" />
            </div>
            <div className="portrait-line portrait-line-one" />
            <div className="portrait-line portrait-line-two" />
            <div className="portrait-node node-one" />
            <div className="portrait-node node-two" />
            <div className="portrait-note note-one"><span>5</span>{copy.experienceLabel}</div>
            <div className="portrait-note note-two"><span>→</span>data / systems</div>
            <div className="portrait-caption">IMAGE / 001<br /><span>PROFILE_SIGNAL</span></div>
          </div>
        </section>

        <section id="about" className="editorial-section">
          <SectionMarker number="01" label={content.nav.about} />
          <div className="section-intro-grid">
            <h2>{content.about.title}<span>—</span><br />{language === "en" ? "beyond the CV" : "au-delà du CV"}</h2>
            <div>
              <p className="lead-copy">{content.about.intro}</p>
              <div className="signal-list">{content.about.bullets.map((bullet, index) => <div key={bullet}><span>0{index + 1}</span><p>{bullet}</p></div>)}</div>
            </div>
          </div>
        </section>

        <section id="experience" className="editorial-section">
          <SectionMarker number="02" label={content.nav.experience} />
          <div className="experience-header">
            <h2>{content.experienceTitle}</h2>
            <p>{language === "en" ? "A timeline of work across public data, BI, accessibility, and intelligent workflows." : "Une trajectoire entre données publiques, BI, accessibilité et workflows intelligents."}</p>
          </div>
          <div className="timeline">
            {content.experience.map((item, index) => (
              <article className="timeline-row" key={`${item.company}-${item.period}`}>
                <div className="timeline-axis"><span>0{index + 1}</span><i /></div>
                <div className="timeline-date">{item.period}<br /><span>{item.location}</span></div>
                <div className="timeline-content">
                  <h3>{item.title}</h3><p className="timeline-company">{item.company}</p>
                  <ul>{item.summary.slice(0, 3).map((entry) => <li key={entry}>{entry}</li>)}</ul>
                  <div className="case-study-tags">{item.technologies.map((tech) => <Tag key={tech}>{tech}</Tag>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="editorial-section project-section">
          <SectionMarker number="03" label={content.nav.projects} />
          <div className="experience-header">
            <h2>{content.projectsTitle}<span>.</span></h2>
            <p>{language === "en" ? "Selected work, presented as systems and outcomes rather than job descriptions." : "Une sélection de réalisations présentées comme des systèmes et des résultats, pas comme des fiches de poste."}</p>
          </div>
          <div className="case-study-list">
            {content.projects.map((project, index) => <ProjectCaseStudy key={project.name} project={project} index={index} labels={copy.labels} />)}
          </div>
        </section>

        <section id="data" className="editorial-section data-section">
          <SectionMarker number="04" label={language === "en" ? "Data perspective" : "Perspective data"} />
          <div className="data-perspective-head">
            <div><h2>{content.dataPerspective.title}<span>.</span></h2><p>{content.dataPerspective.intro}</p></div>
            <div className="data-stamp">DATA → INSIGHT<br /><span>INSIGHT → IMPACT</span></div>
          </div>
          <div className="process-flow">
            {content.dataPerspective.steps.map((step, index) => <div className="process-step" key={step.label}><span>0{index + 1}</span><strong>{step.label}</strong><p>{step.detail}</p>{index < content.dataPerspective.steps.length - 1 ? <i>→</i> : null}</div>)}
          </div>
          <div className="ecosystem-block">
            <div className="ecosystem-copy"><h3>{copy.ecosystemTitle}</h3><p>{copy.ecosystemIntro}</p><span className="micro-label">RELATIONSHIP_MAP / LIVE_DATA</span></div>
            <div className="ecosystem-map" role="img" aria-label={copy.ecosystemTitle}>
              <div className="ecosystem-core">Dhia<br /><span>system</span></div>
              {ecosystem.map((item, index) => <div key={item.label} className={`ecosystem-node ecosystem-node-${index + 1}`}><span className="node-dot" /><strong>{item.label}</strong><small>{item.type}</small></div>)}
              <div className="ecosystem-orbit orbit-one" /><div className="ecosystem-orbit orbit-two" />
            </div>
          </div>
        </section>

        <section className="editorial-section proof-section">
          <div className="proof-cell"><strong>3000+</strong><span>{language === "en" ? "datasets processed" : "jeux de données traités"}</span></div>
          <div className="proof-cell"><strong>80+</strong><span>{language === "en" ? "public sources" : "sources publiques"}</span></div>
          <div className="proof-cell"><strong>500+</strong><span>{language === "en" ? "public websites evaluated" : "sites publics évalués"}</span></div>
          <div className="proof-cell"><strong>70%</strong><span>{language === "en" ? "reporting time reduced" : "de temps de reporting réduit"}</span></div>
        </section>

        <section id="contact" className="contact-section">
          <SectionMarker number="05" label={content.nav.contact} />
          <div className="contact-grid">
            <div><p className="hero-kicker">OPEN CHANNEL / 2026</p><h2>{content.contact.heading}</h2><p>{content.contact.description}</p><a className="button button-primary" href={`mailto:${contactInfo.email}`}>{content.hero.primaryCta} <span>↗</span></a></div>
            <div className="contact-details">
              <a href={`mailto:${contactInfo.email}`}><span>{content.contact.email}</span>{contactInfo.email}</a>
              <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}><span>{content.contact.phone}</span>{contactInfo.phone}</a>
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer"><span>{content.contact.linkedin}</span>/dhiabencheikh ↗</a>
              <div><span>{content.contact.location}</span>{contactInfo.location}</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><span>DB<span className="footer-dot">·</span> / SOFTWARE + DATA</span><span>© 2026 Dhia Ben Cheikh</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}
