export const TextHeroVariants = {
    hidden: { opacity: 0, y: 100 }, // Commence à 100px à droite
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Se déplace vers la position originale
};

// Variante Hero

export const TextHeroFirstnameVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { delay: 0.6, duration: 0.8, type: 'spring' },
};

export const TextHeroNameVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { delay: 0.7, duration: 0.8, type: 'spring' },
};

export const TextHeroJobVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.4, type: 'spring' },
};

export const TextHeroNumberVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.4, type: 'spring' },
};

// Variante Header

export const HeaderVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 1.9, duration: 1, type: 'spring' },
};
