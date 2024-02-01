// Importation des hooks nécessaires depuis React
import { useState, useEffect } from 'react';
// Importation du fichier de style
import './style.scss';

// Déclaration du composant fonctionnel Blur
const Blur = () => {
    // Déclaration d'un état local pour stocker l'opacité du scroll
    const [scrollOpacity, setScrollOpacity] = useState(1);

    // Déclaration d'une fonction pour gérer le scroll
    const handleScroll = () => {
        // Récupération de la position actuelle du scroll
        const scrollY = window.scrollY;
        // Récupération de la hauteur de la fenêtre
        const windowHeight = window.innerHeight;
        // Récupération de la hauteur du corps du document
        const bodyHeight = document.body.clientHeight;
        // Calcul du seuil en bas de la page
        const bottomThreshold = bodyHeight - windowHeight - 25;

        // Si la position du scroll est supérieure ou égale au seuil, l'opacité est de 1, sinon elle est de 1
        const opacity = scrollY >= bottomThreshold ? 1 : 1;
        // Mise à jour de l'opacité du scroll
        setScrollOpacity(opacity);
    };

    // Utilisation de l'effet pour ajouter un écouteur d'événement au scroll lors du montage du composant
    useEffect(() => {
        // Déclaration d'une fonction pour gérer l'événement de scroll
        const handleScrollEvent = () => {
            handleScroll();
        };

        // Ajout de l'écouteur d'événement au scroll
        window.addEventListener('scroll', handleScrollEvent);

        // Retour d'une fonction de nettoyage qui supprime l'écouteur d'événement au scroll lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []); // Le tableau vide signifie que l'effet ne s'exécute qu'au montage et au démontage du composant

    // Rendu du composant : une div avec une classe et un style d'opacité basé sur l'opacité du scroll
    return <div className={`blur-component overlay-mask`} style={{ opacity: scrollOpacity }} />;
};

// Exportation du composant Blur par défaut
export default Blur;
