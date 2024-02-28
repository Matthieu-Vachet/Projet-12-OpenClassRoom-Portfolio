/* Importation des modules */
import PropTypes from 'prop-types';

/* Importation des styles */
import './style.scss';

/*
 * Composant Button
 * Affiche un bouton avec un dégradé
 * @param {string} text - Texte du bouton
 * @param {string} type - Type du bouton
 * @param {function} onClick - Fonction à exécuter au clic
 * @param {boolean} disabled - Désactive le bouton
 * @param {string} className - Classe CSS à appliquer
 * @param {string} height - Hauteur du bouton
 * @param {string} width - Largeur du bouton
 * @param {string} href - Lien de redirection
 * @param {string} target - Cible de la redirection
 * @returns {JSX.Element}
 */

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
