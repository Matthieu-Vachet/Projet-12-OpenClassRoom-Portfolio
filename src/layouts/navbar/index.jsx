/**
 * Composant Navbar qui affiche la barre de navigation du site.
 * Il utilise un état pour suivre l'élément de navigation actif et un effet pour mettre à jour cet état lors du défilement.
 * Il affiche une liste d'éléments de navigation basée sur les données de navItems.
 *
 * @returns {JSX.Element} Une barre de navigation avec une liste d'éléments de navigation. L'élément de navigation actif est mis en évidence.
 */

/* Importation des modules */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* Importation des composants */
import { HeaderVariante } from '../../utils/framerMotion/Variante';

/* Importation des données */
import { navItems } from '../../utils/constants/constants';

/* Importation des styles */
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
            variants={HeaderVariante}
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
