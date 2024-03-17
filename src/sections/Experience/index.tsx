import React from 'react';
import { ExperiencesData } from '../../utils/constants/experiencesData';
import { ExperiencesTypes } from '../../types/types';
import { useTranslation } from 'react-i18next';
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';
import AnimatedElement from '../../components/animations/AnimatedElement';
import ExperienceCard from '../../components/ExperienceCard';
import Certificates from '../../components/certificates';
import './style.scss';

export default function Experience() {
    const { t } = useTranslation();

    return (
        <section id='experience' className='section' aria-label='Experience section'>
            <div className='experience-container'>
                <h1 className='experience-section-title section-title'>Expérience</h1>
                <AnimatedSubtitle
                    text={t('experience.title')}
                    className={'experience-title title'}
                    charSpace='0.016px'
                    wordSpace='0.016px'
                />
                <Certificates className='certificates' />
            </div>
            <div className='experience-cards-map'>
                {ExperiencesData.map((experience: ExperiencesTypes, index) => {
                    return (
                        <AnimatedElement delay={0.1} key={index}>
                            <ExperienceCard
                                school={experience.school}
                                src={'/experiences/' + experience.img}
                                alt={experience.school}
                                title={experience.title}
                                startDate={experience.startDate}
                                endDate={experience.endDate}
                                location={experience.location}
                                description={experience.description}
                                diplome={experience.diplome}
                                reverse={index === 1}
                            />
                        </AnimatedElement>
                    );
                })}
            </div>
            <AnimatedText className={'experience-text-3'} delay={0.1} text={t('experience.text')} />
        </section>
    );
}
