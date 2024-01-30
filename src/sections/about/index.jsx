// import Button from '../../components/button/Button';
// import Marquee from '../../components/paralaxText';
import AnimatedTitle from '../../components/animations/AnimatedTitle';
import './style.scss';

export default function About() {
    return (
        <section id='about'>
            <div className='about-container'>
                <AnimatedTitle text={'About'} className={'about-title'} />
            </div>
        </section>
    );
}
