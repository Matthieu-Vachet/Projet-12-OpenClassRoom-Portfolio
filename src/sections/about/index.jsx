// import Button from '../../components/button/Button';
// import Marquee from '../../components/paralaxText';
import AnimatedTitle from '../../components/animations/AnimatedTitle';
import AnimatedText from '../../components/animations/AnimatedText';
import Button from '../../components/button/Button';
import ScrollToTopButton from '../../components/scrollToTopButton/ScrollToTopButton';
import './style.scss';

export default function About() {
    return (
        <section id='about'>
            <div className='about-container'>
                <AnimatedTitle delay={0.1} text={'About'} className={'about-title'} />
                <div className='about-content'>
                    <div className='about-text'>
                        <AnimatedText
                            delay={0.1}
                            text="Fan d'informatique depuis ma jeunesse, j'ai exploré la programmation bien avant de devenir intégrateur web. Pour moi, chaque ligne de code est une œuvre d'art, une exploration infinie de création."
                        />
                        <AnimatedText
                            delay={0.2}
                            text="Mon engagement dans ce domaine est bien plus qu'une carrière, c'est une passion sans limites, une aventure que je poursuivrai avec détermination jusqu'à ce que mes mains ne puissent plus glisser sur un clavier."
                        />
                        <AnimatedText
                            delay={0.3}
                            text="Toujours avide de nouvelles technologies, je suis en constante quête d'innovation. Actuellement engagé dans des projets passionnants, je reste ouvert à de nouvelles opportunités et collaborations."
                        />
                    </div>
                    <div className='about-button'>
                        <Button text={'Mon Cv'} />
                        <Button text={'Contact'} />
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
        </section>
    );
}
