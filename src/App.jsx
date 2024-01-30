import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Importation des composants
import ParticlesCircle from './components/particles/ParticlesCircle';
import Home from './sections/home';
import NavBar from './components/navbar';
import Loader from './components/loader';
import About from './sections/about';
import Blur from './components/overlay/blur/Blur';

function App() {
    // État pour gérer l'affichage du loader
    const [loading, setLoading] = useState(true);

    // Simule un temps de chargement de 5 secondes
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
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
                    <ParticlesCircle />
                    <NavBar />
                    <Blur />
                    <Home />
                    <About />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default App;
