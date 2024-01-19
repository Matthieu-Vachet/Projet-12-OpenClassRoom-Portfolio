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
    TextHeroNumberVariants
} from '../../utils/framerMotion/Variante';


export default function Hero() {
    return (
        <div className='hero'>
            <svg
                className='hero_logo'
                width='1294'
                height='906'
                viewBox='0 0 1294 906'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M718.514 608.556L707.211 636.105L703.951 644.283L682.431 696.907L661.02 749.53L654.064 766.317L648.304 780.63L635.588 749.53L614.068 696.907L600.918 664.515L592.658 644.283L577.768 607.91L571.138 591.66L549.727 539.037L547.771 534.302L528.208 486.414L521.904 470.81L515.6 486.414L494.624 537.638L494.081 539.037L472.561 591.66H330.293L335.184 579.823L351.812 539.037L373.332 486.414L388.33 449.61L394.743 433.791L416.262 381.06L437.673 328.437L441.477 319.398L450.715 296.583L459.193 275.814L480.712 223.191L494.624 188.97L502.123 170.568L521.034 124.401L539.837 170.568L547.771 190.046L561.248 223.191L582.767 275.814L592.114 298.736L600.918 320.366L604.287 328.437L625.698 381.06L647.217 433.791L648.087 435.836L654.064 450.686L668.737 486.414L690.148 539.037L707.211 580.899L711.667 591.66L718.514 608.556Z'
                    stroke='var(--basicDarkGray)'
                    strokeOpacity='0.1'
                    strokeWidth='4'
                    strokeMiterlimit='10'
                />
                <path
                    d='M963.055 591.66H827.525L813.614 557.332L806.114 539.037L784.595 486.414L776.444 466.505L763.184 433.791L760.358 427.011L741.664 381.06L720.145 328.437L707.211 296.799V290.772L713.298 275.814L734.817 223.191L756.228 170.568L760.358 160.452L773.726 127.737L791.225 170.568L812.636 223.191L813.614 225.343L834.155 275.814L844.154 300.458L855.675 328.437L866.761 355.663L877.086 381.06L898.605 433.791L919.907 485.876V486.414H920.016L941.536 539.037L963.055 591.66Z'
                    stroke='var(--basicDarkGray)'
                    strokeOpacity='0.1'
                    strokeWidth='4'
                    strokeMiterlimit='10'
                />
            </svg>
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
