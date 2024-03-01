/**
 * Composant Button qui crée un bouton ou un lien avec un style de gradient.
 *
 * @param {object} props - Les propriétés passées au composant.
 * @param {string} props.text - Le texte du bouton.
 * @param {string} props.type - Le type du bouton.
 * @param {function} props.onClick - La fonction à exécuter lors du clic sur le bouton.
 * @param {boolean} props.disabled - Si le bouton est désactivé ou non.
 * @param {string} props.className - La classe CSS à appliquer au bouton.
 * @param {string} props.height - La hauteur du bouton.
 * @param {string} props.width - La largeur du bouton.
 * @param {string} props.href - L'URL du lien si le bouton est un lien.
 * @param {string} props.target - La cible du lien si le bouton est un lien.
 *
 * @returns {JSX.Element} Un bouton ou un lien avec un style de gradient.
 */

/* Importation des modules */
import PropTypes from 'prop-types';

/* Importation des styles */
import './style.scss';

export default function Button({
    text,
    type,
    onClick,
    disabled,
    className,
    height,
    width,
    href,
    target,
}) {
    const handleClick = (event) => {
        if (onClick) {
            event.preventDefault();
            onClick();
        }
    };

    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn-gradient ${className}`}
                style={{ height: `${height}`, width: `${width}` }}
                aria-label={text}
                role='button'
                tabIndex='0'
                onClick={handleClick}
            >
                <span className='btn-gradient-text'>{text}</span>
            </a>
        );
    } else {
        return (
            <button
                className={`btn-gradient ${className}`}
                type={type}
                onClick={handleClick}
                disabled={disabled}
                style={{ height: `${height}`, width: `${width}` }}
                aria-label={text}
                role='button'
                tabIndex='0'
            >
                <span className='btn-gradient-text'>{text}</span>
            </button>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
};

Button.defaultProps = {
    type: 'button',
    onClick: null,
    disabled: false,
    height: '6em',
    width: '20em',
    href: '',
};
