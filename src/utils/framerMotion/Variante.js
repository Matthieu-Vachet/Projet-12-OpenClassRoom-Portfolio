export const TextHeroVariants = {
    hidden: { opacity: 0, y: 100 }, // Commence à 100px à droite
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Se déplace vers la position originale
};

// Variante Hero

export const TextHeroVariant = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
};

// Variante Header

export const HeaderVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

// Variante Button

export const ButtonVariant = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

// Variante Svg Hero

export const SvgVariants = {
    hidden: { opacity: 0, scale: 0 }, // Commence avec une taille minimale et une opacité minimale
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } }, // Grossit et atteint une opacité de 1
};
