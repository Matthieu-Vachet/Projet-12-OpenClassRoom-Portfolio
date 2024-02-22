/* Importation des modules */
import { motion } from 'framer-motion';
import { useContext, useState, useEffect } from 'react';

// Importation des composants
import { Login } from '../../components/modal/login';
import { HeaderVariants } from '../../utils/framerMotion/Variante';

// Importation des données
import { useTranslation } from 'react-i18next';
import { UserContext, AuthContext } from '../../utils/dataProvider/DataProvider';

// Ressources
import Logo from '../../assets/images/LogoM.svg';
import LightDarkToggle from '../../components/lightDarkToggle';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { IoPersonCircleOutline } from 'react-icons/io5';

// Importation des styles
import { toast } from 'sonner';
import './style.scss';

export default function Header() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const data = useContext(UserContext);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        toast.success(t('header.langue'));
    };

    const handleOpenLoginModal = () => {
        setShowLoginModal(true);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, [setIsLoggedIn]);

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

                {isLoggedIn ? (
                    <IoPersonCircleSharp
                        className='button_login'
                        type='button'
                        aria-label='Logout'
                        tabIndex='0'
                        onClick={() => {
                            // Logique de déconnexion
                            setIsLoggedIn(false);
                            toast.success(t('login.success-logout'));
                            localStorage.removeItem('token');
                        }}
                    />
                ) : (
                    <IoPersonCircleOutline
                        className='button_login'
                        type='button'
                        aria-label='Login'
                        tabIndex='0'
                        onClick={handleOpenLoginModal}
                    />
                )}
                <LightDarkToggle />
                {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
            </motion.div>
        </header>
    );
}
