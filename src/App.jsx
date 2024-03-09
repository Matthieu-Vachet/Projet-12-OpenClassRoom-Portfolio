/**
 * @file App.jsx
 * @module App
 * @description Ce module est le composant principal de l'application. Il gère l'affichage de l'application et affiche un loader pendant le chargement.
 * Une fois le chargement terminé, il affiche l'application.
 * @requires react
 * @requires framer-motion
 * @requires ./layouts/navbar
 * @requires ./layouts/loader
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
// import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* Importation des composants */
import NavBar from './layouts/navbar';
// import Loader from './layouts/loader';
import Home from './sections/home';
import About from './sections/about';
import Blur from './components/background/overlay/blur';
import Skills from './sections/skills';
import Projects from './sections/projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './layouts/footer';
import { Toaster } from 'sonner';

/* Importation des animations */
import { AppVariants } from './utils/framerMotion/Variante';
// import { LoaderVariants, AppVariants } from './utils/framerMotion/Variante';

/* Importation des assets */
import backgroundImage from './assets/images/Bg-Squares-Black.svg';

/**
    * Composant App
    * Description :
        - Gère l'affichage de l'application
        - Affiche un loader pendant le chargement
        - Affiche l'application une fois le chargement terminé
    * @return {JSX.Element} Le composant App
*/

function App() {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setLoading(true);
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 4000);

    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, []);

    return (
        <AnimatePresence>
            {/* {loading ? (
                <motion.div
                    key='loader'
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={LoaderVariants}
                >
                    <Loader />
                </motion.div>
            ) : ( */}
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
            {/* )} */}
        </AnimatePresence>
    );
}

export default App;
