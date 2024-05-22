/**
 * Composant AnimatedSkill qui anime un élément de compétence lorsqu'il entre dans le viewport.
 * Il utilise la bibliothèque framer-motion pour l'animation et react-intersection-observer pour détecter quand l'élément est dans le viewport.
 *
 * @param {object} props - Les propriétés passées au composant.
 * @param {React.ReactNode} props.children - Les enfants du composant à animer.
 * @param {number} props.delay - Le délai avant le début de l'animation.
 * @param {string} props.className - La classe CSS à appliquer à l'élément animé.
 *
 * @returns {JSX.Element} Un élément de compétence animé qui devient visible lorsqu'il entre dans le viewport.
 */

/* Importation des modules */
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type AnimatedSkillProps = {
    children: React.ReactNode;
    delay: number;
    className: string;
};

export default function AnimatedSkill({ children, delay, className }: AnimatedSkillProps) {
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

    const animationDelay = 0.2;

    const skillVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: delay * animationDelay,
                duration: 0.3,
                ease: [0.2, 0.65, 0.3, 0.9],
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
            variants={skillVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
