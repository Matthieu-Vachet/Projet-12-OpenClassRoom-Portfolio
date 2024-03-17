import React, { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import './style.scss';

export default function TopScroll() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className='scroll-to-top'>
            {isVisible && (
                <div onClick={scrollToTop} aria-label='Scroll to top'>
                    <MdKeyboardDoubleArrowUp className='scroll-top-arrow' />
                </div>
            )}
        </div>
    );
}
