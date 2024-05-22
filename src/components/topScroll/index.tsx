/**
 * TopScroll est un composant React qui affiche un bouton pour faire défiler la page vers le haut lorsque l'utilisateur fait défiler vers le bas.
 * @component
 *
 * @example
 * <TopScroll />
 *
 * @returns {React.Element} - Le composant TopScroll.
 */

/* Importation des modules */
import React, { useEffect, useState } from 'react';

/* Importation des ressources */
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

/* Importation des styles */
import './style.scss';

export default function TopScroll() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className='scroll-to-top'>
            {isVisible && (
                <div onClick={scrollToTop} aria-label='Scroll to top'>
                    <MdKeyboardDoubleArrowUp className='scroll-top-arrow' />
                </div>
            )}
        </div>
    );
}
