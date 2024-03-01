/**
 * Composant Experience qui affiche la section "Expérience" du site.
 * @returns {JSX.Element} La section "Expérience" avec un sous-titre animé, des certificats et des cartes d'expérience.
 */

/* Importation des modules */
import { useContext } from 'react';

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

/* Importation des styles */
import './style.scss';

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
                <Certificates className='certificates' />
            </div>
            <div className='experience-cards-map'>
                {experiences.map((experience, index) => (
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
                ))}
            </div>
            <AnimatedText className={'experience-text-3'} delay={0.1} text={t('experience.text')} />
        </section>
    );
}
