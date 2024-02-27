/* Importation des modules */
import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../utils/dataProvider/DataProvider';

/* Importation des ressources */
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';

/* Importation des composants */
import { toast } from 'sonner';

/* Importation du style */
import './style.scss';

/*
 * Composant ToggleOther
 * Affiche un bouton pour basculer entre les thèmes
 * @returns {JSX.Element}
 */

export default function ToggleOther() {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const islightMode = theme === 'dark';

    const toggleMode = () => {
        toggleTheme();
        const newMode = theme === 'light' ? 'dark' : 'light'; // Obtenir le nouveau mode après le basculement

        if (newMode === 'dark') {
            document.body.classList.add('white-mode');
            document.body.classList.remove('dark-mode');
            toast.success(t('theme.light'));
        } else {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('white-mode');
            toast.success(t('theme.dark'));
        }
    };

    // Apply the selected mode's colors using CSS custom properties
    useEffect(() => {
        const colors = !islightMode
            ? {
                  // Black Colors
                  '--basicOnyx': 'rgba(24, 24, 24, 1)',
                  '--basicWhite': 'rgba(255, 255, 255, 1)',
                  '--glassGlassDark30': 'rgba(24, 24, 29, 0.3)',
                  '--glassGlassDark60': 'rgba(24, 24, 29, 0.6)',
                  '--strockGlass': 'rgba(182, 181, 187, 0.4)',
                  '--borderGlass': 'rgba(255, 255, 255, 0.5)',
                  '--darkWhite10': 'rgba(255, 255, 255, 0.1)',
                  '--button-1': '#0ce39a',
                  '--button-2': '#69007f',
                  '--button-3': '#fc0987',
                  '--basicDarkGray': 'rgba(128, 128, 128, 1)',
              }
            : {
                  // Light Colors
                  '--basicOnyx': '#feffff',
                  '--basicWhite': 'rgba(24, 24, 24, 1)',
                  '--glassGlassDark30': 'rgba(24, 24, 29, 0.05)',
                  '--glassGlassDark60': 'rgba(24, 24, 29, 0.1)',
                  '--strockGlass': 'rgba(182, 181, 187, 1)',
                  '--borderGlass': 'rgba(128, 128, 128, 1)',
                  '--darkWhite10': 'rgba(128, 128, 128, 0.2)',
                  '--button-1': 'transparent',
                  '--button-2': 'transparent',
                  '--button-3': 'transparent',
                  '--basicDarkGray': 'rgba(128, 128, 128, 0.2)',
              };

        for (const property in colors) {
            const value = colors[property];
            document.documentElement.style.setProperty(property, value);
        }
    }, [islightMode]);

    return (
        <button
            className='toggleMode'
            onClick={toggleMode}
            aria-label={islightMode ? 'Switch to dark mode' : 'Switch to light mode'}
        >
            {islightMode ? (
                <>
                    <CiLight className='toggleIcon' />
                </>
            ) : (
                <>
                    <MdDarkMode className='toggleIcon' />
                </>
            )}
        </button>
    );
}
