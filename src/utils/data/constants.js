import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

import HtmlIcon from '../../assets/icons/html.svg';
import CssIcon from '../../assets/icons/css.svg';
import SassIcon from '../../assets/icons/sass.svg';
import JavascriptIcon from '../../assets/icons/javascript.svg';
import ReactIcon from '../../assets/icons/react.svg';
import ReduxIcon from '../../assets/icons/redux.svg';
import FramerMotionIcon from '../../assets/icons/framer-motion.svg';
import NodeJSIcon from '../../assets/icons/nodejs.svg';
import ExpressJSIcon from '../../assets/icons/express.svg';
import MongoDBIcon from '../../assets/icons/mongodb.svg';
import VSCodeIcon from '../../assets/icons/vscode.svg';
import NPMIcon from '../../assets/icons/npm.svg';
import GithubIcon from '../../assets/icons/github.svg';
import GitKrakenIcon from '../../assets/icons/gitkraken.svg';
import FigmaIcon from '../../assets/icons/figma.svg';
import InkscapeIcon from '../../assets/icons/inkscape.svg';
import TrelloIcon from '../../assets/icons/trello.svg';
import SlackIcon from '../../assets/icons/slack.svg';
import PostmanIcon from '../../assets/icons/postman.svg';
import SwaggerIcon from '../../assets/icons/swagger.svg';

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

const Frontend_skill = [
    {
        skill_name: 'Html',
        Image: HtmlIcon,
        width: 80,
        height: 80,
        alt: 'Icône Html',
    },
    {
        skill_name: 'Css',
        Image: CssIcon,
        width: 80,
        height: 80,
        alt: 'Icône Css',
    },
    {
        skill_name: 'Sass',
        Image: SassIcon,
        width: 80,
        height: 80,
        alt: 'Icône Sass',
    },
    {
        skill_name: 'Javascript',
        Image: JavascriptIcon,
        width: 80,
        height: 80,
        alt: 'Icône Javascript',
    },
    {
        skill_name: 'React',
        Image: ReactIcon,
        width: 80,
        height: 80,
        alt: 'Icône React',
    },
    {
        skill_name: 'Redux',
        Image: ReduxIcon,
        width: 80,
        height: 80,
        alt: 'Icône Redux',
    },
    {
        skill_name: 'Motion',
        Image: FramerMotionIcon,
        width: 80,
        height: 80,
        alt: 'Icône Framer Motion',
    },
];

const Backend_skill = [
    {
        skill_name: 'Node.JS',
        Image: NodeJSIcon,
        width: 80,
        height: 80,
        alt: 'Icône NodeJS',
    },
    {
        skill_name: 'Express.JS',
        Image: ExpressJSIcon,
        width: 80,
        height: 80,
        alt: 'Icône ExpressJS',
    },
    {
        skill_name: 'MongoDB',
        Image: MongoDBIcon,
        width: 80,
        height: 80,
        alt: 'Icône MongoDB',
    },
];

const Developpement_skill = [
    {
        skill_name: 'VS Code',
        Image: VSCodeIcon,
        width: 80,
        height: 80,
        alt: 'Icône VS Code',
    },
    {
        skill_name: 'NPM',
        Image: NPMIcon,
        width: 80,
        height: 80,
        alt: 'Icône NPM',
    },
    {
        skill_name: 'Github',
        Image: GithubIcon,
        width: 80,
        height: 80,
        alt: 'Icône Github',
    },
    {
        skill_name: 'Git Kraken',
        Image: GitKrakenIcon,
        width: 80,
        height: 80,
        alt: 'Icône Git Kraken',
    },
];

const Conception_skill = [
    {
        skill_name: 'Figma',
        Image: FigmaIcon,
        width: 80,
        height: 80,
        alt: 'Icône Figma',
    },
    {
        skill_name: 'Inkscape',
        Image: InkscapeIcon,
        width: 80,
        height: 80,
        alt: 'Icône Inkscape',
    },
    {
        skill_name: 'Trello',
        Image: TrelloIcon,
        width: 80,
        height: 80,
        alt: 'Icône Trello',
    },
    {
        skill_name: 'Slack',
        Image: SlackIcon,
        width: 80,
        height: 80,
        alt: 'Icône Slack',
    },
    {
        skill_name: 'Postman',
        Image: PostmanIcon,
        width: 80,
        height: 80,
        alt: 'Icône Postman',
    },
    {
        skill_name: 'Swagger',
        Image: SwaggerIcon,
        width: 80,
        height: 80,
        alt: 'Icône Swagger',
    },
];

export { navItems, Frontend_skill, Backend_skill, Developpement_skill, Conception_skill };
