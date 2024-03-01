/**
 * Composant de carte d'expérience.
 *
 * Ce composant affiche une carte avec des informations sur une expérience, comme l'école, le titre, les dates, le lieu, la description et le diplôme.
 * Il utilise le composant `Tilt` pour ajouter un effet de parallaxe à l'image de l'école et le composant `Grain` pour ajouter un effet de grain à l'arrière-plan.
 * Il utilise également plusieurs icônes pour illustrer les différentes informations.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.school - Le nom de l'école.
 * @param {string} props.src - L'URL de l'image de l'école.
 * @param {string} [props.width='250px'] - La largeur de l'image de l'école.
 * @param {string} [props.height='250px'] - La hauteur de l'image de l'école.
 * @param {string} props.title - Le titre de l'expérience.
 * @param {string} props.startDate - La date de début de l'expérience.
 * @param {string} props.endDate - La date de fin de l'expérience.
 * @param {string} props.location - Le lieu de l'expérience.
 * @param {string} props.description - La description de l'expérience.
 * @param {string} props.diplome - Le diplôme obtenu lors de l'expérience.
 * @param {boolean} [props.reverse=false] - Si `true`, inverse l'ordre des éléments dans la carte.
 * @returns {JSX.Element} Le JSX du composant.
 */

/* Importation des modules */
import PropTypes from 'prop-types';

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
}) {
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
                <Grain baseFrequency='7' numOctaves='3' />
            </div>
        </div>
    );
}

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
    reverse: PropTypes.bool,
};

ExperienceCard.defaultProps = {
    width: '250px',
    height: '250px',
};
