import React, { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import './TopScroll.scss';

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
        <div className='fixed sm:bottom-[10px] md:bottom-[20px] sm:right-[10px] md:right-[20px] cursor-pointer text-basicWhite z-50'>
            {isVisible && (
                <div onClick={scrollToTop} aria-label='Scroll to top'>
                    <MdKeyboardDoubleArrowUp className='sm:text-[3rem] md:text-[5rem] scroll-top-arrow' />
                </div>
            )}
        </div>
    );
}
