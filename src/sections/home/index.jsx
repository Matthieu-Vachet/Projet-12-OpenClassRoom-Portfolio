import TopBackground from '../../components/topBackground';
import Header from '../../layouts/header';
import Hero from '../../layouts/hero';
import SocialBar from '../../components/socialBar';

import './style.scss';

export default function Home() {
    return (
        <section id='home'>
            <Header />
            <TopBackground />
            <div className='heroBanner'>
                <SocialBar />
                <div>
                    <Hero />
                </div>
            </div>
        </section>
    );
}
