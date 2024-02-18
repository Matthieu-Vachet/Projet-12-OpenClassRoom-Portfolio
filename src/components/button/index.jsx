import PropTypes from 'prop-types';
import './style.scss';

const Button = ({ text, type, onClick, disabled, className, height, width }) => {
    return (
        <button
            className={`btn-gradient ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{ height: `${height}`, width: `${width}` }}
            aria-label={text}
            role='button'
        >
            <span className='btn-gradient-text'>{text}</span>
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
};

Button.defaultProps = {
    type: 'button',
    onClick: null,
    disabled: false,
    className: '',
    height: '6em',
    width: '20em',
};

export default Button;
