export type AssetKind =
  | "project-hero"
  | "project-screenshot"
  | "architecture"
  | "data-visualization"
  | "profile"
  | "general"
  | "unknown";

export type ProjectAsset = {
  src: string;
  kind: AssetKind;
  alt: { en: string; fr: string };
  caption?: { en: string; fr: string };
};

export type ProjectAssetCollection = {
  hero: ProjectAsset;
  gallery: ProjectAsset[];
};

export const projectAssets: Record<string, ProjectAssetCollection> = {
  arkam: {
    hero: {
      src: "/project-assets/arkam1.png",
      kind: "project-hero",
      alt: {
        en: "Arkam chart showing Tunisian public data by production type",
        fr: "Graphique Arkam présentant des données publiques tunisiennes par type de production",
      },
      caption: { en: "Interactive public-data visualization", fr: "Visualisation interactive de données publiques" },
    },
    gallery: [
      {
        src: "/project-assets/arkam2.png",
        kind: "project-screenshot",
        alt: { en: "Arkam public-data platform feature overview", fr: "Aperçu d’une fonctionnalité de la plateforme de données publiques Arkam" },
        caption: { en: "Platform context and data topics", fr: "Contexte de la plateforme et thèmes de données" },
      },
      {
        src: "/project-assets/arkam3.png",
        kind: "project-screenshot",
        alt: { en: "Arkam landing page with open content and public institution references", fr: "Page d’accueil Arkam avec contenus ouverts et références institutionnelles" },
        caption: { en: "Public-data platform entry point", fr: "Point d’entrée de la plateforme de données publiques" },
      },
    ],
  },
  observatory: {
    hero: {
      src: "/project-assets/OAD1.png",
      kind: "project-hero",
      alt: { en: "Digital Administration Observatory website preview", fr: "Aperçu du site de l’Observatoire de l’Administration Digitale" },
      caption: { en: "Digital administration monitoring platform", fr: "Plateforme de suivi de l’administration digitale" },
    },
    gallery: [
      {
        src: "/project-assets/OAD2.png",
        kind: "data-visualization",
        alt: { en: "Digital Administration Observatory view with four evaluation axes", fr: "Vue de l’Observatoire présentant quatre axes d’évaluation" },
        caption: { en: "Evaluation dimensions", fr: "Axes d’évaluation" },
      },
      {
        src: "/project-assets/OAD3.png",
        kind: "data-visualization",
        alt: { en: "Digital Administration Observatory market trend charts", fr: "Graphiques de tendances de l’Observatoire de l’Administration Digitale" },
        caption: { en: "Trend analysis", fr: "Analyse des tendances" },
      },
    ],
  },
  crowdfunding: {
    hero: {
      src: "/project-assets/crowdfunding-website-page 2.PNG",
      kind: "project-hero",
      alt: { en: "Crowdfunding performance dashboard with campaign indicators", fr: "Tableau de bord de performance du crowdfunding avec indicateurs de campagne" },
      caption: { en: "Campaign performance dashboard", fr: "Tableau de bord de performance des campagnes" },
    },
    gallery: [
      {
        src: "/project-assets/crowdfunding-website-page 3.PNG",
        kind: "data-visualization",
        alt: { en: "Crowdfunding analysis dashboard with regional map and charts", fr: "Tableau de bord d’analyse du crowdfunding avec carte régionale et graphiques" },
        caption: { en: "Regional and domain analysis", fr: "Analyse régionale et par domaine" },
      },
      {
        src: "/project-assets/crowdfunding-website-page 5-domaine selection.PNG",
        kind: "data-visualization",
        alt: { en: "Crowdfunding dashboard with domain performance comparison", fr: "Tableau de bord de crowdfunding comparant les performances par domaine" },
      },
      {
        src: "/project-assets/crowdfunding-website-page4-selection mois.PNG",
        kind: "data-visualization",
        alt: { en: "Crowdfunding dashboard with monthly performance selection", fr: "Tableau de bord de crowdfunding avec sélection de performance mensuelle" },
      },
    ],
  },
  accessibilityFramework: {
    hero: {
      src: "/project-assets/semi-automatedframework-dashboard1.png",
      kind: "project-hero",
      alt: { en: "Accessibility diagnostic framework dashboard", fr: "Tableau de bord du framework de diagnostic d’accessibilité" },
      caption: { en: "Consolidated accessibility indicators", fr: "Indicateurs consolidés d’accessibilité" },
    },
    gallery: [
      {
        src: "/project-assets/semi-automatedframework--page1-ux_flow.png",
        kind: "architecture",
        alt: { en: "Accessibility diagnostic framework workflow from scan to report", fr: "Flux du framework de diagnostic d’accessibilité, du scan au rapport" },
        caption: { en: "Scan, transformation, review, dashboard, and batch analysis workflow", fr: "Flux de scan, transformation, révision, tableau de bord et analyse par lots" },
      },
      ...["2", "3", "4", "5"].map((number) => ({
        src: `/project-assets/semi-automatedframework-dashboard${number}.png`,
        kind: "project-screenshot" as const,
        alt: { en: `Accessibility diagnostic dashboard view ${number}`, fr: `Vue ${number} du tableau de bord de diagnostic d’accessibilité` },
      })),
      {
        src: "/project-assets/semi-automatedframework-batchanalysischart1.png",
        kind: "data-visualization",
        alt: { en: "Accessibility batch analysis dashboard", fr: "Tableau de bord d’analyse par lots de l’accessibilité" },
      },
      {
        src: "/project-assets/semi-automatedframework-batchanalysischart2.png",
        kind: "data-visualization",
        alt: { en: "Accessibility batch analysis chart", fr: "Graphique d’analyse par lots de l’accessibilité" },
      },
      {
        src: "/project-assets/semi-automatedframework-batchanalysischart5.png",
        kind: "data-visualization",
        alt: { en: "Accessibility batch analysis comparison chart", fr: "Graphique comparatif d’analyse par lots de l’accessibilité" },
      },
    ],
  },
  nineanoun: {
    hero: {
      src: "/project-assets/9anoun1.png",
      kind: "project-hero",
      alt: { en: "9anoun legal information platform homepage", fr: "Page d’accueil de la plateforme d’information juridique 9anoun" },
      caption: { en: "Legal information platform", fr: "Plateforme d’information juridique" },
    },
    gallery: [
      {
        src: "/project-assets/9anoun2.png",
        kind: "project-screenshot",
        alt: { en: "9anoun legal education and knowledge features", fr: "Fonctionnalités d’éducation juridique et de base de connaissances de 9anoun" },
        caption: { en: "Legal education and knowledge discovery", fr: "Éducation juridique et découverte des connaissances" },
      },
    ],
  },
};

export const generalAssets: ProjectAsset[] = [
  {
    src: "/profile.jpg",
    kind: "profile",
    alt: { en: "Original portrait of Dhia Ben Cheikh", fr: "Portrait original de Dhia Ben Cheikh" },
  },
  {
    src: "/profile-editorial.jpg",
    kind: "profile",
    alt: { en: "Portrait of Dhia Ben Cheikh", fr: "Portrait de Dhia Ben Cheikh" },
  },
  {
    src: "/project-assets/event-priz-win.jpeg",
    kind: "general",
    alt: { en: "Public event award presentation", fr: "Remise de prix lors d’un événement public" },
  },
  {
    src: "/project-assets/formation-dataviz-insat.jpeg",
    kind: "general",
    alt: { en: "Data visualization presentation in an educational setting", fr: "Présentation de data visualisation dans un cadre pédagogique" },
  },
  {
    src: "/project-assets/formation-dataviz-ipsi.jpeg",
    kind: "general",
    alt: { en: "Data visualization workshop presentation", fr: "Présentation lors d’un atelier de data visualisation" },
  },
];

export const unassignedAssets: ProjectAsset[] = [
  {
    src: "/project-assets/crowdfunding-websitepage 1.PNG",
    kind: "unknown",
    alt: { en: "Unassigned event photograph with a projected presentation", fr: "Photographie d’événement non attribuée avec une présentation projetée" },
  },
  {
    src: "/project-assets/oad-accessibility-anonym-report-v0.png",
    kind: "unknown",
    alt: { en: "Unassigned confidential accessibility report cover", fr: "Couverture non attribuée d’un rapport confidentiel d’accessibilité" },
  },
  {
    src: "/project-assets/project-oad-accessibility.jpeg",
    kind: "unknown",
    alt: { en: "Unassigned photograph of an accessibility report presentation", fr: "Photographie non attribuée d’une présentation de rapport d’accessibilité" },
  },
];
