/* Importation des modules */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/*
 * Composant AnimatedBody
 * Animation de texte
 * @param {string} text - Texte à animer
 * @param {string} className - Classe CSS à appliquer
 * @param {number} delay - Délai avant l'animation
 * @return {JSX.Element} - Élément JSX
 */

export default function AnimatedBody({ text, className, delay }) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start('visible');
        }
        if (!inView) {
            ctrls.start('hidden');
        }
    }, [ctrls, inView]);

    const bodyAnimation = {
        hidden: {
            opacity: 0,
            y: `1em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                delay: delay,
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    return (
        <motion.p
            aria-label={text}
            role='heading'
            className={className}
            ref={ref}
            aria-hidden='true'
            initial='hidden'
            animate={ctrls}
            variants={bodyAnimation}
        >
            {text}
        </motion.p>
    );
}

AnimatedBody.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    delay: PropTypes.number,
};
