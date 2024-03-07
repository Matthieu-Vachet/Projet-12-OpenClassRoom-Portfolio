import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { LiaSuitcaseSolid } from 'react-icons/lia';
import { GiGearHammer } from 'react-icons/gi';
import { IoGitNetworkSharp } from 'react-icons/io5';
import {
    DiHtml5,
    DiCss3,
    DiSass,
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiMongodb,
    DiNpm,
    DiGithubAlt,
    DiTrello,
} from 'react-icons/di';
import {
    SiVite,
    SiJest,
    SiTestinglibrary,
    SiRedux,
    SiSwagger,
    SiExpress,
    SiGitkraken,
    SiInkscape,
    SiSlack,
    SiPostman,
} from 'react-icons/si';
import { TbBrandFramerMotion, TbBrandVscode, TbBrandFigma } from 'react-icons/tb';

/* Navigation items */
const navItems = [
    {
        id: 'home',
        title: 'Home',
        icon: AiOutlineHome,
    },
    {
        id: 'about',
        title: 'About',
        icon: AiOutlineUser,
    },
    {
        id: 'experience',
        title: 'Experience',
        icon: IoGitNetworkSharp,
    },
    {
        id: 'skills',
        title: 'Skills',
        icon: GiGearHammer,
    },
    {
        id: 'projects',
        title: 'Projects',
        icon: LiaSuitcaseSolid,
    },
    {
        id: 'contact',
        title: 'Contact',
        icon: BiMessageSquareDetail,
    },
];

/* Frontend skills */
const Frontend_skill = [
    {
        skill_name: 'Html',
        Image: DiHtml5,
        size: 70,
        alt: 'Icône Html',
    },
    {
        skill_name: 'Css',
        Image: DiCss3,
        size: 70,
        alt: 'Icône Css',
    },
    {
        skill_name: 'Sass',
        Image: DiSass,
        size: 70,
        alt: 'Icône Sass',
    },
    {
        skill_name: 'Javascript',
        Image: DiJavascript1,
        size: 70,
        alt: 'Icône Javascript',
    },
    {
        skill_name: 'React',
        Image: DiReact,
        size: 70,
        alt: 'Icône React',
    },
    {
        skill_name: 'Redux',
        Image: SiRedux,
        size: 70,
        alt: 'Icône Redux',
    },
    {
        skill_name: 'Motion',
        Image: TbBrandFramerMotion,
        size: 70,
        alt: 'Icône Framer Motion',
    },
];

/* Backend skills */
const Backend_skill = [
    {
        skill_name: 'Node.JS',
        Image: DiNodejsSmall,
        size: 70,
        alt: 'Icône NodeJS',
    },
    {
        skill_name: 'Express.JS',
        Image: SiExpress,
        size: 70,
        alt: 'Icône ExpressJS',
    },
    {
        skill_name: 'MongoDB',
        Image: DiMongodb,
        size: 70,
        alt: 'Icône MongoDB',
    },
];

/* Developpement skills */
const Developpement_skill = [
    {
        skill_name: 'VS Code',
        Image: TbBrandVscode,
        size: 70,
        alt: 'Icône VS Code',
    },
    {
        skill_name: 'NPM',
        Image: DiNpm,
        size: 70,
        alt: 'Icône NPM',
    },
    {
        skill_name: 'Github',
        Image: DiGithubAlt,
        size: 70,
        alt: 'Icône Github',
    },
    {
        skill_name: 'Git Kraken',
        Image: SiGitkraken,
        size: 70,
        alt: 'Icône Git Kraken',
    },
];

/* Conception skills */
const Conception_skill = [
    {
        skill_name: 'Figma',
        Image: TbBrandFigma,
        size: 70,
        alt: 'Icône Figma',
    },
    {
        skill_name: 'Inkscape',
        Image: SiInkscape,
        size: 70,
        alt: 'Icône Inkscape',
    },
    {
        skill_name: 'Trello',
        Image: DiTrello,
        size: 70,
        alt: 'Icône Trello',
    },
    {
        skill_name: 'Slack',
        Image: SiSlack,
        size: 70,
        alt: 'Icône Slack',
    },
    {
        skill_name: 'Postman',
        Image: SiPostman,
        size: 70,
        alt: 'Icône Postman',
    },
    {
        skill_name: 'Swagger',
        Image: SiSwagger,
        size: 70,
        alt: 'Icône Swagger',
    },
];

/* Icone des technologies pour l'import de projet via API */
const technologyIcons = {
    Html: DiHtml5,
    Css: DiCss3,
    Sass: DiSass,
    Javascript: DiJavascript1,
    React: DiReact,
    ViteJs: SiVite,
    Jest: SiJest,
    TestingLibrary: SiTestinglibrary,
    Redux: SiRedux,
    Swagger: SiSwagger,
    MongoDb: DiNodejsSmall,
    ExpressJs: SiExpress,
    NodeJS: DiNodejsSmall,
    FramerMotion: TbBrandFramerMotion,
};

/* Footer (liens) */
const Footer_Link = [
    {
        name: 'Home',
        link: '#home',
    },
    {
        name: 'About',
        link: '#about',
    },
    {
        name: 'Skills',
        link: '#skills',
    },
    {
        name: 'Projects',
        link: '#projects',
    },
    {
        name: 'Contact',
        link: '#contact',
    },
];

/* Footer (projets) */
const Footer_Projects = [
    {
        name: 'ArgentBank',
        link: 'https://projet-11-openclassrooms-argent-bank.vercel.app/',
    },
    {
        name: '724Events',
        link: 'https://projet-10-openclassrooms-debuggez-une-application-react.vercel.app/',
    },
    {
        name: 'Nina Carducci',
        link: 'https://matthieu-vachet.github.io/Projet-9-Openclassrooms-Projet-Optimisation-Nina-Carducci/',
    },
    {
        name: 'Kasa',
        link: 'https://projet-8-openclassrooms-projet-kasa.vercel.app/',
    },
    {
        name: 'Sophie Bluel',
        link: 'https://matthieu-vachet.github.io/Projet-6-openclassrooms-Portfolio-Javascript/',
    },
];

/* Footer (réseaux sociaux) */
const Footer_Follow = [
    {
        icon: 'fab fa-twitter',
        link: 'https://twitter.com/ShinyHunting02',
    },
    {
        icon: 'fab fa-instagram',
        link: 'https://www.instagram.com/mathunting02/',
    },
    {
        icon: 'fab fa-linkedin-in',
        link: 'www.linkedin.com/in/matthieu-vachet-46b7231b0',
    },
    {
        icon: 'fab fa-github',
        link: 'https://github.com/Matthieu-Vachet',
    },
];

/* Certificats section Expérience */
const certificates = [
    {
        name: 'Créez votre site web avec HTML5 et CSS3',
        url: 'https://drive.google.com/file/d/16yNEtIREhe_f6DrSnQqU0cmgZO0feYW6/view?usp=drive_link',
    },
    {
        name: 'Apprenez à programmer avec JavaScript',
        url: 'https://drive.google.com/file/d/1LKkhSYTE5VV10y4QXLhYibpM9S8unKwy/view?usp=drive_link',
    },
    {
        name: 'Augmentez votre trafic (SEO)',
        url: 'https://drive.google.com/file/d/1KJGyWmSCDlexhkheppa8Nle-w_qZh9yU/view?usp=drive_link',
    },
    {
        name: 'Comprendre le Web',
        url: 'https://drive.google.com/file/d/172QTcblHx-ck2t557BV65qg9rOgPHeq8/view?usp=drive_link',
    },
    {
        name: 'Concevez un contenu web accessible',
        url: 'https://drive.google.com/file/d/1or-c4DU-WvXbAcg9GLq0zrtKH_W9FmfJ/view?usp=drive_link',
    },
    {
        name: 'Créez des pages web dynamique avec JavaScript',
        url: 'https://drive.google.com/file/d/1ta8pRa8yIjXvmTrAd6i8dO9JgQ766hYr/view?usp=drive_link',
    },
    {
        name: 'Créez une maquette web avec Figma',
        url: 'https://drive.google.com/file/d/17rIGZbMvFaMrGfwBF4FgQJZE78z7u7wc/view?usp=drive_link',
    },
    {
        name: `Déboguez l'interface de votre site internet`,
        url: 'https://drive.google.com/file/d/1Sk7WZo5svjVQo5Y8UezGWC83pE623zQE/view?usp=drive_link',
    },
    {
        name: 'Débutez avec React',
        url: 'https://drive.google.com/file/d/1dYrXN972q-axbUpnfY5VDMrtQzwgEi4z/view?usp=drive_link',
    },
    {
        name: 'Découvrez le fonctionnement des algorithmes',
        url: 'https://drive.google.com/file/d/1j-nsPkCekv8d5YiqUrQVLwvXhFjBC3p-/view?usp=drive_link',
    },
    {
        name: 'Découvrez les métiers de développeur',
        url: 'https://drive.google.com/file/d/17AlGvCrt336tOW65cPs7sTxhln7hxxFN/view?usp=drive_link',
    },
    {
        name: 'Gérez votre code avec Git et GitHub',
        url: 'https://drive.google.com/file/d/16tVck4c1pv3gUXlAC0q74Lr8LPvb397V/view?usp=drive_link',
    },
    {
        name: 'Gérez votre projet informatique facilement',
        url: 'https://drive.google.com/file/d/1SwTHDZUblrGDTkkPu4NjJb5eOsC0Bdwy/view?usp=drive_link',
    },
    {
        name: 'Initiez-vous à la gestion de projet agile',
        url: 'https://drive.google.com/file/d/1HaaCHUeuvXSMn9PlTbn7kbhnJaNlVG18/view?usp=drive_link',
    },
    {
        name: 'Intégrez une maquette Figma en HTML et CSS',
        url: 'https://drive.google.com/file/d/1aaSEDLFeth8DOQufFmQx6bIfanlf6gTh/view?usp=drive_link',
    },
    {
        name: 'Mettez en place un système de veille',
        url: 'https://drive.google.com/file/d/12SEU35L7h77U2-TSOCrU_Z5-I90PAEek/view?usp=drive_link',
    },
    {
        name: 'Optimisez le référencement de votre site (SEO)',
        url: 'https://drive.google.com/file/d/1RkpIXSUrdyyd3g-gJrP9M4JaT-9UfczX/view?usp=drive_link',
    },
    {
        name: 'Simplifiez-vous le CSS avec Sass',
        url: 'https://drive.google.com/file/d/1quM5FsvCVspuF3Q-2ONB9NyuEl_yHKCn/view?usp=drive_link',
    },
    {
        name: `Testez l'interface de votre site web`,
        url: 'https://drive.google.com/file/d/10sdFySr8v0-1o0HTLq-yK7QM7R00vXst/view?usp=drive_link',
    },
];

export {
    navItems,
    Frontend_skill,
    Backend_skill,
    Developpement_skill,
    Conception_skill,
    technologyIcons,
    Footer_Link,
    Footer_Projects,
    Footer_Follow,
    certificates,
};
