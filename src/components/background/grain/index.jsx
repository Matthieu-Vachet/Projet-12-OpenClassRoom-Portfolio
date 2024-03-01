/**
 * Composant Grain qui génère un bruit de grain SVG.
 *
 * @param {object} props - Les propriétés passées au composant.
 * @param {string} props.baseFrequency - La fréquence de base pour le bruit fractal.
 * @param {number} props.numOctaves - Le nombre d'octaves pour le bruit fractal.
 * @param {string} props.w - La largeur du SVG.
 * @param {string} props.h - La hauteur du SVG.
 *
 * @returns {JSX.Element} Un SVG qui génère un bruit de grain.
 */

/* Importation des modules */
import PropTypes from 'prop-types';

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
