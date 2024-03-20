/* Importation des modules */
import React, { useState, useEffect } from 'react';

/* Importation des données */
import { navItems } from '../../utils/constants/constants';

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
        <div className='fixed inset-x-0 top-0 z-10 flex justify-center'>
            <nav className='glassEffect w-max absolute left-[50%] transform -translate-x-1/2 top-[1em] flex items-center gap-[1px] md:gap-[1px] sm:gap-0'>
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`md:w-[4rem] rounded-[10px] flex text-basicWhite justify-center items-center py-[8px] px-[10px] sm:w-[3rem] hover:bg-darkWhite10 active:bg-darkWhite10 ${activeNav === `#${item.id}` ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.querySelector(`#${item.id}`);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <div className=' text-basicWhite flex items-center justify-center sm:h-1.5 sm:w-1.5'>
                                <Icon className=' w-1.5 h-1.5' title={item.title} />
                            </div>
                        </a>
                    );
                })}
            </nav>
        </div>
    );
}
