{
    /* Importation des modules */
}
import PropTypes from 'prop-types';
{
    /* Importation des styles */
}
import './style.scss';

const Button = ({ text }) => {
    return (
        <button className='btn-gradient' href='#'>
            <span className='btn-gradient-text'>{text}</span>
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;
