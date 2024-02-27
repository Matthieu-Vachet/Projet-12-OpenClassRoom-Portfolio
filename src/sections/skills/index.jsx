/* Importation des Animation */
import AnimatedSubtitle from '../../components/animations/AnimatedSubtitle';
import AnimatedText from '../../components/animations/AnimatedText';

/* Importation des composants */
import SkillCards from '../../components/skillCards';

/* Importation des Données */
import { useTranslation } from 'react-i18next';
import {
    Backend_skill,
    Conception_skill,
    Developpement_skill,
    Frontend_skill,
} from '../../utils/constants/constants';

/* Importation des styles */
import './style.scss';

/*
 * Composant Skills
 * Affiche la section Skills
 * @returns {JSX.Element}
 */

export default function Skills() {
    const { t } = useTranslation();
    return (
        <section id='skills' className='section' aria-label='Skills section'>
            <div className='skills-container'>
                <h1 className='skills-section-title section-title'>Skills</h1>
                <AnimatedSubtitle
                    text={t('skills.title')}
                    className={'skills-title title'}
                    charSpace='0.016px'
                />
                <div className='skills-section'>
                    <div className='skills-texts'>
                        <AnimatedText text={t('skills.text-1')} />
                    </div>
                    <div className='skill-icons-sections' aria-label='Frontend skills'>
                        {Frontend_skill.map((skill, index) => (
                            <SkillCards
                                key={index}
                                name={skill.skill_name}
                                Image={skill.Image}
                                fontSize={skill.size}
                                color='white'
                                index={index}
                                alt={skill.alt}
                            />
                        ))}
                    </div>
                </div>
                <div className='skills-section'>
                    <div className='skills-texts'>
                        <AnimatedText text={t('skills.text-2')} />
                    </div>
                    <div className='skill-icons-sections' aria-label='Backend skills'>
                        {Backend_skill.map((skill, index) => (
                            <SkillCards
                                key={index}
                                name={skill.skill_name}
                                Image={skill.Image}
                                fontSize={skill.size}
                                color='white'
                                index={index}
                                alt={skill.alt}
                            />
                        ))}
                    </div>
                </div>
                <div className='skills-section'>
                    <div className='skills-texts'>
                        <AnimatedText text={t('skills.text-3')} />
                    </div>
                    <div className='skill-icons-sections' aria-label='Developpement skills'>
                        {Developpement_skill.map((skill, index) => (
                            <SkillCards
                                key={index}
                                name={skill.skill_name}
                                Image={skill.Image}
                                fontSize={skill.size}
                                color='white'
                                index={index}
                                alt={skill.alt}
                            />
                        ))}
                    </div>
                </div>
                <div className='skills-section'>
                    <div className='skills-texts'>
                        <AnimatedText text={t('skills.text-4')} />
                    </div>
                    <div className='skill-icons-sections' aria-label='Conception skills'>
                        {Conception_skill.map((skill, index) => (
                            <SkillCards
                                key={index}
                                name={skill.skill_name}
                                Image={skill.Image}
                                fontSize={skill.size}
                                color='white'
                                index={index}
                                alt={skill.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
