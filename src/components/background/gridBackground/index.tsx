import React from 'react';

export function GridBackground() {
    return (
        <div className='h-full w-full dark:bg-black bg-basicOnyx  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] fixed flex items-center justify-center z-0'>
            <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-basicOnyx [mask-image:radial-gradient(ellipse_at_center,transparent_-50%,black)]'></div>
            <p className='text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'></p>
        </div>
    );
}
