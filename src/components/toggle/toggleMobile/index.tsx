import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../utils/contexts/DataProvider';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { FaRegSquare } from 'react-icons/fa6';
import './style.scss';

export default function ToggleMobile() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('fr');

    const context = useContext(ThemeContext);

    if (context === null) {
        return null;
    }

    const { theme, toggleTheme } = context;

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        setCurrentLanguage(language);
        toast.success(t('header.langue'));
    };

    const toggleMode = () => {
        toggleTheme();
        const newMode = theme === 'light' ? 'dark' : 'light';

        if (newMode === 'dark') {
            document.body.classList.remove('white-mode');
            toast.success(t('theme.dark'));
        } else {
            document.body.classList.add('white-mode');
            toast.success(t('theme.light'));
        }
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

            <a href='#' className='vertical-text' onClick={toggleMode}>
                {theme === 'light'
                    ? t('header.btn-mobile-theme-white')
                    : t('header.btn-mobile-theme-black')}
            </a>
        </div>
    );
}
