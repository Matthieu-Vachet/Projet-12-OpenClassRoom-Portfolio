/* Importation des modules */
import React, { useContext } from 'react';

/* Importation des Animations */
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';
import AnimatedElement from '../../components/animations/AnimatedElement';

/* Importation des Données */
import { useTranslation } from 'react-i18next';
import { ExperienceContext } from '../../utils/dataProvider/DataProvider';

/* Importation des composants */
import ExperienceCard from '../../components/ExperienceCard';
import Certificates from '../../components/certificates';
import { Experiencetype } from '../../types/types';

/* Importation des styles */
import './style.scss';

export default function Experience() {
    const { t, i18n } = useTranslation();
    const experiences = useContext(ExperienceContext);

    console.log(experiences);
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
                {(experiences ?? []).map((experience: Experiencetype, index) => {
                    const lang = i18n.language === 'en' ? 'en' : 'fr'; // default to 'fr' if language is not 'en'
                    return (
                        <AnimatedElement delay={0.1} key={index}>
                            <ExperienceCard
                                school={experience.school[lang]}
                                src={'/experiences/' + experience.img}
                                alt={experience.school[lang]}
                                title={experience.title[lang]}
                                startDate={experience.startDate}
                                endDate={experience.endDate}
                                location={experience.location[lang]}
                                description={experience.description[lang]}
                                diplome={experience.diplome[lang]}
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
