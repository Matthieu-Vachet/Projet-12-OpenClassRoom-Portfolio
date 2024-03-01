/**
 * Composant Home qui affiche la section "Accueil" du site.
 * @returns {JSX.Element} La section "Accueil" avec un en-tête, une barre sociale et un héros.
 */

/* Importation des composants */
import Header from '../../layouts/header';
import Hero from '../../layouts/hero';
import Social from '../../components/social';

/* Importation des styles */
import './style.scss';

export default function Home() {
    return (
        <section id='home' aria-label='Home section'>
            <Header />
            <div className='heroBanner'>
                <Social aria-label='Social bar' />
                <div>
                    <Hero />
                </div>
            </div>
        </section>
    );
}
