export type Locale = "en" | "fr";

export type ContactInfo = {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  summary: string[];
  technologies: string[];
};

export type ProjectItem = {
  name: string;
  context: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  note?: string;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  year: string;
};

export type LanguageItem = {
  language: string;
  level: string;
};

export type LocaleContent = {
  nav: { about: string; experience: string; projects: string; skills: string; education: string; contact: string; resume: string; };
  hero: {
    eyebrow: string;
    name: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    resumeLabel: string;
  };
  about: {
    title: string;
    intro: string;
    bullets: string[];
  };
  dataPerspective: {
    title: string;
    intro: string;
    steps: { label: string; detail: string }[];
  };
  experienceTitle: string;
  experience: ExperienceItem[];
  projectsTitle: string;
  projects: ProjectItem[];
  skillsTitle: string;
  skills: SkillGroup[];
  educationTitle: string;
  education: EducationItem[];
  certificationsTitle: string;
  certifications: CertificationItem[];
  languagesTitle: string;
  languages: LanguageItem[];
  contactTitle: string;
  contact: {
    heading: string;
    description: string;
    email: string;
    phone: string;
    linkedin: string;
    location: string;
  };
};

export const contactInfo: ContactInfo = {
  email: "dhia.bencheikh@esprit.tn",
  phone: "+216 52 268 826",
  linkedin: "https://www.linkedin.com/in/dhiabencheikh",
  location: "Tunis / Ariana, Tunisia",
};

export const locales: Locale[] = ["en", "fr"];

export const portfolioContent: Record<Locale, LocaleContent> = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact", resume: "Resume" },
    hero: {
      eyebrow: "Data Engineer & BI Analyst | GenAI",
      name: "Dhia Ben Cheikh",
      title: "Turning data into operational insight and decision-ready systems.",
      description: "I design data pipelines, BI dashboards, and AI-assisted workflows that help organizations transform raw information into usable decisions.",
      primaryCta: "Contact me",
      secondaryCta: "View projects",
      resumeLabel: "Download CV",
    },
    about: {
      title: "About",
      intro: "I am a data engineer and BI analyst with 5 years of experience building analytical systems for institutions, public-sector initiatives, and digital projects. My work spans ETL automation, multi-source data analysis, dashboarding, and AI-powered process support.",
      bullets: [
        "Advanced in Python, SQL, and data pipeline automation for reporting and operational analysis.",
        "Experienced in building dashboards and analytical visualizations that support both technical and non-technical stakeholders.",
        "Focused on data quality, process clarity, and turning fragmented information into usable insight.",
      ],
    },
    dataPerspective: {
      title: "Data perspective",
      intro: "My work follows a repeatable path: make complex information legible, build the systems that keep it reliable, then deliver an interface people can act on.",
      steps: [
        { label: "Collect", detail: "Bring together public, multi-source, and operational data." },
        { label: "Understand", detail: "Use analysis, KPIs, and accessibility criteria to find what matters." },
        { label: "Model", detail: "Shape data into pipelines, structures, and decision-ready views." },
        { label: "Build", detail: "Turn the model into dashboards, reports, and intelligent workflows." },
        { label: "Deliver", detail: "Make the result useful for institutions, experts, and citizens." },
      ],
    },
    experienceTitle: "Experience",
    experience: [
      {
        title: "Data Analyst (BI Analyst)",
        company: "Idaraty",
        period: "September 2021 — Present",
        location: "Tunis / Ariana, Tunisia",
        summary: [
          "Automated data pipelines and reporting processes with Python and SQL to reduce turnaround time for institutional reporting.",
          "Analyzed public-sector and institutional datasets and shaped KPI dashboards, charts, and infographics for communication and decision support.",
          "Collaborated with the Access to Information Authority to structure their first digital annual report and prepare the official presentation materials.",
          "Co-led a data visualization workshop with the Institute of Press and Information Sciences (IPSI) to support practical data interpretation training.",
        ],
        technologies: ["Python", "SQL", "Power BI", "ETL", "Data Visualization", "KPI Design"],
      },
      {
        title: "AI Engineer",
        company: "Freelance",
        period: "April 2026 — May 2026",
        location: "Remote",
        summary: [
          "Developed a conversational AI agent for delivery drivers through Telegram to support route optimization and real-time delivery assistance.",
          "Integrated external signals such as weather, traffic, road incidents, and roadblocks into the decision workflow.",
          "Helped improve route decisions and operational efficiency through context-aware intelligent workflows.",
        ],
        technologies: ["OpenClaw", "Python", "Telegram Bot", "GenAI", "Prompt Engineering", "Geolocation"],
      },
      {
        title: "Web Accessibility Analyst",
        company: "Public Sector Evaluation / Government Project",
        period: "2021 — Present",
        location: "Tunisia",
        summary: [
          "Evaluated more than 500 public websites against digital quality and accessibility criteria.",
          "Analyzed over 100 performance and accessibility indicators to generate analytical reports for public institutions.",
          "Conducted audits for 4 government websites using WCAG 2.1 criteria and delivered technical recommendations for improvement.",
        ],
        technologies: ["Python", "Lighthouse CLI", "Data Analysis", "KPI Reporting", "Accessibility Audits"],
      },
    ],
    projectsTitle: "Projects",
    projects: [
      {
        name: "Arkam",
        context: "Public data platform implemented by Idaraty in collaboration with L’INS",
        description: "A data platform designed to make socio-economic indicators easier to access for journalists, citizens, and decision-makers.",
        highlights: [
          "Collected and processed 3000+ datasets from 80+ public sources.",
          "Built automated data integration and transformation pipelines.",
          "Designed dashboards, charts, and downloadable data structures for communication and public reporting.",
        ],
        technologies: ["Python", "JavaScript", "SQL", "APIs", "Streamlit", "Data Visualization"],
      },
      {
        name: "Digital Administration Observatory",
        context: "Public sector performance evaluation",
        description: "Assessment of public website performance and digital maturity across Tunisian institutions.",
        highlights: [
          "Analyzed more than 500 public websites and 100+ indicators.",
          "Produced analytical reports to support decision-making in public institutions.",
          "Contributed to improved digital service quality through structured evaluation and reporting.",
        ],
        technologies: ["Python", "CLI", "Data Analysis", "KPI Reporting"],
      },
      {
        name: "Web Accessibility Evaluation",
        context: "Government accessibility mission",
        description: "Accessibility audits of public administration websites based on WCAG 2.1 standards.",
        highlights: [
          "Conducted accessibility audits for 4 government websites.",
          "Identified WCAG 2.1 compliance gaps and delivered technical recommendations.",
          "Helped improve the accessibility of public digital services.",
        ],
        technologies: ["Python", "Lighthouse CLI", "Accessibility Testing", "Reporting"],
      },
      {
        name: "Crowdfunding Platform with ETL Pipeline & Dashboard",
        context: "Final-year Business Intelligence project",
        description: "Built a crowdfunding platform and supporting ETL pipeline for campaign data analysis and performance tracking.",
        highlights: [
          "Developed a crowdfunding platform using the MEAN stack.",
          "Designed a Talend ETL pipeline and modeled data for analytical processing.",
          "Built Power BI dashboards to monitor campaign outcomes and user behavior.",
        ],
        technologies: ["MEAN Stack", "Talend", "Power BI", "ETL"],
      },
      {
        name: "Semi-automated Web Accessibility Diagnostic Framework",
        context: "Final-year engineering project",
        description: "Framework for evaluating public website accessibility with automated data collection and reporting.",
        highlights: [
          "Reduced manual checks by 50–60%.",
          "Reduced reporting time by 70%.",
          "Created interactive dashboards and automated PDF reporting to support accessibility experts.",
        ],
        technologies: ["Python", "Streamlit", "JSON", "Data Modeling", "Dashboarding"],
      },
    ],
    skillsTitle: "Skills",
    skills: [
      { label: "Languages", items: ["Python", "R", "SQL", "JavaScript"] },
      { label: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "NoSQL", "PL/SQL", "ORMs"] },
      { label: "BI & Data", items: ["Power BI", "ETL", "Data Transformation", "Data Analysis", "Data Visualization", "KPI Design"] },
      { label: "Cloud & Integration", items: ["Azure", "Databricks", "REST APIs", "API Integration", "Data Pipelines"] },
      { label: "AI & Data Science", items: ["GenAI", "Prompt Engineering", "LLMs", "Agentic AI", "RAG", "NLP", "Machine Learning", "Deep Learning"] },
      { label: "Design & UX", items: ["Wireframing", "Prototyping", "BPMN", "User-Centered Design", "Empathy", "Process Optimization"] },
      { label: "Tools", items: ["Streamlit", "Git", "GitHub", "Draw.io", "Mermaid", "Sketch", "Lighthouse CLI"] },
    ],
    educationTitle: "Education",
    education: [
      { degree: "Engineering Degree in Computer Science — ERP & Business Intelligence", institution: "Private Higher School of Engineering and Technology", period: "2021 — 2025", note: "With honors" },
      { degree: "Applied License in Business Intelligence", institution: "Higher Institute of Management of Tunis", period: "2018 — 2021" },
      { degree: "Baccalaureate in Computer Science", institution: "Habib Thameur High School, Bizerte", period: "2014 — 2018" },
    ],
    certificationsTitle: "Certifications",
    certifications: [
      { name: "PMI / TenStep BPM & BPMN", issuer: "PMI / TenStep", year: "2023" },
    ],
    languagesTitle: "Languages",
    languages: [
      { language: "Arabic", level: "Native" },
      { language: "French", level: "B2 / Fluent for professional work" },
      { language: "English", level: "B2 / Fluent for professional work" },
      { language: "Spanish", level: "Basic" },
    ],
    contactTitle: "Contact",
    contact: {
      heading: "Let’s build something useful with data.",
      description: "I’m open to data engineering, BI, and AI-enabled analytics opportunities where clean data and thoughtful analysis drive better decisions.",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      location: "Location",
    },
  },
  fr: {
    nav: { about: "À propos", experience: "Expérience", projects: "Projets", skills: "Compétences", education: "Formation", contact: "Contact", resume: "CV" },
    hero: {
      eyebrow: "Data Engineer & BI Analyst | GenAI",
      name: "Dhia Ben Cheikh",
      title: "Transformer les données en information exploitable et en décisions concrètes.",
      description: "Je conçois des pipelines de données, des tableaux de bord BI et des workflows assistés par l’IA pour aider les organisations à exploiter leurs données de manière fiable.",
      primaryCta: "Me contacter",
      secondaryCta: "Voir les projets",
      resumeLabel: "Télécharger le CV",
    },
    about: {
      title: "À propos",
      intro: "Je suis data engineer et BI analyst avec 5 ans d’expérience dans la mise en place de systèmes analytiques pour les institutions, les projets du secteur public et les initiatives digitales. Mon travail couvre l’automatisation des pipelines ETL, l’analyse de données multi-sources, le reporting BI et le support IA dans les processus décisionnels.",
      bullets: [
        "Solide maîtrise de Python, SQL et de l’automatisation des pipelines de données pour le reporting et l’analyse opérationnelle.",
        "Expérience dans la conception de tableaux de bord et de visualisations analytiques destinés aux décideurs comme aux équipes techniques.",
        "Attentif à la qualité des données, à la clarté des processus et à la transformation d’informations fragmentées en insights exploitables.",
      ],
    },
    dataPerspective: {
      title: "Perspective data",
      intro: "Mon travail suit un chemin reproductible : rendre l’information complexe lisible, construire les systèmes qui la rendent fiable, puis livrer une interface exploitable.",
      steps: [
        { label: "Collecter", detail: "Réunir des données publiques, multi-sources et opérationnelles." },
        { label: "Comprendre", detail: "S’appuyer sur l’analyse, les KPI et les critères d’accessibilité." },
        { label: "Modéliser", detail: "Transformer les données en pipelines, structures et vues décisionnelles." },
        { label: "Construire", detail: "Donner forme au modèle via des dashboards, rapports et workflows intelligents." },
        { label: "Livrer", detail: "Rendre le résultat utile aux institutions, experts et citoyens." },
      ],
    },
    experienceTitle: "Expérience",
    experience: [
      {
        title: "Data Analyst (Analyste BI)",
        company: "Idaraty",
        period: "Septembre 2021 — Aujourd’hui",
        location: "Tunis / Ariana, Tunisie",
        summary: [
          "Automatisation des pipelines de données et des processus de reporting à l’aide de Python et SQL pour réduire les délais de production des rapports.",
          "Analyse de données issues du secteur public et conception de tableaux de bord, graphiques et infographies pour soutenir la communication et la prise de décision.",
          "Collaboration avec l’Instance d’Accès à l’Information pour structurer leur premier rapport annuel numérique et préparer les supports de présentation officielle.",
          "Co-animation d’un atelier de data visualisation à l’IPSI pour accompagner des étudiants dans l’interprétation pratique des données.",
        ],
        technologies: ["Python", "SQL", "Power BI", "ETL", "Data Visualization", "KPI"],
      },
      {
        title: "AI Engineer",
        company: "Freelance",
        period: "Avril 2026 — Mai 2026",
        location: "Télétravail",
        summary: [
          "Développement d’un agent IA conversationnel pour des livreurs via Telegram afin d’optimiser les trajets et assister les décisions en temps réel.",
          "Intégration de données externes liées à la météo, au trafic, aux accidents et aux blocages routiers dans le workflow décisionnel.",
          "Amélioration de l’efficacité opérationnelle grâce à un système intelligent orienté contexte.",
        ],
        technologies: ["OpenClaw", "Python", "Telegram Bot", "GenAI", "Prompt Engineering", "Géolocalisation"],
      },
      {
        title: "Analyste en accessibilité Web",
        company: "Évaluation du secteur public / Projet gouvernemental",
        period: "2021 — Aujourd’hui",
        location: "Tunisie",
        summary: [
          "Évaluation de plus de 500 sites publics à partir de critères de qualité numérique et d’accessibilité.",
          "Analyse de plus de 100 indicateurs de performance et d’accessibilité pour produire des rapports institutionnels.",
          "Réalisation d’audits d’accessibilité de 4 sites web gouvernementaux selon les standards WCAG 2.1 et recommandations techniques.",
        ],
        technologies: ["Python", "Lighthouse CLI", "Analyse de données", "KPI", "Audits d’accessibilité"],
      },
    ],
    projectsTitle: "Projets",
    projects: [
      {
        name: "Arkam",
        context: "Plateforme de données publiques mise en œuvre par Idaraty en collaboration avec l’INS",
        description: "Une plateforme de données destinée à rendre les indicateurs socio-économiques plus accessibles aux journalistes, citoyens et décideurs.",
        highlights: [
          "Collecte et traitement de plus de 3000 jeux de données issus de plus de 80 sources publiques.",
          "Mise en place de pipelines d’intégration et de transformation automatisés.",
          "Création de tableaux de bord, graphiques et fichiers de données téléchargeables pour la communication publique.",
        ],
        technologies: ["Python", "JavaScript", "SQL", "APIs", "Streamlit", "Data Visualization"],
      },
      {
        name: "Observatoire de l’Administration Digitale",
        context: "Évaluation de la performance du secteur public",
        description: "Analyse de la performance numérique et de la maturité digitale des institutions publiques tunisiennes.",
        highlights: [
          "Analyse de plus de 500 sites publics et de 100+ indicateurs.",
          "Production de rapports analytiques pour soutenir la prise de décision au sein des institutions publiques.",
          "Contribution à l’amélioration de la qualité des services numériques publics.",
        ],
        technologies: ["Python", "CLI", "Analyse de données", "KPI"],
      },
      {
        name: "Évaluation de l’accessibilité web",
        context: "Mission gouvernementale d’accessibilité",
        description: "Audits d’accessibilité de sites administratifs selon les standards WCAG 2.1.",
        highlights: [
          "Réalisation d’audits d’accessibilité pour 4 sites web administratifs.",
          "Identification des non-conformités WCAG 2.1 et recommandations techniques.",
          "Contribution à l’amélioration de l’accessibilité des services publics en ligne.",
        ],
        technologies: ["Python", "Lighthouse CLI", "Tests d’accessibilité", "Reporting"],
      },
      {
        name: "Plateforme de Crowdfunding avec Pipeline ETL et Dashboard",
        context: "Projet de fin d’études en Business Intelligence",
        description: "Développement d’une plateforme de financement participatif avec pipeline ETL pour l’analyse des performances des campagnes.",
        highlights: [
          "Développement de la plateforme avec la stack MEAN.",
          "Conception d’un pipeline ETL Talend et modélisation des données.",
          "Création de tableaux de bord Power BI pour suivre les campagnes et le comportement des utilisateurs.",
        ],
        technologies: ["MEAN Stack", "Talend", "Power BI", "ETL"],
      },
      {
        name: "Framework semi-automatisé de diagnostic de l’accessibilité web",
        context: "Projet de fin d’études en ingénierie",
        description: "Framework d’évaluation de l’accessibilité des sites publics avec collecte automatisée et reporting structuré.",
        highlights: [
          "Réduction de 50 à 60 % des contrôles manuels.",
          "Réduction de 70 % du temps de production des rapports.",
          "Création de tableaux de bord interactifs et de rapports PDF automatisés pour les experts en accessibilité.",
        ],
        technologies: ["Python", "Streamlit", "JSON", "Modélisation de données", "Dashboards"],
      },
    ],
    skillsTitle: "Compétences",
    skills: [
      { label: "Langages", items: ["Python", "R", "SQL", "JavaScript"] },
      { label: "Bases de données", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "NoSQL", "PL/SQL", "ORMs"] },
      { label: "BI & Données", items: ["Power BI", "ETL", "Transformation de données", "Analyse de données", "Data Visualization", "KPI"] },
      { label: "Cloud & Intégration", items: ["Azure", "Databricks", "REST APIs", "Intégration API", "Data Pipelines"] },
      { label: "IA & Data Science", items: ["GenAI", "Prompt Engineering", "LLMs", "Agentic AI", "RAG", "NLP", "Machine Learning", "Deep Learning"] },
      { label: "Design & UX", items: ["Wireframing", "Prototypage", "BPMN", "Conception centrée utilisateur", "Empathie", "Optimisation des processus"] },
      { label: "Outils", items: ["Streamlit", "Git", "GitHub", "Draw.io", "Mermaid", "Sketch", "Lighthouse CLI"] },
    ],
    educationTitle: "Formation",
    education: [
      { degree: "Diplôme d’ingénieur en informatique — Spécialité ERP & Business Intelligence", institution: "École Supérieure Privée d’Ingénierie et de Technologie", period: "2021 — 2025", note: "Mention Très Bien" },
      { degree: "Licence appliquée en Business Intelligence", institution: "Institut Supérieur de Gestion de Tunis", period: "2018 — 2021" },
      { degree: "Baccalauréat en Informatique", institution: "Lycée Habib Thameur Bizerte", period: "2014 — 2018" },
    ],
    certificationsTitle: "Certifications",
    certifications: [
      { name: "PMI / TenStep BPM et BPMN", issuer: "PMI / TenStep", year: "2023" },
    ],
    languagesTitle: "Langues",
    languages: [
      { language: "Arabe", level: "Langue maternelle" },
      { language: "Français", level: "B2 / Courant pour le travail professionnel" },
      { language: "Anglais", level: "B2 / Courant pour le travail professionnel" },
      { language: "Espagnol", level: "Notions" },
    ],
    contactTitle: "Contact",
    contact: {
      heading: "Construisons quelque chose d’utile avec les données.",
      description: "Je suis ouvert aux opportunités en data engineering, BI et analytics pilotées par l’IA, là où la qualité des données et l’analyse rigoureuse soutiennent de meilleures décisions.",
      email: "E-mail",
      phone: "Téléphone",
      linkedin: "LinkedIn",
      location: "Localisation",
    },
  },
};
