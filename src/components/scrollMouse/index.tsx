/**
 * ScrollMouse est un composant React qui affiche une icône de souris de défilement qui disparaît lorsque l'utilisateur fait défiler la page.
 * @component
 *
 * @example
 * <ScrollMouse />
 *
 * @returns {React.Element} - Le composant ScrollMouse.
 */

/* Importation des modules */
import React, { useEffect, useState } from 'react';

/* Importation des styles */
import './style.scss';

export default function ScrollMouse() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`scroll-container ${isVisible ? '' : 'hidden'}`}>
            <div className='scroll-downs'>
                <div className='mousey'>
                    <div className='scroller'></div>
                </div>
            </div>
            <span className='scroll-text'>Scroll me ...</span>
        </div>
    );
}
