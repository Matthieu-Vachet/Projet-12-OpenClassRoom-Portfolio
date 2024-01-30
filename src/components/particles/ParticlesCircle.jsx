import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesCircle = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            fullScreen: {
                enable: true,
                zIndex: -1,
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
                    value: '#fff',
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
                    value: 50,
                },
                opacity: {
                    value: { min: 0.1, max: 1 },
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
        [],
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
