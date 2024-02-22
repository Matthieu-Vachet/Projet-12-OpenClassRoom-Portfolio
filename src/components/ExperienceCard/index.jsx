/* Importation des modules */
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

// Composants
import Button from '../button';

/* Importation des données */
import { AuthContext } from '../../utils/dataProvider/DataProvider';

// Ressources
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { IoIosArrowRoundForward, IoMdAdd } from 'react-icons/io';
import { FaGlobeAfrica, FaPencilAlt } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';
import { MdDeleteForever } from 'react-icons/md';

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
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <div className='experience-content'>
            <div className='experience-cards'>
                <h4 className='experience-cards-title'>{school}</h4>
                <div className='experience-logo-container'>
                    <div className='experience-logo' style={{ width, height }}>
                        <div className='experience-logo-content'>
                            <img
                                src={src}
                                alt={`Logo de ${school}`}
                                role='img'
                                aria-label={`Logo de ${school}`}
                            />
                        </div>
                    </div>
                </div>
                <Button text={t('experience.button')} height='3rem' width='15rem' />
            </div>
            <div className='experience-info'>
                {isLoggedIn && (
                    <div className='experience-cards-edit-icons'>
                        <FaPencilAlt className='edit-icons' />
                        <IoMdAdd className='edit-icons' />
                        <MdDeleteForever className='edit-icons' />
                    </div>
                )}
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
