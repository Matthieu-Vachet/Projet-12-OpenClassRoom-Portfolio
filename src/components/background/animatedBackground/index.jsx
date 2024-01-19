import './style.scss';
import '../../../style/variable.scss';

import { useState, useEffect } from 'react';

export default function AnimatedBackground() {

    const [key, setKey] = useState(Date.now());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setKey(Date.now());
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div id='animatedBackground'>
            <svg
                key={key}
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                viewBox='0 0 1422 800'
                preserveAspectRatio='xMidYMid meet'
            >
                <g
                    shapeRendering='crispEdges'
                    strokeLinejoin='round'
                    fill='none'
                    strokeWidth='2'
                    strokeOpacity={0.1}
                    stroke='var(--basicDarkGray)'
                >
                    <polygon points='1066.5,200 1422,0 1422,200' className='svg-background-1'></polygon>
                    <polygon
                        points='1066.5,100 1066.5,0 888.75,100'
                        className='svg-background-2'
                    ></polygon>
                    <polygon points='888.75,100 711,0 888.75,0' className='svg-background-3'></polygon>
                    <polygon points='888.75,200 711,100 711,200' className='svg-background-4'></polygon>
                    <polygon
                        points='1066.5,200 888.75,200 888.75,100'
                        className='svg-background-5'
                    ></polygon>
                    <polygon
                        points='1066.5,200 977.625,250 977.625,200'
                        className='svg-background-6'
                    ></polygon>
                    <polygon
                        points='977.625,250 888.75,200 888.75,250'
                        className='svg-background-7'
                    ></polygon>
                    <polygon
                        points='977.625,250 977.625,300 888.75,300'
                        className='svg-background-8'
                    ></polygon>
                    <polygon
                        points='1066.5,300 1066.5,250 977.625,250'
                        className='svg-background-9'
                    ></polygon>
                    <polygon
                        points='888.75,200 711,200 888.75,300'
                        className='svg-background-10'
                    ></polygon>
                    <polygon
                        points='711,400 711,300 888.75,300'
                        className='svg-background-11'
                    ></polygon>
                    <polygon
                        points='1066.5,350 977.625,350 977.625,300'
                        className='svg-background-12'
                    ></polygon>
                    <polygon
                        points='977.625,300 977.625,350 888.75,300'
                        className='svg-background-13'
                    ></polygon>
                    <polygon
                        points='977.625,350 888.75,350 888.75,400'
                        className='svg-background-14'
                    ></polygon>
                    <polygon
                        points='1066.5,350 977.625,350 1066.5,400'
                        className='svg-background-15'
                    ></polygon>
                    <polygon
                        points='1422,300 1244.25,300 1422,200'
                        className='svg-background-16'
                    ></polygon>
                    <polygon
                        points='1244.25,300 1066.5,200 1244.25,200'
                        className='svg-background-17'
                    ></polygon>
                    <polygon
                        points='1066.5,300 1244.25,400 1244.25,300'
                        className='svg-background-18'
                    ></polygon>
                    <polygon
                        points='1422,400 1422,300 1244.25,400'
                        className='svg-background-19'
                    ></polygon>
                    <polygon points='711,100 711,0 533.25,0' className='svg-background-20'></polygon>
                    <polygon
                        points='533.25,0 355.5,0 533.25,100'
                        className='svg-background-21'
                    ></polygon>
                    <polygon
                        points='533.25,100 533.25,200 355.5,200'
                        className='svg-background-22'
                    ></polygon>
                    <polygon
                        points='711,200 711,100 533.25,200'
                        className='svg-background-23'
                    ></polygon>
                    <polygon points='355.5,0 355.5,200 0,200' className='svg-background-24'></polygon>
                    <polygon
                        points='355.5,200 355.5,300 177.75,300'
                        className='svg-background-25'
                    ></polygon>
                    <polygon
                        points='177.75,200 177.75,300 0,300'
                        className='svg-background-26'
                    ></polygon>
                    <polygon points='177.75,400 0,300 0,400' className='svg-background-27'></polygon>
                    <polygon
                        points='355.5,400 177.75,300 177.75,400'
                        className='svg-background-28'
                    ></polygon>
                    <polygon
                        points='711,300 533.25,200 711,200'
                        className='svg-background-29'
                    ></polygon>
                    <polygon
                        points='533.25,300 355.5,200 533.25,200'
                        className='svg-background-30'
                    ></polygon>
                    <polygon
                        points='444.375,300 533.25,350 533.25,300'
                        className='svg-background-31'
                    ></polygon>
                    <polygon
                        points='355.5,350 355.5,300 444.375,350'
                        className='svg-background-32'
                    ></polygon>
                    <polygon
                        points='355.5,400 444.375,350 444.375,400'
                        className='svg-background-33'
                    ></polygon>
                    <polygon
                        points='444.375,400 533.25,350 533.25,400'
                        className='svg-background-34'
                    ></polygon>
                    <polygon
                        points='711,400 533.25,400 533.25,300'
                        className='svg-background-35'
                    ></polygon>
                    <polygon
                        points='622.125,400 711,450 711,400'
                        className='svg-background-36'
                    ></polygon>
                    <polygon
                        points='622.125,400 533.25,400 622.125,450'
                        className='svg-background-37'
                    ></polygon>
                    <polygon
                        points='622.125,450 533.25,450 533.25,500'
                        className='svg-background-38'
                    ></polygon>
                    <polygon
                        points='711,450 711,500 622.125,500'
                        className='svg-background-39'
                    ></polygon>
                    <polygon
                        points='533.25,500 355.5,400 355.5,500'
                        className='svg-background-40'
                    ></polygon>
                    <polygon
                        points='533.25,500 533.25,600 355.5,600'
                        className='svg-background-41'
                    ></polygon>
                    <polygon
                        points='711,500 622.125,500 622.125,550'
                        className='svg-background-42'
                    ></polygon>
                    <polygon
                        points='622.125,550 533.25,500 533.25,550'
                        className='svg-background-43'
                    ></polygon>
                    <polygon
                        points='622.125,600 622.125,550 533.25,550'
                        className='svg-background-44'
                    ></polygon>
                    <polygon
                        points='711,600 711,550 622.125,550'
                        className='svg-background-45'
                    ></polygon>
                    <polygon
                        points='177.75,500 355.5,500 177.75,400'
                        className='svg-background-46'
                    ></polygon>
                    <polygon
                        points='177.75,500 0,500 177.75,400'
                        className='svg-background-47'
                    ></polygon>
                    <polygon
                        points='177.75,500 177.75,600 0,600'
                        className='svg-background-48'
                    ></polygon>
                    <polygon
                        points='177.75,500 355.5,600 355.5,500'
                        className='svg-background-49'
                    ></polygon>
                    <polygon points='355.5,800 0,600 0,800' className='svg-background-50'></polygon>
                    <polygon
                        points='711,600 533.25,700 711,700'
                        className='svg-background-51'
                    ></polygon>
                    <polygon
                        points='533.25,700 533.25,600 355.5,600'
                        className='svg-background-52'
                    ></polygon>
                    <polygon
                        points='355.5,700 533.25,700 355.5,800'
                        className='svg-background-53'
                    ></polygon>
                    <polygon
                        points='711,700 533.25,700 533.25,800'
                        className='svg-background-54'
                    ></polygon>
                    <polygon
                        points='1422,500 1422,400 1244.25,500'
                        className='svg-background-55'
                    ></polygon>
                    <polygon
                        points='1244.25,400 1244.25,500 1066.5,400'
                        className='svg-background-56'
                    ></polygon>
                    <polygon
                        points='1244.25,500 1066.5,500 1066.5,600'
                        className='svg-background-57'
                    ></polygon>
                    <polygon
                        points='1244.25,600 1422,500 1422,600'
                        className='svg-background-58'
                    ></polygon>
                    <polygon
                        points='1066.5,450 977.625,450 1066.5,400'
                        className='svg-background-59'
                    ></polygon>
                    <polygon
                        points='888.75,450 977.625,450 977.625,400'
                        className='svg-background-60'
                    ></polygon>
                    <polygon
                        points='977.625,450 888.75,450 977.625,500'
                        className='svg-background-61'
                    ></polygon>
                    <polygon
                        points='1066.5,500 977.625,500 977.625,450'
                        className='svg-background-62'
                    ></polygon>
                    <polygon
                        points='888.75,450 799.875,450 888.75,400'
                        className='svg-background-63'
                    ></polygon>
                    <polygon
                        points='799.875,400 799.875,450 711,450'
                        className='svg-background-64'
                    ></polygon>
                    <polygon
                        points='799.875,450 711,450 711,500'
                        className='svg-background-65'
                    ></polygon>
                    <polygon
                        points='888.75,450 799.875,450 799.875,500'
                        className='svg-background-66'
                    ></polygon>
                    <polygon
                        points='888.75,500 711,600 888.75,600'
                        className='svg-background-67'
                    ></polygon>
                    <polygon
                        points='1066.5,600 888.75,600 1066.5,500'
                        className='svg-background-68'
                    ></polygon>
                    <polygon
                        points='1066.5,700 888.75,600 1066.5,600'
                        className='svg-background-69'
                    ></polygon>
                    <polygon
                        points='888.75,700 711,600 711,700'
                        className='svg-background-70'
                    ></polygon>
                    <polygon
                        points='888.75,700 711,700 888.75,800'
                        className='svg-background-71'
                    ></polygon>
                    <polygon
                        points='888.75,700 888.75,800 1066.5,700'
                        className='svg-background-72'
                    ></polygon>
                    <polygon
                        points='1066.5,800 1422,800 1422,600'
                        className='svg-background-73'
                    ></polygon>
                </g>
                <g fill='var(--basicDarkGray)' strokeWidth='3' stroke='var(--basicDarkGray)'></g>
            </svg>
        </div>
    );
}