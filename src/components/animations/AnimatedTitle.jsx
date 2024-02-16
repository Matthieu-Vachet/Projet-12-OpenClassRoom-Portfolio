import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

import './style.scss';
const AnimatedTitle = ({ title, className }) => {
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
                        className='animated-title'
                        transition={{
                            delayChildren: index * 0.25,
                            staggerChildren: 0.05,
                        }}
                    >
                        <motion.span className='animated-title-span' variants={letterAnimation}>
                            {word + '\u00A0'}
                        </motion.span>
                    </motion.div>
                ))}
            </motion.span>
        </h1>
    );
};

AnimatedTitle.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default AnimatedTitle;
