{
    /* Importation des modules */
}
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

import './style.scss';

export default function AnimatedTitle({ text, className }) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.1, // L'élément est considéré comme dans le viewport quand il est entièrement visible
        triggerOnce: true, // L'observation s'arrête après la première détection
    });

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
            y: `1em`, // Position initiale décalée vers le bas
        },
        visible: {
            opacity: 1, // Opacité finale à 1 (visible)
            y: `0em`, // Position finale à l'origine
            transition: {
                duration: 1, // Durée de l'animation
                ease: [0.2, 0.65, 0.3, 0.9], // Courbe d'accélération de l'animation
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
                        className={`h1-animated`}
                    >
                        {word.split('').map((character, index) => {
                            return (
                                <motion.span
                                    aria-hidden='true'
                                    key={index}
                                    variants={characterAnimation}
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

AnimatedTitle.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};
