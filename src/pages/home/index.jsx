import TopBackground from '../../components/background/topBackground';
import Header from '../../components/header';
import Hero from '../../components/hero';
import SocialBar from '../../components/socialBar';

import './style.scss';

export default function Home() {
    return (
        <>
            <Header />
            <TopBackground />
            <div className='heroBanner'>
                <SocialBar />
                <Hero />
            </div>
        </>
    );
}
