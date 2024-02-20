import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { LiaSuitcaseSolid } from 'react-icons/lia';
import { GiGearHammer } from 'react-icons/gi';
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

const Frontend_skill = [
    {
        skill_name: 'Html',
        Image: DiHtml5,
        size: 90,
        alt: 'Icône Html',
    },
    {
        skill_name: 'Css',
        Image: DiCss3,
        size: 90,
        alt: 'Icône Css',
    },
    {
        skill_name: 'Sass',
        Image: DiSass,
        size: 90,
        alt: 'Icône Sass',
    },
    {
        skill_name: 'Javascript',
        Image: DiJavascript1,
        size: 90,
        alt: 'Icône Javascript',
    },
    {
        skill_name: 'React',
        Image: DiReact,
        size: 90,
        alt: 'Icône React',
    },
    {
        skill_name: 'Redux',
        Image: SiRedux,
        size: 90,
        alt: 'Icône Redux',
    },
    {
        skill_name: 'Motion',
        Image: TbBrandFramerMotion,
        size: 90,
        alt: 'Icône Framer Motion',
    },
];

const Backend_skill = [
    {
        skill_name: 'Node.JS',
        Image: DiNodejsSmall,
        size: 90,
        alt: 'Icône NodeJS',
    },
    {
        skill_name: 'Express.JS',
        Image: SiExpress,
        size: 90,
        alt: 'Icône ExpressJS',
    },
    {
        skill_name: 'MongoDB',
        Image: DiMongodb,
        size: 90,
        alt: 'Icône MongoDB',
    },
];

const Developpement_skill = [
    {
        skill_name: 'VS Code',
        Image: TbBrandVscode,
        size: 90,
        alt: 'Icône VS Code',
    },
    {
        skill_name: 'NPM',
        Image: DiNpm,
        size: 90,
        alt: 'Icône NPM',
    },
    {
        skill_name: 'Github',
        Image: DiGithubAlt,
        size: 90,
        alt: 'Icône Github',
    },
    {
        skill_name: 'Git Kraken',
        Image: SiGitkraken,
        size: 90,
        alt: 'Icône Git Kraken',
    },
];

const Conception_skill = [
    {
        skill_name: 'Figma',
        Image: TbBrandFigma,
        size: 90,
        alt: 'Icône Figma',
    },
    {
        skill_name: 'Inkscape',
        Image: SiInkscape,
        size: 90,
        alt: 'Icône Inkscape',
    },
    {
        skill_name: 'Trello',
        Image: DiTrello,
        size: 90,
        alt: 'Icône Trello',
    },
    {
        skill_name: 'Slack',
        Image: SiSlack,
        size: 90,
        alt: 'Icône Slack',
    },
    {
        skill_name: 'Postman',
        Image: SiPostman,
        size: 90,
        alt: 'Icône Postman',
    },
    {
        skill_name: 'Swagger',
        Image: SiSwagger,
        size: 90,
        alt: 'Icône Swagger',
    },
];

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
};

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

const Footer_Follow = [
    {
        icon: 'fab fa-facebook-f',
        link: 'https://www.facebook.com/matthieu.vachet',
    },
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
};
