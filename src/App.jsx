import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importation des composants
import NavBar from './layouts/navbar';
import Loader from './layouts/loader';
import Home from './sections/home';
import About from './sections/about';
import Blur from './components/background/overlay/blur';
import Skills from './sections/skills';
import Projects from './sections/projects';
import Experience from './sections/experience';
import Contact from './sections/contact';
import Footer from './layouts/footer';

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
        <Router>
            <AnimatePresence>
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
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/skills' component={Skills} />
                        <Route path='/projects' component={Projects} />
                        <Route path='/experience' component={Experience} />
                        <Route path='/contact' component={Contact} />
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </Router>
    );
}

export default App;
