// experiences.ts
import { ExperiencesTypes } from '../../types/types';

export const ExperiencesData: ExperiencesTypes[] = [
    {
        id: 1,
        title: 'Intégrateur Web',
        school: 'OpenClassRooms',
        location: 'Distanciel',
        description:
            "Actuellement en cours d'une formation intensive d'intégrateur web à temps plein chez OpenClassrooms, de 2023 à mars 2024, je poursuis avec succès l'obtention du diplôme RNCP niveau 5, équivalent bac+2. Cette formation, entièrement à distance, m'a permis d'explorer en profondeur l'intégration de sites web dynamiques avec React, Redux, ainsi que l'optimisation, le SEO et le débogage. Durant ce parcours, j'ai eu l'opportunité de collaborer avec des mentors experts dans leur domaine, ce qui a enrichi mon expérience et accéléré mon apprentissage. À travers douze projets professionnalisants, j'ai développé une solide expertise en gestion de projet web, de la conception au déploiement.",
        diplome: 'RNCP 5 (bac+2)',
        startDate: '2023',
        endDate: '2024',
        technologies: ['React', 'Javascript', 'Css', 'Html', 'node'],
        link: 'a venir',
        img: 'oplogo.webp',
    },
    {
        id: 2,
        title: 'Gestion de projet',
        school: 'Agence Webgencia',
        location: 'Distanciel',
        description:
            "J'ai récemment travaillé sur le développement d'un Menu Maker pour Qwenta, un site permettant aux restaurateurs de créer et de personnaliser facilement leurs menus. Dans le cadre de ce projet, j'ai été responsable du développement d'un système de veille pour recueillir des idées innovantes, ainsi que de la définition des spécifications techniques du site. J'ai également organisé la gestion de projet en utilisant un tableau Kanban pour suivre efficacement les tâches. Ce projet m'a permis de renforcer mes compétences en développement web et en gestion de projet.",
        diplome: 'Aucun',
        startDate: '2023',
        endDate: '2023',
        technologies: ['Aucun'],
        link: 'a venir',
        img: 'qwenta.webp',
    },
];
