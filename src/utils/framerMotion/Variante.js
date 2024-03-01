/**
 * @file Variante.js
 * @module Variante
 * @description Ce module exporte des variantes pour les animations de Framer Motion.
 * Il contient des variantes pour le loader, l'application, le héros, le SVG et l'en-tête.
 * @exports LoaderVariants
 * @exports AppVariants
 * @exports HeroVariante
 * @exports SvgVariante
 * @exports HeaderVariante
 */

/**
 * Variante pour l'animation du loader.
 * @type {Object}
 */
export const LoaderVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

/**
 * Variante pour l'animation de l'application.
 * @type {Object}
 */
export const AppVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

/**
 * Variante pour l'animation du héros.
 * @type {Object}
 */
export const HeroVariante = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { delay: 0.6, duration: 0.8, type: 'spring' } },
};

/**
 * Variante pour l'animation du SVG.
 * @type {Object}
 */
export const SvgVariante = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
};

/**
 * Variante pour l'animation de l'en-tête.
 * @type {Object}
 */
export const HeaderVariante = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 1.9, duration: 1, type: 'spring' } },
};
