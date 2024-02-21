/* Importation des modules */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Ressources
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';

// Style
import './style.scss';
import { toast } from 'sonner';

/**
 * Represents a light/dark mode toggle button component.
 *
 * @component
 */

const LightDarkToggle = () => {
    const { t } = useTranslation();
    // State to track the current mode (light or dark)
    const [islightMode, setLightMode] = useState(false);

    // Function to toggle between light and dark mode
    const toggleMode = () => {
        setLightMode(!islightMode);
        if (!islightMode) {
            document.body.classList.add('white-mode');
            toast.success(t('theme.light'));
        } else {
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
};

export default LightDarkToggle;
