export const TextHeroVariants = {
    hidden: { opacity: 0, y: 100 }, // Commence à 100px à droite
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Se déplace vers la position originale
};

// Variante Hero

export const TextHeroFirstnameVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
};

export const TextHeroNameVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
};

export const TextHeroJobVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

export const TextHeroNumberVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

// Variante Header

export const HeaderVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};
