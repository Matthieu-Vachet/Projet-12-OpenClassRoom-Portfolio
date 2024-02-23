/* Importation des modules */
import { motion } from 'framer-motion';

// Importation des données
import { useTranslation } from 'react-i18next';

// Importation des Animations
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';
import { ButtonVariant } from '../../utils/framerMotion/Variante';

// Importation des composants
import Button from '../../components/button';
import ScrollToTopButton from '../../components/scrollToTopButton';

// Importation des styles
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
                    <motion.div
                        className='about-button'
                        initial='initial'
                        animate='animate'
                        transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                        variants={ButtonVariant}
                        aria-label='About section buttons'
                    >
                        <Button text={t('about.button-1')} href='#' height='3rem' width='15rem' />
                        <Button
                            text={t('about.button-2')}
                            href='#contact'
                            height='3rem'
                            width='15rem'
                        />
                    </motion.div>
                </div>
            </div>
            <ScrollToTopButton />
        </section>
    );
}
