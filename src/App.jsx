import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Home from './pages/home';
import NavBar from './components/navbar';
import Loader from './components/loader';
import About from './pages/about';


function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading ? (
                <motion.div
                    key="loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <Loader />
                </motion.div>
            ) : (
                <motion.div
                    key="app"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <NavBar />
                    <Home />
                    <About />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default App;
