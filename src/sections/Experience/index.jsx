/* Importation des modules */
import { useContext } from 'react';

/* Importation des Animations */
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';

/* Importation des Données */
import { useTranslation } from 'react-i18next';
import { ExperienceContext } from '../../utils/dataProvider/DataProvider';

/* Importation des composants */
import ExperienceCard from '../../components/experienceCard';

/* Importation des styles */
import './style.scss';

/*
 * Composant Experience
 * Affiche la section Experience
 * @returns {JSX.Element}
 */

export default function Experience() {
    const { t } = useTranslation();
    const experiences = useContext(ExperienceContext);

    return (
        <section id='experience' className='section' aria-label='Experience section'>
            <div className='experience-container'>
                <h1 className='experience-section-title section-title'>Expérience</h1>
                <AnimatedSubtitle
                    text={t('experience.title')}
                    className={'experience-title title'}
                    charSpace='0.016px'
                />
            </div>
            <div className='experience-cards-map'>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
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
                ))}
            </div>
            <AnimatedText className={'experience-text-3'} delay={0.2} text={t('experience.text')} />
        </section>
    );
}
