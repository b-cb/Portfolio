import { projects, type Project } from './projects';

type ProjectTranslation = Pick<Project, 'title' | 'categoryText' | 'description'> & { accent?: string };

const translations: Record<string, ProjectTranslation> = {
  'neuro-archeologie': {
    title: 'VR Neuro-archaeology',
    categoryText: 'Summer 2026 · IRISA Internship',
    description: '3D eye-tracking on a reconstructed Gallo-Roman temple in VR.',
  },
  'entrainement-reseau': {
    title: 'Neural Network Training',
    categoryText: 'M1 · 2nd semester',
    description: 'Building a dataset and training a model to recognise mudras.',
  },
  'edge-preserving': {
    title: 'Edge-Preserving Processing',
    categoryText: 'M1 · 2nd semester',
    description: 'A spatial decomposition pipeline for independent control of detail and lighting.',
  },
  'appli-tarot': {
    title: 'Tarot/Coinche Web Application',
    categoryText: 'M1 · 2nd semester',
    description: 'A web application for playing Tarot or Coinche solo or over a local network.',
  },
  quest3: {
    title: 'Tisséo Digital Twin',
    accent: 'on Quest 3',
    categoryText: 'Personal project · Toulouse · Quest 3',
    description: 'Immersive rendering of Toulouse’s public transport network on Quest 3, powered by Tisséo GTFS and GTFS-RT data.',
  },
  'globe-historique': {
    title: 'Historical Globe Mobile',
    categoryText: 'Personal project',
    description: 'An Android app for learning world history, exploring history country by country.',
  },
  'tracker-golf': {
    title: 'Golf Tracker',
    categoryText: 'Embedded · Amazfit',
    description: 'A GPS golf companion showing distances to the centre and front of the green, as well as bunkers.',
  },
};

export const englishProjects: Project[] = projects.map((project) => ({
  ...project,
  ...translations[project.id],
  href: `/en/projets/${project.id}`,
}));
