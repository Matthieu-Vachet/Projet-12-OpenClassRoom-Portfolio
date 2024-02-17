import ExperienceLogo from '../../components/ExperienceLogo/ExperienceLogo';
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';

import './Experience.scss';
import OpLogo from '../../assets/icons/OpLogo.png';

import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t } = useTranslation();

    return (
        <section id='experience'>
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
                    <h4 className='experience-cards-title'>OpenClassRooms</h4>
                    <ExperienceLogo src={OpLogo} alt={'Logo OpenClassRooms'} />
                </div>
                <div className='experience-text'>
                    <AnimatedText text={t('experience-text-1')} />
                    <AnimatedText delay={0.1} text={t('experience-text-2')} />
                </div>
            </div>
            <AnimatedText
                className={'experience-text-3'}
                delay={0.2}
                text={t('experience-text-3')}
            />
        </section>
    );
};

export default Experience;
