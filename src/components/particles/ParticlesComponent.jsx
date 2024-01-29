import PropTypes from 'prop-types';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

let isInitialized = false;

const ParticlesComponent = ({ id, className, particlesOptions }) => {
    const particlesInit = (main) => {
        if (!isInitialized) {
            loadSlim(main);
            isInitialized = true;
        }
    };

    return (
        <Particles id={id} className={className} init={particlesInit} options={particlesOptions} />
    );
};

ParticlesComponent.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    particlesOptions: PropTypes.object.isRequired,
};

export default ParticlesComponent;
