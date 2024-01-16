import Home from './pages/home';
import NavBar from './components/navbar';

import '../src/style/global.scss';
import Loader from './components/loader';
import { useEffect, useState } from 'react';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <NavBar />
                    <Home />
                </>
            )}
        </>
    );
}

export default App;
