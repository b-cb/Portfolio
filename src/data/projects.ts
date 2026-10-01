// src/data/projects.ts

import type { ImageMetadata } from 'astro';

// Image imports
import Stage2A from '../Images/Stage2A.png';
import Apprentissage from '../Images/Apprentissage.jpg';
import ProjetImage from '../Images/ProjetImage.png';
import Appliweb from '../Images/Appliweb.png';
import JumeauQuest from '../Images/JumeauQuest.png';
import History from '../Images/History.png';
import Golf from '../Images/golf.png';

export type Project = {
  id: string;
  title: string;
  accent?: string;
  categoryText: string;
  description: string;
  tags: string[];
  href: string;
  image?: ImageMetadata;
  group: 'academique' | 'perso';
};

export const quest3Project = {
  title: 'Jumeau numérique Tisséo',
  accent: 'sur Quest 3',
  categoryText: 'Projet personnel · Toulouse · Quest 3',
  description: 'Rendu immersif du réseau de transport toulousain sur Quest 3, alimenté par les données GTFS et GTFS-RT de Tisséo.',
  tags: ['Quest 3', 'Unity', 'Cesium', 'Java', 'Spring Boot', 'Python', 'Pygame'],
};

export const projects: Project[] = [
  {
    id: "neuro-archeologie",
    title: "Neuro-archéologie VR",
    categoryText: "Été 2026 · Stage IRISA",
    description: "Eye-tracking 3D sur un temple gallo-romain reconstitué en VR.",
    tags: ["OpenXR", "C++", "Unity"],
    href: "/projets/neuro-archeologie",
    image: Stage2A,
    group: "academique"
  },
  {
    id: "entrainement-reseau",
    title: "Entraînement réseau de neurones",
    categoryText: "2nd semestre M1",
    description: "Création de la base de données et entraînement d'un modèle de reconnaissance de mudras.",
    tags: ["Yolo", "Python"],
    href: "/projets/entrainement-reseau",
    image: Apprentissage,
    group: "academique"
  },
  {
    id: "edge-preserving",
    title: "Edge-Preserving Processing",
    categoryText: "2nd semestre M1",
    description: "Pipeline de décomposition spatiale pour le contrôle indépendant des détails et de l'éclairage.",
    tags: ["C++", "OpenCV", "Eigen3"],
    href: "/projets/edge-preserving",
    image: ProjetImage,
    group: "academique"
  },
  {
    id: "appli-tarot",
    title: "Application web Tarot/Coinche",
    categoryText: "2nd semestre M1",
    description: "Application web permettant de jouer au tarot ou à la coinche seul ou en réseau local",
    tags: ["Java", "Vite", "H2 database", "SpringBoot 3"],
    href: "/projets/appli-tarot",
    image: Appliweb,
    group: "academique"
  },
  {
    id: "quest3",
    ...quest3Project,
    href: "/projets/quest3",
    image: JumeauQuest,
    group: "perso"
  },
  {
    id: "globe-historique",
    title: "Globe Historique Mobile",
    categoryText: "Projet Perso",
    description: "Application Android pour aider à l'apprentissage de l'histoire du monde avec l'histoire pays par pays.",
    tags: ["Kotlin", "MapLibre"],
    href: "/projets/globe-historique",
    image: History,
    group: "perso"
  },
  {
    id: "tracker-golf",
    title: "Tracker de Golf",
    categoryText: "Embarqué · Amazfit",
    description: "Application GPS pour suivi de golf pendant un parcours avec distances au centre du green, à l'entrée et aux bunkers.",
    tags: ["Python", "BLE"],
    href: "/projets/tracker-golf",
    image: Golf,
    group: "perso"
  }
];
