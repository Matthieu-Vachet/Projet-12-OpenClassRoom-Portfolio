/* Importation des modules */
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// Style
import './Animation.scss';

/*
 * Composant AnimatedSubtitle
 * Affiche un titre animé lettre par lettre
 * @param {string} text - Texte à afficher
 * @param {string} className - Classe CSS à appliquer
 * @param {string} wordSpace - Espace entre les mots
 * @param {string} charSpace - Espace entre les lettres
 * @returns {JSX.Element}
 */
export default function AnimatedSubtitle({ text, className, wordSpace, charSpace }) {
    const { ref, inView } = useInView({
        threshold: 0.5, // L'élément est considéré comme dans le viewport quand il est entièrement visible
        triggerOnce: false, // L'observation s'arrête après la première détection
    });

    const ctrls = useAnimation();

    useEffect(() => {
        if (inView) {
            ctrls.start('visible');
        }
        if (!inView) {
            ctrls.start('hidden');
        }
    }, [ctrls, inView]);

    const wordAnimation = {
        hidden: {},
        visible: {},
    };

    const characterAnimation = {
        hidden: {
            opacity: 0, // Opacité initiale à 0 (invisible)
            y: `0.25em`, // Position initiale décalée vers le bas
        },
        visible: {
            opacity: 1, // Opacité finale à 1 (visible)
            y: `0em`, // Position finale à l'origine
            transition: {
                duration: 0.1, // Durée de l'animation
                ease: [0.1, 0.1, 0.1, 0.1], // Courbe d'accélération de l'animation
                delayChildren: 0.5, // Délai avant le démarrage de l'animation des enfants
                staggerChildren: 0.5, // Délai entre le démarrage de l'animation des enfants
            },
        },
    };

    return (
        <h1 aria-label={text} className={className}>
            {text.split(/(\s+)/).map((word, index) => {
                return word === ' ' ? (
                    ' '
                ) : (
                    <motion.span
                        ref={ref}
                        aria-hidden='true'
                        key={index}
                        initial='hidden'
                        animate={ctrls}
                        variants={wordAnimation}
                        transition={{
                            delayChildren: index * 0.25,
                            staggerChildren: 0.05,
                        }}
                        style={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                            marginRight: wordSpace,
                        }}
                        className={`h1-animated`}
                    >
                        {word.split('').map((character, index) => {
                            return (
                                <motion.span
                                    aria-hidden='true'
                                    key={index}
                                    variants={characterAnimation}
                                    style={{ display: 'inline-block', marginRight: charSpace }}
                                >
                                    {character}
                                </motion.span>
                            );
                        })}
                    </motion.span>
                );
            })}
        </h1>
    );
}

AnimatedSubtitle.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    wordSpace: PropTypes.string,
    charSpace: PropTypes.string,
};
