/* Importation des modules */
import PropTypes from 'prop-types';

// Ressources
import { RiMapPinLine } from 'react-icons/ri';
import { SlEnvolopeLetter } from 'react-icons/sl';

// Style
import './style.scss';

const ContactInfoCard = ({ iconUrl, name, lastname, adress, cp, city, number, email }) => {
    return (
        <div className='contact-details-card'>
            <div className='contact-card-icon'>
                <img className='icon' src={iconUrl} alt='Logo contact' />
            </div>

            <p className='contact-card-name'>
                {name} {lastname}
            </p>
            <div className='contact-card-content'>
                <div className='contact-card-line'>
                    <RiMapPinLine className='contact-card-line-icon' />
                    <p className='contact-card-adress'>{adress}</p>
                    <p className='contact-card-city'>
                        {cp} {city}
                    </p>
                </div>
                <div className='contact-card-line'>
                    <SlEnvolopeLetter className='contact-card-line-icon' />
                    <p className='contact-card-number'> {number} </p>

                    <p className='contact-card-email'> {email} </p>
                </div>
            </div>
        </div>
    );
};

ContactInfoCard.propTypes = {
    iconUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    cp: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default ContactInfoCard;
