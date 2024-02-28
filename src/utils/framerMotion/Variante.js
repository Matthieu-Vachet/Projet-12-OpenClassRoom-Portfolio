/* Variante App */
export const LoaderVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

export const AppVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

/* Variante Hero */
export const HeroVariante = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { delay: 0.6, duration: 0.8, type: 'spring' } },
};
export const SvgVariante = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
};

// Variante Header
export const HeaderVariante = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 1.9, duration: 1, type: 'spring' } },
};
