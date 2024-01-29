import AnimatedBackground from '../../components/background/animatedBackground';
import Button from '../../components/button/Button';
import Marquee from '../../components/paralaxText';
import './style.scss';

export default function About() {
    return (
        <section id='about'>
            <AnimatedBackground />
            <Marquee />
            <Button />
        </section>
    );
}
