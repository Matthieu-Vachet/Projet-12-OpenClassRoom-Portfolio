import React from 'react';
import Header from '../../layouts/header/Header';
import Hero from '../../layouts/hero/Hero';
import Social from '../../components/socialBar/SocialBar';

export default function Home() {
    return (
        <section id='home' className='h-[100vh] relative' aria-label='Home section'>
            <Header />
            <div className='flex flex-row'>
                <Social aria-label='Social bar' />
                <div>
                    <Hero />
                </div>
            </div>
        </section>
    );
}
