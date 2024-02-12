import './style.scss';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { HeaderVariants } from '../../utils/framerMotion/Variante';
import { UserContext } from '../../utils/dataProvider/DataProvider';

import Logo from '../../assets/images/LogoM.svg';
import LightDarkToggle from '../../components/lightDarkToggle';

export default function Header() {
    const data = useContext(UserContext);

    return (
        <header>
            {/* Logo */}
            <div className='logo_content'>
                <motion.img
                    className='logo_header'
                    initial='initial'
                    animate='animate'
                    transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                    variants={HeaderVariants}
                    src={Logo}
                    alt='Matthieu Vachet Logo portfolio'
                />
                {/* Name */}
                <motion.h1
                    initial='initial'
                    animate='animate'
                    transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                    variants={HeaderVariants}
                    className='name_header'
                >
                    {data[0].name + ' '}
                    {data[0].lastname}
                </motion.h1>
            </div>
            {/* Buttons FR - EN - Toggle */}
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
