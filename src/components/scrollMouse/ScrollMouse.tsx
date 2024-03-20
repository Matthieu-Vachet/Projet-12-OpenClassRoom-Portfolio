import React, { useEffect, useState } from 'react';
import './ScrollMouse.css';

export default function ScrollMouse() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            className={` scroll fixed w-[100vw] bottom-[40px] left-0 right-0 ml-auto mr-auto flex flex-col items-center justify-center 2xl:bottom-[60px] ${isVisible ? '' : 'hidden'}`}
        >
            <div className='sm:hidden md:hidden lg:block relative top-[0px] right-[0px] bottom-[0px] left-[0px] w-[34px] h-[55px]'>
                <div className='flex justify-center w-[3px] py-[10px] px-[15px] h-[35px] rounded-[25px] opacity-[0.75] box-content 2xl:h-[55px] 2xl:w-[10px] border-2 border-basicWhite'>
                    <div className=' 2xl:w-[5px] 2xl:h-[20px] animation-scroll-mouse bg-basicWhite w-[5px] h-[15px] rounded-[25%] '></div>
                </div>
            </div>
            <span className='w-[100%] text-center font-space-grotesk text-[16px] 2xl:text-[20px] font-light text-basicWhite mt-[20px] 2xl:mt-[30px] scroll-text '>
                Scroll me ...
            </span>
        </div>
    );
}
