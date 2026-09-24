// src/data/projects.ts

// Image imports
import Stage2A from '../Images/Stage2A.png';
import Apprentissage from '../Images/Apprentissage.jpg';
import ProjetImage from '../Images/ProjetImage.png';
import Appliweb from '../Images/Appliweb.png';
import VR from '../Images/VR.png';
import History from '../Images/History.png';
import Golf from '../Images/golf.png';

export type ProjectTheme = 'violet' | 'amber' | 'teal' | 'emerald' | 'blue' | 'pink';

export type Project = {
  id: string;
  title: string;
  categoryText: string;
  description: string;
  tags: string[];
  theme: ProjectTheme;
  href: string;
  image?: any;
  group: 'academique' | 'perso';
};

export const projects: Project[] = [
  {
    id: "neuro-archeologie",
    title: "Neuro-archéologie VR",
    categoryText: "Été 2026 · Stage IRISA",
    description: "Eye-tracking 3D sur un temple gallo-romain reconstitué en VR.",
    tags: ["OpenXR", "C++", "Unity"],
    theme: "violet",
    href: "/projets/neuro-archeologie",
    image: Stage2A,
    group: "academique"
  },
  {
    id: "entrainement-reseau",
    title: "Entrainement réseau de neurones",
    categoryText: "2nd semestre M1",
    description: "Création de la base de données et entrainement d'un modèle de reconnaissance de mudras.",
    tags: ["Yolo", "Python"],
    theme: "amber",
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
    theme: "teal",
    href: "/projets/edge-preserving",
    image: ProjetImage,
    group: "academique"
  },
  {
    id: "appli-tarot",
    title: "Application web Tarot/Coinche",
    categoryText: "2nd semestre M1",
    description: "Application web permettant de jouer au tarot ou a la coinche seul ou en réseau local",
    tags: ["Java", "Vite", "H2 database", "SpringBoot 3"],
    theme: "teal",
    href: "/projets/appli-tarot",
    image: Appliweb,
    group: "academique"
  },
  {
    id: "quest3",
    title: "Déploiement Quest 3",
    categoryText: "Linux Native · XR",
    description: "Développement sous Unity d'application de jeu ou d'exploration en VR.",
    tags: ["Unity", "C#"],
    theme: "pink",
    href: "/projets/quest3",
    image: VR,
    group: "perso"
  },
  {
    id: "globe-historique",
    title: "Globe Historique Mobile",
    categoryText: "Projet Perso",
    description: "Application android pour aider a l'apprentissage de l'histoire du monde avec l'histoire pays par pays.",
    tags: ["Kotlin", "MapLibre"],
    theme: "emerald",
    href: "/projets/globe-historique",
    image: History,
    group: "perso"
  },
  {
    id: "tracker-golf",
    title: "Tracker de Golf",
    categoryText: "Embarqué · Amazfit",
    description: "Application GPS pour suivi de golf pendant un parcours avec distances au centre du green, a l'entrée et aux bunkers.",
    tags: ["Python", "BLE"],
    theme: "blue",
    href: "/projets/tracker-golf",
    image: Golf,
    group: "perso"
  }
];
