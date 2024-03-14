/**
 * Composant Blur qui modifie l'opacité d'un élément en fonction du défilement de la page.
 *
 * @returns {JSX.Element} Un élément div dont l'opacité change en fonction du défilement de la page.
 */

import React, { useState, useEffect } from 'react';

const Blur = () => {
    const [scrollOpacity, setScrollOpacity] = useState(1);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.clientHeight;
        const bottomThreshold = bodyHeight - windowHeight - 25;

        const opacity = scrollY >= bottomThreshold ? 0 : 1;
        setScrollOpacity(opacity);
    };

    useEffect(() => {
        const handleScrollEvent = () => {
            handleScroll();
        };

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <div
            className={`fixed inset-0 p-1 w-full h-full backdrop-blur-[8px] pointer-events-none z-50 opacity-${scrollOpacity} overlay-mask`}
        />
    );
};

export default Blur;
