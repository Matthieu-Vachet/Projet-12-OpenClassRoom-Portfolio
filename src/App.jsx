/**
 * @file App.jsx
 * @module App
 * @description Ce module est le composant principal de l'application. Il gère l'affichage de l'application .
 * Une fois le chargement terminé, il affiche l'application.
 * @requires react
 * @requires framer-motion
 * @requires ./layouts/navbar
 * @requires ./sections/home
 * @requires ./sections/about
 * @requires ./components/background/overlay/blur
 * @requires ./sections/skills
 * @requires ./sections/projects
 * @requires ./sections/Experience
 * @requires ./sections/Contact
 * @requires ./layouts/footer
 * @requires sonner
 * @requires ./utils/framerMotion/Variante
 * @requires ./assets/images/Bg-Squares-Black.svg
 */

/* Importation des modules */
import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* Importation des composants */
import Loader from './layouts/loader';
import NavBar from './layouts/navbar';
import Home from './sections/home';
const ParticlesCircle = lazy(() => import('./components/background/particles'));
const About = lazy(() => import('./sections/about'));
const Blur = lazy(() => import('./components/background/overlay/blur'));
const Skills = lazy(() => import('./sections/skills'));
const Projects = lazy(() => import('./sections/projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./layouts/footer'));
import { Toaster } from 'sonner';

/* Importation des animations */
import { AppVariants } from './utils/framerMotion/Variante';

/**
    * Composant App
    * Description :
        - Gère l'affichage de l'application
    * @return {JSX.Element} Le composant App
*/

function App() {
    // Etat pour gérer l'affichage du loader
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
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={AppVariants}
                >
                    <ParticlesCircle />
                    <Blur />
                    <NavBar />
                    <Home />
                    <Suspense fallback={<div>Loading...</div>}>
                        <About />
                        <Experience />
                        <Skills />
                        <Projects />
                        <Contact />
                        <Footer />
                    </Suspense>
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
