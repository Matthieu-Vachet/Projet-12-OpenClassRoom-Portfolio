{
    /* Importation des modules */
}
import { useEffect, useMemo, useState, useContext } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { ThemeContext } from '../../../utils/dataProvider/DataProvider';

const ParticlesCircle = () => {
    const [init, setInit] = useState(false);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
        console.log(theme);
    };

    const options = useMemo(
        () => ({
            fullScreen: {
                enable: true,
                // zIndex: -99,
            },
            background: {
                color: {
                    value: 'none',
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push',
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse',
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: theme === 'dark' ? ['#fff'] : ['#a9a9a9'],
                },
                links: {
                    enable: false,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: 'bounce',
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                    value: theme === 'dark' ? ['150'] : ['300'],
                },
                opacity: {
                    value: { min: 0.5, max: 1 },
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0,
                        sync: false,
                    },
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 0.1, max: 3 },
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false,
                    },
                },
            },
            detectRetina: true,
        }),
        [theme],
    );
    if (init) {
        return (
            <div>
                <Particles id='tsparticles' particlesLoaded={particlesLoaded} options={options} />
            </div>
        );
    }
};

export default ParticlesCircle;
