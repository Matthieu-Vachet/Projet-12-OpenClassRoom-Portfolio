import AnimatedTitle from '../../components/animations/AnimatedTitle';
import AnimatedText from '../../components/animations/AnimatedText';
import Button from '../../components/button';
import ScrollToTopButton from '../../components/scrollToTopButton';
import { motion } from 'framer-motion';
import { ButtonVariant } from '../../utils/framerMotion/Variante';
import ExperienceCards from '../../components/experienceCards';
import OpLogo from '../../assets/icons/OpLogo.png';
import { useTranslation } from 'react-i18next';
import './style.scss';

export default function About() {
    const { t } = useTranslation();

    return (
        <section id='about'>
            <div className='about-container'>
                <AnimatedTitle text={t('about-title')} className={'about-title'} />
                <div className='about-content'>
                    <div className='about-text'>
                        <AnimatedText delay={0.4} text={t('about-text-1')} />
                        <AnimatedText delay={0.5} text={t('about-text-2')} />
                        <AnimatedText delay={0.8} text={t('about-text-3')} />
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
                <AnimatedTitle text={t('experience-title')} className={'experience-title'} />
            </div>
            <div className='experience-content'>
                <div className='experience-cards'>
                    <ExperienceCards src={OpLogo} alt={'Logo OpenClassRooms'} />
                </div>
                <div className='experience-text'>
                    <AnimatedText delay={0.2} text={t('experience-text-1')} />
                    <AnimatedText delay={0.4} text={t('experience-text-2')} />
                    <AnimatedText delay={0.6} text={t('experience-text-3')} />
                </div>
            </div>

            <ScrollToTopButton />
        </section>
    );
}
