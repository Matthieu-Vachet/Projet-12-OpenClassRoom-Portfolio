/**
 * Composant About qui affiche la section "À propos" du site.
 * @returns {JSX.Element} La section "À propos" avec du texte animé et un bouton.
 */

/* Importation des modules React */
import { useTranslation } from 'react-i18next';
import { Vortex } from '../../components/background/vortex/vortex';

/* Importation des composants d'animation */
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';

/* Importation des composants */
import Button from '../../components/button';
import TopScroll from '../../components/topScroll';

/* Importation du style */
import './style.scss';

export default function About() {
    const { t } = useTranslation();

    return (
        <section id='about' className='section' aria-label='About section'>
            <div className='about-container'>
                <h1 className='about-section-title section-title'>About</h1>
                <AnimatedSubtitle
                    text={t('about.title')}
                    className={'about-title title'}
                    charSpace='0.016px'
                />
                <div className='about-content'>
                    <div className='about-text'>
                        <AnimatedText text={t('about.text-1')} />
                        <AnimatedText delay={0.1} text={t('about.text-2')} />
                        <AnimatedText delay={0.2} text={t('about.text-3')} />
                    </div>

                    <div className='about-button' aria-label='About section buttons'>
                        <Vortex
                            backgroundColor='transparent'
                            className=' flex justify-center items-center '
                        >
                            <Button
                                text={t('about.button-1')}
                                target={'_blank'}
                                rel='noopener noreferrer'
                                href='https://drive.google.com/file/d/1zMZp_Z-gkrRHBZe1b1m1yXhWOR7HDjG4/view?usp=drive_link'
                            />
                        </Vortex>
                    </div>
                </div>
            </div>
            <TopScroll />
        </section>
    );
}
