import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

import './style.scss';

export default function AnimatedTitle({ text, className }) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 1,
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

    const wordAnimation = {
        hidden: {},
        visible: {},
    };

    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: `0.25em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 5,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    return (
        <h1 aria-label={text} className={className}>
            {text.split(' ').map((word, index) => {
                return (
                    <motion.span
                        ref={ref}
                        aria-hidden='true'
                        key={index}
                        initial='hidden'
                        animate={ctrls}
                        variants={wordAnimation}
                        transition={{
                            delayChildren: index * 0.25,
                            staggerChildren: 0.05,
                        }}
                        className={`h1-animated`}
                    >
                        {word.split('').map((character, index) => {
                            return (
                                <motion.span
                                    aria-hidden='true'
                                    key={index}
                                    variants={characterAnimation}
                                >
                                    {character}
                                </motion.span>
                            );
                        })}
                    </motion.span>
                );
            })}
        </h1>
    );
}

AnimatedTitle.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    wordSpace: PropTypes.string.isRequired,
    charSpace: PropTypes.string.isRequired,
};
