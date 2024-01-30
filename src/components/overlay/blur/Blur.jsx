import { useState, useEffect } from 'react';
import './style.scss';

const Blur = () => {
    const [scrollOpacity, setScrollOpacity] = useState(1);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.clientHeight;
        const bottomThreshold = bodyHeight - windowHeight - 25;

        const opacity = scrollY >= bottomThreshold ? 0.5 : 1;
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

    return <div className={`blur-component overlay-mask`} style={{ opacity: scrollOpacity }} />;
};

export default Blur;
