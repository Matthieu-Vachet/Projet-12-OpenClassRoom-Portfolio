import React from 'react';

export function GridBackground() {
    return (
        <div className='h-full w-full dark:bg-basicOnyx bg-basicOnyx  dark:bg-grid-white/[0.1] bg-grid-white/[0.1] fixed flex items-center justify-center z-0'>
            <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-basicOnyx bg-basicOnyx [mask-image:radial-gradient(ellipse_at_center,transparent_-50%,black)]'></div>
        </div>
    );
}
