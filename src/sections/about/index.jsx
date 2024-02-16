import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import OpLogo from '../../assets/icons/OpLogo.png';
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';
import Button from '../../components/button';
import ExperienceCards from '../../components/experienceCards';
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
            <div className='experience-container'>
                <h1 className='experience-section-title'>Expérience</h1>
                <AnimatedSubtitle
                    text={t('experience-title')}
                    className={'experience-title'}
                    charSpace='0.016px'
                />
            </div>
            <div className='experience-content'>
                <div className='experience-cards'>
                    <ExperienceCards src={OpLogo} alt={'Logo OpenClassRooms'} />
                </div>
                <div className='experience-text'>
                    <AnimatedText text={t('experience-text-1')} />
                    <AnimatedText delay={0.1} text={t('experience-text-2')} />
                    <AnimatedText delay={0.2} text={t('experience-text-3')} />
                </div>
            </div>

            <ScrollToTopButton />
        </section>
    );
}
