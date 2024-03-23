import React from 'react';
import { ExperiencesData } from '../../utils/constants/experiencesData';
import { ExperiencesTypes } from '../../types/types';
import { useTranslation } from 'react-i18next';
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';
import AnimatedElement from '../../components/animations/AnimatedElement';
import ExperienceCard from '../../components/ExperienceCard';
import Certificates from '../../components/certificates/Certificates';
import './Experience.scss';

export default function Experience() {
    const { t } = useTranslation();

    return (
        <section
            id='experience'
            className='section w-[100%] flex-col flex-wrap sm:mr-[0px] lg:mt-[0px]'
            aria-label='Experience section'
        >
            <div className=' relative flex sm:w-[95%] lg:w-[100%] sm:m-auto flex-col justify-center items-center flex-wrap'>
                <h1 className='experience-section-title section-title'>Expérience</h1>
                <AnimatedSubtitle
                    text={t('experience.title')}
                    className={' flex-row-reverse sm:mr-[0px] 2xl:justify-center title'}
                    charSpace='0.016px'
                    wordSpace='0.016px'
                />
                <Certificates className='certificates' />
            </div>
            <div className=' flex flex-col gap-2'>
                {ExperiencesData.map((experience: ExperiencesTypes, index) => {
                    return (
                        <AnimatedElement delay={0.1} key={index}>
                            <ExperienceCard
                                school={experience.school}
                                src={experience.img}
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
            <AnimatedText
                className={
                    ' flex w-[95%] text-basicWhite justify-center items-center text-center mt-[2rem] font-space-grotesk font-light sm:text-[18px] md:text-[20px] lg:text-[25px] 2xl:text-[32px]'
                }
                delay={0.1}
                text={t('experience.text')}
            />
        </section>
    );
}
