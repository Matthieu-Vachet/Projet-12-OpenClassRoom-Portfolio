/* Importation des modules */
import React, { useState, useEffect } from 'react';

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
            history.pushState({}, '', activeId);
        };

        window.addEventListener('scroll', navbarHighlighter);

        return () => {
            window.removeEventListener('scroll', navbarHighlighter);
        };
    }, []);

    return (
        <div className='navbar'>
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
                                const element = document.querySelector(`#${item.id}`);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <Icon title={item.title} />
                        </a>
                    );
                })}
            </nav>
        </div>
    );
}
