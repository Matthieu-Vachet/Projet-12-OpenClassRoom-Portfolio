/* Importation des modules */
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* Importation des composants */
import NavBar from './layouts/navbar';
import Loader from './layouts/loader';
import Home from './sections/home';
import About from './sections/about';
import Blur from './components/background/overlay/blur';
import Skills from './sections/skills';
import Projects from './sections/projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './layouts/footer';
import { Toaster } from 'sonner';

/*
    * Composant App
    * Description :
        - Gère l'affichage de l'application
        - Affiche un loader pendant le chargement
        - Affiche l'application une fois le chargement terminé
*/

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence>
            {loading ? (
                <motion.div
                    key='loader'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <Loader />
                </motion.div>
            ) : (
                <motion.div
                    key='app'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <Blur />
                    <NavBar />
                    <Home />
                    <About />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Contact />
                    <Footer />
                    <Toaster
                        richColors
                        position='top-right'
                        toastOptions={{
                            closeButton: true,
                            className: 'my-toast',
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default App;
