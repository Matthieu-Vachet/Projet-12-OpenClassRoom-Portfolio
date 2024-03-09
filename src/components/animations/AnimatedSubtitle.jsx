/**
 * Composant AnimatedSubtitle qui anime un sous-titre lettre par lettre lorsqu'il entre dans le viewport.
 * Il utilise la bibliothèque framer-motion pour l'animation et react-intersection-observer pour détecter quand l'élément est dans le viewport.
 *
 * @param {object} props - Les propriétés passées au composant.
 * @param {string} props.text - Le texte du sous-titre à animer.
 * @param {string} props.className - La classe CSS à appliquer au sous-titre animé.
 * @param {string} props.wordSpace - L'espace entre les mots du sous-titre.
 * @param {string} props.charSpace - L'espace entre les lettres du sous-titre.
 *
 * @returns {JSX.Element} Un sous-titre animé lettre par lettre qui devient visible lorsqu'il entre dans le viewport.
 */

/* Importation des modules */
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

/* Importation du style */
import './Animation.scss';

export default function AnimatedSubtitle({ text, className, wordSpace, charSpace }) {
    const { ref, inView } = useInView({
        threshold: 0.1, // L'élément est considéré comme dans le viewport quand il est entièrement visible
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
            opacity: 0,
            y: `0.25em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 0.1,
                ease: [0.1, 0.1, 0.1, 0.1],
                delayChildren: 0.5,
                staggerChildren: 0.5,
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
