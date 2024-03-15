/* Importation des modules */
import React, { useContext, useState } from 'react';

/* Importation des composants */
import Login from '../../components/modal/login';
import { toast } from 'sonner';

/* Importation des données */
import { useTranslation } from 'react-i18next';
import { AuthContext, UserContext } from '../../utils/dataProvider/DataProvider';

/*Importation des ressources*/
import { IoPersonCircleOutline, IoPersonCircleSharp } from 'react-icons/io5';
import Logo from '../../assets/images/LogoM.webp';
import ToggleOther from '../../components/toggle/toggleOther';
import ToggleMobile from '../../components/toggle/toggleMobile';

/* Importation du style */
import './style.scss';

export default function Header() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const data = useContext(UserContext);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const { isLoggedIn, setIsLoggedIn, token, setToken } = useContext(AuthContext);

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        toast.success(t('header.langue'));
    };

    const handleOpenLoginModal = () => {
        setShowLoginModal(true);
    };

    return (
        <header>
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
                        tabIndex={0}
                        onClick={() => {
                            setIsLoggedIn(false);
                            setToken(null);
                            toast.success(t('login.success-logout'));
                            console.log(token);
                        }}
                    />
                ) : (
                    <IoPersonCircleOutline
                        className='button_login'
                        type='button'
                        aria-label='Login'
                        tabIndex={0}
                        onClick={handleOpenLoginModal}
                    />
                )}
                <ToggleOther />
                {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
            </div>
            <ToggleMobile />
        </header>
    );
}
