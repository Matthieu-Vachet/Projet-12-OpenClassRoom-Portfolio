import ParticlesComponent from './ParticlesComponent';
import { heroOptions } from './particlesOptions';

const HomePraticles = () => {
    return (
        <div>
            <ParticlesComponent id='hero-particles' className='' particlesOptions={heroOptions} />
        </div>
    );
};

export default HomePraticles;
