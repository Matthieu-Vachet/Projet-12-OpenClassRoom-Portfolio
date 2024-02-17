import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';
import Button from '../../components/button';
import ScrollToTopButton from '../../components/scrollToTopButton';
import { ButtonVariant } from '../../utils/framerMotion/Variante';
import './style.scss';

export default function About() {
    const { t } = useTranslation();

    return (
        <section id='about'>
            <div className='about-container'>
                <h1 className='about-section-title'>About</h1>
                <AnimatedSubtitle
                    text={t('about-title')}
                    className={'about-title'}
                    charSpace='0.016px'
                />
                <div className='about-content'>
                    <div className='about-text'>
                        <AnimatedText text={t('about-text-1')} />
                        <AnimatedText delay={0.1} text={t('about-text-2')} />
                        <AnimatedText delay={0.2} text={t('about-text-3')} />
                    </div>
                    <motion.div
                        className='about-button'
                        initial='initial'
                        animate='animate'
                        transition={{ delay: 1.9, duration: 1, type: 'spring' }}
                        variants={ButtonVariant}
                    >
                        <Button text={t('about-bottom-1')} />
                        <Button text={t('about-bottom-2')} />
                    </motion.div>
                </div>
            </div>
            <ScrollToTopButton />
        </section>
    );
}
