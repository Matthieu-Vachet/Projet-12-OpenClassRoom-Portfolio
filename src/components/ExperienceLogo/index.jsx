import PropTypes from 'prop-types';
import './style.scss';

const ExperienceLogo = ({ src, alt }) => {
    return (
        <div className='experience-logo-container'>
            <div className='experience-logo'>
                <div className='experience-logo-content'>
                    <img src={src} alt={alt} role='img' aria-label={alt} />
                </div>
            </div>
        </div>
    );
};

ExperienceLogo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ExperienceLogo;
