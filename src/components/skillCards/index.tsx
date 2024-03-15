/* Importation des modules */
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

/* Importation du style */
import './style.scss';

type SkillCardsProps = {
    name: string;
    Image: React.FC<{
        className: string;
        color: string;
        fontSize: number;
        alt: string;
        tabIndex?: number;
    }>;
    fontSize: number;
    color: string;
    index: number;
    alt: string;
};

export default function SkillCards({ name, Image, fontSize, index, alt, color }: SkillCardsProps) {
    const { ref, inView } = useInView({
        threshold: 0.6,
        triggerOnce: true,
    });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const animationDelay = 0.15;

    return (
        <motion.div
            ref={ref}
            initial='hidden'
            variants={imageVariants}
            animate={inView ? 'visible' : 'hidden'}
            custom={index}
            transition={{ delay: index * animationDelay }}
            className='skills-box-container'
        >
            <Tilt className='box-icons'>
                <h1 className='skills-names'>{name}</h1>
                <Image
                    className='skills-img'
                    color={color}
                    fontSize={fontSize}
                    alt={alt}
                    aria-label={`Skill: ${name}`}
                    tabIndex={0}
                />
            </Tilt>
        </motion.div>
    );
}
