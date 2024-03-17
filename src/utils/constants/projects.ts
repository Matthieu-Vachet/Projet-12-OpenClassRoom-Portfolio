// projects.ts
import { ProjectsTypes } from './../../types/types';

export const projects: ProjectsTypes[] = [
    {
        id: 1,
        name: 'Projet Ohmyfood',
        description:
            "Développer un site Internet en mobile first pour la société Ohmyfood, permettant aux usagers de composer et réserver un menu en ligne dans des restaurants gastronomiques pour réduire leurs temps d'attente.",
        category: 'Site Web',
        imageUrl: 'ohmyfood.webp',
        githubLink: 'https://github.com/Matthieu-Vachet/Projet-4-openclassrooms-OhMyFood',
        demoLink: 'https://ohmyfood.matthieuvachet.adkynet.fr/',
        technologies: ['Css', 'Html', 'Sass'],
    },
    {
        id: 2,
        name: 'Projet Booki',
        description:
            'Développer un site Internet pour la société Booki, permettant aux usagers de trouver des hébergements et des activités dans la ville de leurs choix, en utilisant une fonction recherche et un système de filtres.',
        category: 'Site Web',
        imageUrl: 'booki.webp',
        githubLink: 'https://github.com/Matthieu-Vachet/Projet-3-openclassrooms-Integrateur_Web-',
        demoLink: 'https://booki.matthieuvachet.adkynet.fr/',
        technologies: ['Css', 'Html'],
    },
    {
        id: 3,
        name: 'Projet Sophie Bluel',
        description:
            "Création d'une page web dynamique avec JavaScript, incluant la présentation des travaux d'un architecte, une page de connexion pour l'administrateur du site, et une modale pour uploader de nouveaux médias.",
        category: 'Portfolio',
        imageUrl: 'sophie.webp',
        githubLink:
            'https://github.com/Matthieu-Vachet/Projet-6-openclassrooms-Portfolio-Javascript',
        demoLink: 'https://matthieu-vachet.github.io/Projet-6-openclassrooms-Portfolio-Javascript/',
        technologies: ['Css', 'Html', 'Sass', 'Javascript'],
    },
    {
        id: 4,
        name: 'Projet Kasa',
        description:
            "Développer une application React complète pour Kasa, permettant la location d'appartements entre particuliers. Créer les composants React, les routes React Router, en suivant les maquettes Figma, pour les versions bureau et mobile.",
        category: 'Site Web',
        imageUrl: 'kasa.webp',
        githubLink: 'https://github.com/Matthieu-Vachet/Projet-8-openclassrooms-Projet-Kasa',
        demoLink: 'https://projet-8-openclassrooms-projet-kasa.vercel.app/',
        technologies: ['Css', 'Html', 'Sass', 'Javascript', 'React', 'ViteJs'],
    },
    {
        id: 5,
        name: 'Projet Nina',
        description:
            "Optimisation complète du site web, y compris les performances, le SEO, le référencement local, les métadonnées pour les réseaux sociaux et l'accessibilité. Production d'un rapport détaillé sur les actions entreprises et leurs effets.",
        category: 'Optimisation, SEO',
        imageUrl: 'nina.webp',
        githubLink:
            'https://github.com/Matthieu-Vachet/Projet-9-Openclassrooms-Projet-Optimisation-Nina-Carducci',
        demoLink:
            'https://matthieu-vachet.github.io/Projet-9-Openclassrooms-Projet-Optimisation-Nina-Carducci/',
        technologies: ['Css', 'Html', 'Javascript'],
    },
    {
        id: 6,
        name: 'Projet 724Events',
        description:
            "Analyser et résoudre les problèmes du site d'une agence d'événementiel, finaliser le code, compléter le cahier de recette avec des tests, s'assurer que tous les problèmes discutés avec Jean-Baptiste sont résolus.",
        category: 'Débuguage',
        imageUrl: 'event724.webp',
        githubLink:
            'https://github.com/Matthieu-Vachet/Projet-10-openclassrooms-Debuggez-une-application-React',
        demoLink: 'https://projet-10-openclassrooms-debuggez-une-application-react.vercel.app/',
        technologies: ['Css', 'Html', 'Javascript', 'Sass', 'React', 'Jest', 'TestingLibrary'],
    },
    {
        id: 7,
        name: 'Portfolio Perso',
        description:
            'Mon portfolio personnel, développé avec React, Vite.js et Framer Motion, offre une expérience immersive et dynamique. Chaque élément est conçu pour mettre en valeur mes compétences en intégration web et en animation. Explorez mes projets pour découvrir mon travail récent et ma passion pour le développement web.',
        category: 'Portfolio',
        imageUrl: 'portfolio.webp',
        githubLink: 'https://github.com/Matthieu-Vachet/Projet-12-OpenClassRoom-Portfolio',
        demoLink: 'https://matthieu-vachet-portfolio.vercel.app/',
        technologies: [
            'Sass',
            'React',
            'ViteJs',
            'Swagger',
            'MongoDb',
            'ExpressJs',
            'NodeJS',
            'FramerMotion',
        ],
    },
];
