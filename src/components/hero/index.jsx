import { motion } from 'framer-motion';
import './style.scss';
import '../../style/variable.scss';

import info from '../../data/constants';
import ScrollMouse from '../scrollMouse';
import TypewriterComponent from 'typewriter-effect';
import {
    TextHeroFirstnameVariants,
    TextHeroNameVariants,
    TextHeroJobVariants,
    TextHeroNumberVariants,
} from '../../utils/framerMotion/Variante';

export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero_content'>
                <div className='hero_text'>
                    <motion.h1
                        initial='initial'
                        animate='animate'
                        transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
                        variants={TextHeroFirstnameVariants}
                    >
                        {info[0].firstname}
                    </motion.h1>
                    <motion.h2
                        initial='initial'
                        animate='animate'
                        transition={{ delay: 0.7, duration: 0.8, type: 'spring' }}
                        variants={TextHeroNameVariants}
                    >
                        {info[0].name}
                    </motion.h2>
                    <motion.h3
                        initial='initial'
                        animate='animate'
                        transition={{ duration: 0.4, type: 'spring' }}
                        variants={TextHeroJobVariants}
                    >
                        {info[0].profession}
                    </motion.h3>
                    <motion.h4
                        initial='initial'
                        animate='animate'
                        transition={{ duration: 0.4, type: 'spring' }}
                        variants={TextHeroNumberVariants}
                    >
                        {/* Typewriter effect for dynamic text animation without a cursor */}
                        <TypewriterComponent
                            options={{
                                cursor: '',
                                delay: 100,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDelay(100)
                                    .typeString('07.69.81.72.16')
                                    .pauseFor(300)
                                    .deleteChars(5)
                                    .typeString('73.16')
                                    .start();
                            }}
                        />
                    </motion.h4>
                </div>
                <ScrollMouse />
            </div>
        </div>
    );
}
