import Header from '../../layouts/header';
import Hero from '../../layouts/hero';
import SocialBar from '../../components/socialBar';

import './style.scss';

export default function Home() {
    return (
        <section id='home' aria-label='Home section'>
            <Header />
            <div className='heroBanner'>
                <SocialBar aria-label='Social bar' />
                <div>
                    <Hero />
                </div>
            </div>
        </section>
    );
}
