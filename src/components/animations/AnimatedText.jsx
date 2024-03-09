/**
 * Composant AnimatedBody qui anime un texte de corps lorsqu'il entre dans le viewport.
 * Il utilise la bibliothèque framer-motion pour l'animation et react-intersection-observer pour détecter quand l'élément est dans le viewport.
 *
 * @param {object} props - Les propriétés passées au composant.
 * @param {string} props.text - Le texte du corps à animer.
 * @param {string} props.className - La classe CSS à appliquer au texte animé.
 * @param {number} props.delay - Le délai avant le début de l'animation.
 *
 * @returns {JSX.Element} Un texte de corps animé qui devient visible lorsqu'il entre dans le viewport.
 */

/* Importation des modules */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AnimatedBody({ text, className, delay }) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.1,
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
