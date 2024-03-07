/**
 * Composant ParticlesCircle.
 *
 * Ce composant utilise le contexte du thème pour déterminer les couleurs et le nombre de particules à afficher.
 * Il utilise également l'API tsparticles pour générer un effet de particules.
 *
 * @component
 * @example
 * return (
 *   <ParticlesCircle />
 * )
 */

/* Importation des modules */
import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import Particles, { initParticlesEngine } from '@tsparticles/react';

const ParticlesCircle = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    /**
     * Fonction exécutée lorsque les particules sont chargées.
     *
     * Cette fonction affiche dans la console le conteneur des particules et le thème actuel.
     *
     * @param {Object} container - Le conteneur des particules.
     */

    const particlesLoaded = (container) => {
        console.log(container);
    };

    /**
     * Options pour la configuration des particules.
     *
     * Ces options déterminent le comportement et l'apparence des particules, y compris leur couleur, leur nombre, leur forme, leur taille, et plus encore.
     * Les options sont recalculées chaque fois que le thème change.
     *
     * @type {Object}
     */
    const options = useMemo(
        () => ({
            fullScreen: {
                enable: true,
                zIndex: -50,
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
                    value: ['rgba(255, 255, 240, 1)'],
                },
                links: {
                    enable: false,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: 'bounce',
                    random: true,
                    speed: 0.4,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                    value: '150',
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
                        speed: 1,
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
