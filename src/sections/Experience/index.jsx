// import ExperienceLogo from '../../components/ExperienceLogo';
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';
import { useContext } from 'react';
import { ExperienceContext } from '../../utils/dataProvider/DataProvider';
import './style.scss';
import OpLogo from '../../assets/icons/OpLogo.png';

import { useTranslation } from 'react-i18next';
import ExperienceCard from '../../components/ExperienceCard';
import Tilt from 'react-parallax-tilt';

const Experience = () => {
    const { t } = useTranslation();
    const experiences = useContext(ExperienceContext);

    return (
        <section id='experience' aria-label='Experience section'>
            <div className='experience-container'>
                <h1 className='experience-section-title'>Expérience</h1>
                <AnimatedSubtitle
                    text={t('experience-title')}
                    className={'experience-title'}
                    charSpace='0.016px'
                />
            </div>
            <div className='experience-cards-map'>
                {experiences.map((experience, index) => (
                    <Tilt key={index}>
                        <ExperienceCard
                            school={experience.school}
                            src={OpLogo}
                            alt={experience.school}
                            title={experience.title}
                            startDate={experience.startDate}
                            endDate={experience.endDate}
                            location={experience.location}
                            description={experience.description}
                            diplome={experience.diplome}
                        />
                    </Tilt>
                ))}
            </div>
            {/* <div className='experience-content'>
                <div className='experience-cards'>
                    <h4 className='experience-cards-title'>OpenClassRooms</h4>
                    <ExperienceLogo
                        src={OpLogo}
                        alt={'Logo OpenClassRooms'}
                        width={'250px'}
                        height={'250px'}
                        aria-label={'Logo OpenClassRooms'}
                    />
                </div>
                <div className='experience-info'>
                    <h3 className='experience-info-title'>{experiences[0].title}</h3>
                    <div className='experience-info-divers'></div>

                    <AnimatedText text={t('experience-text-1')} />
                    <AnimatedText delay={0.1} text={t('experience-text-2')} />
                </div>
            </div> */}
            <AnimatedText
                className={'experience-text-3'}
                delay={0.2}
                text={t('experience-text-3')}
            />
        </section>
    );
};

export default Experience;
