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
import { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* Importation des composants */
import NavBar from './layouts/navbar';
import Home from './sections/home';
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

/* Importation des assets */
import backgroundImage from './assets/images/Bg-Squares-Black.svg';

/**
    * Composant App
    * Description :
        - Gère l'affichage de l'application
    * @return {JSX.Element} Le composant App
*/

function App() {
    return (
        <AnimatePresence>
            <motion.div
                key='app'
                initial='initial'
                animate='animate'
                exit='exit'
                variants={AppVariants}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
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
        </AnimatePresence>
    );
}

export default App;
