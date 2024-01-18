import './style.scss';
import { motion } from 'framer-motion';
import { HeaderVariants } from '../../utils/framerMotion/Variante';

import Logo from '../../assets/images/LogoM.svg';
import LightDarkToggle from '../lightDarkToggle';

export default function Header() {
    return (
        <header>
            <motion.img
                className='logo_header'
                initial='initial'
                animate='animate'
                transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                variants={HeaderVariants}
                src={Logo}
                alt='Matthieu Vachet Logo portfolio'
            />
            <motion.div
                initial='initial'
                animate='animate'
                transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                variants={HeaderVariants}
                className='button_header'
            >
                <button className='button_fr'>
                    <span className='text_fr'>FR</span>
                </button>
                <button className='button_en'>
                    <span className='text_en'>EN</span>
                </button>
                <LightDarkToggle />
            </motion.div>
        </header>
    );
}
