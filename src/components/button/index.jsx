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
 * @returns {JSX.Element}
 */

export default function Button({ text, type, onClick, disabled, className, height, width, href }) {
    const handleClick = () => {
        if (href) {
            window.location.href = href;
        } else if (onClick) {
            onClick();
        }
    };

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

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    href: PropTypes.string,
};

Button.defaultProps = {
    type: 'button',
    onClick: null,
    disabled: false,
    className: '',
    height: '6em',
    width: '20em',
    href: '', // Modifie la valeur par défaut de href à une chaîne vide
};
