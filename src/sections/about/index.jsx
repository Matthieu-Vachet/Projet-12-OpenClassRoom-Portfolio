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
import TopScroll from '../../components/topScroll';

// Importation des styles
import './style.scss';

/*
 * Composant About
 * Affiche la section About
 * @returns {JSX.Element}
 */

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
                        <Button
                            text={t('about.button-1')}
                            target={'_blank'}
                            rel='noopener noreferrer'
                            href='https://drive.google.com/file/d/1PZ4cBkNtBoQmF9JZ9phbViVUNnlJDaGI/view?usp=drive_link'
                        />
                        <Button text={t('about.button-2')} href='#contact' />
                    </motion.div>
                </div>
            </div>
            <TopScroll />
        </section>
    );
}
