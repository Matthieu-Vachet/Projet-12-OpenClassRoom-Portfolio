/**
 * SkillCards est un composant React qui affiche une carte de compétence avec une animation.
 * @component
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} props.name - Le nom de la compétence.
 * @param {Function} props.Image - Le composant d'image de la compétence.
 * @param {number} props.fontSize - La taille de la police pour le nom de la compétence.
 * @param {number} props.index - L'index de la carte de compétence (utilisé pour l'animation).
 * @param {string} props.alt - Le texte alternatif pour l'image de la compétence.
 * @param {string} props.color - La couleur pour l'image de la compétence.
 *
 * @example
 * <SkillCards name="React" Image={ReactIcon} fontSize={24} index={0} alt="React logo" color="#61DAFB" />
 *
 * @returns {React.Element} - Le composant SkillCards.
 */

/* Importation des modules */
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

/* Importation du style */
import './style.scss';

export default function SkillCards({ name, Image, fontSize, index, alt, color }) {
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
                    tabIndex='0'
                />
            </Tilt>
        </motion.div>
    );
}

SkillCards.propTypes = {
    name: PropTypes.string.isRequired,
    Image: PropTypes.func.isRequired,
    fontSize: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
};
