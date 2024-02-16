import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';
import './style.scss';

const SkillComponent = ({ name, src, width, height, index, alt }) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: false,
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
                <img className='skills-img' src={src} width={width} height={height} alt={alt} />
            </Tilt>
        </motion.div>
    );
};

SkillComponent.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    alt: PropTypes.string,
};

export default SkillComponent;
