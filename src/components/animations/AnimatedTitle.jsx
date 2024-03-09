/**
 * Composant AnimatedTitle qui anime un titre lettre par lettre lorsqu'il entre dans le viewport.
 * Il utilise la bibliothèque framer-motion pour l'animation et react-intersection-observer pour détecter quand l'élément est dans le viewport.
 *
 * @param {object} props - Les propriétés passées au composant.
 * @param {string} props.title - Le titre à animer.
 * @param {string} props.className - La classe CSS à appliquer au titre animé.
 *
 * @returns {JSX.Element} Un titre animé lettre par lettre qui devient visible lorsqu'il entre dans le viewport.
 */

/* Importation des modules */
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

/* Importation des styles */
import './Animation.scss';

export default function AnimatedTitle({ title, className }) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start('animate');
        }
        if (!inView) {
            ctrls.start('initial');
        }
    }, [ctrls, inView]);

    const letterAnimation = {
        initial: {
            opacity: 0,
            y: 150,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [0.2, 0.65, 0.3, 0.9],
                duration: 0.8,
            },
        },
    };

    return (
        <h1 aria-label={title}>
            <motion.span className={className} ref={ref}>
                {title.split(' ').map((word, index) => (
                    <motion.div
                        key={index}
                        initial='initial'
                        animate={ctrls}
                        transition={{
                            delayChildren: index * 0.25,
                            staggerChildren: 0.05,
                        }}
                    >
                        <motion.span className='animated-title-span' variants={letterAnimation}>
                            {word}
                        </motion.span>
                    </motion.div>
                ))}
            </motion.span>
        </h1>
    );
}

AnimatedTitle.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};
