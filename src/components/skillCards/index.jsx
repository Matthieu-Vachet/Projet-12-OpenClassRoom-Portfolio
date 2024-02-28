/* Importation des modules */
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

/* Importation du style */
import './style.scss';

/*
 * Composant SkillCards
 * Affiche une carte de compétence
 * @param {string} name - Nom de la compétence
 * @param {function} Image - Image de la compétence
 * @param {number} fontSize - Taille de la police
 * @param {number} index - Index de la compétence
 * @param {string} alt - Texte alternatif
 * @param {string} color - Couleur de la compétence
 * @returns {JSX.Element}
 */

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
