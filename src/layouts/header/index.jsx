/* Importation des modules */
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';

// Importation des composants
import { Login } from '../../components/modal/login';
import { HeaderVariants } from '../../utils/framerMotion/Variante';

// Importation des données
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../utils/dataProvider/DataProvider';

// Ressources
import { IoPersonCircleOutline } from 'react-icons/io5'; //logout
import Logo from '../../assets/images/LogoM.svg';
import LightDarkToggle from '../../components/lightDarkToggle';
// import { IoPersonCircleSharp } from 'react-icons/io5'; // login

// Importation des styles
import { toast } from 'sonner';
import './style.scss';

export default function Header() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const data = useContext(UserContext);
    const [showLoginModal, setShowLoginModal] = useState(false); // État pour contrôler l'affichage de la modal de connexion

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        toast.success(t('header.langue'));
    };

    const handleOpenLoginModal = () => {
        setShowLoginModal(true);
        console.log('showLoginModal:', showLoginModal);
    };

    return (
        <header>
            {/* Logo */}
            <div className='logo_content'>
                <motion.img
                    className='logo_header'
                    initial='initial'
                    animate='animate'
                    transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                    variants={HeaderVariants}
                    src={Logo}
                    alt='Matthieu Vachet Logo portfolio'
                />
                {/* Name */}
                <motion.h1
                    initial='initial'
                    animate='animate'
                    transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                    variants={HeaderVariants}
                    className='name_header'
                >
                    {data[0].name + ' '}
                    {data[0].lastname}
                </motion.h1>
            </div>
            {/* Buttons FR - EN - Toggle */}
            <motion.div
                initial='initial'
                animate='animate'
                transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                variants={HeaderVariants}
                className='button_header'
            >
                <button className='button_fr' onClick={() => changeLanguage('fr')}>
                    <span className='text_fr'>FR</span>
                </button>
                <button className='button_en' onClick={() => changeLanguage('en')}>
                    <span className='text_en'>EN</span>
                </button>
                <IoPersonCircleOutline
                    className='button_login'
                    type='button'
                    aria-label='Login'
                    tabIndex='0'
                    onClick={handleOpenLoginModal}
                />
                <LightDarkToggle />
                {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
            </motion.div>
        </header>
    );
}
