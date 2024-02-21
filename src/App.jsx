import React, { useEffect, useState, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'sonner';
// Importation des composants
import NavBar from './layouts/navbar';
import Loader from './layouts/loader';
const Home = React.lazy(() => import('./sections/home'));
const About = React.lazy(() => import('./sections/about'));
const Blur = React.lazy(() => import('./components/background/overlay/blur'));
const Skills = React.lazy(() => import('./sections/skills'));
const Projects = React.lazy(() => import('./sections/projects'));
const Experience = React.lazy(() => import('./sections/Experience'));
const Contact = React.lazy(() => import('./sections/contact'));
const Footer = React.lazy(() => import('./layouts/footer'));

function App() {
    // État pour gérer l'affichage du loader
    const [loading, setLoading] = useState(true);

    // Simule un temps de chargement de 4 secondes
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
            <Suspense fallback={<Loader />}>
                {loading ? (
                    // Affiche le loader pendant le chargement
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
                    // Une fois le chargement terminé, affiche l'application
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
            </Suspense>
        </AnimatePresence>
    );
}

export default App;
