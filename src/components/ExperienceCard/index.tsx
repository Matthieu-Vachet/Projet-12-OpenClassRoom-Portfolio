/* Importation des modules */
// import PropTypes from 'prop-types';
import React from 'react';

/* Importation des composants */
import Tilt from 'react-parallax-tilt';
import Grain from '../background/grain';

/* Importation des icônes */
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaGlobeAfrica } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';

/* Importation du style */
import './style.scss';

type ExperienceCardProps = {
    school: string;
    src: string;
    width?: string;
    height?: string;
    title: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
    diplome: string;
    reverse?: boolean;
    index?: string;
    alt?: string;
};

export default function ExperienceCard({
    school,
    src,
    width,
    height,
    title,
    startDate,
    endDate,
    location,
    description,
    diplome,
    reverse,
    index,
    alt,
}: ExperienceCardProps) {
    return (
        <div className={`experience-content ${reverse ? 'reverse' : ''}`}>
            <div className='experience-cards'>
                <h4 className='experience-cards-title'>{school}</h4>
                <div className='experience-logo-container'>
                    <div className='experience-logo' style={{ width, height }}>
                        <div className='experience-logo-content'>
                            <Tilt>
                                <img
                                    src={src}
                                    alt={`Logo de ${school}`}
                                    role='img'
                                    aria-label={`Logo de ${school}`}
                                />
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
            <div className='experience-info'>
                <h3 className='experience-info-title'>{title}</h3>
                <div className='experience-info-divers'>
                    <div className='experience-info-divers-header'>
                        <p className='experience-info-date'>
                            <IoCalendarNumberOutline /> {startDate} <IoIosArrowRoundForward />{' '}
                            {endDate}
                        </p>
                        <p className='experience-info-location'>
                            <FaGlobeAfrica /> {location}
                        </p>
                        <p className='experience-info-diplome'>
                            <GiDiploma /> {diplome}
                        </p>
                    </div>
                    <p className='experience-info-description'>{description}</p>
                </div>
            </div>
            <div className='grain'>
                <Grain baseFrequency='7' numOctaves={3} />
            </div>
        </div>
    );
}

ExperienceCard.defaultProps = {
    width: '250px',
    height: '250px',
};
