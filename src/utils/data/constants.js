import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

export const navItems = [
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

export default info;
