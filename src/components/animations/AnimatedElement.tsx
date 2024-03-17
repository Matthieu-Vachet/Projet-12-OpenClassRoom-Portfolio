import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type AnimatedElementProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
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
