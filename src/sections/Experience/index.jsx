/* Importation des modules */
import { useContext } from 'react';
import Tilt from 'react-parallax-tilt';

/* Importation des Animations */
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';

/* Importation des Données */
import { useTranslation } from 'react-i18next';
import { ExperienceContext } from '../../utils/dataProvider/DataProvider';

/* Importation des composants */
import ExperienceCard from '../../components/ExperienceCard';

/* Importation des Ressources */
import OpLogo from '../../assets/icons/OpLogo.png';

/* Importation des styles */
import './style.scss';

const Experience = () => {
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
            <AnimatedText className={'experience-text-3'} delay={0.2} text={t('experience.text')} />
        </section>
    );
};

export default Experience;
