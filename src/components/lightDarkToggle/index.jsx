import { useState, useEffect } from 'react';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';

import './style.scss';

/**
 * Represents a light/dark mode toggle button component.
 *
 * @component
 */

const LightDarkToggle = () => {
    // State to track the current mode (light or dark)
    const [islightMode, setLightMode] = useState(false);

    // Function to toggle between light and dark mode
    const toggleMode = () => {
        setLightMode(!islightMode);
    };

    // Apply the selected mode's colors using CSS custom properties
    useEffect(() => {
        const colors = !islightMode
            ? {
                  // Black Colors
                  '--basicBlack': 'rgba(13, 13, 13, 1)',
                  '--darkWhite70': 'rgba(255, 255, 255, 0.7)',
                  '--topBackgroundBlue': 'rgba(63, 100, 233, 0.55)',
                  '--topBackgroundRed': 'rgba(233, 63, 63, 0.55)',
                  '--topBackgroundYellow': 'rgba(255, 184, 0, 0.55)',
              }
            : {
                  // Light Colors
                  '--basicBlack': 'rgba(255, 255, 255, 1)',
                  '--darkWhite70': 'rgba(13, 13, 13, 0.7)',
                  '--topBackgroundBlue': 'rgba(63, 100, 233, 1)',
                  '--topBackgroundRed': 'rgba(233, 63, 63, 1)',
                  '--topBackgroundYellow': 'rgba(255, 184, 0, 1)',
              };

        for (const property in colors) {
            const value = colors[property];
            document.documentElement.style.setProperty(property, value);
        }
    }, [islightMode]);

    return (
        <button className='toggleMode' onClick={toggleMode}>
            {islightMode ? (
                <CiLight className='toggleIcon' />
            ) : (
                <MdDarkMode className='toggleIcon' />
            )}
        </button>
    );
};

export default LightDarkToggle;
