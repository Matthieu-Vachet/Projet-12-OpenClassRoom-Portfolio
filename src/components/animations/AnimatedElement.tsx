/**
 * Composant AnimatedElement qui anime un élément lorsqu'il entre dans le viewport.
 * Il utilise la bibliothèque framer-motion pour l'animation et react-intersection-observer pour détecter quand l'élément est dans le viewport.
 *
 * @param {object} props - Les propriétés passées au composant.
 * @param {React.ReactNode} props.children - Les enfants du composant à animer.
 * @param {number} props.delay - Le délai avant le début de l'animation.
 * @param {string} props.className - La classe CSS à appliquer à l'élément animé.
 *
 * @returns {JSX.Element} Un élément animé qui devient visible lorsqu'il entre dans le viewport.
 */

/* Importation des  modules */
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type AnimatedElementProps = {
    children: React.ReactNode;
    delay: number;
    className: string;
};

export default function AnimatedElement({ children, delay, className }: AnimatedElementProps) {
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

    const ElementVariante = {
        hidden: {
            opacity: 0,
            y: `1em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                delay: delay,
                duration: 0.3,
                ease: [0.9, 0.9, 0.9, 0.9],
                delayChildren: 0.5,
                staggerChildren: 0.5,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial='hidden'
            animate={ctrls}
            variants={ElementVariante}
            className={className}
        >
            {children}
        </motion.div>
    );
}
