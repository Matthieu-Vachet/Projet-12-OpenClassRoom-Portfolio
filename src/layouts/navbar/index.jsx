/* Importation des modules */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Importation des composants
import { HeaderVariants } from '../../utils/framerMotion/Variante';

// Importation des données
import { navItems } from '../../utils/constants/constants';

// Importation des styles
import './style.scss';

export default function Navbar() {
    const [activeNav, setActiveNav] = useState('#home');

    useEffect(() => {
        const navbarHighlighter = () => {
            const sections = document.querySelectorAll('section[id]');
            let activeId = '#home';

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (
                    rect.top <= window.innerHeight / 2 &&
                    rect.top + rect.height > window.innerHeight / 2
                ) {
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
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={activeNav === `#${item.id}` ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .querySelector(`#${item.id}`)
                                    .scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <Icon title={item.title} />
                        </a>
                    );
                })}
            </nav>
        </motion.div>
    );
}
