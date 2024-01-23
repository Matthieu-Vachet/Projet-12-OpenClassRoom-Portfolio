import './style.scss';

// 1. Importing framer-motion
import { motion } from 'framer-motion';

import './style.scss';

// 2. Defining Variants
const marqueeVariants = {
    animate: {
        x: [window.innerWidth, -window.innerWidth],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 5,
                ease: 'linear',
            },
        },
    },
};

const Marquee = () => {
    return (
        <div>
            <div className='marquee'>
                {/* 3. Using framer motion */}
                <motion.div className='track' variants={marqueeVariants} animate='animate'>
                    <h1>{`About About About About`}</h1>
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
