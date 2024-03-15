import React from 'react';
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
