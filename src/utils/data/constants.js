import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

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
        icon: BiBook,
    },
    {
        id: 'portfolio',
        title: 'Portfolio',
        icon: RiServiceLine,
    },
    {
        id: 'contact',
        title: 'Contact',
        icon: BiMessageSquareDetail,
    },
];

const info = [
    {
        firstname: 'Matthieu',
        name: 'Vachet',
        profession: 'Développeur Front-end',
        number: '07.69.81.73.16',
        slogan: 'Plongez dans ma créativité codée.',
    },
];

const about = [
    {
        title: 'APPRENEZ À ME CONNAÎTRE',
        description1:
            "Fan d'informatique depuis ma jeunesse, j'ai exploré la programmation bien avant de devenir intégrateur web. Pour moi, chaque ligne de code est une œuvre d'art, une exploration infinie de création.",
        description2:
            "Mon engagement dans ce domaine est bien plus qu'une carrière, c'est une passion sans limites, une aventure que je poursuivrai avec détermination jusqu'à ce que mes mains ne puissent plus glisser sur un clavier.",
        description3:
            "Toujours avide de nouvelles technologies, je suis en constante quête d'innovation. Actuellement engagé dans des projets passionnants, je reste ouvert à de nouvelles opportunités et collaborations.",
    },
];

export { navItems, info, about };
