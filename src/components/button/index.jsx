// Importation des dépendances nécessaires
// import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// Définition du composant Button
const Button = ({ text }) => {
    // Création de références pour le bouton et le texte
    // const buttonRef = useRef();
    // const textRef = useRef();

    // Utilisation de useEffect pour ajouter un gestionnaire d'événements lorsque le composant est monté
    // useEffect(() => {
    // Définition du gestionnaire d'événements
    // const handleMouseMove = (e) => {
    // Obtention des coordonnées du bouton
    // const rect = buttonRef.current.getBoundingClientRect();
    // Obtention des coordonnées de la souris
    // const mouseX = e.clientX;
    // const mouseY = e.clientY;
    // Calcul du centre du bouton
    // const btnX = rect.left + rect.width / 2;
    // const btnY = rect.top + rect.height / 2;
    // Calcul de la distance entre la souris et le centre du bouton
    // const distanceX = Math.abs(mouseX - btnX);
    // const distanceY = Math.abs(mouseY - btnY);

    // Si la distance est inférieure à 300, le bouton suit la souris
    // if (distanceX < 300 && distanceY < 300) {
    //     const x = (mouseX - btnX) * 0.2;
    //     const y = (mouseY - btnY) * 0.2;
    //     buttonRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    //     textRef.current.style.transform = `translate3d(${x / 4}px, ${y / 4}px, 0)`;
    // } else {
    // Sinon, le bouton revient à sa position initiale
    //         buttonRef.current.style.transform = `translate3d(0px, 0px, 0)`;
    //         textRef.current.style.transform = `translate3d(0px, 0px, 0)`;
    //     }
    // };

    // Ajout du gestionnaire d'événements au document
    // document.addEventListener('mousemove', handleMouseMove);

    // Suppression du gestionnaire d'événements lorsque le composant est démonté
    //     return () => {
    //         document.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);

    // Rendu du bouton
    // return (
    //     <button ref={buttonRef} className='btn-gradient' href='#'>
    //         <span ref={textRef} className='btn-gradient-text'>
    //             {text}
    //         </span>
    //     </button>
    // );
    return (
        <button className='btn-gradient' href='#'>
            <span className='btn-gradient-text'>{text}</span>
        </button>
    );
};

// Définition des propTypes pour le composant Button
Button.propTypes = {
    text: PropTypes.string.isRequired,
};

// Exportation du composant Button
export default Button;
