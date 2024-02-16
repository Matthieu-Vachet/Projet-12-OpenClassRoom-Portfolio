import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Importation des composants
import Home from './sections/home';
import NavBar from './layouts/navbar';
import Loader from './layouts/loader';
import About from './sections/about';
import Blur from './components/background/overlay/blur';
import Skills from './sections/skills';
import Projects from './sections/projects';

function App() {
    // État pour gérer l'affichage du loader
    const [loading, setLoading] = useState(true);
    // Etat pour gérer la largeur de l'écran
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Simule un temps de chargement de 4 secondes
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <AnimatePresence>
            {loading ? (
                // Affiche le loader pendant le chargement
                <motion.div
                    key='loader'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <Loader />
                </motion.div>
            ) : (
                // Une fois le chargement terminé, affiche l'application
                <motion.div
                    key='app'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <NavBar />
                    {screenWidth > 768 && <Blur />}
                    <Home />
                    <About />
                    <Skills />
                    <Projects />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default App;
