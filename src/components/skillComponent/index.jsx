import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';
import './style.scss';

const SkillComponent = ({ name, Image, fontSize, index, alt, color }) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const animationDelay = 0.1;

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
};

SkillComponent.propTypes = {
    name: PropTypes.string.isRequired,
    Image: PropTypes.func.isRequired,
    fontSize: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
};

export default SkillComponent;
