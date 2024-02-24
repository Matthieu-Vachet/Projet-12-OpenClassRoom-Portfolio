/* Importation des modules */
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// Composants
import Button from '../button';
import Tilt from 'react-parallax-tilt';
// Ressources
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaGlobeAfrica } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';

// Style
import './style.scss';

const ExperienceCard = ({
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
}) => {
    const { t } = useTranslation();

    return (
        <div className='experience-content'>
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
                <Button text={t('experience.button')} />
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
        </div>
    );
};

ExperienceCard.propTypes = {
    school: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    diplome: PropTypes.string.isRequired,
};

ExperienceCard.defaultProps = {
    width: '250px',
    height: '250px',
};

export default ExperienceCard;
