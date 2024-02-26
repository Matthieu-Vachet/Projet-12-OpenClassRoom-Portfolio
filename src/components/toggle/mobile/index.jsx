/* Importation des modules */
import { useContext, useState } from 'react';

/* Importation des données */
import { ThemeContext } from '../../../utils/dataProvider/DataProvider';
import { useTranslation } from 'react-i18next';

/* Importation des composants */
import { toast } from 'sonner';

/* Importation des ressources */
import { FaRegSquare } from 'react-icons/fa6';

/* Importation du style */
import './style.scss';

const ToggleMobile = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [currentLanguage, setCurrentLanguage] = useState('fr');

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setCurrentLanguage(language);
        toast.success(t('header.langue'));
    };

    return (
        <div className='button_header_mobile'>
            <a
                href='#'
                className={`vertical-text ${currentLanguage === 'fr' ? 'filled' : ''}`}
                onClick={() => changeLanguage('fr')}
            >
                <FaRegSquare className='check-lang' /> FR
            </a>
            <a
                href='#'
                className={`vertical-text ${currentLanguage === 'en' ? 'filled' : ''}`}
                onClick={() => changeLanguage('en')}
            >
                <FaRegSquare className='check-lang' /> EN
            </a>

            <a href='#' className='vertical-text' onClick={toggleTheme}>
                {theme === 'light'
                    ? t('header.btn-mobile-theme-white')
                    : t('header.btn-mobile-theme-black')}
            </a>
        </div>
    );
};

export default ToggleMobile;
