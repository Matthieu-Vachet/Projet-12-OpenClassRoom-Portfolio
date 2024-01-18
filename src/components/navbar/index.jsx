import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeaderVariants } from '../../utils/framerMotion/Variante';

import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

import './style.scss';

export default function Navbar() {
    const [activeNav, setActiveNav] = useState('#home');

    useEffect(() => {
        const navbarHighlighter = () => {
            const sections = document.querySelectorAll('section[id]');
            let activeId = '#home';
    
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.top + rect.height > window.innerHeight / 2) {
                    activeId = `#${section.getAttribute('id')}`;
                }
            });
    
            setActiveNav(activeId);
            history.pushState(null, null, activeId);
        };
    
        window.addEventListener('scroll', navbarHighlighter);
    
        return () => {
            window.removeEventListener('scroll', navbarHighlighter);
        };
    }, []);

    return (
        <motion.div
            initial='initial'
            animate='animate'
            transition={{ delay: 1.9, duration: 1, type: 'spring' }}
            variants={HeaderVariants}
            className='navbar'
        >
            <nav>
                <a
                    href='#home'
                    className={activeNav === '#home' ? 'active' : ''}
                >
                    <AiOutlineHome />
                </a>
                <a
                    href='#about'
                    className={activeNav === '#about' ? 'active' : ''}
                >
                    <AiOutlineUser />
                </a>
                <a
                    href='#experience'
                    className={activeNav === '#experience' ? 'active' : ''}
                >
                    <BiBook />
                </a>
                <a
                    href='#portfolio'
                    className={activeNav === '#portfolio' ? 'active' : ''}
                >
                    <RiServiceLine />
                </a>
                <a
                    href='#contact'
                    className={activeNav === '#contact' ? 'active' : ''}
                >
                    <BiMessageSquareDetail />
                </a>
            </nav>
        </motion.div>
    );
}
