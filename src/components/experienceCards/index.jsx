import PropTypes from 'prop-types';

import './style.scss';

const ExperienceCards = () => {
    return (
        <div className='cards-container'>
            <div className='cards'>
                <div className='cards-content-image'>
                    {/* <img className='cards-image' src={src} alt={alt} /> */}
                </div>
            </div>
        </div>
    );
};

ExperienceCards.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ExperienceCards;
