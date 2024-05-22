import React from 'react';

import './style.scss';

export function GridBackground() {
    return (
        <div className='gridbg h-full w-full  dark:bg-grid-strockGlass/[0.2] fixed flex items-center justify-center'>
            <div className='gridmask absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_-100%,black)]'></div>
        </div>
    );
}
