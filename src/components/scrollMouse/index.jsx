/* Importation des modules */
import { useEffect, useState } from 'react';

/* Importation des styles */
import './style.scss';

/*
 * Composant ScrollMouse
 * Affiche une flèche de défilement
 * @returns {JSX.Element}
 */

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
