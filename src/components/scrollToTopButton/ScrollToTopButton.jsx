import { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import './ScrollToTopButton.scss'; // Assurez-vous d'avoir le fichier CSS correspondant

const ScrollToTopButton = () => {
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
                <div onClick={scrollToTop}>
                    <MdKeyboardDoubleArrowUp className='scroll-top-arrow' />
                </div>
            )}
        </div>
    );
};

export default ScrollToTopButton;
