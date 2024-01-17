import { useState } from 'react';
import { motion } from 'framer-motion';

import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

import './style.scss';

export default function Navbar() {

    const [activeNav, setActiveNav] = useState('#home');

    return (
        
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                className='navbar'
            >
            <nav>
                <a
                    href='#home'
                    onClick={() => setActiveNav('#home')}
                    className={activeNav === '#home' ? 'active' : ''}
                >
                    <AiOutlineHome />
                </a>
                <a
                    href='#about'
                    onClick={() => setActiveNav('#about')}
                    className={activeNav === '#about' ? 'active' : ''}
                >
                    <AiOutlineUser />
                </a>
                <a
                    href='#experience'
                    onClick={() => setActiveNav('#experience')}
                    className={activeNav === '#experience' ? 'active' : ''}
                >
                    <BiBook />
                </a>
                <a
                    href='#portfolio'
                    onClick={() => setActiveNav('#portfolio')}
                    className={activeNav === '#portfolio' ? 'active' : ''}
                >
                    <RiServiceLine />
                </a>
                <a
                    href='#contact'
                    onClick={() => setActiveNav('#contact')}
                    className={activeNav === '#contact' ? 'active' : ''}
                >
                    <BiMessageSquareDetail />
                </a>
            </nav>
            </motion.div>
    );
}
