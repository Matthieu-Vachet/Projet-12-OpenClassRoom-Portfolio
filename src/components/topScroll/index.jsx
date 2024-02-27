/* Importation des modules */
import { useEffect, useState } from 'react';

/* Importation des ressources */
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

/* Importation des styles */
import './style.scss';

/*
 * Composant TopScroll
 * Affiche un bouton pour faire défiler vers le haut
 * @returns {JSX.Element}
 */

export default function TopScroll() {
    const [isVisible, setIsVisible] = useState(false);

    // Afficher le bouton lorsque l'utilisateur fait défiler vers le bas
    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Faire défiler jusqu'en haut lorsque l'utilisateur clique sur le bouton
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
