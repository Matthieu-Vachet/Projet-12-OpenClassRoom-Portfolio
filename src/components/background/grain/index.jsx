/* Importation des modules */
import PropTypes from 'prop-types';

const Grain = ({ baseFrequency = '9', numOctaves = 5, w = '100%', h = '100%' }) => {
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
};

Grain.propTypes = {
    baseFrequency: PropTypes.string,
    numOctaves: PropTypes.number,
    w: PropTypes.string,
    h: PropTypes.string,
};

export default Grain;
