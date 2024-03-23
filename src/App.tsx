/* Importation des modules */
import React, { lazy, Suspense } from 'react';

/* Importation des composants */
// import PreLoader from './layouts/Preloader';
import NavBar from './layouts/navbar/NavBar';
import Home from './sections/home/Home';
const About = lazy(() => import('./sections/about/About'));
const Blur = lazy(() => import('./components/background/overlay/blur'));
const Experience = lazy(() => import('./sections/Experience/Experience'));
const Skills = lazy(() => import('./sections/skills/Skills'));
// const Projects = lazy(() => import('./sections/projects'));
// const Contact = lazy(() => import('./sections/Contact'));
// const Footer = lazy(() => import('./layouts/footer'));
import { Toaster } from 'sonner';
import { GridBackground } from './components/background/gridBackground';

/**
    * Composant App
    * Description :
        - Gère l'affichage de l'application
    * @return {JSX.Element} Le composant App
*/

function App() {
    return (
        <>
            {/* <PreLoader /> */}
            <GridBackground />

            <div>
                <Blur />
                <NavBar />
                <Home />
                <Suspense fallback={<div>Loading...</div>}>
                    <About />
                    <Experience />
                    <Skills />
                    {/* <Projects /> */}
                    {/* <Contact /> */}
                    {/* <Footer /> */}
                </Suspense>
                <Toaster
                    richColors
                    position='top-right'
                    toastOptions={{
                        closeButton: true,
                        className: 'my-toast',
                    }}
                />
            </div>
        </>
    );
}

export default App;
