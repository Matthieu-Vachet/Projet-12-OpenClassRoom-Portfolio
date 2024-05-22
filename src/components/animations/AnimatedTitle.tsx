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
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

/* Importation des styles */
import './Animation.scss';

type AnimatedTitleProps = {
    title: string;
    className: string;
};

export default function AnimatedTitle({ title, className }: AnimatedTitleProps) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false,
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
                        className='flex items-center justify-center overflow-hidden'
                        transition={{
                            delayChildren: index * 0.25,
                            staggerChildren: 0.05,
                        }}
                    >
                        <motion.span
                            className=' mb-4 inline-block overflow-hidden pt-1 sm:mb-2 md:mb-3 lg:mb-4'
                            variants={letterAnimation}
                        >
                            {word}
                        </motion.span>
                    </motion.div>
                ))}
            </motion.span>
        </h1>
    );
}
