/* Importation des modules */
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../utils/contexts/DataProvider';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import { toast } from 'sonner';
import './style.scss';

export default function ToggleOther() {
    const { t } = useTranslation();

    const context = useContext(ThemeContext);

    if (context === null) {
        return null;
    }

    const { theme, toggleTheme } = context;

    const islightMode = theme === 'light';

    const toggleMode = () => {
        const newMode = theme === 'dark' ? 'light' : 'dark';
        toggleTheme();
        console.log(newMode);

        if (newMode === 'dark') {
            toast.success(t('theme.dark'));
        } else {
            toast.success(t('theme.light'));
        }
    };

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
                  //   '--borderGlassBtn': 'rgba(128, 128, 128, 0.1)',
                  '--darkWhite10': 'rgba(255, 255, 255, 0.1)',
                  '--button-1': '#0ce39a',
                  '--button-2': '#69007f',
                  '--button-3': '#fc0987',
                  '--basicDarkGray': 'rgba(128, 128, 128, 1)',
              }
            : {
                  // Light Colors
                  '--basicOnyx': 'rgba(245, 245, 245, 1)',
                  '--basicWhite': 'rgba(24, 24, 24, 1)',
                  '--glassGlassDark30': 'rgba(24, 24, 29, 0.1)',
                  '--glassGlassDark60': 'rgba(24, 24, 29, 0.1)',
                  '--strockGlass': 'rgba(182, 181, 187, 1)',
                  '--borderGlass': 'rgba(128, 128, 128, 1)',
                  //   '--borderGlassBtn': 'rgba(24, 24, 24, 1)',
                  '--darkWhite10': 'rgba(128, 128, 128, 0.2)',
                  '--button-1': '#0ce39a',
                  '--button-2': '#c495e5',
                  '--button-3': '#69007f',
                  '--basicDarkGray': 'rgba(128, 128, 128, 1)',
              };

        for (const property in colors) {
            const value = colors[property as keyof typeof colors];
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
