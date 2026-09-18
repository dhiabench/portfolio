"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  contactInfo,
  locales,
  portfolioContent,
  type Locale,
  type ProjectItem,
} from "@/data/portfolio";
import { projectAssets, type ProjectAssetCollection } from "@/data/project-assets";

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

function ExternalIcon() {
  return <span aria-hidden="true">↗</span>;
}

function GithubIcon() {
  return <span className="link-icon" aria-hidden="true">GH</span>;
}

function ProjectCaseStudy({
  project,
  index,
  labels,
  assets,
  language,
  basePath,
  onOpen,
}: {
  project: ProjectItem;
  index: number;
  labels: { context: string; approach: string; technology: string; result: string; open: string; close: string; live: string; noLive: string; details: string };
  assets?: ProjectAssetCollection;
  language: Locale;
  basePath: string;
  onOpen: () => void;
}) {
  const hero = assets?.hero;
  return (
    <article className="project-card">
      <button type="button" className="project-card-main" onClick={onOpen} aria-label={`${labels.open}: ${project.name}`}>
        <div className={`project-visual ${hero ? "has-image" : ""}`}>
          {hero ? <Image src={`${basePath}${hero.src}`} alt={hero.alt[language]} fill sizes="(max-width: 700px) 100vw, 50vw" /> : null}
          <div className="project-visual-grid" />
          <span className="project-number">0{index + 1}</span>
          <span className="project-category">{project.category ?? "Project"}</span>
          <span className="project-open">{labels.details} <ExternalIcon /></span>
        </div>
        <div className="project-card-copy">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="case-study-tags">{project.technologies.slice(0, 5).map((tech) => <Tag key={tech}>{tech}</Tag>)}</div>
        </div>
      </button>
      <div className="project-card-links">
        {project.repoUrl ? <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><GithubIcon /> View on GitHub</a> : null}
        {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open live project: ${project.name}`}>{labels.live} <ExternalIcon /></a> : <span className="no-live">{labels.noLive}</span>}
      </div>
    </article>
  );
}

export function PortfolioPage() {
  const [language, setLanguage] = useState<Locale>("en");
  const [projectFilter, setProjectFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
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
        labels: { context: "Context", approach: "Approach & result", technology: "Technology", result: "What changed", open: "Open project details", close: "Close project details", live: "Live project", noLive: "No live demo listed", details: "DETAILS" },
        ecosystemTitle: "Technology ecosystem",
        ecosystemIntro: "A map of the tools and standards that recur across my work. The relationships matter more than a list of isolated skills.",
        projectCount: "selected projects",
        experienceLabel: "experience",
        allProjects: "All",
        liveProject: "Live project",
        source: "Source page",
        noLive: "No live demo listed",
        closeDetails: "Close project details",
      }
    : {
        status: "SYSTEM.STATUS = DISPONIBLE",
        location: "LOCATION = TUNISIE",
        focus: "FOCUS = LOGICIEL + DATA",
        portrait: "Portrait de Dhia Ben Cheikh",
        profileTitle: "Un professionnel du logiciel et de la donnée",
        profileText: "Je travaille à l’intersection des systèmes, de l’information et des usages : construire des flux fiables, rendre les tendances lisibles et transformer l’analyse en action.",
        labels: { context: "Contexte", approach: "Approche & résultat", technology: "Technologies", result: "Ce qui a changé", open: "Ouvrir les détails du projet", close: "Fermer les détails du projet", live: "Projet en ligne", noLive: "Aucune démo en ligne indiquée", details: "DÉTAILS" },
        ecosystemTitle: "Écosystème technologique",
        ecosystemIntro: "Une cartographie des outils et standards qui reviennent dans mon travail. Les relations comptent davantage qu’une liste de compétences isolées.",
        projectCount: "projets sélectionnés",
        experienceLabel: "d’expérience",
        allProjects: "Tous",
        liveProject: "Projet en ligne",
        source: "Page source",
        noLive: "Aucune démo en ligne indiquée",
        closeDetails: "Fermer les détails du projet",
      };

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const projectCategories = Array.from(new Set(content.projects.map((project) => project.category).filter(Boolean))) as string[];
  const visibleProjects = projectFilter === "all"
    ? content.projects
    : content.projects.filter((project) => project.category === projectFilter);
  const selectedAssets = selectedProject?.assetKey ? projectAssets[selectedProject.assetKey] : undefined;

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
          <div className="project-filters" role="group" aria-label={language === "en" ? "Filter projects" : "Filtrer les projets"}>
            <button type="button" className={projectFilter === "all" ? "active" : ""} onClick={() => setProjectFilter("all")}>{copy.allProjects}</button>
            {projectCategories.map((category) => <button type="button" className={projectFilter === category ? "active" : ""} key={category} onClick={() => setProjectFilter(category)}>{category}</button>)}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => <ProjectCaseStudy key={project.name} project={project} index={index} labels={copy.labels} assets={project.assetKey ? projectAssets[project.assetKey] : undefined} language={language} basePath={basePath} onOpen={() => setSelectedProject(project)} />)}
          </div>
        </section>

        {selectedProject ? (
          <div className="project-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}>
            <article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
              <button type="button" className="project-modal-close" onClick={() => setSelectedProject(null)} aria-label={copy.closeDetails}>×</button>
              <div className={`project-modal-visual ${selectedProject.image ? "has-image" : ""}`}>
                {selectedAssets?.hero ? <Image src={`${basePath}${selectedAssets.hero.src}`} alt={selectedAssets.hero.alt[language]} fill sizes="(max-width: 800px) 100vw, 700px" /> : <div className="project-modal-data-visual"><span>DATA</span><i /><i /><i /><i /></div>}
              </div>
              <div className="project-modal-body">
                <span className="micro-label">{selectedProject.category ?? "Project"}</span>
                <h2 id="project-modal-title">{selectedProject.name}</h2>
                <p className="project-modal-context">{selectedProject.context}</p>
                <p className="project-modal-description">{selectedProject.description}</p>
                <div className="project-modal-columns">
                  <div><span className="micro-label">01</span><strong>{copy.labels.approach}</strong><ul>{selectedProject.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
                  <div><span className="micro-label">02</span><strong>{copy.labels.technology}</strong><div className="case-study-tags">{selectedProject.technologies.map((tech) => <Tag key={tech}>{tech}</Tag>)}</div></div>
                </div>
                <div className="project-modal-actions">
                  {selectedProject.repoUrl ? <a className="button button-primary" href={selectedProject.repoUrl} target="_blank" rel="noreferrer"><GithubIcon /> View on GitHub</a> : null}
                  {selectedProject.liveUrl ? <a className="button button-quiet" href={selectedProject.liveUrl} target="_blank" rel="noreferrer">{copy.liveProject} <ExternalIcon /></a> : null}
                  {selectedProject.sourceUrl && selectedProject.sourceUrl !== selectedProject.liveUrl ? <a className="button button-quiet" href={selectedProject.sourceUrl} target="_blank" rel="noreferrer">{copy.source} <ExternalIcon /></a> : null}
                </div>
                {selectedAssets?.gallery.length ? (
                  <div className="project-gallery">
                    {selectedAssets.gallery.map((asset) => (
                      <figure key={asset.src}>
                        <Image src={`${basePath}${asset.src}`} alt={asset.alt[language]} width={1200} height={700} loading="lazy" />
                        {asset.caption ? <figcaption>{asset.caption[language]}</figcaption> : null}
                      </figure>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          </div>
        ) : null}

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
