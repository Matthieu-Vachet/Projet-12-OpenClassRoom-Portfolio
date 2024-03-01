/**
 * Composant Header qui affiche l'en-tête du site.
 * Il utilise le contexte UserContext pour obtenir les données de l'utilisateur et le contexte AuthContext pour gérer l'état de connexion.
 * Il permet également de changer la langue du site et d'ouvrir une fenêtre modale de connexion.
 *
 * @returns {JSX.Element} L'en-tête du site avec le logo, le nom de l'utilisateur, les boutons pour changer la langue, le bouton pour se connecter ou se déconnecter et les composants ToggleOther et ToggleMobile.
 */

/* Importation des modules */
import { motion } from 'framer-motion';
import { useContext, useState, useEffect } from 'react';

/* Importation des composants */
import Login from '../../components/modal/login';
import { HeaderVariante } from '../../utils/framerMotion/Variante';
import { toast } from 'sonner';

/* Importation des données */
import { useTranslation } from 'react-i18next';
import { AuthContext, UserContext } from '../../utils/dataProvider/DataProvider';

/*Importation des ressources*/
import { IoPersonCircleOutline, IoPersonCircleSharp } from 'react-icons/io5';
import Logo from '../../assets/images/LogoM.svg';
import ToggleOther from '../../components/toggle/toggleOther';
import ToggleMobile from '../../components/toggle/toggleMobile';

/* Importation du style */
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
        <motion.header initial='initial' animate='animate' variants={HeaderVariante}>
            <div className='logo_content'>
                <img className='logo_header' src={Logo} alt='Matthieu Vachet Logo portfolio' />
                <h1 className='name_header'>
                    {data[0].name + ' '}
                    {data[0].lastname}
                </h1>
            </div>
            <div className='button_header'>
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
                <ToggleOther />
                {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
            </div>
            <ToggleMobile />
        </motion.header>
    );
}
