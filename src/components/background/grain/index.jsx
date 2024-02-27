/* Importation des modules */
import PropTypes from 'prop-types';

/*
 * Composant Grain
 * Affiche un filtre SVG pour simuler du bruit
 * @param {string} baseFrequency - Fréquence de base du bruit
 * @param {string} numOctaves - Nombre d'octaves
 * @param {string} w - Largeur
 * @param {string} h - Hauteur
 * @returns {JSX.Element}
 */
export default function Grain({ baseFrequency = '9', numOctaves = 5, w = '100%', h = '100%' }) {
    const viewBox = '0 0 300 300';

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={w}
            height={h}
            viewBox={viewBox}
            preserveAspectRatio='none'
        >
            <filter id='noiseFilter'>
                <feTurbulence
                    type='fractalNoise'
                    baseFrequency={baseFrequency}
                    numOctaves={numOctaves}
                />
            </filter>
            <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg>
    );
}

Grain.propTypes = {
    baseFrequency: PropTypes.string,
    numOctaves: PropTypes.string,
    w: PropTypes.string,
    h: PropTypes.string,
};
