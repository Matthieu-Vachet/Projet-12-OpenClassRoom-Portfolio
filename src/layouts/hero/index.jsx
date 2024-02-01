import { motion } from 'framer-motion';
import './style.scss';
import '../../styles/variable.scss';

import info from '../../utils/data/constants';
import ScrollMouse from '../../components/scrollMouse';
import { TextHeroVariant } from '../../utils/framerMotion/Variante';

export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero_content'>
                <div className='hero_text'>
                    <motion.h1
                        initial='initial'
                        animate='animate'
                        transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
                        variants={TextHeroVariant}
                    >
                        {info[0].firstname}
                    </motion.h1>
                    <motion.h2
                        initial='initial'
                        animate='animate'
                        transition={{ delay: 0.7, duration: 0.8, type: 'spring' }}
                        variants={TextHeroVariant}
                    >
                        {info[0].name}
                    </motion.h2>
                    <motion.h3
                        initial='initial'
                        animate='animate'
                        transition={{ delay: 0.9, duration: 0.5, type: 'spring' }}
                        variants={TextHeroVariant}
                    >
                        {info[0].profession}
                    </motion.h3>
                    <motion.h4
                        initial='initial'
                        animate='animate'
                        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
                        variants={TextHeroVariant}
                    >
                        {info[0].number}
                    </motion.h4>
                </div>
                <ScrollMouse />
            </div>
        </div>
    );
}
